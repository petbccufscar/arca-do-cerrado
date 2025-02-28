import React, { useEffect, useState } from 'react';
import useConfiguracao from '../../../hooks/useConfiguracao';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaQuestion, FaHouse, FaEarthAmericas, FaNewspaper, FaPagelines, FaCalendarDays, FaMessage, FaUsers } from 'react-icons/fa6';

import Search from './Search';
import Sidebar from './Sidebar';
import MenuDropdown from './MenuDropdwon';
import logo from '../../../assets/logos/arca.png';

const Navbar = () => {
    const { configuracao, error: configuracaoError, isLoading: configuracaoLoading } = useConfiguracao();
    const [isMobile, setIsMobile] = useState(false);
    const [mostrarAgenda, setMostrarAgenda] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!configuracaoLoading && !configuracaoError && configuracao) {
            setMostrarAgenda(configuracao.mostrar_agenda);
        }
    }, [configuracao, configuracaoLoading, configuracaoError]);

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
                { name: "Apresentação do site", path: "/sobre/#1" },
                { name: "Descrição da área", path: "/sobre/#2" },
                { name: "Histórico", path: "/sobre/#3" },
                { name: "Atividades", path: "/sobre/#4" },
                { name: "Expectativas", path: "/sobre/#5" },
                { name: "Participantes", path: "/sobre/#6" }
            ]
        },
        { name: 'Mapa', path: '/mapa', icon: <FaEarthAmericas /> },
        { name: 'Blog', path: '/blog', icon: <FaNewspaper /> },
        { name: 'Espécies', path: '/especies', icon: <FaPagelines /> },
        { name: 'Agenda', path: '/agenda', icon: <FaCalendarDays /> },
        { name: 'Faça parte', path: '/facaparte', icon: <FaMessage /> },
        { name: 'Quem somos', path: '/equipe', icon: <FaUsers /> }
    ];

    return (
        <div className='flex items-center justify-between p-2 px-3.5'>
            {isMobile ? (
                <>
                    {!isOpen && <FaBars onClick={handleToggle} />}
                    {isOpen && (
                        <div>
                            <Sidebar
                                links={links.filter(link => link.name !== 'Agenda' || mostrarAgenda)}
                                handleToggle={handleToggle}
                            />
                            <div className='flex items-center cursor-pointer' onClick={redirectToHome}>
                                <img src={logo} alt="Logo Arca" className='h-12' />
                            </div>
                        </div>
                    )}
                    <div className='flex items-center cursor-pointer' onClick={redirectToHome}>
                        <img src={logo} alt="Logo Arca" className='h-12' />
                    </div>
                </>
            ) : (
                <div className='flex w-full gap-4 items-center z-40'>
                    <div className='flex items-center cursor-pointer' onClick={redirectToHome}>
                        <img src={logo} alt="Logo Arca" className='h-12' />
                    </div>
                    <div className='flex items-center gap-4 ml-auto'>
                        {links.filter(link => link.name !== 'Agenda' || mostrarAgenda).map((link, index) => (
                            <div key={index}>
                                {link.drop ? (
                                    <MenuDropdown link={link} />
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`flex gap-1 items-center ${location.pathname.startsWith(link.path) ? 'border-b border-primary-color ' : 'hover:text-primary-color'}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                    <Search />
                </div>
            )}
        </div>
    );
};

export default Navbar;
