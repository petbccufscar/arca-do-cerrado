import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PageCard.css'

const PageCard = ({icon, name, desc, path}) => {

    const navigate = useNavigate();
	const redirectToPage= () => navigate(`${path}`);


    return (
        <div className='page-card'>
            {icon}
            <h3>{name}</h3>
            <p>{desc}</p>
            <button onClick={redirectToPage}>
                Acesse a {name.toLowerCase()}
            </button>
        </div>
    )
}

export default PageCard