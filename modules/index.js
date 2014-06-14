'use strict';

exports.init = function(app) {
    app.use('/', require('./home/router'));
    //app.use('/events', require('./events/router'));
};