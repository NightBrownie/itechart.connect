'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .factory('FeedFactory', ['$http', 'RequestFactory', function ($http, RequestFactory) {
            return {
                getFeeds: function (filters) {
                    return RequestFactory.request({
                        url: '/feedItems/getFeed',
                        data: filters,
                        method: 'POST'
                    }).then(function (feeds) {
                        return feeds;
                    });
                }
            };
        }]);
})(window);
