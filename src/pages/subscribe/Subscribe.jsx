import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubscribeForm from '../../components/subscribe/form/SubscribeForm';

const Subscribe = () => {
  const navigate = useNavigate();

  const handleXButtonClick = () => navigate('/blog')

  return (
    <div className='relative flex justify-center items-center' style={{ height: '67vh' }}>
      <button className='absolute top-3.5 right-3.5  bg-transparent border-transparent text-neutral-500 text-lg cursor-pointer hover:text-neutral-500' onClick={handleXButtonClick}>
        X
      </button>
      <section className='flex flex-col items-center justify-center'>
        <h1 className='bg--primary-color text-2xl font-semibold p-1em'>Inscreva-se</h1>
        <SubscribeForm />
      </section>
    </div>
  );
};

export default Subscribe;   