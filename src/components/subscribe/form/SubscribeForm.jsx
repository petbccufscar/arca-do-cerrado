import React, { useState } from 'react';
import useInscritos from '../../../hooks/useInscritos';

const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');

    const { success, error, isLoading: submitting, createInscrito, deleteInscrito } = useInscritos();

    // Função handleSubscribe corrigida para chamar createInscrito corretamente
    const handleSubscribe = async (e) => {
        e.preventDefault();
        await createInscrito({ nome, email });
    };

    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-lg">
                <form onSubmit={handleSubscribe} className="space-y-8 flex flex-col items-center">
                    <div>
                        <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Nome"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Seu email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="name@arcadocerrado.com"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-primary-color focus:ring-4 focus:outline-none focus:ring-primary-300 ${submitting && 'opacity-50 cursor-not-allowed'}`}
                        disabled={submitting}
                    >
                        {submitting ? 'Enviando...' : 'Se inscrever'}
                    </button>
                    {success && <p className="text-green-600">{success}</p>}
                    {error && <p className="text-red-600">{error}</p>}
                    <p className="text-sm text-gray-700 mt-2">Caso queira cancelar sua inscrição, <button type="button" className="p-0 text-gray-700 hover:text-blue-500" onClick={deleteInscrito}> clique aqui</button>.</p>
                </form>
            </div>
        </section>
    );
};

export default SubscribeForm;
