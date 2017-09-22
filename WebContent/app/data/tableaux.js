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
        "piece-sombre-gauche" : {
            visite : false,
            cinematique : ["piece-sombre-text1"],
            width:1024, height : 768,
            elements : [
            ],
            direction : {
                droite : "piece-sombre-centre"
            }
        },
        "piece-sombre-centre" : {
            visite : false,
            cinematique : [],
            width:1024, height : 768,
            elements : [
            ],
            direction : {
                gauche : "piece-sombre-gauche",
                droite : "piece-sombre-droite",
                bas : "coffre"
            }
        },
        "piece-sombre-droite" : {
            visite : false,
            cinematique : [],
            width:1024, height : 768,
            elements : [
            ],
            direction : {
                gauche : "piece-sombre-centre"
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