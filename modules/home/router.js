'use strict';

var router = require('express').Router();

router.route('/login')
    .get(function (req, res) {
        res.render('login', { title: 'Express' });
    })
    .post(function (req, res) {
        res.render('login', { title: 'Express' });
    });

router.route('/*')
    .get(function (req, res) {
        res.render('index', { title: 'Express' });
    });

module.exports = router;