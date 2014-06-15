'use strict';

var router = require('express').Router(),
    controller = require('./controller');

router.route('/getEvents')
    .get(function (req, res) {
        controller.getEvents(req.body, function(events){
            return res.send(events);
        });
    });

module.exports = router;