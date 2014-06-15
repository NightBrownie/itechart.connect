'use strict';

var model = require('./model');

exports.getFeedItems = function (filter, callback) {
    model.getFeedItems(filter, callback);
};


exports.createFeedItem = function (feeditem, callback) {
    model.createFeedItem(feeditem, callback);
};
