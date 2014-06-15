'use strict';

var router = require('express').Router(),
    controller = require('./controller');

router.route('/getFeed')
    .post(function (req, res) {
        /*controller.getFeedItems(req.body, function(err, items) {
         return res.send(items);
         });*/
        setTimeout(
            function () {
                return res.send([
                    {
                        title: 'Наперегонки с Леманом - Хакатон в Itechart',
                        shortContent: 'Кто же победит',
                        type: '1',
                        visibility: '0'
                    },
                    {
                        title: 'Ночь пережили не все',
                        shortContent: 'Кто же пришел чисто поесть?!',
                        type: '1',
                        visibility: '0'
                    },
                    {
                        title: 'Прошли семинары по актуальным темам',
                        shortContent: 'Смотрите на DVD',
                        type: '1',
                        visibility: '0'
                    }
                ]);
            },
            200
        );
    });

module.exports = router;
