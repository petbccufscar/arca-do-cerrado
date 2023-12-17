import React from 'react';
import './Map.css';
import InteractiveMap from '../../components/map/InteractiveMap';

const Map = () => {
    const imageBounds = [
        [71.2831, -172.6875],
        [165.65, -81.637]
    ];

    const species = [
        {
            id: 1,
            name: 'Planta 1',
            scientificName:'Plantus planta',
            position: [80, -126.633],
        },
        {
            id: 2,
            name: 'Planta 2',
            scientificName: 'Plantis plantu',
            position: [82, -126.633],
        }
    ]

    return (
        <div className='map'>
            <h1>Mapa</h1>
            <section className='main'>
                <section className='header'>
                    <h2>Sobre o Mapa Interativo</h2>
                    <p>Este mapa tem como o intuito te permitir conhecer o projeto Arca do Cerrado de maneira mais próxima, o utilize para explorar
                        cada uma das espécies presentes.
                    </p>
                    <p>
                        Utilize o zoom e pings para analisar a Arca do Cerrado detalhadamente e obter mais informações sobre as espécies nelas.
                    </p>
                </section>

                <section className='content'>
                    <InteractiveMap species={species}/>
                </section>
            </section>

        </div>
    );
};

export default Map