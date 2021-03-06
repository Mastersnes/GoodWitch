/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/view/game/sceneView",
        "app/view/game/textView",
        "app/view/game/inventaireView",
        "app/view/game/paramsView",
        "app/data/tableaux",
        "app/data/items",
        ],
function($, _, Utils, Scene, TextView, InventaireView, ParamsView, Tableaux, Items) {
	'use strict';

	return function(parent) {
	    this.postRender = {};
	    
		this.init = function(parent) {
			this.el = ".game";
			this.parent = parent;
			this.Textes = parent.Textes;
			this.mediatheque = parent.mediatheque;
			this.kongregateUtils = parent.kongregateUtils;
			
			this.position = 0;
			this.move = "stop";
			
			this.pause = false;
			this.scene = new Scene(this);
			this.textView = new TextView(this);
			this.inventaireView = new InventaireView(this);
			this.paramsView = new ParamsView(this);
		};

		this.go = function(lieu, save, noResetMove) {
			if (!noResetMove) {
    		    $(".camera").css({
    				left : "0%"
    			});
    			this.position = 0;
			}
			this.move = "stop";
			
		    this.lieu = lieu;
			this.tableau = Tableaux.get(lieu);
			
			if (this.tableau.music) {
				this.mediatheque.stopAllMusic();
				this.mediatheque.play(this.tableau.music);
			}
			
			this.scene.initScene(lieu);
			
			if (save) {
				this.postRender = save.postRender;
				this.inventaireView.inventaire = save.inventaire;
				this.inventaireView.events = save.events;
			}else {
			    var visited = this.postRender[lieu] != null && this.postRender[lieu].visited;
				if (this.tableau.cinematique && !visited) this.textView.show(this.tableau.cinematique);
			}
			
			if (!this.postRender[lieu]) {
    			this.postRender[lieu] = {
    			        visited : true,
    			        removes : [],
    			        modifys : []
    			};
			}else this.scene.postRender(this.postRender[lieu]);
			
			if (this.tableau.lampe) $("lampe").show();
            else $("lampe").hide();

			if (!this.alreadyLoop) {
			    this.makeEvents();
				this.loop();
			}
		};

		this.load = function(save) {
			this.go(save.lieu, save);
		};
		
		this.showText = function(ids, callback){
			this.textView.show(ids, callback);
		};
		
		this.showInventaire = function(action){
			this.inventaireView.show(action);
		};
		
		this.showClue = function(action){
			var clue = $("clue").attr("key");
			this.kongregateUtils.score("ShowClue", 1);
			this.showText([clue]);
		};
		
		this.removeElement = function(domElement) {
		    var id = domElement.attr("id");
		    
		    this.postRender[this.lieu].removes.push({
		        id : id
		    });
		    domElement.remove();
		    this.saveGame();
		};
		
		this.modifyElement = function(domElement, newId) {
		    var id = domElement.attr("id");
		    
            this.postRender[this.lieu].modifys.push({
                id : id,
                newId : newId
            });
		    domElement.attr("class", newId);
		    domElement.attr("id", newId);
		    this.saveGame();
		};
		
		this.saveGame = function() {
		    var save = {
		            lieu : this.lieu,
		            inventaire : this.inventaireView.inventaire,
		            events : this.inventaireView.events,
		            postRender : this.postRender
		    };
		    var saveJeton = Utils.encode(JSON.stringify(save));
		    window.localStorage.setItem(Utils.name, saveJeton);
		    return saveJeton;
		};
		
		this.loop = function() {
			this.alreadyLoop = true;
			if (!this.pause && this.textView.empty()) {
	            if (this.move == "left") {
	            	this.position++;
	            	if (this.position > 0) this.position = 0;
	            	$(".camera").css({
		        		left : this.position + "%"
		        	});
	            }else if (this.move == "right") {
	            	var sceneWidth = this.scene.size.width;
	            	this.position--;
	            	if (this.position < (100-sceneWidth)) this.position = (100-sceneWidth);
	            	$(".camera").css({
		        		left : this.position + "%"
		        	});
	            }
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
			this.paramsView.makeEvents();
			
			$(document).unbind("keydown");
			$(document).keydown(function(e) {
                var code = e.keyCode || e.which;
                switch (code) {
                    case 27: // PAUSE
                        if (that.pause) {
                            that.pause = false;
                            $("#pause").hide();
                        }else {
                            that.pause = true;
                            var code = that.saveGame();
                            $("#pause #code").html(code);
                            $("#pause").show();
                        }
                        break;
                };
			});
			
			$(".scene").off("mousemove");
            $(".scene").on("mousemove", function(evt){
            	var decalage = parseInt($(".scene").position().left);
            	var taille = {
            	        x : parseInt($(".scene").width()),
            	        y : parseInt($(".scene").height())
            	};

            	var mouse = {
            	        x : Utils.toPercent((evt.pageX - decalage), taille.x),
            	        y : Utils.toPercent(evt.pageY, taille.y)
            	};


            	if (mouse.x < 5) {
            		that.move = "left";
            	}else if (mouse.x > 95) {
            		that.move = "right";
            	}else {
            		that.move = "stop";
            	}

            	if (that.tableau.lampe) {
                    var lampe = {
                            w : Utils.toPercent($("lampe").width(), 1024),
                            h : Utils.toPercent($("lampe").height(), 768)
                    };
                    $("lampe").css({
                        left : (mouse.x - (lampe.w/2)) + "%",
                        top : (mouse.y - (lampe.h/2)) + "%"
                    });
            	}
            	
            });
		};
		
		this.init(parent);
	};
});