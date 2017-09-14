'use strict';
define(["jquery"], function($){
	var data = {
		"coffre-haut" : {
			width:1024, height : 768,
			elements : [
			      {id: "serrure", x:"440.32", y:"376.32"}
			],
	        direction : {
	            bas : "coffre-bas"
	        }
		},
		"coffre-bas" : {
            width:1024, height : 768,
            elements : [
            ],
            direction : {
                haut : "coffre-haut"
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