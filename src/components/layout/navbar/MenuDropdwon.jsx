import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';

const MenuDropdown = ({ link }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    return (
        <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='flex gap-1 items-center'>
                {link.name}
                <FaCaretDown />
            </div>
            {showDropdown && (
                <div className="absolute bg-white shadow-lg rounded-md py-1 mt-1 z-40" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {link.drop.map((subLink, subIndex) => (
                        <Link to={subLink.path} className="block px-4 py-2 text-nowrap text-sm text-gray-700 hover:bg-gray-100" key={subIndex}>
                            {subLink.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuDropdown;