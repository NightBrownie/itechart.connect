'use strict';

exports.getFeedItems = function (filter, callback) {
    this.find(filter, function(err, feedItems){
        callback(err, feedItems);
    });
};

exports.createFeedItem = function(feeditem, callback){
    var Model = this;
    var item = new Model(feeditem);
    item.save(callback);
};