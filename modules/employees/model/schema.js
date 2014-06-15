'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    github: String,
    twitter: String,
    description: String,
    recommendations: String,// recommedations from user
    interests:[String],
    skills: [String]
});

module.exports = schema;
