'use strict';

var model = require('./model');

exports.getGroups = function (filter, callback) {
    model.getGroups(filter, callback);
};
