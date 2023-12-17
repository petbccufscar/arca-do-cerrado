import React from 'react';
import { useNavigate } from 'react-router-dom'
import './SpecieCard.css'

import { FaSeedling } from 'react-icons/fa6'

const SpecieCard = ({ specie }) => {

	const navigate = useNavigate();
	const redirectToSpeciePage= () => navigate(`/species/${specie.id}`);

	return (
		<div className="specie-card">
			<img src={`./src/assets/species/${specie.id}.png`} alt={specie.nickname}/>
			<div className="specie-details">
				<h3>{specie.nickname}</h3>
				<h4><FaSeedling /> {specie.scientificName}</h4>
				<p>{specie.summary}</p>
			</div>
			<button onClick={redirectToSpeciePage}>Ler Mais</button>
		</div>
	);
};

export default SpecieCard;