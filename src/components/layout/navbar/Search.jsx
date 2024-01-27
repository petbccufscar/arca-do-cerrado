import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Search = ({ search, setSearch, handleSearch }) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        handleSearch()
        navigate('/search')
        e.preventDefault();
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={handleInputChange}
                    placeholder="Digite..."
                    className="px-2"
                />
                <button type='submit'>
                    <FaMagnifyingGlass className='text-black' />
                </button>
            </form>
        </div>
    );
};

export default Search;