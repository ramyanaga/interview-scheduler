var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();

app.get('/', function(req, res) {
    res.send('Interview Scheduler!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});