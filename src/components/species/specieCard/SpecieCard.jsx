import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SpecieCard.css';
import { FaSeedling } from 'react-icons/fa6';

const SpecieCard = ({ specie }) => {
    const navigate = useNavigate();
    const redirectToSpeciePage = () => navigate(`/species/${specie.id}`);

    // Verifica se há imagens e obtém apenas a primeira, se existir
    const firstImage = specie.imagens.length > 0 ? specie.imagens[0].imagem : null;

    return (
        <div className="specie-card">
            {firstImage && <img src={firstImage} alt={specie.apelido} />}
            <div className="specie-details">
                <h3>{specie.apelido}</h3>
                <h4><FaSeedling /> {specie.nome_cientifico}</h4>
                <p>{specie.resumo}</p>
            </div>
            <button onClick={redirectToSpeciePage}>Ler Mais</button>
        </div>
    );

};

export default SpecieCard;
