'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Items
		 */
		"serrure" : {
			regarder : function(game, dom) {
				alert("Non Nori, non ! Je n’ose pas regarder par le trou ! Et si les méchants sont encore là ?...");
			},
			gouter : function(game, dom) {
			    alert("C’est pas bon! c’est piquant et ca a un goût de rouille. Berk");
			},
			ecouter : function(game, dom) {
			    alert("Seul le bruit du vent parle");
			},
			ouvrir : function(game, dom) {
			    alert("Pour cela, il faudrait que je sorte de ce coffre. Mais, Maman a prit la clé.");
			},
			utiliser : function(game, dom) {
			    alert("afficher inventaire");
			}
		},
		"serrure-tige" : {
			regarder : function(game, dom) {
				alert("Non Nori, non ! Je n’ose pas regarder par le trou ! Et si les méchants sont encore là ?...");
			},
			gouter : function(game, dom) {
			    alert("C’est pas bon! c’est piquant et ca a un goût de rouille. Berk");
			},
			ecouter : function(game, dom) {
			    alert("Seul le bruit du vent parle");
			},
			ouvrir : function(game, dom) {
			    alert("Pour cela, il faudrait que je sorte de ce coffre. Mais, Maman a prit la clé.");
			},
			utiliser : function(game, dom) {
			    alert("afficher inventaire");
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