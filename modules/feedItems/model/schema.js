'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    author: Number,
    title: String,
    shortContent: String,
    type: Number,// event, gallery, meetup
    visibility: Number,// 0 - company, 1-20 - department, 21-Inf - groups
    refId: mongoose.Schema.Types.ObjectId
});

module.exports = schema;
