'use strict';

(function(window, undefined) {
    angular.module('itechart-connect')
        .directive('userSearch', function () {
            return {
                restrict: 'AE',
                templateUrl: '/javascript/app/common/directives/userSearch/userSearch.html',
                scope: {
                    selectedTags: '='
                },
                controller: ['$scope', 'CommonFactory', function ($scope, CommonFactory) {
                    //tags are given from params
                    //$scope.selectedTags = [];

                    $scope.currentTag = {name: ''};

                    $scope.foundPeople = [
                        {
                            profileId: 525,
                            github: 'andreisumar',
                            name: 'Andrei Sumar',
                            avatarImgLink: 'http://cs620629.vk.me/v620629787/33a/uwfwQQ7fb7Y.jpg',
                            skills: [
                                {name :'Knockout.js'},
                                {name :'WinAPI'},
                                {name :'HTML5'},
                                {name :'CSS3'},
                                {name :'C++'},
                                {name :'C#'},
                                {name :'STL'},
                                {name :'ASP.NET WebForms'},
                                {name :'ASP.NET MVC'},
                                {name :'Delphi 7'},
                                {name :'Scheme'},
                                {name :'Turbo Pascal'}
                            ],
                            interests: [
                                {name :'Bicycle'},
                                {name :'Literature'},
                                {name :'Travelling'},
                                {name :'Music'},
                                {name :'Running'}
                            ]
                        },
                        {
                            profileId: 453,
                            name: 'Nikita Klushnikov',
                            github: 'NightBrownie',
                            avatarImgLink: 'http://cs10586.vk.me/u22101394/a_12048dd1.jpg',
                            skills: [
                                {name :'Angular.js'},
                                {name :'Knockout.js'},
                                {name :'Java EE'},
                                {name :'Java SE'},
                                {name :'WinAPI'},
                                {name :'HTML5'},
                                {name :'CSS3'},
                                {name :'WPF'},
                                {name :'C#'},
                                {name :'STL'},
                                {name :'ASP.NET WebForms'},
                                {name :'ASP.NET MVC'},
                            ],
                            interests: [
                                {name :'Music'},
                                {name: 'Sports'},
                                {name: 'Hackathons'},
                                {name :'Bicycle'},
                                {name :'iTechArt events'},
                                {name :'Literature'},
                                {name :'Travelling'},
                                {name :'Running'}
                            ]
                        },
                        {
                            profileId: 479,
                            name: 'Alexey Dudarev',
                            github: 'AlexDudarev',
                            avatarImgLink: 'http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/4/000/14e/2bc/1a797df.jpg',
                            skills: [
                                {name :'Angular.js'},
                                {name :'WinAPI'},
                                {name :'STL'},
                                {name :'C++'},
                                {name :'Project Management'},
                                {name :'ASP.NET MVC'},
                                {name :'Angular.js'},
                                {name :'WinAPI'},
                                {name :'HTML5'},
                                {name :'CSS3'},
                                {name :'C#'}
                            ],
                            interests: [
                                {name :'Sports'},
                                {name :'Football'},
                                {name :'Hockey'},
                                {name :'Literature'},
                                {name :'Travelling'},
                                {name :'Music'},
                                {name :'Running'}
                            ]
                        }
                    ];

                    $scope.peopleSmg = [];

                    $scope.people = [];

                    CommonFactory.getAllUsers().then(function (users) {
                        $scope.peopleSmg = users.smgEmployees;

                        for (var person in $scope.peopleSmg) {
                            var currPerson = $scope.peopleSmg[person];

                            var currentItem = {
                                profileId: currPerson.ProfileId,
                                name: (currPerson.FirstNameEng + ' ' + currPerson.LastNameEng),
                                github: '',
                                avatarImgLink: currPerson.Image,
                                skills: [],
                                interests: []
                            };

                            if (currentItem.profileId != 453
                                && currentItem.profileId != 479
                                && currentItem.profileId != 525) {

                                $scope.people.push({
                                    profileId: currPerson.ProfileId,
                                    name: (currPerson.FirstNameEng + ' ' + currPerson.LastNameEng),
                                    github: '',
                                    avatarImgLink: currPerson.Image,
                                    skills: [],
                                    interests: []
                                });
                            }
                        };

                        $scope.foundPeople = $scope.foundPeople.concat($scope.people);
                    });

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