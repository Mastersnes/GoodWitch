/*global define */
define(["jquery",
        'underscore'
        ],
function($, _) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "#popupText";
			this.parent = parent;
			this.Textes = parent.Textes;
			this.mediatheque = parent.mediatheque;
			this.visible = false;
		};

		this.show = function(ids, callback) {
			this.ids = ids;
			this.callback = callback;
			this.current = -1;
			
			this.next();
			
			$("#popupText").show();
			this.visible = true;
		};
		
		this.next = function() {
			this.current ++;
			if (this.current < this.ids.length) {
				
				var id = this.ids[this.current];
				
				if (id.indexOf("cinematique") > -1) $("#popupText mask").css({
					"opacity" : "1"
				});
				else $("#popupText mask").css({
					"opacity": "0.5"
				});
				
				var value = this.Textes.get(id);
				if (value) {				
				    $("#popupText .text").html(this.Textes.get(id));
				}else {
				    $("#popupText .text").html(id);
				}
			}else {
				this.visible = false;
				$("#popupText").hide();
				if (this.callback) {
					this.callback.call();
				}
			}
		};
		
		this.empty = function() {
		    return !this.visible;
		};

		this.makeEvents = function() {
			var that = this;
			$("#popupText").off("mousedown touch");
			$("#popupText").on("mousedown touch", function() {
			    console.log("currentId : ", that.ids[that.current]);
			    if (that.ids[that.current] != "fin") {
			        that.next();
			    }
			});
		};
		
		this.init(parent);
	};
});