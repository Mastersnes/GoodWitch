'use strict';
define(["jquery"], function($){
	var data = {
		"coffre" : {
			width:1024, height : 768,
			elements : [
			      {id: "serrure", x:"440.32", y:"376.32"}
			],
	        direction : {
	                bas : "coffre-bas",
	                gauche : "coffre-bas"
	        }
		},
		"coffre-bas" : {
            width:1024, height : 768,
            elements : [
                  {id: "boite", x:"90", y:"130"},
                  {id: "collier", x:"113", y:"413"},
                  {id: "athame", x:"368", y:"94"},
                  {id: "Nori", x:"526", y:"197"}
            ],
            direction : {
                haut : "coffre",
                droite : "coffre"
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