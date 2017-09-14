/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/data/tableaux",
        "app/data/items"
        ],
function($, _, Utils, Tableaux, Items) {
	'use strict';

	return function(parent, Textes, Scene) {
		this.init = function(parent, Textes, Scene) {
			this.el = ".game";
			this.Textes = Textes;
			this.parent = parent;
			this.mediatheque = parent.mediatheque;
			this.pause = false;
			this.scene = Scene;
			this.position = {
					top : 0,
					left : 0
			};
		};

		this.go = function(lieu, save) {
			this.tableau = Tableaux.get(lieu);
			
			this.mediatheque.stopAllMusic();
			if (this.tableau.music) this.mediatheque.play(this.tableau.music);
			
			this.scene.initScene(lieu, this);
			
			if (save) {
				//load Save
			}else {
				//Init cinematique
			}

			if (!this.alreadyLoop) {
			    this.scene.makeEvents();
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
		
		this.init(parent, Textes, Scene);
	};
});