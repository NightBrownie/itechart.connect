'use strict';

exports.init = function(app) {
    app.use('/feedItems', require('./feedItems/router'));
    app.use('/events', require('./events/router'));
    app.use('/employees', require('./employees/router'));
    app.use('/groups', require('./groups/router'));
    app.use('/galleries', require('./galleries/router'));
    //app.use('/events', require('./events/router'));
    app.use('/', require('./home/router'));
};