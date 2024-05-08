import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaMagnifyingGlass, FaBars, FaQuestion, FaHouse, FaMapLocationDot, FaBloggerB, FaSeedling, FaCalendarDays, FaHandshakeSimple, FaCaretDown, FaUsers } from 'react-icons/fa6'
import Sidebar from './sidebar/Sidebar'
import Dropdown from './dropdown/Dropdown'
import Search from './Search'


const Navbar = ({ search, setSearch }) => {
    const [searchOn, setSearchOn] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [mostrarAgenda, setMostrarAgenda] = useState(true);

    // Busca a configuração para mostrar a agenda
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/Configuracao/4')
            .then((response) => {
                setMostrarAgenda(response.data.mostrar_agenda);
            })
            .catch((error) => {
                console.error('Erro ao buscar configuração:', error);
            });
    }, []);

    // Verifica o tamanho da janela para determinar se é móvel
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

    // Função para lidar com a abertura/fechamento do menu
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // Função para lidar com a abertura/fechamento da barra de pesquisa
    const handleSearch = () => {
        setSearchOn(!searchOn);
    }

    // Definição dos links do menu
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
                { name: "Apresentação do site", path: "/sobre/1" },
                { name: "Descrição da área", path: "/sobre/#2" },
                { name: "Histórico", path: "/sobre/#3" },
                { name: "Atividades", path: "/sobre/#4" },
                { name: "Expectativas", path: "/sobre/#5" },
                { name: "Participantes", path: "/sobre/#6" }
            ],
        },
        {
            name: 'Mapa',
            path: '/mapa',
            icon: <FaMapLocationDot />
        },
        {
            name: 'Blog',
            path: '/blog',
            icon: <FaBloggerB />
        },
        {
            name: 'Espécies',
            path: '/especies',
            icon: <FaSeedling />
        },
        {
            name: 'Agenda',
            path: '/agenda',
            icon: <FaCalendarDays />
        },
        {
            name: 'Faça parte',
            path: '/facaparte',
            icon: <FaHandshakeSimple />
        },
        {
            name: 'Quem somos',
            path: '/equipe',
            icon: <FaUsers />
        }
    ]

    const location = useLocation();

    const navigate = useNavigate();
    const redirectToHome = () => navigate(`/home`);

    return (
        <div className='navbar'>
            {/* Renderização do menu para dispositivos móveis */}
            {isMobile ? (
                <div className='menu'>
                    {!isOpen && (
                        <FaBars onClick={handleToggle} />
                    )}
                    {isOpen && (
                        <Sidebar
                            links={links.filter(link => link.name !== 'Agenda' || mostrarAgenda)}
                            handleToggle={handleToggle}
                            isOpen={isOpen}
                        />
                    )}
                    <div className='logo' onClick={redirectToHome}>
                        <img src="../src/assets/logos/arca.png" alt="Logo Arca" />
                    </div>
                    <div className='search'>
                        {searchOn && (
                            <div>
                                <input type="text" name='search' placeholder='Buscar...' />
                            </div>
                        )}
                        <FaMagnifyingGlass onClick={handleSearch} />
                    </div>
                </div>
            ) : (
                // Renderização do menu para telas maiores
                <div className='menu'>
                    <div className='logo' onClick={redirectToHome}>
                        <img src="../src/assets/logos/arca.png" alt="Logo Arca" />
                    </div>
                    <div className='row'>
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
                        <div className='search'>
                            {searchOn ? (
                                <div>
                                    <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
                                </div>
                            ) : (
                                <div>
                                    <FaMagnifyingGlass onClick={handleSearch} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar