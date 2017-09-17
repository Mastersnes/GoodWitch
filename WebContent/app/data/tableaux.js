'use strict';
define(["jquery"], function($){
	var data = {
		"coffre" : {
			visite : false,
			cinematique : ["cinematique-coffre1","cinematique-coffre2", "coffre-text1", "coffre-text2"],
			width:1024, height : 768,
			elements : [
			      {id: "serrure", x:"440.32", y:"376.32"},
			      {id: "tige", x:"372", y:"416"},
			      {id: "tige", x:"597", y:"426"},
			      {id: "tige-abime", x:"369", y:"484"},
			      {id: "tige", x:"590", y:"484"},
			],
	        direction : {
	                bas : "coffre-bas"
	        }
		},
		"coffre-bas" : {
			visite : false,
			cinematique : ["coffre-haut-text1", "coffre-haut-text2", "coffre-haut-text3"],
			width:1024, height : 768,
            elements : [
                  {id: "boite", x:"90", y:"130"},
                  {id: "collier", x:"113", y:"413"},
                  {id: "athame", x:"368", y:"94"},
                  {id: "Nori", x:"526", y:"197"}
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
			return data[key];
		}
	};
});