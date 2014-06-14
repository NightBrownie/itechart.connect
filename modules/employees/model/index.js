'use strict';

var mongoose = require('mongoose'),
    schema = require('./schema'),
    _ = require('lodash');

//schema.plugin(mongooseUtils);

_.extend(schema.statics, require('./statics'));

module.exports = mongoose.model('Employee', schema);
