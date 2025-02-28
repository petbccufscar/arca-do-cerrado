import React, { useEffect, useRef, useState } from 'react';
import { FaCaretDown, FaXmark } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import Search from './Search';

const Sidebar = ({ links, handleToggle, search, setSearch }) => {
    const sidebarRef = useRef(null);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const location = useLocation();

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

    return (
        <div className="flex flex-col fixed top-0 left-0 bg-white justify-between h-full z-20 p-4" ref={sidebarRef}>
            <div className="flex flex-col gap-2">
                <FaXmark onClick={handleToggle} className='mt-2 mb-4' />
                {links.map(link => (
                    <div key={link.path}>
                        <div className='flex items-center gap-1'>
                            {link.drop ? (
                                <>
                                    <Link
                                        to={link.path}
                                        className={location.pathname === link.path ? 'active' : ""}
                                        onClick={handleToggle}
                                    >
                                        <li className="flex items-center gap-2">{link.icon} {link.name}</li>
                                    </Link>
                                    <FaCaretDown className='ml-2' onClick={() => handleIsOpen(link.path)} />
                                </>
                            ) : (
                                <Link
                                    to={link.path}
                                    className={location.pathname === link.path ? 'active' : ""}
                                    onClick={handleToggle}
                                >
                                    <div className="flex items-center gap-2">
                                        {link.icon}
                                        <li className="list-none">{link.name}</li>
                                    </div>
                                </Link>
                            )}
                        </div>
                        {openDropdowns[link.path] && link.drop && (
                            <div className="flex flex-col list-none gap-1 ml-6 mb-2">
                                {link.drop.map(drop => (
                                    <Link
                                        to={drop.path}
                                        className={location.pathname === drop.path ? 'active' : ""}
                                        onClick={handleToggle}
                                        key={drop.path}
                                    >
                                        <li>{drop.name}</li>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <Search search={search} setSearch={setSearch} />
            </div>
        </div>
    );
};

export default Sidebar;