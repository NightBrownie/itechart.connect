'use strict';

var router = require('express').Router();
var passport = require('passport');

router.route('/login')
    .get(function (req, res) {
        res.render('login', { title: 'Express' });
    })
    .post(function (req, res, next) {
        res.send(500);
    });

router.route('/logout').get(function(req, res){
    req.logout();
    res.redirect('/');
});

router.route('/*')
    .all(function (req, res) {
        res.render('index', { title: 'Express' });
    });

module.exports = router;