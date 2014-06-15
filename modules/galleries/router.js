'use strict';

var router = require('express').Router(),
    controller = require('./controller');

router.route('/getGalleries')
    .get(function (req, res) {
        controller.getGalleries(req.body, function(items){
            return res.send(items);
        });
    });

module.exports = router;
