'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .controller('profilePageCtrl', [ '$scope', '$stateParams', 'CommonFactory',
            function ($scope, $stateParams, CommonFactory) {
                var id = $stateParams.id;
                $scope.mongoUser = {
                    profileId: '0',
                    github: '',
                    twitter: '',
                    description: '',
                    recommendations: '',
                    interests:[],
                    skills: []
                };

                $scope.smgUser = undefined;

                CommonFactory.getAllUsers().then(function (users) {
                    if (users && users.smgEmployees.length && users.smgEmployees.length > 0) {
                        for (var user in users.smgEmployees) {
                            if (users.smgEmployees[user].ProfileId == id) {
                                $scope.smgUser = users.smgEmployees[user];
                            }
                        }

                        if ($scope.smgUser == undefined) {
                            $location.url('/');
                            return;
                        }

                        for (var user in users.connectEmployee) {
                            if (users.connectEmployee[user].profileId == id) {
                                $scope.mongoUser = users.connectEmployee[user];
                            }
                        }
                    }
                });
        }]);
})(window);