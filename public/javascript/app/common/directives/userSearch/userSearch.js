'use strict';

(function(window, undefined) {
    angular.module('itechart-connect')
        .directive('userSearch', function () {
            return {
                restrict: 'AE',
                templateUrl: '/javascript/app/common/directives/userSearch/userSearch.html',
                controller: ['$scope', function ($scope) {
                    $scope.selectedTags = [];

                    $scope.currentTag = {name: ''};

                    $scope.foundPeople = [
                        {
                            profileId: 1,
                            name: 'Nikita Klushnikov',
                            avatarImgLink: 'http://cs10586.vk.me/u22101394/a_12048dd1.jpg',
                            skills: [
                                {name :'Angular.js'},
                                {name :'WinAPI'},
                                {name :'HTML6'},
                                {name :'CSS4'},
                                {name :'C++'},
                                {name :'C#'},
                                {name :'STL'},
                                {name :'Project Management'},
                                {name :'ASP.NET MVC'},
                                {name :'Angular.js'},
                                {name :'WinAPI'},
                                {name :'HTML6'},
                                {name :'CSS4'},
                                {name :'C++'},
                                {name :'C#'},
                                {name :'STL'},
                                {name :'Project Management'}
                            ],
                            interests: [
                                {name :'Running very fast'},
                                {name :'Serious business'},
                                {name :'Walking'},
                                {name :'Sitting'},
                                {name :'Running'}
                            ]
                        },
                        {
                            profileId: 2,
                            name: 'Alexey Dudarev',
                            avatarImgLink: 'http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/4/000/14e/2bc/1a797df.jpg',
                            skills: [
                                {name :'Angular.js'},
                                {name :'WinAPI'},
                                {name :'HTML6'},
                                {name :'CSS4'},
                                {name :'C++'},
                                {name :'C#'},
                                {name :'STL'},
                                {name :'Project Management'},
                                {name :'ASP.NET MVC'},
                                {name :'Angular.js'},
                                {name :'WinAPI'},
                                {name :'HTML6'},
                                {name :'CSS4'},
                                {name :'C++'},
                                {name :'C#'},
                                {name :'STL'},
                                {name :'Project Management'}
                            ],
                            interests: [
                                {name :'Running very fast'},
                                {name :'Serious business'},
                                {name :'Walking'},
                                {name :'Sitting'},
                                {name :'Running'}
                            ]
                        },
                        {
                            profileId: 3,
                            name: 'Andrei Sumar',
                            avatarImgLink: 'http://cs620629.vk.me/v620629787/33a/uwfwQQ7fb7Y.jpg',
                            skills: [
                                {name :'Angular.js'},
                                {name :'WinAPI'},
                                {name :'HTML6'},
                                {name :'CSS4'},
                                {name :'C++'},
                                {name :'C#'},
                                {name :'STL'},
                                {name :'Project Management'},
                                {name :'ASP.NET MVC'},
                                {name :'Angular.js'},
                                {name :'WinAPI'},
                                {name :'HTML6'},
                                {name :'CSS4'},
                                {name :'C++'},
                                {name :'C#'},
                                {name :'STL'},
                                {name :'Project Management'}
                            ],
                            interests: [
                                {name :'Running very fast'},
                                {name :'Serious business'},
                                {name :'Walking'},
                                {name :'Sitting'},
                                {name :'Running'}
                            ]
                        }
                    ];

                    $scope.addTag = function(tag) {
                        //check for tag existance
                        var tagIndex = $scope.selectedTags.indexOf(tag);
                        if (tagIndex == -1 && tag.name != undefined && tag.name != '') {
                            $scope.selectedTags.push(tag);
                        }

                        $scope.currentTag = {name: ''};

                        $scope.search();
                    }

                    $scope.removeTag= function(tag) {
                        var tagIndex = $scope.selectedTags.indexOf(tag);
                        if (tagIndex > -1) {
                            $scope.selectedTags.splice(tagIndex, 1);
                        }

                        $scope.search();
                    }

                    $scope.search = function () {
                        //add search logic here
                    };
                }]
            };
        });
})(window);