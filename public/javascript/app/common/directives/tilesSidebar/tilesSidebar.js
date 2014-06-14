'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .directive('tilesSidebar', function () {
            return {
                restrict: 'AE',
                templateUrl: '/javascript/app/common/directives/tilesSidebar/tilesSidebar.html',

                //directive scope fields
                scope: {
                    tiles: '='
                }
            }
        });
})(window);