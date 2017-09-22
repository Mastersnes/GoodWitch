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
			cinematique : ["coffre-bas-text1", "coffre-bas-text2", "coffre-bas-text3", "coffre-bas-text4", "coffre-bas-text5", "coffre-bas-text6"],
			width:1024, height : 768,
            elements : [
                  {id: "boite", x:"90", y:"130"},
                  {id: "collier", x:"113", y:"413"},
                  {id: "athame", x:"368", y:"94"},
                  {id: "nori", x:"526", y:"197"}
            ],
            direction : {
                haut : "coffre"
            }
        },
        "piece-sombre" : {
            visite : false,
            width:3072, height : 768,
            elements : [
                  {id: "fenetre", x:"58", y:"0"},
                  {id: "meuble", x:"95", y:"125"},
                  {id: "chaise", x:"188", y:"166"},
                  {id: "table", x:"126", y:"201"},
                  {id: "chemine", x:"605", y:"2"},
                  {id: "casserole1", x:"605", y:"2"}
            ],
            direction : {
                bas : "coffre"
            }
        },
        "piece" : {
            visite : false,
            width:3072, height : 768,
            elements : [
            ],
            direction : {
                bas : "coffre"
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