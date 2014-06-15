'use strict';

var router = require('express').Router(),
    controller = require('./controller');

router.route('/getGroups')
    .get(function (req, res) {
        controller.getGroups(req.body, function(groups){
            return res.send(groups);
        });
    });

module.exports = router;
