const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const novedadesModel = require('./../models/novedadesModel');

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();
    res.json(novedades);
});

router.post('/contacto', async (req, res) => {
    const { nombre, email, telefono, mensaje } = req.body;
    
    console.log('Received contact request:', { nombre, email, telefono, mensaje });  // Log request body

    const mail = {
        to: 'agon.baires@gmail.com',
        subject: 'Contacto web',
        
        html: `${nombre} se contactó a través de la web y quiere más información a este correo: ${email} <br> Además, hizo el siguiente comentario: ${mensaje}<br> Su Tel es: ${telefono}`
    };

    console.log('Mail options:', mail);  // Log mail options

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    console.log('Transporter configuration:', {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER
    });  // Log transporter configuration

    try {
        await transport.sendMail(mail);
        console.log('Email sent successfully');
        res.status(201).json({
            error: false,
            message: 'Mensaje enviado'
        });
    } catch (error) {
        console.error('Error al enviar el email:', error);  // Log error details
        res.status(500).json({
            error: true,
            message: 'Error al enviar el mensaje'
        });
    }
});

module.exports = router;
