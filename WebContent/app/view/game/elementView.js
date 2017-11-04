'use strict';
define(["jquery", 
        "app/utils/utils",
        "app/data/items",
        "app/view/game/actionView"], function($, Utils, Items, ActionView){
    return function(scene){
        this.init = function(scene) {
            this.scene = scene;
            this.tableau = scene.tableau;
            this.Textes = scene.Textes;
            this.mediatheque = scene.mediatheque;
            
            this.actionView = new ActionView(this);
        };
        
        this.makeEvents = function() {
            var that = this;
            $("element").unbind("click");
			$("element").on("click", function(evt) {
				var target = $(evt.target);
                var id = target.attr("id");
                var element = Items.get(id);
                
            	that.actionView.render($(this), element);
            });
			
			$("plan.frontground").unbind("click");
			$("plan.frontground").on("click", function(evt) {
				evt.stopPropagation();
			    that.actionView.checkHide(evt);
            });
			
			$("element").unbind("mouseenter mouseleave");
			$("element").hover(function() {
            }, function(evt) {
            	that.actionView.checkHide(evt);
            });
			
            $("actions").unbind('mouseenter mouseleave');
            $("actions").hover(function() {
            }, function(evt) {
            	that.actionView.checkHide(evt);
            });
        };
        
        this.init(scene);
    };
});