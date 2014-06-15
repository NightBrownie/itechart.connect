'use strict';

var model = require('./model');

exports.getGalleries = function (filter, callback) {
    model.getGalleries(filter, callback);
};
