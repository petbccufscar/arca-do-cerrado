import React from 'react'

const ContributeForm = () => {
    return (
        <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
                <h2 className="tracking-tight text-center text-4xl mb-4 text-neutral-700">Faça Parte</h2>
                <p className="mb-8 lg:mb-16 text-center text-gray-500"> 
                    Este projeto é para você! Independente de conhecimento ou experiência,
                    o que vale é a motivação! Se você imagina que um mundo mais cheio de vida
                    para todos depende da melhoria das nossas relações com o entorno natural,
                    que as cidades precisam aprender a conviver melhor com a vegetação e os animais
                    e que cada um de nós pode fazer nossa parte, será bem-vindo/a a trabalhar conosco!
                </p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Seu email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@arcadocerrado.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Assunto</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Assunto da mensagem" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Sua mensagem</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Escreva sua mensagem..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-primary-color focus:ring-4 focus:outline-none focus:ring-primary-300">Enviar mensagem</button>
                </form>
            </div>
        </section>

    )
}

export default ContributeForm