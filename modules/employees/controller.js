'use strict';

var model = require('./model');

exports.getEmployeesById = function (arrIds, callback) {
    model.getEmployees(arrIds, callback);
};
