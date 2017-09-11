'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Items
		 */
		"chaise" : {
			see : function(game, dom) {
				game.setText("chaise-explorer1");
			},
			use : function(game, dom) {
				dom.remove();
			}
		},
		"table" : {
			see : function(game, dom) {
				
			},
			use : function(game, dom) {
				
			}
		},
		"armoire" : {
			see : function(game, dom) {
				
			},
			use : function(game, dom) {
				
			}
		},
		"chapeau" : {
			see : function(game, dom) {
				
			},
			use : function(game, dom) {
				
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