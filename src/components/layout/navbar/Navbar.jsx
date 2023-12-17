import React, { useEffect, useState } from 'react'

import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaMagnifyingGlass, FaBars, FaQuestion, FaHouse, FaMapLocationDot, FaBloggerB, FaSeedling, FaCalendarDays, FaHandshakeSimple, FaCaretDown } from 'react-icons/fa6'
import Sidebar from './sidebar/Sidebar'
import Dropdown from './dropdown/Dropdown'


const Navbar = () => {
    const [search, setSearch] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    useEffect(() => {
        const checkWindowSize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };

        checkWindowSize();

        const resizeListener = window.addEventListener('resize', checkWindowSize);

        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);


    const handleSearch = () => {
        setSearch(!search);
    }

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };


    const links = [
        {
            name: 'Início',
            path: '/home',
            icon: <FaHouse/>,
        },
        {
            name: 'Sobre',
            path: '/sobre',
            icon: <FaQuestion/>,
            drop: [
                { name: "Apresentação do site", path: "/sobre/section-0" },
                { name: "Descrição da área", path: "/sobre/section-1" },
                { name: "Histórico", path: "/sobre/section-2" },
                { name: "Atividades", path: "/sobre/section-3" },
                { name: "Expectativas", path: "/sobre/section-4" },
                { name: "Participantes", path: "/sobre/section-5" },
                { name: "Contatos", path: "/sobre/section-6" },
              ],
        },
        {
            name: 'Mapa',
            path: '/map',
            icon: <FaMapLocationDot/>
        },
        {
            name: 'Blog',
            path: '/blog',
            icon:<FaBloggerB/>,
            drop: [
                { name: "Informações extras", path: "/blog/info-extras" },
                { name: "Notícias", path: "/blog/noticias" },
              ],
            
        },
        {
            name: 'Espécies',
            path: '/especies',
            icon: <FaSeedling/>
        },
        {
            name: 'Agenda',
            path: '/agenda',
            icon: <FaCalendarDays/>
        },
        {
            name: 'Faça Parte',
            path: '/faca-parte',
            icon: <FaHandshakeSimple/>
        }
    ]

    const location = useLocation();

    const navigate = useNavigate();
	const redirectToHome= () => navigate(`/home`);

    return (
        <div className='navbar'>
            {isMobile ? (
                <div className='menu'>
                    {!isOpen && (
                        <FaBars onClick={handleToggle}/>
                    )}
                    {isOpen && (
                        <Sidebar links={links} handleToggle={handleToggle} isOpen={isOpen} />
                    )}
                    <div className='logo' onClick={redirectToHome}>
                        <img src="./src/assets/logos/arca.png" alt="Logo Arca"/>
                    </div>
                    <div className='search'>
                        {search && (
                            <div>
                                <input type="text" name='search' placeholder='Buscar...' />
                            </div>
                        )}
                        <FaMagnifyingGlass onClick={handleSearch} />
                    </div>

                </div>

            ) : (
                <div className='menu'>
                    <div className='logo' onClick={redirectToHome}>
                        <img src="./src/assets/logos/arca.png" alt="Logo Arca" />
                    </div>
                    <div className='row'>
                        <ul>
                            {links.map(link => (
                                (link.drop ? (
                                    <Link to={link.path} className={location.pathname === link.path ? 'active' : ""} key={link.path} onMouseEnter={() => setHoveredItem(link.path)} onMouseLeave={() => setHoveredItem(null)}>
                                    <li>{link.name} <FaCaretDown/></li>
                                    {hoveredItem === link.path && (
                                        <Dropdown linksDrop={link.drop}/>
                                    )}
                                </Link>
                                ): (
                                    <Link to={link.path} className={location.pathname === link.path ? 'active' : ""} key={link.path} onMouseEnter={() => setHoveredItem(link.path)} onMouseLeave={() => setHoveredItem(null)}>
                                        <li>{link.name}</li>
                                    </Link>
                                ))

                            ))}
                        </ul>
                        <div className='search'>
                            {search && (
                                <div>
                                    <input type="text" name='search' placeholder='Buscar...' />
                                </div>
                            )}
                            <FaMagnifyingGlass onClick={handleSearch} />
                        </div>
                    </div>

                </div>


            )}
        </div>
    )
}

export default Navbar



/*
            <div className='menu'>
                    <div className='logo' onClick={redirectToHome}>
                        <img src="./src/assets/logo.png" alt="Logo Arca" />
                    </div>
                    <div className='row'>
                        <ul>
                            {links.map(link => (
                                <Link
                                    to={link.path}
                                    className={location.pathname === link.path ? 'active' : ""}
                                    key={link.path}
                                    onMouseEnter={() => setHoveredItem(link.path)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <li>{link.name}</li>
                                    {hoveredItem === link.path && link.drop && (
                                        <div className="dropdown">
                                            {link.drop.map(dropItem => (
                                                <Link key={dropItem.path} to={dropItem.path}>
                                                    {dropItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </Link>
                            ))}
                        </ul>
                        <div className='search'>
                            {search && (
                                <div>
                                    <input type="text" name='search' placeholder='Buscar...' />
                                </div>
                            )}
                            <FaMagnifyingGlass onClick={handleSearch} />
                        </div>
                    </div>



import React, { useState, useEffect } from 'react';
import './App.css'; // Arquivo de estilos CSS

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768); // Defina o tamanho máximo para o menu hamburguer
    };

    checkWindowSize();

    const resizeListener = window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">Logo</div>
        {isMobile ? (
          <div className="hamburger-menu" onClick={handleToggle}>
            <div className={`line ${isOpen ? 'open' : ''}`}></div>
            <div className={`line ${isOpen ? 'open' : ''}`}></div>
            <div className={`line ${isOpen ? 'open' : ''}`}></div>
          </div>
        ) : (
          <nav className="menu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>
      <div className="content">
        {/* Conteúdo do site }
      </div>
    </div>
  );
}

export default App;
*/