import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSolarPanel } from 'react-icons/fa6';

const Agenda = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch upcoming activities from your backend API
    axios.get('http://127.0.0.1:8000/api/Atividade/')
      .then(response => {
        // Subtract 1 day from the current date
        const currentDate = new Date();
        const oneDayAgo = new Date(currentDate);
        oneDayAgo.setDate(currentDate.getDate() - 1);

        const upcomingActivities = response.data.filter(activity => new Date(activity.data) >= oneDayAgo);
        const sortedActivities = upcomingActivities.sort((a, b) => new Date(a.data) - new Date(b.data));
        setActivities(sortedActivities);
      })
      .catch(error => {
        console.error('Error fetching upcoming activities:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  // Separate the first activity from the rest
  const [firstActivity, ...remainingActivities] = activities;

  // Function to format date in "DD-MM-YYYY" style
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className='agenda'>
      <h1 className='bg-primary-color p-4 text-white text-center text-3xl font-semibold w-full'>Agenda</h1>
      <div className='mt-20 flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-semibold border-b-2 border-primary-color max-w-full px-2'>Próxima Atividade</h2>

        {firstActivity && (
          <div className=' rounded-md bg-primary-color mt-8 mb-8 p-5 text-center' key={firstActivity.id}>
            <h3 className='text-xl text-white font-semibold'>{firstActivity.titulo}</h3>
            <p className='text-white' dangerouslySetInnerHTML={{ __html: firstActivity.descricao.replace(/&nbsp;/g, ' ') }} />
            <p className='text-white'>Data: {formatDate(firstActivity.data)}</p>
          </div>
        )}

        <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-full px-2'>Atividades Futuras</h2>
        <ul>
          {remainingActivities.map(activity => (
            <li className='rounded-md bg-primary-color mt-8 mb-8 p-5 text-center' key={activity.id}>
              <h3 className='text-xl text-white font-semibold'>{activity.titulo}</h3>
              <p className='text-white'dangerouslySetInnerHTML={{ __html: activity.descricao.replace(/&nbsp;/g, ' ') }} />
              <p className='text-white'>Data: {formatDate(activity.data)}</p>
            </li>
          ))} 
        </ul>
      </div>
    </div>
  );
}

export default Agenda;
