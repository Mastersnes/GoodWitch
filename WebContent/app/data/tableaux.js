'use strict';
define(["jquery"], function($){
	var data = {
		"coffre" : {
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
                  {id: "boite", x:"440.32", y:"376.32"},
                  {id: "collier", x:"440.32", y:"376.32"},
                  {id: "athame", x:"440.32", y:"376.32"},
                  {id: "Nori", x:"440.32", y:"376.32"}
            ],
            direction : {
                haut : "coffre"
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