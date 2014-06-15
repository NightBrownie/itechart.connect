'use strict';

var router = require('express').Router(),
    controller = require('./controller');

router.route('/getFeed')
    .get(function (req, res) {
        controller.getFeedItems(req.body, function(items){
            return res.send(items);
        });
    });

module.exports = router;
