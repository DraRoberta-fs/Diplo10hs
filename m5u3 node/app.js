var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var pool = require('./models/bd');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { createPool } = require('mysql');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//consultas

pool.query("select nombre, edad from empleados").then(function(resultados){
  console.log(resultados)
});

//var obj = {
  //nombre: 'Juan',
 // apellido: 'Lopez',
 // trabajo: 'ingeniero',
 // edad: 85,
 // salario: 10000000,
 // mail: 'juan@lalalah.com'
//}

//pool.query("insert into empleados set ?", [obj]).then(function(resultados) {
// console.log(resultados); 

//});
 //var id_emp = 1;
 //var obj = {
 // nombre : 'Pablo',
// apellido : 'Gomez'
 //}
 //pool.query("UPDATE empleados SET ? WHERE id_emp = ?", [obj, id_emp]) .then(function(resultados) 
 //{ console.log(resultados);

  //})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

async function fetchEmployees() { try { const resultados = await pool.query('SELECT nombre, edad FROM empleados'); console.log(resultados); } catch (error) { console.error('Error executing query', error); } } fetchEmployees();
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app ;
