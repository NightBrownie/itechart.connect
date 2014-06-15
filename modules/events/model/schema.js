'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    author: Number,
    title: String,
    shortContent: String,
    fullContent: String,
    type: Number,// eventPage, gallery, meetup
    visibility: Number// 0 - company, 1-20 - department, 21-Inf - groups
});

module.exports = schema;
