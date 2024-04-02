import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaSeedling } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';


// Componente Header, responsável por renderizar o cabeçalho da espécie com um slider de imagens
const Header = ({ specie }) => {
    return (
        <header>
            <div className='h-[300px] w-[300px]'>
                {/* Componente Swiper para renderizar o slider de imagens */}
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {/* Mapeia as imagens da espécie e renderiza cada imagem como um slide */}
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

// Componente Specie, responsável por renderizar os detalhes de uma espécie
const Specie = () => {
    const { id } = useParams(); 
    const [isLoading, setIsLoading] = useState(true); 
    const [specie, setSpecie] = useState(null); 

    useEffect(() => {
        // Função assíncrona para buscar os dados da espécie com base no 'id'
        const fetchData = async () => {
            try {
                setIsLoading(true); 
                const response = await axios.get(`http://127.0.0.1:8000/api/Planta/${id}`); 
                setSpecie(response.data); 
            } catch (error) {
                console.error('Error fetching species data:', error); 
            } finally {
                setIsLoading(false); // Define isLoading como false após o carregamento ser concluído
            }
        };

        fetchData(); // Chama a função fetchData ao montar o componente ou sempre que 'id' mudar
    }, [id]);

    // Renderiza uma mensagem de carregamento enquanto isLoading é true
    if (isLoading) {
        return <p>Loading...</p>;
    }

    // Renderiza os detalhes da espécie após o carregamento
    return (
        <div>
            <h1 className='bg-primary-color p-4 text-white text-center text-3xl font-semibold'>{specie.apelido}</h1>
            <main className='flex flex-col sm:flex-row py-8 px-6 mx-auto max-w-screen-xl lg:px-8 gap-8'>
                <Header specie={specie}/>
                <section>
                    <h2 className='text-2xl font-semibold'>{specie.apelido}</h2>
                    <p className='flex items-center gap-2 text-neutral-500'><FaSeedling/> {specie.nome_cientifico}</p>
                    <div className='flex flex-col py-4 gap-2 '>
                        <h3 className='text-xl'>Descrição</h3>
                        <div dangerouslySetInnerHTML={{ __html: specie.texto }} />
                    </div>
                    <a href={"/mapa"} className='cursor-pointer text-primary-color hover:underline'>Visualizar no mapa interativo</a>
                </section>
            </main>
        </div>
    );
};

export default Specie;
