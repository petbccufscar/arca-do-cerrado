import React from 'react';

const SubscribeForm = () => {
  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
        <form action="#" className="space-y-8 flex flex-col items-center">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Seu email</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@arcadocerrado.com"
              required
            />
          </div>
          <div>
            <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
            <input
              type="text"
              id="nome"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Nome"
              required
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-primary-color focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Se inscrever
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeForm;   
