import { useEffect, useState } from 'react';
import axios from 'axios';
import NovedadItem from '../componentes/novedades/NovedadItem';
import '../styles/componentes/pages/NovedadesPage.css';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false); 
    const [novedades, setNovedades] = useState([]);

    useEffect(() => { 
        const cargarNovedades = async () => {
            setLoading(true); 
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false); 
        };
        cargarNovedades(); 
    }, []); 

    return (
        <section className="holder">
            <h2>Novedades</h2>
            {loading ? ( // Conditional rendering based on loading state
                <p>Loading...</p>
            ) : (
                novedades.map((novedad) => (
                    <NovedadItem
                        key={novedad.id} // Assuming each novedad has a unique id
                        title={novedad.titulo}
                        subtitle={novedad.subtitulo}
                        imagen={novedad.imagen}
                        body={novedad.cuerpo}
                    />
                ))
            )}
        </section>
    );
};

export default NovedadesPage;
