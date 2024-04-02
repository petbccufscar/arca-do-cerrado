import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Mapa from '../../components/map/index'

import { useParams } from 'react-router-dom';

import ImagemMapa from '../../assets/map/map.png'

const Map = () => {
    const { id } = useParams();
    const [showMap, setShowMap] = useState(false);

    const toggleMap = () => {
        setShowMap(true);
    }

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
            <section className='flex flex-col py-8 px-6 mx-auto lg:px-8 justify-center items-center'>
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
                {!showMap ? (
                    <img
                        src={ImagemMapa}
                        alt="Imagem do mapa"
                        className='w-full max-w-[800px] cursor-pointer'
                        onClick={toggleMap}
                    />
                ) : (
                    <Mapa species={speciesData} filter={id}/>
                )}
            </section>
        </div>
    );
};

export default Map