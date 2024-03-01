import React, { useState } from 'react';
import axios from 'axios';

import sendEmail from '../../subscribe/email/EmailJS.jsx'
import AvisoMensagem from '../../subscribe/email/folder/avisoMensagem.jsx'

const ContributeForm = () => {
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleAssuntoChange = (event) => {
        setAssunto(event.target.value);
    };

    const handleMensagemChange = (event) => {
        setMensagem(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Enviar e-mail
        sendEmail({
            to_email: 'joao.moraes@estudante.ufscar.br',
            subject: assunto,
            message: AvisoMensagem({email: email, mensagem: mensagem}),
        }, 'template_eyao4vt');

        // Salvar mensagem no backend
        try {
            await axios.post('http://127.0.0.1:8000/api/Mensagem/', {
                assunto: assunto, 
                email: email,
                mensagem: mensagem
            });
            setShowPopup(true); // Exibir o popup de confirmação após o envio bem-sucedido
            setEmail('');
            setAssunto('');
            setMensagem('');
        } catch (error) {
            console.error('Erro ao salvar a mensagem no backend:', error);
        }
    };

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
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Seu email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="name@arcadocerrado.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Assunto</label>
                        <input
                            type="text"
                            id="subject"
                            value={assunto}
                            onChange={handleAssuntoChange}
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Assunto da mensagem"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Sua mensagem</label>
                        <textarea
                            id="message"
                            value={mensagem}
                            onChange={handleMensagemChange}
                            rows="6"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Escreva sua mensagem..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-primary-color focus:ring-4 focus:outline-none focus:ring-primary-300"
                    >
                        Enviar mensagem
                    </button>
                </form>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-lg text-center text-gray-900">Formulário enviado com sucesso!</p>
                        <button
                            className="mt-4 py-2 px-4 bg-primary-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                            onClick={() => setShowPopup(false)}
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ContributeForm;
