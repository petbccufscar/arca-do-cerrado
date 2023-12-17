import React from 'react'
import './FacaParte.css'

import { FaRegCalendar, FaEarthAmericas, FaPagelines } from 'react-icons/fa6'


const FacaParte = () => {
    return (
        <div className='facaParte'>
            <section className='main'>
                <h1>Ajude a Arca</h1>
                <h2>Participe do projeto!</h2>
                <p><a href="https://www.freepik.com/author/jcomp">Image by jcomp</a> on Freepik</p>
            </section>
            <section className='content'>
                <h2>Sua vez de participar!</h2>
                <p>
                    Agora é sua vez de participar, depois de entender tudo sobre esse projeto incrível do professor Maurício, contamos com a sua ajuda para que o mesmo consiga continuar sua missão de preservação destas belas espécies tão belas e importantes para nossa biodiversidade do país. Confira abaixo a aba onde pode se cadastrar e ajudar-nos a continuar.
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
                        <label htmlFor="mensagem">Mensagem</label>
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

export default FacaParte