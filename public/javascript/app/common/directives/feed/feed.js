'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .directive('feed', function () {
            return {
                restrict: 'E',
                templateUrl: '/javascript/app/common/directives/feed/feedTmpl.html',

                //directive scope fields
                scope: {
                    items: '='
                },
                controller: function ($scope, $state) {
                    $scope.clickfeed = function (item) {
//                        switch (item.type) {
//                            case 3:
//                            {
//                                $state.go('event.edit');
//                                break;
//                            }
//                            case 4:
//                            {
//                                $state.go('gallery.edit');
//                                break;
//                            }
//                            default:{
//
//                            }
//                        }
                    };
                }
            };
        });
})(window);
