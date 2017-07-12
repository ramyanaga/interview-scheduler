var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');

router.use(bodyParser.json());

router.get('/', function(req, res) {
    res.render('home');
});

router.get('/calendar', function(req, res) {
    //res.send('Calendar View');
    res.render('calendar');
});

module.exports = router;