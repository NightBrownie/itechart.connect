'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function($stateProvider, $urlRouterProvider, $locationProvider) {
                //default route
                $urlRouterProvider.otherwise("/");

                $stateProvider
                    .state('company', {
                        url: '/company/',
                        templateUrl: '/javascript/app/companyPage/views/companyPage.html',
                        controller: 'companyPageCtrl'
                    })
                    .state('departments',    {
                        url: '/departments/',
                        templateUrl: '/javascript/app/departmentsPage/views/departmentsPage.html',
                        controller: 'departmentsPageCtrl'
                    })
                    .state('groups', {
                        url: '/groups/',
                        templateUrl: '/javascript/app/groupsPage/views/groupsPage.html',
                        controllers: 'groupsPageCtrl'
                    })
                    .state('home', {
                        url: '/',
                        templateUrl: '/javascript/app/homePage/views/homePage.html',
                        controller: 'homePageCtrl'
                    })
                    .state('newcomers', {
                        url: '/newcomers/',
                        templateUrl: '/javascript/app/newcomersPage/views/newcomersPage.html',
                        controller: 'newcomersPageCtrl'
                    })
                    .state('rooms', {
                        url: '/rooms/',
                        templateUrl: '/javascript/app/roomsPage/views/roomsPage.html'
                    });

                //$locationProvider.html5Mode(true);
        }]);
})(window);