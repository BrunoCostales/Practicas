var createError = require('http-errors');
var express = require('express');//Requerimos el modulo  Express 
var path = require('path');//Requerimos el modulo Path
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');//Requerimos la ruta principal
var usersRouter = require('./routes/users');//Requerimos la ruta de usuarios

var app = express();//Instanciamos express en la variable App


app.set('views', path.resolve(__dirname, './views'));//Seteamos que cada vez que decimos views hacemos referencia al directorio actual + views

app.set('view engine', 'ejs'); //Aca se define el Template Engine (Motor de vistas en otras palabras)//Establecemos ejs

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //Definimos como ccaarpeta publica o estatica 'public'

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
