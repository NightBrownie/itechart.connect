'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .factory('CommonFactory', ['$http', '$q', 'RequestFactory', function ($http, $q, RequestFactory) {
            var user;
            return {
                getCurrentUser: function () {
                    if (user) {
                        var deferred = $q.defer();
                        setTimeout(deferred.resolve(user),0);
                        return deferred.promise;

                    }
                    return RequestFactory.request({
                        url: '/employees/getCurrentUser'
                    }).then(function (data) {
                        user = data[0];
                        return user;
                    });
                },
                getAllUsers: function () {
                    return RequestFactory.request({
                        url: '/employees/all'
                    }).then(function (data) {
                        return data;
                    });
                }
            };
        }]);
})(window);