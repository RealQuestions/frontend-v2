'use strict';


define(['angularAMD','fonts','foundation',,'ngRoute','uiRouter','restangular','ngCookies','ngAnimate','ngTouch','ngSanitize','components/navbar/controllers/navbar',''], function (angularAMD,fonts) {
    var app = angular.module("genesisFront", ['ngRoute']);
    fonts({
        google: { families: [ 'Dosis::latin', 'Arvo::latin' ] }
    });
    app.config(function ($routeProvider) {
        $routeProvider.when(
            "/", 
            angularAMD.route({
                templateUrl: './app/components/question/views/question.html',
                controller: 'QuestionCtrl',
                controllerUrl: 'components/question/controllers/question'
            }))
 

            .otherwise({redirectTo:'/'});
    });
    // Abstract model
    app.factory('DefaultModel', function(){
        var Model = function(defaults, resource){
            this.data = defaults;
            this.resource = resource;
        };
        Model.prototype.fetch = function(){
            var self = this;
            this.resource.query(function(result){
                self.data = result.data;
            });
        };
        return Model;
    });
    return angularAMD.bootstrap(app);
});
