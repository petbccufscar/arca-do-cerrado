import React from 'react'
import './Dropdown.css'
import { Link, useLocation } from 'react-router-dom'

const Dropdown = ({ linksDrop }) => {

    const location = useLocation();

    return (
        <div className="dropdown">
            {linksDrop.map(drop => (
                <Link key={drop.path} to={drop.path} className={location.pathname === drop.path ? 'active' : ""}>
                    <li>{drop.name}</li>
                </Link>
            ))}
        </div>
    )
}

export default Dropdown
