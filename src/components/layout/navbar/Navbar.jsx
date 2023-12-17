import React from 'react'

import './Navbar.css'

const Navbar = () => {

    const links = [
        {
            name: 'Início',
            path: '/home',
        }
    ]

    return (
        <div className='navbar'>
            <h2>Navbar</h2>
        </div>
    )
}

export default Navbar