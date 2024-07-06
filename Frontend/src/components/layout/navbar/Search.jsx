import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Search = ({ search, setSearch }) => {
    const [searchOn, setSearchOn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search !== "") {
            navigate('/search');
        }
        setSearchOn(false);
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className='flex items-center'>
            {searchOn ? (
                <form onSubmit={handleSubmit} className='flex items-center gap-4'>
                    <input
                        type="text"
                        value={search}
                        onChange={handleInputChange}
                        placeholder="Digite..."
                        className="m-0 p-0 rounded border border-zinc-300 ps-2 py-1 text-sm"
                    />
                    <button type='submit' className='p-0'>
                        <FaMagnifyingGlass className='text-black' />
                    </button>
                </form>
            ) : (
                <FaMagnifyingGlass className='cursor-pointer' onClick={() => setSearchOn(!searchOn)} />
            )}
        </div>
    );
};

export default Search;
