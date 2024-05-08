import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Dropdown = ({ linksDrop }) => {

    const location = useLocation();

    return (
        <div className="flex flex-col absolute p-4 bg-white rounded gap-2 z-20">
            {linksDrop.map(drop => (
                <Link key={drop.path} to={drop.path} className={location.pathname === drop.path ? 'active' : ""}>
                    <li>{drop.name}</li>
                </Link>
            ))}
        </div>
    )
}

export default Dropdown
