/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/view/game/sceneView",
        "app/data/tableaux",
        "app/data/items"
        ],
function($, _, Utils, Scene, Tableaux, Items) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = ".game";
			this.parent = parent;
			this.Textes = parent.Textes;
			this.mediatheque = parent.mediatheque;
			
			this.pause = false;
			this.scene = new Scene(this);
		};

		this.go = function(lieu, save) {
			this.tableau = Tableaux.get(lieu);
			
			this.mediatheque.stopAllMusic();
			if (this.tableau.music) this.mediatheque.play(this.tableau.music);
			
			this.scene.initScene(lieu);
			
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

		this.load = function(save) {
			this.go(save.lieu, save);
		};
		
		this.loop = function() {
			this.alreadyLoop = true;
			if (!this.pause) {
			    //Action ici
			}
			
			var that = this;
			setTimeout(function() {
				that.loop();
			}, 30);
		};
		
		this.init(parent);
	};
});