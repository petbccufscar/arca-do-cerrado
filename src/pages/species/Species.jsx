import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SpecieCard from '../../components/species/specieCard/SpecieCard';

const Species = () => {
    const [speciesData, setSpeciesData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Planta/')
            .then(response => {
                const speciesWithImage = response.data.map(species => ({
                    ...species,
                    imagens: species.imagens || '',
                }));

                // Ordenar os dados pelo apelido antes de atualizar o estado
                const sortedSpeciesData = speciesWithImage.sort((a, b) => a.apelido.localeCompare(b.apelido));

                setSpeciesData(sortedSpeciesData);
            })
            .catch(error => {
                console.error('Error fetching species data:', error);
            });
    }, []);

    return (
        <div className='flex flex-col min-h-screen w-full'>
            <h1 className='bg-primary-color p-4 text-white text-center text-xl sm:text-3xl font-semibold w-full'>Espécies</h1>
            <section className='flex flex-col lg:flex-row py-8 px-6 max-w-screen-xl lg:px-8 gap-8'>
                <div className='w-1/8 pr-8'> 
                    <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-2'>Lista de Plantas</h2>
                    <ul>
                        {speciesData.map((specie, index) => (
                            <li key={index}>
                                <a to={`/especies/${specie.id}`} className='cursor-pointer hover:underline'>
                                    {specie.apelido}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex-1'> 
                    <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-2'>Catálogo</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {speciesData.map((specie, index) => (
                            <SpecieCard key={index} specie={specie} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Species;
