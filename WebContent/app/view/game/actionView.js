/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/action.html"],
function($, _, Utils, page) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "actions";
			this.parent = parent;
			this.Textes = parent.Textes;
			this.mediatheque = parent.mediatheque;
		};

		this.render = function(elementDom, element) {
			this.elementDom = elementDom;
			this.element = element;
			
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes,
					element : element
					
			};
			$(this.el).html(template(templateData));
			
			var left = elementDom.position().left + elementDom.width()/2 - $(this.el).width()/2;
			var top = elementDom.position().top + elementDom.height()/2 - $(this.el).height()/2;
			
			$(this.el).css({
				left : left,
				top : top
			});
			$(this.el).show();
			
			this.makeEvents();
		};
		
		this.checkHide = function(evt) {
			if (!$(evt.relatedTarget).prop("tagName")) return;
			var correctTarget = ["element", "actions", "action", "actiongroup"];
			var newTarget = $(evt.relatedTarget).prop("tagName").toLowerCase();
			if (correctTarget.indexOf(newTarget) == -1) $(this.el).hide();
		};
		
		this.makeEvents = function() {
			var that = this;
			
			$("action").unbind("click");
			$("action").on("click", function(evt) {
				var target = $(evt.target);
				var type = target.attr("class");
				var tableau = that.parent.scene.parent;
				if (that.element[type])that.element[type].call(that, tableau, that.elementDom);
				$(that.el).hide();
			});
		};
		
		this.init(parent);
	};
});