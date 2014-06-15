'use strict';

var router = require('express').Router(),
    controller = require('./controller'),
    feedController = require('../feedItems/controller');

router.route('/getEvents')
    .post(function (req, res) {
        controller.getEvents(req.body, function (events) {
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
        console.log(req.body);
        controller.setEvent(req.body, function (err, event) {
            console.log('1 ' + err + ' ' + event);
            var feed = {};
            feed.author = event.author;
            feed.title = event.title;
            feed.shortContent = event.shortContent;
            feed.type = 1;//event
            feed.visibility = event.visibility;
            feed.refId = event.id;
            console.log('2 ' + JSON.stringify(feed));
            feedController.createFeedItem(feed, function () {
                console.log('55 ' + JSON.stringify(feed));
                return res.end();
            });
        });
    });

module.exports = router;