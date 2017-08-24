/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/game.html"],
function($, _, Utils, page) {
	'use strict';

	return function(parent, load, code, Textes, Mediatheque) {
		this.init = function(parent, load, code, Textes, Mediatheque) {
			this.el = $("#app");
			this.Textes = Textes;
			this.mediatheque = Mediatheque;
			this.render(load, code);
		};

		this.render = function(load, code) {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
			
			var save;
			if (code) {
				save = JSON.parse(Utils.decode(code));
			}else if (load) {
				var saveSession = window.localStorage.getItem(Utils.name);
				if (saveSession) save = JSON.parse(Utils.decode(saveSession));
			}
			
			if (save) this.stageView.load(save);
			else this.stageView.go("debut");
		};
		
		this.init(parent, load, code, Textes, Mediatheque);
	};
});