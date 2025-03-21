import React, { useState } from 'react';

import useMensagens from '../../../hooks/useMensagens.js';

const ContributeForm = () => {
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [erro, setErro] = useState(null);
    const { mensagens, error, isLoading, createMensagem } = useMensagens();

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

        try {
            if (!email || !assunto || !mensagem) {
                throw new Error('Por favor, preencha todos os campos.');
            }

            await createMensagem({email, assunto, mensagem});

            setShowPopup(true);
            setEmail('');
            setAssunto('');
            setMensagem('');
            setErro(null);
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            setErro(error.message);
        }
    };

    return (
        <section>
            <div className="px-4 mx-auto max-w-screen-lg">
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
                            required
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
            {erro && (
                <div className="text-red-500 text-center mt-2">{erro}</div>
            )}
        </section>
    );
}

export default ContributeForm;
