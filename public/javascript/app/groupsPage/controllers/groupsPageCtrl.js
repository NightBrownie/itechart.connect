'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .controller('groupsPageCtrl', [ '$scope', '$state', 'FeedFactory', 'GroupFactory', '$stateParams',
            function ($scope, $state, FeedFactory, GroupFactory, $stateParams) {
            $scope.sidebarTiles = [
                {
                    iconClass: 'fa-child',
                    title: 'List',
                    backgroundImgUrl: '/images/tiles/people.jpg',
                    destinationUrl: '/groups/'
                },
                {
                    iconClass: 'fa-files-o',
                    title: 'Sport',
                    backgroundImgUrl: '/images/tiles/docs.jpg',
                    destinationUrl: '#'
                },
                {
                    iconClass: 'fa-camera-retro',
                    title: 'Web',
                    backgroundImgUrl: '/images/tiles/photos.jpg',
                    destinationUrl: '#'
                },
                {
                    iconClass: 'fa-glass',
                    title: 'dotNet',
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

            GroupFactory.getAllGroups().then(function(groups){
                $scope.groups = groups;
            });

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