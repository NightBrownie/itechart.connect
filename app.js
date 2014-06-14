'use strict';
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var modules = require('./modules');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(require('less-middleware')(path.join(__dirname, 'public'), { force: true }));
app.use(express.static(path.join(__dirname, 'public')));

modules.init(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
