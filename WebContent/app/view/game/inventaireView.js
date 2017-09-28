/*global define */
define(["jquery",
        'underscore',
        "text!app/template/game/inventaire.html"
        ],
function($, _, page) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "inventaire";
			this.parent = parent;
			this.Textes = parent.Textes;
			this.inventaire = [];
			this.events = [];
			this.mediatheque = parent.mediatheque;
		};

		this.show = function(action) {
			this.action = action;
			
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes,
					inventaire : this.inventaire
					
			};
			$("inventaire content").html(template(templateData));
			$(this.el).show();
			this.makeEvents();
		};
		
		this.addItem = function(item, isEvent) {
			if (isEvent) this.events.push(item);
			else this.inventaire.push(item);
		};
		
		this.removeItem = function(item, isEvent) {
			if (isEvent) {
				var index = this.events.indexOf(item);
			    this.events.splice(index, 1);
			}else {
			    var index = this.inventaire.indexOf(item);
			    this.inventaire.splice(index, 1);
			}
		};
		
		this.hasItem = function(item, isEvent) {
			if (isEvent) return this.events.indexOf(item) > -1;
			else return this.inventaire.indexOf(item) > -1;
        };

		this.makeEvents = function() {
			var that = this;
			$("inventaire item").off("mousedown touch");
			$("inventaire item").on("mousedown touch", function() {
				var item = $(this).attr("class");
				var tableau = that.action.parent.scene.parent;
				$(that.el).hide();
				that.action.element.utiliser(tableau, that.action.elementDom, item);
			});
			
			$("inventaire mask, inventaire .close").off("mousedown touch");
			$("inventaire mask, inventaire .close").on("mousedown touch", function() {
				$(that.el).hide();
			});
		};
		
		this.init(parent);
	};
});