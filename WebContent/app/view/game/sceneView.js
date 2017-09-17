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
            
            $(".game .stage element").remove();
            $(".game .stage fleche").hide();
            
            for (var index in tableau.elements) {
                var element = tableau.elements[index];
                this.createElement(element, index, $(".game .stage"));
            }
            
            this.elementView.makeEvents();
            
            if (tableau.direction) {
                if (tableau.direction.haut) $("fleche.haut").show();
                if (tableau.direction.bas) $("fleche.bas").show();
                if (tableau.direction.gauche) $("fleche.gauche").show();
                if (tableau.direction.droite) $("fleche.droite").show();
            }
        };
        
        this.createElement = function(element, index, parent) {
            var dom = $("<element></element>");
            if (element.sound) dom.attr("sound", element.sound);
            dom.attr("id", element.id);
            
            dom.attr("index", index);
            dom.attr("class", element.id);

            parent.append(dom);
            
            dom.css({
                left : Utils.toPercent(element.x, 1024) + "%",
                top : Utils.toPercent(element.y, 768) + "%",
                width : Utils.toPercent(dom.width(), 1024) + "%",
                height : Utils.toPercent(dom.height(), 768) + "%"
            });
            
            return dom;
        };
        
        this.makeEvents = function() {
            var that = this;
            $(document).off("contextmenu");
            $(document).on("contextmenu", function(evt){
                evt.preventDefault();
            });
            
            $("fleche").off("mousedown");
            $("fleche").on("mousedown", function(evt){
                evt.preventDefault();
                var target = $(evt.target);
                var type = target.attr("class");
                
                if (evt.which == 1) {
                    var newLieu = that.parent.tableau.direction[type];
                    that.parent.go(newLieu);
                }
            });
        };
        
        this.init(parent);
    };
});