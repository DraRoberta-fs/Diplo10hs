import React, { useState } from 'react';
import axios from 'axios';

import '../styles/ContactoPage.css';

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);
    
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,  // Spread old data
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (!response.data.error) {
            setFormData(initialForm);
        }    
    }

    return (
        <main className="holder contacto">
            <div>
                <h2>Complete el siguiente formulario</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className='centrar'><input type="submit" value="Enviar" /></p>
                    {sending ? <p>Enviando ...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </form>
            </div>
            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>Ponete en contacto con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Teléfono: 06758902783</li>
                    <li>Email: stay@gmail.com</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;
