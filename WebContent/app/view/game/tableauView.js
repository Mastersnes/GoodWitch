/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/view/game/sceneView",
        "app/view/game/textView",
        "app/view/game/inventaireView",
        "app/data/tableaux",
        "app/data/items"
        ],
function($, _, Utils, Scene, TextView, InventaireView, Tableaux, Items) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = ".game";
			this.parent = parent;
			this.Textes = parent.Textes;
			this.mediatheque = parent.mediatheque;
			
			this.pause = false;
			this.scene = new Scene(this);
			this.textView = new TextView(this);
			this.inventaireView = new InventaireView(this);
		};

		this.go = function(lieu, save) {
			this.tableau = Tableaux.get(lieu);
			
			this.mediatheque.stopAllMusic();
			if (this.tableau.music) this.mediatheque.play(this.tableau.music);
			
			this.scene.initScene(lieu);
			
			if (save) {
				//load Save
			}else {
				if (this.tableau.cinematique && !this.tableau.visite) 
					this.textView.show(this.tableau.cinematique);
			}
			
			this.tableau.visite = true;

			if (!this.alreadyLoop) {
			    this.makeEvents();
				this.loop();
			}
		};

		this.load = function(save) {
			this.go(save.lieu, save);
		};
		
		this.showText = function(ids){
			this.textView.show(ids);
		};
		
		this.showInventaire = function(action){
			this.inventaireView.show(action);
		};
		
		this.loop = function() {
			this.alreadyLoop = true;
			if (!this.pause && this.textView.empty()) {
			    //Action ici
			}
			
			var that = this;
			setTimeout(function() {
				that.loop();
			}, 30);
		};
		
		this.makeEvents = function() {
			var that = this;
			
			this.scene.makeEvents();
			this.textView.makeEvents();
		};
		
		this.init(parent);
	};
});