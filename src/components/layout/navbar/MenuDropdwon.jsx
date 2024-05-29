import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';

const MenuDropdown = ({ link }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setShowDropdown(false);
        }, 100); // Ajuste o tempo de delay conforme necessário (200 ms aqui)
    };

    return (
        <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to={link.path} className={`flex gap-1 items-center ${location.pathname.startsWith(link.path) ? 'border-b border-primary-color ' : 'hover:text-primary-color'}`}>
                
                {link.name}
                <FaCaretDown />
            </Link>
            {showDropdown && (
                <div className="absolute bg-white shadow-lg rounded-md py-1 mt-1 z-40">
                    {link.drop.map((subLink, subIndex) => (
                        <Link to={subLink.path} className="block px-4 py-2 text-nowrap text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-color" key={subIndex}>
                            {subLink.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuDropdown;