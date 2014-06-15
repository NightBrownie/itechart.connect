'use strict';

exports.getGroups = function (filter, callback) {
    this.find(filter, function(err, groups){
        callback(err, groups);
    });
};