'use strict';

exports.getEvents = function (filters, callback) {
    this.find(filters, function(err, events){
        callback(err, events);
    });
};

exports.getEventById = function (id, callback) {
    this.findById(id, function (err, event) {
        callback(err, event);
    });
};

exports.setEvent = function (entity, callback) {
    var Model = this,
        item = new Model(entity);

    item.save(callback);
};