'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    author: Number,
    title: String,
    visibility: Number,// 0 - company, 1-20 - department, 21-Inf - groups
    imageUrls: [String]
});

module.exports = schema;
