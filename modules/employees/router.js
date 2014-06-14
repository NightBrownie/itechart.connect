'use strict';

var router = require('express').Router(),
    smgService = require('../../smg');


router.route('/')
    .get(function (req, res) {
        res.render('index', { title: 'Express' });
    });

module.exports = router;