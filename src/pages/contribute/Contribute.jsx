import React from 'react'
import ContributeForm from '../../components/layout/form/ContributeForm'

import Imagem1 from '../../assets/carousel/planta1.jpeg';
import ImagemCriancas from '../../assets/about/Foto1.jpg';

const Contribute = () => {
    return (
        <div className='home'>
            <header className='relative mb-8'>
                <img src={Imagem1}
                    className='w-full h-1/4 max-h-[300px] object-cover filter brightness-75'
                    alt="Imagem Principal" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                    <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">Ajude a Arca</h1>
                    <p className='text-sm sm:text-xl'>Participe do projeto!</p>
                </div>
            </header>

            <article className='flex flex-col px-4 mx-auto max-w-screen-xl lg:px-6'>
                <section className='flex flex-col justify-center text-center items-center py-8 lg:py-16 px-4 mx-auto max-w-screen-lg'>
                    <h2 className='text-4xl mb-4 text-neutral-700'>Sua vez de participar!</h2>
                    <p className='text-center text-neutral-500'>
                    Agora é sua vez de participar, depois de entender tudo sobre esse projeto incrível do 
                    professor Maurício, contamos com a sua ajuda para que o mesmo consiga continuar sua missão 
                    de preservação destas belas espécies tão belas e importantes para nossa biodiversidade do 
                    país. Confira abaixo a aba onde pode se cadastrar e ajudar-nos a continuar.
                    </p>
                    <img src={ImagemCriancas} alt='IMAGEM VISITA CRIANÇAS' className="max-h-[350px] w-full object-cover rounded-lg shadow-md mt-8"/>
                </section>
                <ContributeForm />
            </article>
        </div>

    )
}

export default Contribute