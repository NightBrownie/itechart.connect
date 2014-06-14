'use strict';

exports.getEmployees = function (arrIds, callback) {
    this.find({'_id': {'$in': arrIds} }, function(err, employees){
        callback(err, employees);
    });
};