import React from 'react'
import './Home.css'
import PageCard from '../../components/home/pageCard/PageCard'

import { FaRegCalendar, FaEarthAmericas, FaPagelines } from 'react-icons/fa6'


const Home = () => {
    return (
        <div className='home'>
            <section className='main'>
                <h1>A Arca do Cerrado</h1>
                <p>Uma visita pelo cerrado!</p>
            </section>
            <section className='pages'>
                <PageCard icon={<FaRegCalendar />} name={"Agenda"} desc={"Visualize os próximos compromissos marcados para visitar o pomar."} path={"/agenda"} />
                <PageCard icon={<FaEarthAmericas />} name={"Mapa"} desc={"Visualize as espécies plantadas no cerrado de São Carlos através do mapa interativo."} path={"/mapa"} />
                <PageCard icon={<FaPagelines />} name={"Especies"} desc={"Visualize as informações das espécies do mapa interativo."} path={"/especies"} />
            </section>
            <section className='content'>
                <h2>Sobre o Pomar</h2>
                <p>
                    Se você já conhece o fragmento de Cerrado na Ufscar - ou não…
                    Se você já tem alguma experiência com formação de mudas - ou não...
                    entender a conviver melhor com a vegetação e os animais e que cada um de nós
                    pode fazer nossa parte, será bem-vindo/a a trabalhar conosco!
                </p>
            </section>
            <section className='content'>
                <h2>Faça sua Parte</h2>
                <p>
                    Se você já conhece o fragmento de Cerrado na Ufscar - ou não…
                    Se você já tem alguma experiência com formação de mudas - ou não...
                    Este projeto é para você! Independente de conhecimento ou experiência,
                    o que vale é a motivação! Se você imagina que um mundo mais cheio de vida
                    para todos depende da melhoria das nossas relações com o entorno natural,
                    que as cidades precisam aprender a conviver melhor com a vegetação e os animais
                    e que cada um de nós pode fazer nossa parte, será bem-vindo/a a trabalhar conosco!
                </p>
                <div className='form'>
                    <div className='inputs'>
                        <input type="text" placeholder='Nome' />
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className='textarea'>
                        <label for="mensagem">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" rows="4" cols="50">
                        </textarea>
                    </div>
                </div>
                <button>
                    Enviar mensagem
                </button>
            </section>
        </div>

    )
}

export default Home