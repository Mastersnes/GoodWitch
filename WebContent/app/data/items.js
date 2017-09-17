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
					switch (item) {
					case "tournevis":
						tableau.showText(["serrure-utiliser-tournevis"]);
						break;
					case "tige":
						tableau.showText(["serrure-utiliser-tige"]);
						tableau.removeItem("tige");
						dom.attr("class", "serrure-tige");
						dom.attr("id", "serrure-tige");
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
						dom.attr("class", "serrure-done");
						dom.attr("id", "serrure-done");
						tableau.go("piece-sombre");
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
				tableau.go("piece-sombre");
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
					switch (item) {
					case "tournevis":
						tableau.showText(["tige-abime-utiliser-tournevis"]);
						tableau.addItem("tige");
						dom.remove();
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