import React from 'react';
import PageCard from '../../components/home/pageCard/PageCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { FaEarthAmericas, FaPagelines, FaNewspaper } from 'react-icons/fa6';
import ContributeForm from '../../components/layout/form/ContributeForm';

import ImagemVisita from '../../assets/home/visita.jpg';
import Imagem1 from '../../assets/home/Foto1.jpg';
import Imagem2 from '../../assets/home/Foto2.jpg';
import Imagem3 from '../../assets/home/Foto3.jpg';
import Imagem4 from '../../assets/home/Foto4.jpg';
import Imagem5 from '../../assets/home/Foto5.jpg';
import Imagem6 from '../../assets/home/Foto6.jpg';
import Imagem7 from '../../assets/home/Foto7.jpg';

const Home = () => {
    
    {/*Imagens para o carrossel*/}
    const fixedImages = [
        Imagem1, Imagem2, Imagem3, Imagem4, Imagem5, Imagem6, Imagem7
    ];

    return (
        <div className='home'>
            <header className='relative mb-8'>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                    <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">A Arca do Cerrado</h1>
                    <p className='text-sm sm:text-xl'>Uma visita pelo cerrado!</p>
                </div>
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {fixedImages.map((imageUrl, index) => (
                        <SwiperSlide key={index}>
                            <img src={imageUrl} alt={`slide-${index}`} className='w-full h-[300px] object-cover filter brightness-75' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </header>

            <main>
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="space-y-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <PageCard icon={<FaNewspaper />} name={"Blog"} desc={"Acompanhe as últimas noticias sobre o Cerrado através do nosso blog."} path={"/blog"} />
                        <PageCard icon={<FaEarthAmericas />} name={"Mapa"} desc={"Visualize as espécies plantadas no cerrado de São Carlos através do mapa interativo."} path={"/mapa"} />
                        <PageCard icon={<FaPagelines />} name={"Especies"} desc={"Visualize as informações das espécies do mapa interativo."} path={"/especies"} />
                    </div>
                </div>
            </main>

            <article className='flex flex-col py-8 px-4 mx-auto max-w-screen-xl lg:px-6'>
                <section className='flex flex-col justify-center text-center items-center py-8 lg:py-16 px-4 mx-auto max-w-screen-lg'>
                    <h2 className='text-4xl mb-4 text-neutral-700'>Sobre o Pomar</h2>
                    <p className='text-center text-neutral-500'>
                        Se você já conhece o fragmento de Cerrado na Ufscar - ou não…
                        Se você já tem alguma experiência com formação de mudas - ou não...
                        entender a conviver melhor com a vegetação e os animais e que cada um de nós
                        pode fazer nossa parte, será bem-vindo/a a trabalhar conosco!
                    </p>
                    <img src={ImagemVisita} alt='IMAGEM VISITA CRIANÇAS' className="max-h-[350px] w-full object-cover rounded-lg shadow-md mt-8"/>
                </section>
            </article>
            <ContributeForm />
        </div>
    );
};

export default Home;
