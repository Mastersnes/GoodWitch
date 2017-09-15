'use strict';
define(["jquery", 
        "app/utils/utils",
        "app/data/items"], function($, Utils, Items){
    return function(scene, tableau){
        this.init = function(scene, tableau) {
            this.scene = scene;
            this.tableau = tableau;
        };
        
        this.makeEvents = function() {
            var that = this;
            $(document).on("mousedown", "element", function(evt){
                evt.preventDefault();
                var target = $(evt.target);
                var id = target.attr("id");
                var element = Items.get(id);
                
                switch(evt.which) {
                    case 1 : element.use(that, target); break;
                    case 3 : element.see(that, target); break;
                    default : break;
                }
            });
            
            $("element").hover(function(){
                console.log("onHover");
            }, function() {
                console.log("go");
            });
        };
        
        this.init(scene, tableau);
    };
});