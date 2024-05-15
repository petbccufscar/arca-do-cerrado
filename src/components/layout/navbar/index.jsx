import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaQuestion, FaHouse, FaMapLocationDot, FaBloggerB, FaSeedling, FaCalendarDays, FaHandshakeSimple, FaCaretDown, FaUsers } from 'react-icons/fa6';

import Search from './Search';
import Sidebar from './Sidebar';
import MenuDropdown from './MenuDropdwon';

const Navbar = ({ search, setSearch }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [mostrarAgenda, setMostrarAgenda] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/Configuracao/4');
                setMostrarAgenda(response.data.mostrar_agenda);
            } catch (error) {
                console.error('Erro ao buscar configuração:', error);
            }
        };
        fetchData();
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

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const redirectToHome = () => navigate('/home');

    const links = [
        { name: 'Início', path: '/home', icon: <FaHouse /> },
        {
            name: 'Sobre', path: '/sobre', icon: <FaQuestion />,
            drop: [
                { name: "Apresentação do site", path: "/sobre/1" },
                { name: "Descrição da área", path: "/sobre/#2" },
                { name: "Histórico", path: "/sobre/#3" },
                { name: "Atividades", path: "/sobre/#4" },
                { name: "Expectativas", path: "/sobre/#5" },
                { name: "Participantes", path: "/sobre/#6" }
            ]
        },
        { name: 'Mapa', path: '/mapa', icon: <FaMapLocationDot /> },
        { name: 'Blog', path: '/blog', icon: <FaBloggerB /> },
        { name: 'Espécies', path: '/especies', icon: <FaSeedling /> },
        { name: 'Agenda', path: '/agenda', icon: <FaCalendarDays /> },
        { name: 'Faça parte', path: '/facaparte', icon: <FaHandshakeSimple /> },
        { name: 'Quem somos', path: '/equipe', icon: <FaUsers /> }
    ];

    return (
        <div className='flex items-center justify-between p-2 px-3.5'>
            <div className='flex items-center cursor-pointer' onClick={redirectToHome}>
                <img src="../src/assets/logos/arca.png" alt="Logo Arca" className='h-12' />
            </div>
            {isMobile ? (
                <>
                    <FaBars onClick={handleToggle} />
                    {isOpen && (
                        <Sidebar
                            links={links.filter(link => link.name !== 'Agenda' || mostrarAgenda)}
                            handleToggle={handleToggle}
                            isOpen={isOpen}
                        />
                    )}
                </>
            ) : (
                <div className='flex gap-8 items-center z-40'>
                    <div className='flex items-center gap-4'>
                        {links.map((link, index) => (
                            <div key={index}>
                                {link.drop ? (
                                    <MenuDropdown link={link} />
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`flex gap-1 items-center ${location.pathname === link.path ? 'border-b border-primary-color ' : 'hover:text-primary-color'}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                    <Search search={search} setSearch={setSearch} />
                </div>

            )}
        </div>
    );
};

export default Navbar;