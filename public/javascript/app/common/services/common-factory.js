'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .factory('CommonFactory', ['$http', 'RequestFactory', function ($http, RequestFactory) {
            var user;
            return {
                getCurrentUser: function () {
                    if (user) {
                        return user;
                    }
                    RequestFactory.request({
                        url: '/employees/getCurrentUser'
                    }).then(function (data) {
                        user = data;
                    });
                }
            };
        }]);
})(window);