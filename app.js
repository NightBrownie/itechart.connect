'use strict';
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('./modules/passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var modules = require('./modules');
var config = require('./config');

var app = express();

mongoose.set('debug', config.debug);
mongoose.connect(config.database.url, config.database.auth, function (err) {
// all environments
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(require('less-middleware')(path.join(__dirname, 'public'), { force: true }));
    app.use(express.static(path.join(__dirname, 'public')));

    app.use(cookieParser());
    app.use(bodyParser());
    app.use(session({
        secret: 'itech-connect',
        cookie: { secure: true }
    }));
    passport.initialize(app);

    app.use(passport.auth);
    modules.init(app);

    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
});
