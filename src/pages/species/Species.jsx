import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SpecieCard from '../../components/species/specieCard/SpecieCard';
import './Species.css';

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
        <div className="species">
            <h1>Espécies</h1>
            <section className='main'>
                <section className='content'>
                    <h2>Catálogo</h2>
                    <div className="species-cards">
                        {speciesData.map((specie, index) => (
                            <SpecieCard key={index} specie={specie} />
                        ))}
                    </div>
                </section>
                <section className='content'>
                    <h2>Lista das Plantas</h2>
                    <ul>
                        {speciesData.map((specie, index) => (
                            <li key={index}>
                                <Link to={`/species/${specie.id}`}>
                                    {specie.apelido}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </div>
    );
};

export default Species;
