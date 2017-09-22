'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Items
		 */
		"serrure" : {
			regarder : function(tableau, dom) {
				tableau.showText(["serrure-regarder"]);
			},
			gouter : function(tableau, dom) {
				tableau.showText(["serrure-gouter"]);
			},
			ecouter : function(tableau, dom) {
				tableau.showText(["serrure-ecouter"]);
			},
			ouvrir : function(tableau, dom) {
				tableau.showText(["serrure-ouvrir"]);
			},
			utiliser : function(tableau, dom, item) {
				if (!item) tableau.showInventaire(this);
				else {
				    var inventaire = tableau.inventaireView;
					switch (item) {
					case "tournevis":
						tableau.showText(["serrure-utiliser-tournevis"]);
						break;
					case "tige":
						tableau.showText(["serrure-utiliser-tige"]);
						inventaire.removeItem("tige");
						tableau.modifyElement(dom, "serrure-tige");
						break;
					case "nori":
						tableau.showText(["serrure-utiliser-nori"]);
						break;
					default:
						tableau.showText(["utiliser-non-prevu"]);
						break;
					}
				}
			}
		},
		"serrure-tige" : {
			examiner : function(tableau, dom) {
				tableau.showText(["serrure-tige-examiner"]);
			},
			prendre : function(tableau, dom) {
				tableau.showText(["serrure-tige-prendre"]);
			},
			utiliser : function(tableau, dom, item) {
				if (!item) tableau.showInventaire(this);
				else {
					switch (item) {
					case "tournevis":
						tableau.showText(["serrure-tige-utiliser-tournevis"]);
						tableau.modifyElement(dom, "serrure-done");
						tableau.go("piece-sombre-centre");
						break;
					case "nori":
						tableau.showText(["serrure-tige-utiliser-nori"]);
						break;
					default:
						tableau.showText(["utiliser-non-prevu"]);
						break;
					}
				}
			}
		},
		"serrure-done" : {
			ouvrir : function(tableau, dom) {
				tableau.go("piece-sombre-centre");
			}
		},
		"tige" : {
			examiner : function(tableau, dom) {
				tableau.showText(["tige-examiner"]);
			},
			prendre : function(tableau, dom) {
				tableau.showText(["tige-prendre"]);
			},
			utiliser : function(tableau, dom, item) {
				if (!item) tableau.showInventaire(this);
				else {
					switch (item) {
					case "tournevis":
						tableau.showText(["tige-utiliser-tournevis"]);
						break;
					case "nori":
						tableau.showText(["tige-utiliser-nori"]);
						break;
					case "tige":
						tableau.showText(["tige-utiliser-tige"]);
						break;
					default:
						tableau.showText(["utiliser-non-prevu"]);
						break;
					}
				}
			}
		},
		"tige-abime" : {
			examiner : function(tableau, dom) {
				tableau.showText(["tige-abime-examiner"]);
			},
			prendre : function(tableau, dom) {
				tableau.showText(["tige-abime-prendre"]);
			},
			utiliser : function(tableau, dom, item) {
				if (!item) tableau.showInventaire(this);
				else {
				    var inventaire = tableau.inventaireView;
					switch (item) {
					case "tournevis":
						tableau.showText(["tige-abime-utiliser-tournevis"]);
						inventaire.addItem("tige");
						tableau.removeElement(dom);
						break;
					case "nori":
						tableau.showText(["tige-utiliser-nori"]);
						break;
					default:
						tableau.showText(["utiliser-non-prevu"]);
						break;
					}
				}
			}
		},
		"nori" : {
            regarder : function(tableau, dom) {
                tableau.showText(["nori-regarder"]);
            },
            prendre : function(tableau, dom) {
                var inventaire = tableau.inventaireView;
                if (inventaire.hasItem("tournevis")) {
                    tableau.showText(["nori-prendre"]);
                    inventaire.addItem("nori");
                    tableau.removeElement(dom);
                }else {
                    tableau.showText(["nori-prendre-no"]);
                }
            },
            examiner : function(tableau, dom) {
                var inventaire = tableau.inventaireView;
                if (inventaire.hasItem("tournevis")) {
                    tableau.showText(["nori-tournevis-prendre-no"]);
                }else {
                    tableau.showText(["nori-tournevis-prendre"]);
                    inventaire.addItem("tournevis");
                    tableau.saveGame();
                }
            },
            utiliser : function(tableau, dom, item) {
                if (!item) tableau.showInventaire(this);
                else {
                    switch (item) {
                    case "tige":
                        tableau.showText(["nori-utiliser-tige"]);
                        break;
                    default:
                        tableau.showText(["utiliser-non-prevu"]);
                        break;
                    }
                }
            }
		},
        "collier" : {
            regarder : function(tableau, dom) {
                tableau.showText(["collier-regarder"]);
            },
            prendre : function(tableau, dom) {
                tableau.showText(["collier-prendre-no"]);
            },
            examiner : function(tableau, dom) {
                tableau.showText(["collier-examiner"]);
            }
        }
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return $.extend(true, {}, data[key]);
		}
	};
});