'use strict';

var router = require('express').Router();

router.route('/')
    .get(function (req, res) {
        res.render('index', { title: 'Express' });
    });

module.exports = router;