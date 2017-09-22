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
	    this.postRender = [];
	    
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
		    this.lieu = lieu;
			this.tableau = Tableaux.get(lieu);
			
			this.mediatheque.stopAllMusic();
			if (this.tableau.music) this.mediatheque.play(this.tableau.music);
			
			this.scene.initScene(lieu);
			
			if (save) {
				this.postRender = save.postRender;
				this.inventaireView.inventaire = save.inventaire;
			}else {
			    var visited = this.postRender[lieu] != null && this.postRender[lieu].visited;
				if (this.tableau.cinematique && !visited) this.textView.show(this.tableau.cinematique);
			}
			
			if (!this.postRender[lieu]) {
    			this.postRender[lieu] = {
    			        visited : true,
    			        removes : [],
    			        modifys : []
    			}
			}else this.scene.postRender(this.postRender[lieu]);

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
		
		this.removeElement = function(domElement) {
		    var id = domElement.attr("id");
		    
		    this.postRender[this.lieu].removes.push({
		        id : id
		    });
		    domElement.remove();
		};
		
		this.modifyElement = function(domElement, newId) {
		    var id = domElement.attr("id");
		    
            this.postRender[this.lieu].modifys.push({
                id : id,
                newId : newId
            });
		    domElement.attr("class", newId);
		    domElement.attr("id", newId);
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