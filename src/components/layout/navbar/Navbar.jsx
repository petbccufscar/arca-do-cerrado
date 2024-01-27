import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaMagnifyingGlass,
  FaBars,
  FaQuestion,
  FaHouse,
  FaMapLocationDot,
  FaBloggerB,
  FaSeedling,
  FaCalendarDays,
  FaHandshakeSimple,
  FaCaretDown,
  FaUsers,
} from 'react-icons/fa6';
import Sidebar from './sidebar/Sidebar';
import Dropdown from './dropdown/Dropdown';

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mostrarAgenda, setMostrarAgenda] = useState(true);

  useEffect(() => {
    // Faça uma solicitação para obter a configuração do backend
    axios
      .get('http://localhost:8000/api/Configuracao/4')
      .then((response) => {
        setMostrarAgenda(response.data.mostrar_agenda);
      })
      .catch((error) => {
        console.error('Erro ao buscar configuração:', error);
      });
  }, []);

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
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: 'Início',
      path: '/home',
      icon: <FaHouse />,
    },
    {
      name: 'Sobre',
      path: '/sobre',
      icon: <FaQuestion />,
      drop: [
        { name: 'Apresentação do site', path: '/sobre/#1' },
        { name: 'Descrição da área', path: '/sobre/#2' },
        { name: 'Histórico', path: '/sobre/#3' },
        { name: 'Atividades', path: '/sobre/#4' },
        { name: 'Expectativas', path: '/sobre/#5' },
        { name: 'Participantes', path: '/sobre/#6' },
      ],
    },
    {
      name: 'Mapa',
      path: '/mapa',
      icon: <FaMapLocationDot />,
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <FaBloggerB />,
    },
    {
      name: 'Espécies',
      path: '/especies',
      icon: <FaSeedling />,
    },
    {
      name: 'Agenda',
      path: '/agenda',
      icon: <FaCalendarDays />,
    },
    {
      name: 'Faça Parte',
      path: '/facaparte',
      icon: <FaHandshakeSimple />,
    },
    {
      name: 'Quem somos',
      path: '/equipe',
      icon: <FaUsers />,
    },
  ];

  const location = useLocation();

  const navigate = useNavigate();
  const redirectToHome = () => navigate(`/home`);

  return (
    <div className="navbar">
      {isMobile ? (
        <div className="menu">
          {!isOpen && <FaBars onClick={handleToggle} />}
          {isOpen && <Sidebar links={links} handleToggle={handleToggle} isOpen={isOpen} />}
          <div className="logo" onClick={redirectToHome}>
            <img src="../src/assets/logos/arca.png" alt="Logo Arca" />
          </div>
          <div className="search">
            {search && (
              <div>
                <input type="text" name="search" placeholder="Buscar..." />
              </div>
            )}
            <FaMagnifyingGlass onClick={handleSearch} />
          </div>
        </div>
      ) : (
        <div className="menu">
          <div className="logo" onClick={redirectToHome}>
            <img src="../src/assets/logos/arca.png" alt="Logo Arca" />
          </div>
          <div className="row">
            <ul>
              {links.map(
                (link) =>
                  (link.name === 'Agenda' && !mostrarAgenda) ? null : link.drop ? (
                    <Link
                      to={link.path}
                      className={location.pathname === link.path ? 'active' : ''}
                      key={link.path}
                      onMouseEnter={() => setHoveredItem(link.path)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <li>
                        {link.name} <FaCaretDown />
                      </li>
                      {hoveredItem === link.path && <Dropdown linksDrop={link.drop} />}
                    </Link>
                  ) : (
                    <Link
                      to={link.path}
                      className={location.pathname === link.path ? 'active' : ''}
                      key={link.path}
                      onMouseEnter={() => setHoveredItem(link.path)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <li>{link.name}</li>
                    </Link>
                  )
              )}
            </ul>
            <div className="search">
              {search && (
                <div>
                  <input type="text" name="search" placeholder="Buscar..." />
                </div>
              )}
              <FaMagnifyingGlass onClick={handleSearch} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
