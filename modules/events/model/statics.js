'use strict';

exports.getEvents = function (filters, callback) {
    this.find(filters, function(err, employees){
        callback(err, employees);
    });
};