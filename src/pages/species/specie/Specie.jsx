import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Specie.css';
import { FaSeedling } from 'react-icons/fa6';

const Specie = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [specie, setSpecie] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://127.0.0.1:8000/api/Planta/${id}`);
                setSpecie(response.data);
            } catch (error) {
                console.error('Error fetching species data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='specie'>
            <section className='main'>
                <section className='header'>
                    <h2>{specie.apelido}</h2>
                    <p><FaSeedling /> {specie.nome_cientifico}</p>
                    <p>{specie.resumo}</p>
                </section>
                <section className='content'>
                    <Slider>
                        {specie.imagens.map((imagem, index) => (
                            <div key={index}>
                                <img src={imagem} alt={`Imagem ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                    <div className='text'>
                        <h3>Description</h3>
                        <p>{specie.texto}</p>
                    </div>
                </section>
                <section className='Footer'>
                    <div className='link-at-the-end'>
                        <p>
                            <strong>Informações adicionais:</strong>{' '}
                            <a href={specie.link} target='_blank' rel='noopener noreferrer'> Mais informações</a>
                        </p>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Specie;
