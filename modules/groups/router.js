'use strict';

var router = require('express').Router(),
    controller = require('./controller');

router.route('/getGroups')
    .get(function (req, res) {
        controller.getGroups(req.body, function(groups){
            return res.send(groups);
        });
    });

router.route('/joinGroup')
    .get(function (req, res) {
        controller.join(req.profileId, req.groupId, function(err){
            return res.send();
        });
    });

router.route('/leaveGroup')
    .get(function (req, res) {
        controller.leave(req.profileId, function(err){
            return res.send();
        });
    });

module.exports = router;
