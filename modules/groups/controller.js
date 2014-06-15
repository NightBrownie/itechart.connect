'use strict';

var model = require('./model');

exports.getGroups = function (filter, callback) {
    model.getGroups(filter, callback);
};

exports.createGroup = function (group, callback) {
    model.createGroup(group, callback);
};

exports.join = function (profileId, callback) {
    model.join(profileId, callback);
};

exports.leave = function (profileId, callback) {
    model.leave(profileId, callback);
};