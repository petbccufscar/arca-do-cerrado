import React from 'react';
import { Link } from 'react-router-dom';
import SpecieCard from '../../components/species/specieCard/SpecieCard';
import './Species.css';

const Species = () => {
    const speciesData = [
        {
            id: 1,
            nickname: 'Planta 1',
            scientificName: 'Nome científico 1',
            summary: 'Resumo da planta 1...',
        },
        {
            id: 2,
            nickname: 'Planta 2',
            scientificName: 'Nome científico 2',
            summary: 'Resumo da planta 2...',
        },
        {
            id: 3,
            nickname: 'Planta 1',
            scientificName: 'Nome científico 1',
            summary: 'Resumo da planta 1...',
        },
        {
            id: 4,
            nickname: 'Planta 2',
            scientificName: 'Nome científico 2',
            summary: 'Resumo da planta 2...',
        },
        {
            id: 5,
            nickname: 'Planta 1',
            scientificName: 'Nome científico 1',
            summary: 'Resumo da planta 1...',
        },
        {
            id: 6,
            nickname: 'Planta 2',
            scientificName: 'Nome científico 2',
            summary: 'Resumo da planta 2...',
        },
    ];

    const sortedPlantNames = speciesData.map(species => species.nickname).sort((a, b) => a.localeCompare(b));

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
                        {sortedPlantNames.map((plantName, index) => (
                            <li key={index}>
                                <Link to={`/plantas/${speciesData.find(species => species.nickname === plantName).id}`}>
                                    {plantName}
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
