'use strict';

var model = require('./model');

exports.getEvents = function (filter, callback) {
    model.getEvents(filter, callback);
};
