'use strict';
define(["jquery"], function($){
	var data = {
		"coffre" : {
			music : "music/coffre.mp3",
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
			music : null,
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
        	music : "music/piece-sombre.mp3",
            visite : false,
            cinematique : ["piece-sombre-text1", "piece-sombre-text2", "piece-sombre-text3", "piece-sombre-text4", "piece-sombre-text5"],
            width:3072, height : 768,
            elements : [
                  {id: "fenetre", x:"173", y:"0"},
                  {id: "meuble", x:"246", y:"307"},
                  {id: "echelle", x:"1109", y:"69"},
                  {id: "chemine", x:"1797", y:"0"},
                  {id: "tapis", x:"1444", y:"614"},
                  {id: "table", x:"307", y:"468"},
                  {id: "tonneau", x:"1383", y:"315"},
                  {id: "lampe", x:"876", y:"445"},
                  {id: "casserole1", x:"1949", y:"94"},
                  {id: "casserole2", x:"2077", y:"108"},
                  {id: "casserole3", x:"2209", y:"108"},
                  {id: "casserole4", x:"2326", y:"126"},
                  {id: "casserole5", x:"2447", y:"140"},
                  {id: "pot-charbon", x:"1931", y:"500"},
                  {id: "allumette", x:"2550", y:"445"}
            ],
            direction : {
                bas : "coffre"
            }
           },
           "piece" : {
        	   music : "music/reperee.mp3",
               visite : false,
               cinematique : ["piece-text1"],
               width:3072, height : 768,
               elements : [
                     {id: "fenetre-rideau", x:"173", y:"0"},
                     {id: "meuble", x:"246", y:"307"},
                     {id: "echelle", x:"1109", y:"69"},
                     {id: "chemine", x:"1797", y:"0"},
                     {id: "tapis", x:"1444", y:"614"},
                     {id: "table", x:"307", y:"468"},
                     {id: "tonneau", x:"1383", y:"315"},
                     {id: "lampe", x:"876", y:"445"},
                     {id: "casserole1", x:"1949", y:"94"},
                     {id: "casserole2", x:"2077", y:"108"},
                     {id: "casserole3", x:"2209", y:"108"},
                     {id: "casserole4", x:"2326", y:"126"},
                     {id: "casserole5", x:"2447", y:"140"},
                     {id: "pot-charbon", x:"1931", y:"500"}
               ],
               direction : {
               }
           },
           "piece-ted" : {
        	   music : "music/ted-is-here.mp3",
               visite : false,
               cinematique : ["piece-ted1","piece-ted2","piece-ted3","piece-ted4","piece-ted5"],
               width:3072, height : 768,
               elements : [
                     {id: "fenetre-rideau", x:"173", y:"0"},
                     {id: "meuble", x:"246", y:"307"},
                     {id: "echelle", x:"1109", y:"69"},
                     {id: "chemine", x:"1797", y:"0"},
                     {id: "tapis", x:"1444", y:"614"},
                     {id: "tonneau", x:"1383", y:"315"},
                     {id: "ted", x:"944", y:"31"},
                     {id: "table", x:"307", y:"468"},
                     {id: "lampe", x:"876", y:"445"},
                     {id: "casserole1", x:"1949", y:"94"},
                     {id: "casserole2", x:"2077", y:"108"},
                     {id: "casserole3", x:"2209", y:"108"},
                     {id: "casserole4", x:"2326", y:"126"},
                     {id: "casserole5", x:"2447", y:"140"},
                     {id: "pot-charbon", x:"1931", y:"500"}
               ],
               direction : {
               }
           },
           "piece2" : {
        	   music : "music/piece-sombre.mp3",
               visite : false,
               cinematique : ["piece2-text1","piece2-text2"],
               width:3072, height : 768,
               elements : [
                     {id: "fenetre-rideau", x:"173", y:"0"},
                     {id: "meuble", x:"246", y:"307"},
                     {id: "echelle", x:"1109", y:"69"},
                     {id: "chemine", x:"1797", y:"0"},
                     {id: "planque-livre", x:"1690", y:"699"},
                     {id: "tapis", x:"1444", y:"614"},
                     {id: "ted-assome", x:"1352", y:"629"},
                     {id: "table", x:"307", y:"468"},
                     {id: "tonneau", x:"1383", y:"315"},
                     {id: "lampe", x:"876", y:"445"},
                     {id: "casserole1", x:"1949", y:"94"},
                     {id: "casserole2", x:"2077", y:"108"},
                     {id: "casserole3", x:"2209", y:"108"},
                     {id: "casserole5", x:"2447", y:"140"},
                     {id: "pot-charbon", x:"1931", y:"500"}
               ],
               direction : {
               }
           },
           "fin" : {
        	   	music : "music/fin.mp3",
				visite : false,
				cinematique : ["cinematique-fin1","cinematique-fin2","cinematique-fin3","cinematique-fin4",
				               "cinematique-fin5","cinematique-fin6","cinematique-fin7","cinematique-fin8",
				               "cinematique-fin9","cinematique-fin10","cinematique-fin11","cinematique-fin12",
				               "fin"],
				width:1024, height : 768,
				elements : [
				],
		        direction : {
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