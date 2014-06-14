'use script';

var request = require('request'),
    qs = require('querystring'),
    config = require('../config');

module.exports.sendSmgRequest = function (options, params, callback) {
    var url = config.service.url + options.method + '?';
    url += qs.stringify(params);
    request({
        method: options.reqType || 'GET',
        url: url,
        jar: false,
        pool: false
    }, callback);
};
