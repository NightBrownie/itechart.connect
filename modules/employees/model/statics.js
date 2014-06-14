'use strict';

exports.getAllEmployees = function (callback) {
    this.find({}, function(err, employees){
        callback(err, employees);
    });
};