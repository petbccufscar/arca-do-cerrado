import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { sections } from './Content';

import Imagem1 from '../../assets/about/Foto1.jpg';
import Imagem2 from '../../assets/about/Foto2.jpg';
import Imagem4 from '../../assets/about/Foto4.jpg';
import Imagem6 from '../../assets/about/Foto6.jpg';

const About = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.slice(1);
            const targetElement = document.getElementById(sectionId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.hash]);

    const fixedImages = [Imagem1, Imagem2, Imagem4, Imagem6];

    return (
        <div>
            <h1 className='bg-primary-color p-4 text-white text-center text-xl sm:text-3xl font-semibold'>Sobre</h1>
            <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation style={{ zIndex: 0 }}>
                {fixedImages.map((imageUrl, index) => (
                    <SwiperSlide key={`slide-${index}`}>
                        <img src={imageUrl} alt={`slide-${index}`} className='w-full h-[300px] object-cover filter brightness-75' />
                    </SwiperSlide>
                ))}
            </Swiper>
            <section>
                {sections.map(section => (
                    <section key={section.id} id={section.id}>
                        <div className='flex flex-col py-8 px-6 mx-auto max-w-screen-xl lg:px-8'>
                            <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-4'>{section.title}</h2>
                            {section.content.map((content, index) => (
                                <div key={`${section.id}-${index}`} className="text-justify">{content}</div>
                            ))}
                        </div>
                    </section>
                ))}
            </section>
        </div>
    );
};

export default About;
