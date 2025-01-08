var express = require('express');
var router = express.Router();
var md5 = require('md5');

// Ensure that your main server file (app.js) includes these:
// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

var usuariosModel =require('./../../models/usuariosModel')

router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.get('logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/logout'
  });
});


router.post('/', async (req, res, next) => {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;

        var data = await 
      usuariosModel.getUserByUsernameAndPassword(usuario, password);

        //console.log('Received usuario:', usuario);  // Log to verify value
       // console.log('Received password:', password);  // Log to verify value

        //if (!usuario || !password) {
          //  console.error('Usuario or password is missing');
          //  return res.render('admin/login', {
               // layout: 'admin/layout',
             //   error: true
          //  });
       // }

        //var hashedPassword = md5(password);
        //var data = await usuariosModel.getUserByUsernameAndPassword(usuario, hashedPassword);

        if (data != undefined) {
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
            res.redirect('admin/novedades');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
    } catch (error) {
        console.error('Error:', error.message);
        next(error);
    }
});

module.exports = router;
