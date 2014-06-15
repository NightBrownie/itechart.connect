'use strict';

exports.getGalleries = function (filter, callback) {
    this.find(filter, function(err, galleries){
        callback(err, galleries);
    });
};