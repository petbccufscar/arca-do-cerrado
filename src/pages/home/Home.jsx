import React from 'react'
import PageCard from '../../components/home/pageCard/PageCard'

import { FaRegCalendar, FaEarthAmericas, FaPagelines } from 'react-icons/fa6'
import ContributeForm from '../../components/layout/form/ContributeForm'


const Home = () => {
    return (
        <div className='home'>
            <header className='relative mb-8'>
                <img src="../src/assets/carousel/planta1.jpeg"
                    className='w-full h-1/4 max-h-[300px] object-cover filter brightness-75'
                    alt="Imagem Principal" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                    <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">A Arca do Cerrado</h1>
                    <p className='text-sm sm:text-xl'>Uma visita pelo cerrado!</p>
                </div>
            </header>

            <main>
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="space-y-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <PageCard icon={<FaRegCalendar />} name={"Agenda"} desc={"Visualize os próximos compromissos marcados para visitar o pomar."} path={"/agenda"} />
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
                </section>
                <ContributeForm />
            </article>
        </div>
    )
}

export default Home