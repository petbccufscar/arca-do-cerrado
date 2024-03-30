import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Search = ({ search, setSearch, handleSearch }) => {
    const navigate = useNavigate();

    // Função para lidar com o envio do formulário de pesquisa
    const handleSubmit = (e) => {
        handleSearch()
        if (search !== "")
            navigate('/search')
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    };

    // Função para lidar com a mudança no campo de entrada da pesquisa
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
