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
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/companyPage/views/companyPage.html',
                                controller: 'companyPageCtrl'
                            }
                        }
                    })
                    .state('departments',    {
                        url: '/departments/',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/departmentsPage/views/departmentsPage.html',
                                controller: 'departmentsPageCtrl'
                            }
                        }
                    })
                    .state('groups', {
                        url: '/groups/',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/groupsPage/views/groupsPage.html',
                                controller: 'groupsPageCtrl'
                            }
                        }
                    })
                    .state('home', {
                        url: '/',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/homePage/views/homePage.html',
                                controller: 'homePageCtrl'
                            }
                        }
                    })
                    .state('people', {
                        url: '/people/',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/peoplePage/views/peoplePage.html',
                                controller: 'peoplePageCtrl'
                            }
                        }
                    })
                    .state('newcomers', {
                        url: '/newcomers/',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/newcomersPage/views/newcomersPage.html',
                                controller: 'newcomersPageCtrl'
                            }
                        }
                    })
                    .state('rooms', {
                        url: '/rooms/',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/roomsPage/views/roomsPage.html',
                                controller: 'roomsPageCtrl'
                            }
                        }
                    });

                $locationProvider.html5Mode(true);
        }]);
})(window);