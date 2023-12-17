import React from 'react';
import './especieCard.css'

const Cards = ({ nickname, scientificName, summary, image }) => {
  return (
    <div className="species-card">
      <img src={image} alt="Planta" className="species-image" />
      <div className="species-details">
        <h2>{nickname}</h2>
        <h4>Nome Científico: {scientificName}</h4>
        <p>{summary}</p>
      </div>
      <button href="/pagina-alvo" className="redirect-button">Ler Mais</button>
    </div>
  );
};

export default Cards;