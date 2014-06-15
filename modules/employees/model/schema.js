'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    profileId: Number, //smg profile id
    github: String,
    twitter: String,
    description: String,
    recommendations: String,// recommedations from user
    interests:[String],
    skills: [String]
});

module.exports = schema;
