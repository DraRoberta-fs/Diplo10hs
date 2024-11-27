import '../styles/componentes/pages/ContactoPage.css'
const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form className="formulario" action="" method="" >
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="telefono">telefono</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar"
/>                    </p>


                </form>
                <div className="datos">
                    <h2>Otras vias de comunicacion</h2>
                    <p>Tambien puede comunicarse con nosotros a traves de los siguiented medios</p>
                    <ul>
                        <li>Telefono: 2421657 </li>
                        <li>Email: contacto@transportesx.com.ar</li>
                        <li>Facebook:</li>
                        <li>Twitter:</li>
                    </ul>


                </div>


            </div>





        </main>
    )



}
export default ContactoPage;