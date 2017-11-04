'use strict';
define(["jquery", 
        "app/utils/utils",
        "app/view/game/elementView"], function($, Utils, ElementView){
    return function(parent){
        this.init = function(parent) {
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            
            this.elementView = new ElementView(this);
            var that = this;
            $( window ).resize(function() {
                that.resize();
            });
        };
        
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
        
        this.initScene = function(lieu) {
            this.resize();
            
            var parent = this.parent;
            var tableau = parent.tableau;
            
            this.size = {
            		width : Utils.toPercent(tableau.width, 1024),
            		height : Utils.toPercent(tableau.height, 768)
            };
            var that = this;
            
            $("actions").css({
            	width : (3000 / that.size.width) + "%",
            	height : (3000 / that.size.height) + "%"
            });
            $(".game plan").each(function() {
                $(this).css({
                    width : that.size.width + "%",
                    height : that.size.height + "%"
                });
            });
            $(".game planFar.background").attr("class", "background "+lieu);
            $(".game plan.background").attr("class", "background "+lieu);
            $(".game plan.stage").attr("class", "stage "+lieu);
            $(".game plan.frontground").attr("class", "frontground "+lieu);
            $(".game planFar.frontground").attr("class", "frontground "+lieu);
            
            $(".game .stage element").remove();
            $(".game .stage fleche").hide();
            
            for (var index in tableau.elements) {
                var element = tableau.elements[index];
                this.createElement(element, index, $(".game .stage"));
            }
            
            this.elementView.makeEvents();
            
            if (tableau.direction) {
                this.checkDirection(tableau.direction, "haut");
                this.checkDirection(tableau.direction, "bas");
                this.checkDirection(tableau.direction, "gauche");
                this.checkDirection(tableau.direction, "droite");
            }
        };
        
        this.checkDirection = function(direction, id) {
            if (direction[id]) {
                $("fleche."+id).attr("title", this.Textes.get("tableau-"+direction[id]));
                $("fleche."+id).show();
            }
        };
        
        this.createElement = function(element, index, parent) {
            var dom = $("<element></element>");
            if (element.sound) dom.attr("sound", element.sound);
            dom.attr("id", element.id);
            
            dom.attr("index", index);
            dom.attr("class", element.id);

            parent.append(dom);
            
            var tableau = this.parent.tableau;
            
            dom.css({
                left : Utils.toPercent(element.x, tableau.width) + "%",
                top : Utils.toPercent(element.y, tableau.height) + "%",
                width : Utils.toPercent(dom.width(), tableau.width) + "%",
                height : Utils.toPercent(dom.height(), tableau.height) + "%"
            });
            
            return dom;
        };
        
        this.postRender = function(postRender) {
            for (var index in postRender.removes) {
                var toRemove = postRender.removes[index];
                $("#"+toRemove.id).remove();
            }
            for (var index in postRender.modifys) {
                var toModify = postRender.modifys[index];
                $("#"+toModify.id).attr("class", toModify.newId);
                $("#"+toModify.id).attr("id", toModify.newId);
            }
        };
        
        this.makeEvents = function() {
            var that = this;
            $(document).off("contextmenu");
            $(document).on("contextmenu", function(evt){
                evt.preventDefault();
            });
            
            $("fleche").off("click");
            $("fleche").on("click", function(evt){
                var target = $(evt.target);
                var type = target.attr("class");
                
                if (evt.which == 1) {
                    var newLieu = that.parent.tableau.direction[type];
                    if (newLieu) {
                    	$("actions").hide();
                    	that.parent.go(newLieu);
                    }
                }
            });
            
        };
        
        this.init(parent);
    };
});