var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var conTactRouter = require('./routes/contact');
var singleRouter = require('./routes/single');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views/aside'));
app.set('views', path.join(__dirname, 'views/phantom'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', conTactRouter);
app.use('/single', singleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//npm bootstarp js import
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

//npm bootstarp css import
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

//npm aside css import
app.use('/asideJs', express.static(__dirname + '/public/aside/js'));
app.use('/asideCss', express.static(__dirname + '/public/aside/css'));

//npm assets css import
app.use('/assJs', express.static(__dirname + '/public/assets/js'));
app.use('/assCss', express.static(__dirname + '/public/assets/css'));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
