var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const session = require('express-session');


var indexRouter = require('./routes/index');
var page2Router = require('./routes/page2');

const async = require('hbs/lib/async');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var logueado;

app.use(session({
  secret: '4asd5sa4d5a', 
  resave: false, 
  saveUninitialized: true
}));

seguridad = async (req, res, next) => {
  if(req.session.user_id>0){
    next();
  }else{
    res.redirect('/');
  }
  
}

app.use('/', indexRouter);
app.use('/', seguridad, page2Router);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
