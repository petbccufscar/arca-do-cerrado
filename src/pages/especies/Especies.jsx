import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../../components/especies/especieCard/especieCard';
import './Especies.css';
import Image1 from '../../assets/especies/as arvores.jpeg'; // Importe a imagem

const Especies = () => {
    const speciesData = [
        {
            nickname: 'Planta 1',
            scientificName: 'Nome científico 1',
            summary: 'Resumo da planta 1...',
            image: Image1,
        },
        {
            nickname: 'Planta 2',
            scientificName: 'Nome científico 2',
            summary: 'Resumo da planta 2...',
            image: 'url_da_imagem_2',
        },
        {
            nickname: 'Planta 1',
            scientificName: 'Nome científico 1',
            summary: 'Resumo da planta 1...',
            image: Image1,
        },
        {
            nickname: 'Planta 2',
            scientificName: 'Nome científico 2',
            summary: 'Resumo da planta 2...',
            image: 'url_da_imagem_2',
        },
        {
            nickname: 'Planta 1',
            scientificName: 'Nome científico 1',
            summary: 'Resumo da planta 1...',
            image: Image1,
        },
        {
            nickname: 'Planta 2',
            scientificName: 'Nome científico 2',
            summary: 'Resumo da planta 2...',
            image: 'url_da_imagem_2',
        },
    ];

    const sortedPlantNames = speciesData.map(species => species.nickname).sort((a, b) => a.localeCompare(b));

    return (
        <div className="species-page">
            <h1>Espécies</h1>
            <section className='main'>
                <section className='catalogo'>
                    <h2>Catálogo</h2>
                    <div className="species-list">
                        {speciesData.map((species, index) => (
                            <Cards
                                key={index}
                                className="card" // Adicione a classe "card" aqui
                                nickname={species.nickname}
                                scientificName={species.scientificName}
                                summary={species.summary}
                                image={species.image}
                            />
                        ))}
                    </div>
                </section>
                <section className='lista'>
                    <div className="plant-names">
                        <h2>Lista das Plantas:</h2>
                        <ul className="plant-list">
                            {sortedPlantNames.map((plantName, index) => (
                                <li key={index}>
                                    <Link to={`/plantas/${speciesData.find(species => species.nickname === plantName).id}`}>
                                        {plantName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </section>
        </div>

    );
};

export default Especies;
