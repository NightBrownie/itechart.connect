'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .factory('EventFactory', ['$http', 'RequestFactory', function ($http, RequestFactory) {
            return {
                getEvents: function (filters) {
                    return RequestFactory.request({
                        method: 'POST',
                        url: '/events/getEvents',
                        data: filters
                    }).then(function (events) {
                        return events;
                    });
                },
                getEventById: function(id) {
                    return RequestFactory.request({
                        method: 'POST',
                        url: '/events/getEventById',
                        data: {id: id}
                    }).then(function (event) {
                        return event;
                    });
                },
                setEvent: function (entity) {
                    return RequestFactory.request({
                        method: 'POST',
                        url: '/events/setEvent',
                        data: entity
                    });
                }
            };
        }]);
})(window);