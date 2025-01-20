// const express = require('express');
// const router = express.Router();
// const usuariosModel = require('./../../models/usuariosModel');
// const md5 = require('md5');

// router.post('/', async (req, res, next) => {
//     try {
//         var usuario = req.body.usuario;
//         var password = req.body.password;

//         console.log('Request Body:', req.body); // Log entire request body
//         console.log('Received usuario:', usuario);  // Log to verify value
//         console.log('Received password:', password);  // Log to verify value

//         if (!usuario || !password) {
//             console.error('Usuario or password is missing');
//             return res.render('admin/login', {
//                 layout: 'admin/layout',
//                 error: true
//             });
//         }

//         var hashedPassword = md5(password);
//         console.log('Hashed password:', hashedPassword);  // Log the hashed password

//         var data = await usuariosModel.getUserByUsernameAndPassword(usuario, hashedPassword);
        
//         console.log(data)

//         if (data !== undefined) {
//            console.log('getting here')
//             req.session.id_usuario = data.id;
//             req.session.nombre = data.usuario;
//             res.redirect('/admin/novedades');
//         } else {
//           console.log('getting or here')
//             res.render('admin/login', {
//                 layout: 'admin/layout',
//                 error: true
//             });
//         }
//     } catch (error) {
//         console.error('Error:', error.message);
//         next(error);
//     }
// });

// module.exports = router;
// fin mio 

const express = require('express');
const router = express.Router();
const usuariosModel = require('../../models/usuariosModel'); // Ensure correct path
const md5 = require('md5');

// Render login page
router.get('/', (req, res) => {
    console.log('GET /admin/login called');
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

// Handle login form submission
router.post('/', async (req, res) => {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;

        console.log('POST /admin/login called');
        console.log('Request Body:', req.body); // Log entire request body
        console.log('Received usuario:', usuario);  // Log to verify value
        console.log('Received password:', password);  // Log to verify value

        if (!usuario || !password) {
            console.error('Usuario or password is missing');
            return res.render('admin/login', {
                layout: 'admin/layout',
                error: true,
                message: 'Usuario and password are required'
            });
        }

        var hashedPassword = md5(password);
        console.log('Hashed password:', hashedPassword);  // Log the hashed password

        var data = await usuariosModel.getUserByUsernameAndPassword(usuario, hashedPassword);
        
        console.log(data); // Log data to verify

        if (data !== undefined) {
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true,
                message: 'Invalid username or password'
            });
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.render('admin/login', {
            layout: 'admin/layout',
            error: true,
            message: 'An error occurred'
        });
    }
});

module.exports = router;

