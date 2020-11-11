var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));  // 로그 남기는 미들웨어
app.use(express.json()); // json 파싱 미들웨어
app.use(express.urlencoded({ extended: false }));  // body 파싱 미들웨어
app.use(cookieParser());  // cookie 파싱 미들웨어
app.use(express.static(path.join(__dirname, 'public'))); // 정적파일 처리 미들웨어

app.use('/', indexRouter);      // 라우팅 미들웨어
app.use('/users', usersRouter); // 라우팅 미들웨어

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
