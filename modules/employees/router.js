'use strict';

var router = require('express').Router(),
    controller = require('./controller'),
    smgService = require('../../smg'),
    async = require('async');


router.route('/')
    .get(function (req, res) {
        res.render('index', { title: 'Express' });
    });

router.route('/all')
    .get(function (req, res) {
        async.parallel({
                smgEmployees: function (callback) {
                    smgService.sendSmgRequest({
                            method: 'GetAllEmployees'
                        }, {
                            'sessionId': req.user
                        },
                        function (e, r, data) {
                            return callback(e, data);
                        }
                    );
                },
                connectEmployee: function (callback) {
                    controller.getAllEmployeesList(callback);
                }
            },
            function (err, results) {
                return res.send(results);
            }
        );
    });

router.route('/department/:departmentId')
    .get(function (req, res) {
        res.render('index', { title: 'Express' });
    });

module.exports = router;