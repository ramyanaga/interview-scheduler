var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
var Student = require('../schemas/student');

router.use(bodyParser.json());

router.get('/', function (req, res) {
    res.render('home');
});

router.get('/calendar', function (req, res) {
    //res.send('Calendar View');
    res.render('calendar', {
        //students: ['s1', 's2', 's3']
        student: 'Ramya',
        students: ['1', '2', '3']
    }, function (err, data) {
        if (err) {
            console.log('CALENDAR VIEW ERROR');
            console.log(err);
        }
        else {
            res.send(data);
            console.log("calendar view rendered");
        }
    });
});

module.exports = router;