'use strict';

exports.init = function(app) {
    app.use('/employees', require('./employees/router'));
    //app.use('/events', require('./events/router'));
    app.use('/', require('./home/router'));
};