'use strict';

var passport = require('passport'),
    smgService = require('../../smg'),
    LocalStrategy = require('passport-local').Strategy;

function getRemoteUser(username, password, done) {
    smgService.sendSmgRequest({
        method: 'Authenticate'
    }, {
        'username': username,
        'password' : password
    }, function (err, response, data) {
        return done(err, data);
    });
}

exports.initialize = function (app) {
    passport.use(new LocalStrategy(getRemoteUser));

    passport.serializeUser(function (user, done) {
        return done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    app.use(passport.initialize());
    app.use(passport.session());
};

exports.ensureLogin = function (req, res, next) {
    var ignore = [
        '/login'
    ];

    // Do not request login for unprotected URLs
    if (ignore.indexOf(req.path) >= 0) {
        return next();
    }

    // Do not request login if user is already logged in
    if (req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/login');
};