'use strict';

(function(window, undefined) {
    angular.module('itechart-connect')
        .directive('infoBarTile', function () {
        return {
            restrict: 'AE',
            templateUrl: '/javascript/app/common/directives/infoBarTile/infoBarTileTmpl.html',

            //directive scope fields
            scope: {
                iconClass: '=',
                description: '=',
                title: '=',
                backgroundImgUrl: '=',
                destinationUrl: '='
            },
            transclude: true
        }
    });
})(window);
