'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    author: String,
    title: String,
    shortContent: String,
    type: String,
    visibility: String,
    refId: String
});

module.exports = schema;
