import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaSeedling } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';


const Header = ({ specie }) => {
    return (
        <header>
            <div className='h-[300px] w-[300px]'>
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {specie.imagens.map((imagem, index) => (
                        <SwiperSlide key={index}>
                            <img src={imagem.imagem} alt="slide-item" className='h-[300px] w-[300px] object-cover' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </header>
    )
}

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
        <div>
            <h1 className='bg-primary-color p-4 text-white text-center text-3xl font-semibold'>{specie.apelido}</h1>
            <main className='flex flex-col sm:flex-row py-8 px-6 mx-auto max-w-screen-xl lg:px-8 gap-8'>
                <Header specie={specie}/>
                <section>
                    <h2 className='text-2xl font-semibold'>{specie.apelido}</h2>
                    <p className='flex items-center gap-2 text-neutral-500'><FaSeedling/> {specie.nome_cientifico}</p>
                    <div className='flex flex-col mt-4 gap-2'>
                        <h3 className='text-xl'>Descrição</h3>
                        <p>{specie.texto}</p>
                    </div>

                </section>
            </main>
        </div>
    );
};

export default Specie;
