import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usePlantas from '../../../hooks/usePlantas';
import { FaSeedling } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from '../../../components/layout/loading/';

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
    const { plantas, isLoading: plantasLoading, error } = usePlantas();
    const [planta, setPlanta] = useState(null);

    useEffect(() => {
        if (plantas) {
            const plantaEncontrada = plantas.find(planta => planta.id.toString() === id.toString());
            if (plantaEncontrada) {
                setPlanta(plantaEncontrada);
            } else {
                console.warn(`Planta com id ${id} não encontrada.`);
            }
        }
    }, [plantas, id]);

    if (plantasLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Erro ao carregar as plantas: {error.message}</div>;
    }

    if (!planta) {
        return <div>Planta não encontrada ou ainda carregando...</div>;
    }

    return (
        <div>
            <h1 className='bg-primary-color p-4 text-white text-center text-3xl font-semibold'>{planta.apelido}</h1>
            <main className='flex flex-col sm:flex-row py-8 px-6 mx-auto max-w-screen-xl lg:px-8 gap-12'>
                <div className='flex flex-col gap-4'>
                    <a href={`/mapa/${planta.id}`} className='cursor-pointer text-primary-color hover:underline'>Visualizar no mapa interativo</a>
                    <Header specie={planta} />
                </div>
                <section>
                    <h2 className='text-2xl font-semibold'>{planta.apelido}</h2>
                    <p className='flex items-center gap-2 text-neutral-500'><FaSeedling /> {planta.nome_cientifico}</p>
                    <div className='flex flex-col py-4 gap-2 '>
                        <h3 className='text-xl'>Descrição</h3>
                        <div dangerouslySetInnerHTML={{ __html: planta.texto }} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Specie;
