import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = ({ search }) => {
    const [speciesData, setSpeciesData] = useState([]);
    const [equipeData, setEquipeData] = useState([]);
    const [atividadeData, setAtividadeData] = useState([]);
    const [postagemData, setPostagemData] = useState([]);
    const [selectedSource, setSelectedSource] = useState('Todos');
    const [mostrarAgenda, setMostrarAgenda] = useState(true);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/Configuracao/4')
            .then((response) => {
                setMostrarAgenda(response.data.mostrar_agenda);
            })
            .catch((error) => {
                console.error('Erro ao buscar configuração:', error);
            });
    }, []);

    const fetchData = async (url, filterFunction, setDataFunction) => {
        try {
            const response = await axios.get(url);
            const data = response.data;
            const filteredData = data.filter(filterFunction);
            setDataFunction(filteredData);
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
        }
    };

    useEffect(() => {
        fetchData('http://127.0.0.1:8000/api/Planta/', species =>
            species.apelido.toLowerCase().includes(search.toLowerCase()) ||
            species.resumo.toLowerCase().includes(search.toLowerCase()) ||
            species.nome_cientifico.toLowerCase().includes(search.toLowerCase()) ||
            species.texto.toLowerCase().includes(search.toLowerCase()) ||
            species.imagens && species.imagens.tags && species.imagens.tags.toLowerCase().includes(search.toLowerCase()), setSpeciesData);
    }, [search]);

    useEffect(() => {
        fetchData('http://127.0.0.1:8000/api/Equipe/', membro =>
            membro.nome.toLowerCase().includes(search.toLowerCase()) ||
            membro.biografia.toLowerCase().includes(search.toLowerCase()) ||
            membro.cargo.toLowerCase().includes(search.toLowerCase())
            , setEquipeData);
    }, [search]);

    useEffect(() => {
        fetchData('http://127.0.0.1:8000/api/Atividade/', atividade =>
            atividade.titulo.toLowerCase().includes(search.toLowerCase()) ||
            atividade.descricao.toLowerCase().includes(search.toLowerCase())
            , setAtividadeData);
    }, [search]);

    useEffect(() => {
        fetchData('http://127.0.0.1:8000/api/Postagem/', postagem =>
            postagem.titulo.toLowerCase().includes(search.toLowerCase()) ||
            postagem.conteudo.toLowerCase().includes(search.toLowerCase())
            , setPostagemData);
    }, [search]);

    const handleSourceChange = (event) => {
        setSelectedSource(event.target.value);
    };

    return (
        <div>
            <h1 className='bg-primary-color p-4 text-white text-center text-xl sm:text-3xl font-semibold'>Resultados de pesquisa</h1>
            <div className='flex justify-center gap-4 mt-4'>
                <label htmlFor="sourceSelect">Selecionar fonte:</label>
                <select id="sourceSelect" value={selectedSource} onChange={handleSourceChange}>
                    <option value="Todos">Todos</option>
                    <option value="Especies">Especies</option>
                    <option value="Equipe">Equipe</option>
                    <option value="Atividade">Atividade</option>
                    {mostrarAgenda && (
                        <option value="Postagem">Postagem</option>
                    )}
                </select>
            </div>
            <div className='flex flex-col py-8 px-6 mx-auto max-w-screen-xl lg:px-8 gap-8'>
                {(selectedSource === 'Todos' || selectedSource === 'Especies') && speciesData.length > 0 && (
                    <div>
                        <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-2'>Especies</h2>
                        <div className='flex flex-col gap-1'>
                            {speciesData.map(specie => (
                                <a key={specie.id} className='hover:underline' href={`/especies/${specie.id}`}>{specie.apelido}</a>
                            ))}
                        </div>
                    </div>
                )}

                {(selectedSource === 'Todos' || selectedSource === 'Equipe') && equipeData.length > 0 && (
                    <div>
                        <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-2'>Equipe</h2>
                        <div className='flex flex-col gap-1'>
                            {equipeData.map(membro => (
                                <a key={membro.id} className='hover:underline' href={`/equipe/${membro.id}`}>{membro.nome}</a>
                            ))}
                        </div>
                    </div>
                )}

                {(selectedSource === 'Todos' || selectedSource === 'Atividade') && atividadeData.length > 0 && (
                    <div>
                        <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-2'>Atividade</h2>
                        <div className='flex flex-col gap-1'>
                            {atividadeData.map(atividade => (
                                <a key={atividade.id} className='hover:underline' href={"#"}>{atividade.titulo}</a>
                            ))}
                        </div>
                    </div>
                )}
                {mostrarAgenda && (selectedSource === 'Todos' || selectedSource === 'Postagem') && postagemData.length > 0 && (
                    <div>
                        <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-2'>Postagem</h2>
                        <div className='flex flex-col gap-1'>
                            {postagemData.map(postagem => (
                                <a key={postagem.id} className='hover:underline' href={`/blog/${postagem.id}`}>{postagem.titulo}</a>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Search;
