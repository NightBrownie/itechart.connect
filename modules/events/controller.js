'use strict';

var model = require('./model');

exports.getEvents = function (filter, callback) {
    model.getEvents(filter, callback);
};

exports.getEventById = function (id, callback) {
    model.getEventById(id, callback);
};

exports.setEvent = function (entity, callback) {
    model.setEvent(entity, callback);
};
