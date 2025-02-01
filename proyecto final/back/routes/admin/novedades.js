const express = require('express');
const router = express.Router();
var novedadesModel = require('../../models/novedadesModel');  // Ensure correct path

// Listar novedades
router.get('/', async function (req, res, next) {
    try {
        var novedades = await novedadesModel.getNovedades();
        if (novedades && novedades.length > 0) {
            res.render('admin/novedades', {
                layout: 'admin/layout',
                novedades: novedades
            });
        } else {
            res.render('admin/novedades', {
                layout: 'admin/layout',
                novedades: [],
                message: 'No novedades found'
            });
        }
    } catch (error) {
        console.error('Error fetching novedades:', error);
        next(error);
    }
});

// Render agregar form
router.get('/agregar', (req, res, next) => {
    console.log('Rendering agregar form');
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

// Agregar nueva novedad
router.post('/agregar', async (req, res, next) => {
    try {
        console.log('Adding new novedad:', req.body);
        if (req.body.titulo !== "" && req.body.subtitulo !== "" && req.body.cuerpo !== "") {
            await novedadesModel.insertNovedades(req.body);
            console.log('Novedad added successfully');
            res.redirect('/admin/novedades');
        } else {
            console.log('All fields are required');
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log('Error adding novedad:', error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargó la novedad'
        });
    }
});

// Eliminar una novedad
router.get('/eliminar/:id', async (req, res, next) => {
    try {
        var id = req.params.id;
        console.log(`Deleting novedad with ID: ${id}`);
        await novedadesModel.deleteNovedadesById(id);
        console.log(`Novedad with ID ${id} deleted successfully`);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(`Error deleting novedad with ID ${id}:`, error);
        next(error);
    }
});

// Obtener una novedad para modificar
router.get('/modificar/:id', async (req, res, next) => {
    try {
        var id = req.params.id;
        console.log(`Fetching novedad with ID: ${id}`);
        var novedad = await novedadesModel.getNovedadesById(id);
        if (novedad) {
            console.log(`Fetched novedad: ${JSON.stringify(novedad)}`);
            res.render('admin/modificar', {
                layout: 'admin/layout',
                novedad
            });
        } else {
            console.log(`Novedad with ID ${id} not found`);
            res.status(404).send('Novedad not found');
        }
    } catch (error) {
        console.log(`Error fetching novedad with ID ${id}:`, error);
        next(error);
    }
});

// Modificar la novedad
router.post('/modificar', async (req, res, next) => {
    try {
        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        };
        console.log("Obj modif:", obj);
        console.log("modifica novedad con ID:", req.body.id);
        await novedadesModel.modificarNovedadById(obj, req.body.id);
        console.log('Novedad modificada');
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log("Error en la novedad", error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modificó la novedad'
        });
    }
});

module.exports = router;
