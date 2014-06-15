'use strict';

var router = require('express').Router(),
    controller = require('./controller'),
    mongoose = require('mongoose');

router.route('/getEvents')
    .post(function (req, res) {
        controller.getEvents(req.body, function(events){
            return res.send(events);
        });
    });

router.route('/getEventById')
    .post(function (req, res) {
        controller.getEventById(req.body.id, function (err, event) {
            return res.send(event != null ? event : undefined);
        });
    });

router.route('/setEvent')
    .post(function (req, res) {
        controller.setEvent(req.body, function(events) {
            return res.end();
        });
    });

module.exports = router;