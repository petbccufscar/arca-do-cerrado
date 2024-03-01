import React, { useState, useEffect } from 'react';
import InteractiveMap from '../../components/map/InteractiveMap';
import axios from 'axios';
import FixedMap from '../../components/map/FixedMap';

const Map = () => {
    const imageBounds = [
        [71.2831, -172.6875],
        [165.65, -81.637]
    ];

    const [showMap, setShowMap] = useState(false);

    const toggleMap = () => {
        setShowMap(true);
    }

    const species = [
        {
            id: 1,
            name: 'Planta 1',
            scientificName: 'Plantus planta',
            position: [0, 38],
        },
        {
            id: 2,
            name: 'Planta 2',
            scientificName: 'Plantus planta',
            position: [15, 38],
        },
        {
            id: 3,
            name: 'Planta 3',
            scientificName: 'Plantus planta',
            position: [32, 38],
        },
        {
            id: 4,
            name: 'Planta 4',
            scientificName: 'Plantus planta',
            position: [49, 38],
        },
        {
            id: 5,
            name: 'Planta 5',
            scientificName: 'Plantus planta',
            position: [0, 0],
        },
        {
            id: 6,
            name: 'Planta 6',
            scientificName: 'Plantus planta',
            position: [15, 1],
        },
    ]

    const [speciesData, setSpeciesData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Planta/')
            .then(response => {
                const speciesWithImage = response.data.map(species => ({
                    ...species,
                    imagens: species.imagens || '',
                }));
                setSpeciesData(speciesWithImage);
            })
            .catch(error => {
                console.error('Error fetching species data:', error);
            });
    }, []);

    return (
        <div>
            <h1 className='bg-primary-color p-4 text-white text-center text-3xl font-semibold'>Mapa</h1>
            <section className='flex flex-col py-8 px-6 mx-auto  lg:px-8 justify-center items-center'>
                <section>
                    <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-4'>Sobre o Mapa Interativo</h2>
                    <div className='flex flex-col gap-2'>
                        <p className='text-center'>Este mapa tem como o intuito te permitir conhecer o projeto Arca do Cerrado de maneira mais próxima, o utilize para explorar
                            cada uma das espécies presentes.
                        </p>
                        <p className='mb-8 text-center'>
                            Utilize o zoom e pings para analisar a Arca do Cerrado detalhadamente e obter mais informações sobre as espécies nelas.
                        </p>
                    </div>
                </section>
                <FixedMap species={species}/>
            </section>
        </div>
    );
};

export default Map