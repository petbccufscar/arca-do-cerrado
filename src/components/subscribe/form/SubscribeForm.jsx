import React, { useState } from 'react';
import axios from 'axios';

import sendEmail from '../email/EmailJS.jsx';
import AvisoInscricao from '../email/folder/avisoInscricao.jsx';
import ConfirmaInscricao from '../email/folder/confirmaInscricao.jsx';

const SubscribeForm = () => {
	const [email, setEmail] = useState('');
	const [nome, setNome] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(null);

	const handleSubscribe = async (e) => {
		e.preventDefault();

		try {
			setSubmitting(true);

			const response = await axios.post('http://127.0.0.1:8000/api/Inscrito/', {
				nome,
				email,
			});

			// Lógica para tratar a resposta (redirecionar, exibir mensagem, etc.)
			if (response.status >= 200 && response.status < 300) {

				sendEmail({
					to_email: 'joao.moraes@estudante.ufscar.br',
					subject: 'Novo inscrito no blog!',
					message: AvisoInscricao({ name: nome }),
				  }, 'template_eyao4vt')
				  // Email de notificação para o usuário
				  sendEmail({
					to_email: email,
					subject: 'Obrigado por se inscrever',
					message: ConfirmaInscricao({ name: nome }),
				  }, 'template_eyao4vt')

				setSuccess('Obrigado por se inscrever!');

				const successTimer = setTimeout(() => {
					setSuccess(false);
				}, 2000);

				return () => clearTimeout(successTimer);
			} else {
				setError('Erro ao processar a inscrição. Por favor, tente novamente.');

				const errorTimer = setTimeout(() => {
					setError(false);
				}, 2000);

				return () => clearTimeout(errorTimer);
			}
		} catch (error) {
			// Lógica para lidar com erros
			setError('Erro ao processar a inscrição. Por favor, tente novamente.');
			const errorTimer = setTimeout(() => {
				setError(false);
			}, 2000);

			return () => clearTimeout(errorTimer);
		} finally {
			setSubmitting(false);
		}
	};

	const handleCancelSubscription = async () => {
		// Lógica para exibir o popup de cancelamento
		const email = window.prompt('Por favor, insira seu e-mail para cancelar a inscrição:');

		try {
			// Fazer uma chamada para o backend para verificar se o email está na lista de inscritos
			const response = await axios.get(`http://127.0.0.1:8000/api/Inscrito?email=${email}`);

			if (response.status === 200 && response.data.length > 0) {
				// Se o email estiver na lista de inscritos, faça uma chamada para o backend para remover o inscrito
				const inscritoId = response.data[0].id; // Supondo que o ID do inscrito seja retornado pelo backend
				await axios.delete(`http://127.0.0.1:8000/api/Inscrito/${inscritoId}`);
				// Exibir uma mensagem de sucesso
				alert('Inscrição cancelada com sucesso!');
			} else {
				// Se o email não estiver na lista de inscritos, exibir uma mensagem de email não encontrado
				alert('Email não encontrado na lista de inscritos.');
			}
		} catch (error) {
			// Se ocorrer algum erro na chamada para o backend, exibir uma mensagem de erro
			console.error('Erro ao verificar a inscrição:', error);
			alert('Ocorreu um erro ao verificar a inscrição. Por favor, tente novamente mais tarde.');
		}
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
						className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-primary-color focus:ring-4 focus:outline-none focus:ring-primary-300"
						disabled={submitting}
					>
						{submitting ? 'Enviando...' : 'Se inscrever'}
					</button>
					{success && <p className="text-green-600">Inscrição realizada com sucesso!</p>}
					{error && <p className="text-red-600">{error}</p>}
					<p className="text-sm text-gray-700 mt-2">Caso queira cancelar sua inscrição, <a href="#" className="text-blue-500" onClick={handleCancelSubscription}>clique aqui</a>.</p>
				</form>
			</div>
		</section>
	);
};

export default SubscribeForm;
