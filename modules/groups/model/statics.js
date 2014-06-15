'use strict';

exports.getGroups = function (filter, callback) {
    this.find(filter, function(err, groups){
        callback(err, groups);
    });
};

exports.createGroup = function (group, callback) {
    var Model = this,
        item = new Model(group);

    item.save(callback);
};