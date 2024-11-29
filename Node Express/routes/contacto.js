var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
  //res.send('hola soy la pagina de contacto');
//});

router.get('/', function(req, res, next) {
    res.render('contacto', { message: 'hola soy la pagina de contacto' });
});

module.exports = router;