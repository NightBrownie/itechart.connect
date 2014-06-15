'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .factory('GroupFactory', ['RequestFactory', function (RequestFactory) {
            return {
                createGroup: function (group) {
                    return RequestFactory.request({
                        url: '/groups/create',
                        data: group,
                        method: 'POST'
                    }).then(function (feeds) {
                        return feeds;
                    });
                }
            };
        }]);
})(window);