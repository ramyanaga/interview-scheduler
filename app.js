var express = require('express');
var dirPath = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var routes = require('./routes/index');

var app = express();

/*
app.get('/', function(req, res) {
    res.send('Interview Scheduler!')
});
*/

// view engine setup
app.set('views', dirPath.join(__dirname, 'views'));
//var Handlebars = require('handlebars');
var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));/app.use(logger('dev'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(dirPath.join(__dirname, 'public')));
app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});

module.exports = app;