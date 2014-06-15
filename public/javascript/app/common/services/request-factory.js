'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .factory('RequestFactory', ['$http', '$q', function ($http, $q) {
            var RequestFactory = {
                createConfig: function createConfig(config, prefix) {
                    return {
                        url: (prefix || '') + config.url,
                        cache: false,
                        data: config.data || {},
                        params: config.params || {},
                        method: config.method || 'GET'
                    };
                },

                sendRequest: function sendRequest(config) {
                    var deferred = $q.defer();

                    $http(config).success(function (response) {
                        if (response.status >= 400) {
                            return deferred.reject(response);
                        }

                        return deferred.resolve(response.data);
                    }).error(function (err) {
                        return deferred.reject(err);
                    });

                    return deferred.promise;
                },

                request: function (requestConfig) {
                    return RequestFactory.sendRequest(RequestFactory.createConfig(requestConfig));
                }
            };

            return RequestFactory;
        }]
    );
})(window);