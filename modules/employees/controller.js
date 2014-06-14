'use strict';

var model = require('./model');

exports.getAllEmployeesList = function ( callback) {
    model.getAllEmployees(callback);
};
