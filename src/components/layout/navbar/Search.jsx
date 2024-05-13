import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Search = ({ search, setSearch }) => {
    const [searchOn, setSearchOn] = useState(false);
    const navigate = useNavigate();

    // Função para lidar com o envio do formulário de pesquisa
    const handleSubmit = (e) => {
        setSearchOn(!searchOn);
        if (search !== "")
            navigate('/search')
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    };

    // Função para lidar com a mudança no campo de entrada da pesquisa
    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className=''>
            {searchOn ? (
                <form  onSubmit={handleSubmit} className='flex items-center'>
                    <input
                        type="text"
                        value={search}
                        onChange={handleInputChange}
                        placeholder="Digite..."
                        className="m-0 p-0 rounded border border-zinc-300 ps-2 py-1 text-sm"
                    />
                    <button type='submit'>
                        <FaMagnifyingGlass className='text-black' />
                    </button>
                </form>

            ) : (
                <div>
                    <FaMagnifyingGlass onClick={() => setSearchOn(!searchOn)} />
                </div>
            )}
        </div>
    );
};

export default Search;
