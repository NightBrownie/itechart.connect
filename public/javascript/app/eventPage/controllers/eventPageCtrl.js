'use srict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .controller('eventPageCtrl', ['$scope', '$location', '$stateParams', 'CommonFactory', 'EventFactory',
                function($scope, $location, $stateParams, CommonFactory, EventFactory) {
            var maxShortDescriptionLengthChars = 140;
            var shortDescriptionEnding = '...';

            $scope.isInEditMode = false;
            $scope.isInCreateMode = false;

            $scope.event = {
                author: 0,
                title: '',
                shortContent: '',
                fullContent: '',
                type: '',
                visibility: 0
            };

            $scope.saveEvent = function () {
                $scope.event.shortContent = $scope.event.fullContent.substring(0,
                    Math.min(maxShortDescriptionLengthChars, $scope.event.fullContent.length - 1));

                if ($scope.event.shortContent.length < $scope.event.fullContent.length) {
                    $scope.event.shortContent += shortDescriptionEnding;
                }

                CommonFactory.getCurrentUser().then(function(user){
                    $scope.event.author = user.ProfileId;
                    EventFactory.setEvent($scope.event);
                });
            };

            //check for edit mode
            $scope.isInEditMode =  /^\/event\/edit\/.*/.test($location.url());

            //check for create mode
            $scope.isInCreateMode = /^\/event\/create\//.test($location.url());
            $scope.isInEditMode |= $scope.isInCreateMode;

            if (!$scope.isInCreateMode) {
                //get info from db
                var id = $stateParams.id;

                EventFactory.getEventById(id).then(function(event) {
                    if (event) {
                        $scope.event = event;
                    } else {
                        $location.url('/');
                    }
                });
            }
        }]);
})(window);
