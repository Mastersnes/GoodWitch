/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "params";
			this.mediatheque = parent.mediatheque;
		};

		this.makeEvents = function() {
			var that = this;
			
            $("params #open-close").off("mousedown touch");
            $("params #open-close").on("mousedown touch", function(evt){
            	if ($(this).hasClass("open")) {
            		// on ferme
            		$(this).removeClass("open");
            		$(this).html("◄");
            		$("params ul").fadeOut("slow");
            	}else {
            		// on ouvre
            		$(this).addClass("open");
            		$(this).html("►");
            		$("params ul").fadeIn("slow");
            	}
            });
            
            $("params #clue").off("mousedown touch");
            $("params #clue").on("mousedown touch", function(evt){
            	parent.showClue();
            });
            $("params #mute").off("mousedown touch");
            $("params #mute").on("mousedown touch", function(evt){
            	if ($(this).hasClass("active")) {            		
            		//demute
            		$(this).removeClass("active");
            		that.mediatheque.mute(false);
            	}else {
            		//mute
            		$(this).addClass("active");
            		that.mediatheque.mute(true);
            	}
            });
            $("params #quit").off("mousedown touch");
            $("params #quit").on("mousedown touch", function(evt){
            	window.close();
            });
		};
		
		this.init(parent);
	};
});