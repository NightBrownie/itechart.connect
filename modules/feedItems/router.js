'use strict';

var router = require('express').Router(),
    controller = require('./controller');

router.route('/getFeed')
    .post(function (req, res) {
        controller.getFeedItems(req.body, function(err, items) {
            return res.send(items);
        });
    });

module.exports = router;
