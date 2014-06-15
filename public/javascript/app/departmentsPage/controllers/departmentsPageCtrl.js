'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .controller('departmentsPageCtrl', [ '$scope', 'FeedFactory', 'CommonFactory', function ($scope, FeedFactory, CommonFactory) {
            $scope.sidebarTiles = [
                {
                    iconClass: 'fa-child',
                    title: 'People',
                    backgroundImgUrl: '/images/tiles/people.jpg',
                    destinationUrl: '/people/company/'
                },
                {
                    iconClass: 'fa-files-o',
                    title: 'Docs',
                    backgroundImgUrl: '/images/tiles/docs.jpg',
                    destinationUrl: '#'
                },
                {
                    iconClass: 'fa-camera-retro',
                    title: 'Photos',
                    backgroundImgUrl: '/images/tiles/photos.jpg',
                    destinationUrl: '#'
                },
                {
                    iconClass: 'fa-glass',
                    title: 'Events',
                    backgroundImgUrl: '/images/tiles/events.jpg',
                    destinationUrl: '#'
                },
                {
                    iconClass: 'fa-calendar',
                    title: 'Meetups',
                    backgroundImgUrl: '/images/tiles/meetups.png',
                    destinationUrl: '#'
                }
            ];

            CommonFactory.getCurrentUser().then(function(user){
                FeedFactory.getFeeds({
                    visibility: user.DepId
                }).then(function(feedElements){
                    $scope.items = feedElements;
                });
            });

            $scope.clickfeed = function () {
                alert('click Feed');
            };
        }]);
})(window)