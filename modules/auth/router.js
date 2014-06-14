'use strict';

var router = require('express').Router(),
    smgService = require('../../smg');


router.route('/')
    .get(function (req, res) {
        smgService.sendSmgRequest({
            method: 'Authenticate'
        }, {
            'username': 'alexey.dudarev',
            'password' : ''
        }, function(e, r, data){
            return res.send(data);
        });
    });

module.exports = router;