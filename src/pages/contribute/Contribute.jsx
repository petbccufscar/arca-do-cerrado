import React from 'react'
import './Contribute.css'
import ContributeForm from '../../components/layout/form/ContributeForm'

const Contribute = () => {
    return (
        <div className='contribute'>
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
                <h2>Faça Parte</h2>
                <p>
                    Se você já conhece o fragmento de Cerrado na Ufscar - ou não…
                    Se você já tem alguma experiência com formação de mudas - ou não...
                    Este projeto é para você! Independente de conhecimento ou experiência,
                    o que vale é a motivação! Se você imagina que um mundo mais cheio de vida
                    para todos depende da melhoria das nossas relações com o entorno natural,
                    que as cidades precisam aprender a conviver melhor com a vegetação e os animais
                    e que cada um de nós pode fazer nossa parte, será bem-vindo/a a trabalhar conosco!
                </p>
                <ContributeForm/>
            </section>
        </div>

    )
}

export default Contribute