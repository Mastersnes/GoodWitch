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
		
		this.addItem = function(item) {
			this.inventaire.push(item);
		};
		
		this.removeItem = function(item) {
			var index = this.inventaire.indexOf(item);
			this.inventaire.slice(index, index+1);
		};

		this.makeEvents = function() {
			var that = this;
			$("inventaire item").off("mousedown");
			$("inventaire item").on("mousedown", function() {
				var item = $(this).attr("class");
				var tableau = that.action.parent.scene.parent;
				$(that.el).hide();
				that.action.element.utiliser(tableau, that.action.elementDom, item);
			});
			
			$("inventaire mask").off("mousedown");
			$("inventaire mask").on("mousedown", function() {
				$(that.el).hide();
			});
		};
		
		this.init(parent);
	};
});