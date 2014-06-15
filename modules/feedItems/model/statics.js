'use strict';

exports.getFeedItems = function (filter, callback) {
    this.find(filter, function(err, feedItems){
        callback(err, feedItems);
    });
};