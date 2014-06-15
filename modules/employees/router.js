'use strict';

var router = require('express').Router(),
    controller = require('./controller'),
    smgService = require('../../smg'),
    async = require('async'),
    _ = require('lodash');


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
                            'sessionId': req.user.sessionId
                        },
                        function (e, r, data) {
                            data=JSON.parse(data);
                            return callback(e, data.Profiles);
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

router.route('/getCurrentUser')
    .get(function (req, res) {
        async.waterfall([
                function (next) {
                    smgService.sendSmgRequest({
                            method: 'GetAllEmployees'
                        }, {
                            'sessionId': req.user.sessionId// sessionId
                        },
                        function (e, r, users) {
                            return next(e, users);
                        }
                    );
                },
                function (data, next) {
                    var users = JSON.parse(data).Profiles;
                    var names = req.user.name.split('.');
                    var currentUser = _.filter(users, function (user) {
                        return ((user.FirstNameEng.toLowerCase() === names[0]) && (user.LastNameEng.toLowerCase() === names[1]));
                    });
                    next(null, currentUser);
                }
            ],
            function (err, result) {
                return res.send(result);
            }
        );
    });

router.route('/updateProfile')
    .post(function (req, res) {
        var profile = req.body.profile;
        controller.updateProfile(profile, function (err) {
            return res.send();
        });
    });


module.exports = router;