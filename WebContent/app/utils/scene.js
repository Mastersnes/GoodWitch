'use strict';
define(["jquery", 
        "app/utils/utils",
        "app/data/items"], function($, Utils, Items){
	return function(){
		this.resize = function() {
			var w = $("body").width();
			var h = $("body").height();
			var rapport = {
			        w : 1024 / 768,
			        h : 768 / 1024
			};
			
			if (w >= h) {
			    $(".scene").css({
	                width : h * rapport.w + "px",
	                height : "100%"
	            });
			}else {
			    $(".scene").css({
                    width : "100%",
                    height : w * rapport.h + "px"
                });
			}
		};
		
		this.createElement = function(element, index, type) {
		    if (!type) type = "element";
            var dom = $("<element></element>");
            if (element.sound) dom.attr("sound", element.sound);
            dom.attr("id", element.id);
            
            var item = Items.get(element.id);
            
            dom.attr("index", index);
            dom.attr("class", type + " "+ element.id);
            
            dom.css({
                left : Utils.toPercent(element.x, 1024) + "%",
                top : Utils.toPercent(element.y, 768) + "%",
                width : Utils.toPercent(item.w, 1024) + "%",
                height : Utils.toPercent(item.h, 768) + "%"
            });
            return dom;
        };
		
		this.initScene = function(lieu, tableau) {
            $(".game plan").each(function() {
                $(this).css({
                    width : Utils.toPercent(tableau.width, 1024) + "%",
                    height : Utils.toPercent(tableau.height, 768) + "%"
                });
            });
            $(".game planFar.background").attr("class", "background "+lieu);
            $(".game plan.background").attr("class", "background "+lieu);
            $(".game plan.stage").attr("class", "stage "+lieu);
            $(".game plan.frontground").attr("class", "frontground "+lieu);
            $(".game planFar.frontground").attr("class", "frontground "+lieu);
            
            for (var index in tableau.elements) {
                var element = tableau.elements[index];
                $(".game .stage").append(this.createElement(element, index));
            }
		};
	};
});