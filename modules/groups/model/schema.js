'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    author: Number,
    name: String,
    code: Number,// 0 - company, 1-20 - department, 21-Inf - groups
    description: String
});

module.exports = schema;
