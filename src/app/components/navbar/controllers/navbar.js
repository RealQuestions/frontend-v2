'use strict';

define(['app','css!components/navbar/styles/navbar'], function (app) {
    //ensure we are already loaded
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        angular.module('genesisFront')
        .controller('NavbarCtrl', function ($scope) {
            $scope.date = new Date();
        });
    });
});
