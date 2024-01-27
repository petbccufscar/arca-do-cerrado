import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Person = ({ personName, personLink, personImage, personRole }) => {
  return (
    <div className="text-center text-gray-5000">
      <a href={personLink}>
        <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover hover:opacity-85" src={personImage} alt="Person photo" />
      </a>

      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
        <a href={personLink}>{personName}</a>
      </h3>
      <p>{personRole}</p>
    </div>
  );
};

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    // Faça a solicitação para obter dados da equipe do seu backend aqui
    axios.get(`http://127.0.0.1:8000/api/Equipe`)
      .then(response => {
        setTeamData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados da equipe:', error);
      });
  }, []); // O array vazio como segundo argumento significa que este efeito só é executado uma vez, equivalente ao componentDidMount

  return (
    <div>
      <h1 className='bg-primary-color p-4 text-white text-center text-3xl font-semibold'>Quem somos</h1>
      <section>
        <div className='flex flex-col py-8 px-6 mx-auto max-w-screen-xl lg:px-8  items-center'>
          <h2 className='text-2xl font-semibold mb-8 border-b-2 border-primary-color max-w-fit px-4 text-center'>Equipe</h2>
          <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {/* Mapear e renderizar informações dos colaboradores aqui */}
            {teamData.map((person, index) => (
              <Person key={index} personName={person.nome} personLink={person.link} personImage={person.imagem} personRole={person.cargo} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
