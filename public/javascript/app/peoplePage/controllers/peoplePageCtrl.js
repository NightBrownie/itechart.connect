'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .controller('peoplePageCtrl', ['$scope', '$stateParams', '$location',
            function ($scope, $stateParams, $location) {
            $scope.sidebarTiles = [
                {
                    iconClass: 'fa-child',
                    title: 'People',
                    backgroundImgUrl: '/images/tiles/people.jpg',
                    destinationUrl: '#'
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

            $scope.selectedTags = [];

            //chosen tag settings from url param
            if ($stateParams.tag != undefined && $stateParams.tag != '') {
                $scope.selectedTags.push({name: $stateParams.tag});
            }

            //check which search page do we located at (department of company)
            $scope.isCompanySearch = /^\/people\/company\/*/.test($location.url());
        }]);
})(window);