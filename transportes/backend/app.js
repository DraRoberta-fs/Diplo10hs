var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

require('dotenv').config();
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');
//const { truncate } = require('fs');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'PW2021awqyeudj',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true
}));

// Define the secured middleware function
// const secured = async (req, res, next) => {
  // try {
  //   console.log(req.session.id_usuario);
  //   if (req.session.id_usuario) {
  //     next();
  //   } else {
  //     res.redirect('/admin/login');
  //   }
  // } catch (error) {
  //   console.log(error);
  //   next(error); // Ensure errors are passed to the next middleware
  // }
// };
// de la clasenp


const secured = async (req, res, next) => {
  try {
      console.log('Secured middleware called');
      console.log('Session ID Usuario:', req.session.id_usuario); // Log the session user ID

      if (req.session.id_usuario) {
          console.log('User authenticated, proceeding to next middleware');
          next(); // Proceed to the next middleware or route handler
      } else {
          console.log('User not authenticated, redirecting to /admin/login');
          res.redirect('/admin/login'); // Redirect to the login page
      }
  } catch (error) {
      console.log('Error in secured middleware:', error);
      next(error); // Pass the error to the next middleware (e.g., error handler)
  }
};//

// Routes setup
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, adminRouter);
app.use('/api', cors(), apiRouter);

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
