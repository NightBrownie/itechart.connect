'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .controller('groupsPageCtrl', [ '$scope', '$state', 'FeedFactory', 'GroupFactory', '$stateParams',
            function ($scope, $state, FeedFactory, GroupFactory, $stateParams) {
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

            $scope.operations = [
                {
                    icon: 'glyphicon-plus',
                    text: 'Add',
                    url:'createGroup'
                }
            ];


            FeedFactory.getFeeds({
                visibility: $stateParams.groupId
            }).then(function(feedElements){
                $scope.items = feedElements;
            });

            $scope.createModel = {
                name: '',
                description: ''
            };

            $scope.createGroup = function(){
                GroupFactory.createGroup($scope.createModel).then(
                    function(){
                        $state.go('groups');
                    }
                );
            };
        }]);
})(window)