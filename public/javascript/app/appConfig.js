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
                    //TODO: need to rename folder and file
                    .state('department', {
                        url: '/department/',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/departmentsPage/views/departmentsPage.html',
                                controller: 'departmentsPageCtrl'
                            }
                        }
                    })
                    .state('documentsDepartment', {
                        url: '/documents/department/',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/docsPage/views/docsPage.html',
                                controller: 'docsPageCtrl'
                            }
                        }
                    })
                    .state('documentsCompany', {
                        url: '/documents/company/',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/docsPage/views/docsPage.html',
                                controller: 'docsPageCtrl'
                            }
                        }
                    })
                    .state('eventEdit', {
                        url: '/event/edit/{id}',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/eventPage/views/eventPage.html',
                                controller: 'eventPageCtrl'
                            }
                        }
                    })
                    .state('eventCreate', {
                        url: '/event/create/',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/eventPage/views/eventPage.html',
                                controller: 'eventPageCtrl'
                            }
                        }
                    })
                    .state('eventInfo', {
                        url: '/event/{id}',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/eventPage/views/eventPage.html',
                                controller: 'eventPageCtrl'
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
                    .state('createGroup', {
                        url: '/groups/create',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/groupsPage/views/createGroupsPage.html',
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
                    .state('peopleCompany', {
                        url: '/people/company/{tag}',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/peoplePage/views/peoplePage.html',
                                controller: 'peoplePageCtrl'
                            }
                        }
                    })
                    .state('peopleDepartment', {
                        url: '/people/department/{tag}',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/peoplePage/views/peoplePage.html',
                                controller: 'peoplePageCtrl'
                            }
                        }
                    })
                    .state('photosCompany', {
                        url: '/photos/company/',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/photosPage/views/photosPage.html',
                                controller: 'photosPageCtrl'
                            }
                        }
                    })
                    .state('photosDepartment', {
                        url: '/photos/department/',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/photosPage/views/photosPage.html',
                                controller: 'photosPageCtrl'
                            }
                        }
                    })
                    .state('photoGalleriesCompany', {
                        url: '/photos/galleries/company/{id}',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/photosPage/views/photoGalleriesPage.html',
                                controller: 'photoGalleriesPageCtrl'
                            }
                        }
                    })
                    .state('photoGalleriesDepartment', {
                        url: '/photos/galleries/department/{id}',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/photosPage/views/photoGalleriesPage.html',
                                controller: 'photoGalleriesPageCtrl'
                            }
                        }
                    })
                    .state('profile', {
                        url: '/profile/',
                        views: {
                            'main-view': {
                                templateUrl: '/javascript/app/profilePage/views/profilePage.html',
                                controller: 'profilePageCtrl'
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