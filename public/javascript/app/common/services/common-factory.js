'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .factory('CommonFactory', ['$http', '$q', 'RequestFactory', function ($http, $q, RequestFactory) {
            var user;
            return {
                getCurrentUser: function () {
                    if (user) {
                        var deferred = $q.defer();
                        return deferred.resolve(user);
                    }
                    return RequestFactory.request({
                        url: '/employees/getCurrentUser'
                    }).then(function (data) {
                        user = data[0];
                        return user;
                    });
                }
            };
        }]);
})(window);