'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .factory('FeedFactory', ['$http', 'RequestFactory', function ($http, RequestFactory) {
            return {
                getFeeds: function (filters) {
                    return RequestFactory.request({
                        url: '/employees/getCurrentUser',
                        data: filters
                    }).then(function (feeds) {
                        return feeds;
                    });
                }
            };
        }]);
})(window);
