'use strict';

var router = require('express').Router(),
    request = require('request');

router.route('/')
    .get(function (req, res) {
        res.render('index', { title: 'Express' });
    });

router.route('/smg/*')
    .all(function (req, res) {
        res.render('index', { title: 'Express SMG' });
//        request({
//            auth: {
//                user: req.user ? req.user.username : '',
//                pass: req.user ? req.user.password : ''
//            },
//            method: req.method,
//            url:  'http://' + config.api.host + req.url.replace(/^\/proxy/, ''),
//            json: req.body,
//            jar: false,
//            pool: false
//        }).pipe(res);
    });

module.exports = router;