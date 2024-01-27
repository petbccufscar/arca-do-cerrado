import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Agenda = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch upcoming activities from your backend API
    axios.get('http://127.0.0.1:8000/api/Atividade/')
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching upcoming activities:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  return (
    <div className='agenda'>
      <h2>Agenda</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            <h3>{activity.titulo}</h3>
            <p>{activity.descricao}</p>
            <p>Date: {activity.data}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Agenda;
