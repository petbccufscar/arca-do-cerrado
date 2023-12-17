import React from 'react'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Specie.css'

import { FaSeedling } from 'react-icons/fa6'

const Specie = () => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [specie, setSpecie] = useState(null);

    const speciesData = [
        {
            id: 1,
            nickname: 'Planta 1',
            scientificName: 'Nome científico 1',
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores, hic doloribus vero et nisi rem, labore atque tenetur similique quaerat magnam aliquam illum, repudiandae provident ipsa ipsum? Magnam, illum.",
            image: '../src/assets/especies/arvores.jpeg',
        },
        {
            id: 2,
            nickname: 'Planta 2',
            scientificName: 'Nome científico 2',
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores, hic doloribus vero et nisi rem, labore atque tenetur similique quaerat magnam aliquam illum, repudiandae provident ipsa ipsum? Magnam, illum.",
            image: 'url_da_imagem_2',
        },
        {
            id: 3,
            nickname: 'Planta 1',
            scientificName: 'Nome científico 1',
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores, hic doloribus vero et nisi rem, labore atque tenetur similique quaerat magnam aliquam illum, repudiandae provident ipsa ipsum? Magnam, illum.",
            image: '../src/assets/especies/arvores.jpeg',
        },
        {
            id: 4,
            nickname: 'Planta 2',
            scientificName: 'Nome científico 2',
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores, hic doloribus vero et nisi rem, labore atque tenetur similique quaerat magnam aliquam illum, repudiandae provident ipsa ipsum? Magnam, illum.",
            image: 'url_da_imagem_2',
        },
        {
            id: 5,
            nickname: 'Planta 1',
            scientificName: 'Nome científico 1',
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores, hic doloribus vero et nisi rem, labore atque tenetur similique quaerat magnam aliquam illum, repudiandae provident ipsa ipsum? Magnam, illum.",
            image: '../src/assets/especies/arvores.jpeg',
        },
        {
            id: 6,
            nickname: 'Planta 2',
            scientificName: 'Nome científico 2',
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores, hic doloribus vero et nisi rem, labore atque tenetur similique quaerat magnam aliquam illum, repudiandae provident ipsa ipsum? Magnam, illum.",
            image: 'url_da_imagem_2',
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));

                const foundSpecie = speciesData.find(item => item.id === parseInt(id, 10));

                if (foundSpecie) {
                    setSpecie(foundSpecie);
                } else {
                    console.error(`Species with ID ${id} not found.`);
                }
            } catch (error) {
                console.error('Error fetching species data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id, speciesData]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='specie'>
            <section className='main'>
                <section className='header'>
                    <h2>{specie.nickname}</h2>
                    <p><FaSeedling /> {specie.scientificName}</p>
                </section>
                <section className='content'>
                    <img src={`../src/assets/species/${specie.id}.png`} alt={`Specie ${specie.id}`} />
                    <div className='text'>
                        <h3>Description</h3>
                        <p>{specie.summary}</p>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Specie