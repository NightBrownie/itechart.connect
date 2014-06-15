'use strict';

var passport = require('passport'),
    smgService = require('../../smg'),
    BasicStrategy = require('passport-http').BasicStrategy;

function getRemoteUser(username, password, done) {
    smgService.sendSmgRequest({
        method: 'Authenticate'
    }, {
        'username': username,
        'password': password
    }, function (err, response, data) {
        return done(err, data);
    });
}

exports.initialize = function (app) {
    passport.use(new BasicStrategy({},
        function (username, password, done) {
            // Find the user by username.  If there is no user with the given
            // username, or the password is not correct, set the user to `false` to
            // indicate failure.  Otherwise, return the authenticated `user`.
            getRemoteUser(username, password, function (err, data) {
                data = JSON.parse(data);
                if (err) {
                    return done(err);
                }
                if (!data.SessionId) {
                    return done(null, false);
                }
                var user = {};
                user.name = username;
                user.sessionId = data.SessionId
                return done(null, user);
            });
        }));

    app.use(passport.initialize());
    app.use(passport.session());
};

exports.auth = passport.authenticate('basic', { session: false });