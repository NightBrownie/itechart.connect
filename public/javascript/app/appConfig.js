'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                //default route
                $urlRouterProvider.otherwise("/");

                $stateProvider
                    .state('homePageState', {
                        url: '/',
                        templateUrl: 'javascript/app/homePage/views/homePage.html',
                        controller: 'homePageCtrl'
                    });
        }]);
})(window);