/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/data/tableaux",
        "app/data/items"
        ],
function($, _, Utils, Tableaux, Items) {
	'use strict';

	return function(parent, Textes) {
		this.init = function(parent, Textes) {
			this.el = ".game";
			this.Textes = Textes;
			this.parent = parent;
			this.mediatheque = parent.mediatheque;
			this.pause = false;
			this.position = {
					top : 0,
					left : 0
			};
		};

		this.go = function(lieu, save) {
			this.tableau = Tableaux.get(lieu);
			this.screen = {
					w : $("body").width(),
					h : $("body").height()
			};
			
			this.mediatheque.stopAllMusic();
			if (this.tableau.music) this.mediatheque.play(this.tableau.music);
			
			var that = this;
			$(".game .plan").each(function() {
				$(this).css({
					width : that.tableau.width + "px",
					height : "100%"				
				});
			});
			$(".game .planFar.background").attr("class", "planFar background "+lieu);
			$(".game .plan.background").attr("class", "plan background "+lieu);
			$(".game .plan.frontground").attr("class", "plan frontground "+lieu);
			$(".game .planFar.frontground").attr("class", "planFar frontground "+lieu);
			
			for (var index in this.tableau.elements) {
				var element = this.tableau.elements[index];
				$(".game .stage").append(this.createElement(element, index));
			}
			
			if (save) {
				//load Save
			}else {
				//Init cinematique
			}

			this.makeEvents();
			if (!this.alreadyLoop) {
				this.loop();
			}
		};
		
		this.gagne = function() {
			$(".game .stage").empty();
			$(".game").css({
				left : "0px"
			});
			this.go(this.tableau.gagne.lieu);
		};

		this.load = function(save) {
			this.go(save.lieu, save);
		};
		
		this.createElement = function(element, index, type) {
			if (!type) type = "element";
			var dom = $("<div></div>");
			dom.attr("id", element.id);
			if (element.sound) dom.attr("sound", element.sound);
			dom.attr("index", index);
			dom.attr("class", type + " "+ element.id);
			dom.css({
				left : element.x + "px",
				top : element.y + "%"
			});
			return dom;
		};
		
		this.loop = function() {
			this.alreadyLoop = true;
			if (!this.pause) {
				this.moveTableau();
			}
			
			var that = this;
			setTimeout(function() {
				that.loop();
			}, 30);
		};
		
		this.moveTableau = function() {
			if (this.mouse) {
				if (this.mouse.xPercent > 95) {
					this.position.left+=3;
				}else if (this.mouse.xPercent < 5) {
					this.position.left-=3;
				}
				if (this.position.left > 0) this.position.left = 0;
				if (this.position.left <  this.screen.w - this.tableau.width) this.position.left = this.screen.w - this.tableau.width;

				$(".camera").css({
					left : this.position.left + "px"
				});
			}
		};
		
		this.togglePause = function() {
			this.pause = !this.pause;
			if (this.pause) {
				$("#pause").show();
			}else {
				$("#pause").hide();
			}
		};
		
		this.makeEvents = function() {
			var that = this;
			$(document).mousemove(function(event){
				that.mouse = {
						xPercent : (event.pageX * 100) / that.screen.w,
						yPercent : (event.pageY * 100) / that.screen.h
				};
			});
			
			$("body").click(function(e) {
				e.preventDefault();
			});
			
			$(".element").click(function(event) {
				event.preventDefault();
				var id = $(this).attr("id");
				var element = Items.get(id);
				console.log("button : " + event.which);
				switch (event.which) {
			        case 1:
			            element.use(that, $(this));
			            break;
			        case 3:
			            element.see(that, $(this));
			            break;
			    }
			});
		};
		
		this.init(parent, Textes);
	};
});