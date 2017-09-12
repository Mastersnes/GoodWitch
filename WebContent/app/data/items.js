'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Items
		 */
		"serrure" : {
		    w : 168, h : 182,
			see : function(game, dom) {
				console.log("C'est une serrure");
			},
			use : function(game, dom) {
			    console.log("J'utilise la serrure");
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