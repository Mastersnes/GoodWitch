/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/utils/scene",
        "text!app/template/game/game.html",
        "app/view/game/tableauView"],
function($, _, Utils, Scene, page, TableauView) {
	'use strict';

	return function(parent, load, code, Textes, Mediatheque) {
		this.init = function(parent, load, code, Textes, Mediatheque) {
			this.el = $("#app");
			this.Textes = Textes;
			this.scene = new Scene();
			this.mediatheque = Mediatheque;
			this.tableauView = new TableauView(this, Textes, this.scene);
			this.render(load, code);
			
			var that = this;
			$( window ).resize(function() {
			    that.scene.resize();
			});
		};

		this.render = function(load, code) {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
			
			this.scene.resize();
			var save;
			if (code) save = JSON.parse(Utils.decode(code));
			else if (load) {
				var saveSession = window.localStorage.getItem(Utils.name);
				if (saveSession) save = JSON.parse(Utils.decode(saveSession));
			}
			
			if (save && save.lieu) this.tableauView.load(save);
			else this.tableauView.go("coffre-haut");
		};
		
		this.init(parent, load, code, Textes, Mediatheque);
	};
});