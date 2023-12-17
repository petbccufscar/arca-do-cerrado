import './Sidebar.css'
import React, { useEffect, useRef, useState } from 'react'

import { FaCaretDown, FaXmark } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = ({ links, handleToggle }) => {
    const sidebarRef = useRef(null);

    const [openDropdowns, setOpenDropdowns] = useState({});

    const handleIsOpen = (linkPath) => {
        setOpenDropdowns((prevOpenDropdowns) => ({
            ...prevOpenDropdowns,
            [linkPath]: !prevOpenDropdowns[linkPath],
        }));
    };

    useEffect(() => {
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

    const navigate = useNavigate();
    const redirectToHome = () => navigate(`/home`);

    return (
        <div className="sidebar" ref={sidebarRef}>
            <div className='sidebar-menu'>
                <div className='logo' onClick={redirectToHome}>
                    <img src="../src/assets/logos/arca.png" alt="Logo Arca" />
                    <img src="../src/assets/logos/arcaText.png" alt="Logo Arca Texto" />
                </div>
                {links.map(link => (
                    (link.drop ? (
                        <div key={link.path}>
                            <div className='row'>
                                <Link to={link.path} className={location.pathname === link.path ? 'active' : ""} key={link.path}>
                                    <li>{link.icon} {link.name} <FaCaretDown onClick={() => handleIsOpen(link.path)} /></li>
                                </Link>
                            </div>
                            {openDropdowns[link.path] && (
                                <div className='side-dropdown'>
                                    {link.drop.map(drop => (
                                        <Link to={drop.path} className={location.pathname === drop.path ? 'active' : ""} key={drop.path}>
                                            <li>{drop.name}</li>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                        :
                        (
                            <Link to={link.path} className={location.pathname === link.path ? 'active' : ""} key={link.path}>
                                <div className='row'>
                                    {link.icon}
                                    <li>{link.name}</li>
                                </div>
                            </Link>
                        )
                    )

                ))}

            </div>
            <div className='xmark'>
                <FaXmark onClick={handleToggle} />
            </div>
        </div >
    )
}

export default Sidebar

/*
  const handleIsOpen = (linkPath) => {
    setOpenStates((prevOpenStates) => ({
      ...prevOpenStates,
      [linkPath]: !prevOpenStates[linkPath],
    }));
  };
*/
/*
<FaCaretDown
                        onClick={() => handleIsOpen(link.path)}
                        className={openStates[link.path] ? 'caret-open' : ''}
                      />*/