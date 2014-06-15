'use strict';

(function(window, undefined) {
    angular.module('itechart-connect')
        .directive('feed', function () {
        return {
            restrict: 'E',
            templateUrl: '/javascript/app/common/directives/feed/feedTmpl.html',

            //directive scope fields
            scope: {
                items: '=',
                clickfeed: '='
            }
        };
    });
})(window);
