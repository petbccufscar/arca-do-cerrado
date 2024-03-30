import './Sidebar.css'
import React, { useEffect, useRef, useState } from 'react'
import { FaCaretDown, FaXmark } from 'react-icons/fa6'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Sidebar = ({ links, handleToggle }) => {
    const sidebarRef = useRef(null);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const location = useLocation();

    // Função para alternar o estado de abertura do dropdown
    const handleIsOpen = (linkPath) => {
        setOpenDropdowns((prevOpenDropdowns) => ({
            ...prevOpenDropdowns,
            [linkPath]: !prevOpenDropdowns[linkPath],
        }));
    };

    useEffect(() => {
        // Função para fechar a barra lateral quando clicar fora dela
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                handleToggle();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleToggle]);

    // Hook de navegação do React Router DOM
    const navigate = useNavigate();

    // Função para redirecionar para a página inicial
    const redirectToHome = () => navigate(`/home`);

    return (
        <div className="sidebar" ref={sidebarRef}>
            <div className='sidebar-menu'>
                {/* Renderiza os links da barra lateral */}
                {links.map(link => (
                    (link.drop ? (
                        <div key={link.path}>
                            <div className='row'>
                                {/* Renderiza o link principal */}
                                <Link
                                    to={link.path}
                                    className={location.pathname === link.path ? 'active' : ""}
                                    key={link.path}
                                    onClick={handleToggle}
                                >
                                    <li className='teste'>{link.icon} {link.name} </li>
                                </Link>
                                {/* Renderiza a seta de dropdown e vincula ao estado de abertura do dropdown */}
                                <Link><FaCaretDown className='ml-2' onClick={() => handleIsOpen(link.path)} /></Link>
                            </div>
                            {/* Renderiza o dropdown se estiver aberto */}
                            {openDropdowns[link.path] && (
                                <div className='side-dropdown'>
                                    {link.drop.map(drop => (
                                        <Link
                                            to={drop.path}
                                            className={location.pathname === drop.path ? 'active' : ""}
                                            key={drop.path}
                                            onClick={handleToggle}
                                        >
                                            <li>{drop.name}</li>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        )
                        :
                        (
                            <Link
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ""}
                                key={link.path}
                                onClick={handleToggle}
                            >
                                <div className='row'>
                                    {link.icon}
                                    <li>{link.name}</li>
                                </div>
                            </Link>
                        )
                    )

                ))}

            </div>
            {/* Botão para fechar a barra lateral */}
            <div className='xmark'>
                <FaXmark onClick={handleToggle} />
            </div>
        </div >
    )
}

export default Sidebar
