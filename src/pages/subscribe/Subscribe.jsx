import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubscribeForm from '../../components/subscribe/form/SubscribeForm';

const Subscribe = () => {
	const navigate = useNavigate();

	// Redireciona para o blog ao clicar no X
	const handleXButtonClick = () => navigate('/blog')

	return (
		<div className='relative flex justify-center items-center' style={{ height: '67vh' }}>
			<button className='absolute top-3.5 right-3.5  bg-transparent border-transparent text-black text-lg cursor-pointer hover:text-neutral-500' onClick={handleXButtonClick}>
				X
			</button>
			<section className='flex flex-col items-center justify-center'>
				<h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit px-2'>Inscreva-se</h2>
				<SubscribeForm />
			</section>
		</div>
	);
};

export default Subscribe;   