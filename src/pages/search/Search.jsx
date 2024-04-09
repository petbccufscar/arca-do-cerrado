import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = ({ search }) => {
    const [speciesData, setSpeciesData] = useState([]);
    const [equipeData, setEquipeData] = useState([]);
    const [atividadeData, setAtividadeData] = useState([]);
    const [postagemData, setPostagemData] = useState([]);
    const [selectedSource, setSelectedSource] = useState('Todos');
    const [mostrarAgenda, setMostrarAgenda] = useState(true);

    // Efeito para buscar a configuração de exibição da agenda
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

    // Função para buscar dados com base na URL, aplicar filtro e definir o estado correspondente
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

    // Função para remover acentos de caracteres
    const removeAccents = (text) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    // Efeito para buscar dados das espécies e aplicar filtro com base na pesquisa
    useEffect(() => {
        fetchData('http://127.0.0.1:8000/api/Planta/', species =>
            removeAccents(species.apelido).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
            removeAccents(species.resumo).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
            removeAccents(species.nome_cientifico).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
            removeAccents(species.texto).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
            (species.imagens && species.imagens.tags && removeAccents(species.imagens.tags).toLowerCase().includes(removeAccents(search).toLowerCase())), setSpeciesData);
    }, [search]);

    // Efeito para buscar dados da equipe e aplicar filtro com base na pesquisa
    useEffect(() => {
        fetchData('http://127.0.0.1:8000/api/Equipe/', membro =>
            removeAccents(membro.nome).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
            removeAccents(membro.biografia).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
            removeAccents(membro.cargo).toLowerCase().includes(removeAccents(search).toLowerCase()), setEquipeData);
    }, [search]);

    // Efeito para buscar dados das atividades e aplicar filtro com base na pesquisa
    useEffect(() => {
        fetchData('http://127.0.0.1:8000/api/Atividade/', atividade =>
            removeAccents(atividade.titulo).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
            removeAccents(atividade.descricao).toLowerCase().includes(removeAccents(search).toLowerCase()), setAtividadeData);
    }, [search]);

    // Efeito para buscar dados das postagens e aplicar filtro com base na pesquisa
    useEffect(() => {
        fetchData('http://127.0.0.1:8000/api/Postagem/', postagem =>
            removeAccents(postagem.titulo).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
            removeAccents(postagem.conteudo).toLowerCase().includes(removeAccents(search).toLowerCase()), setPostagemData);
    }, [search]);

    // Função para lidar com a mudança da fonte selecionada
    const handleSourceChange = (event) => {
        setSelectedSource(event.target.value);
    };

    return (
        <div>
            <h1 className='bg-primary-color p-4 text-white text-center text-xl sm:text-3xl font-semibold'>Resultados de pesquisa</h1>
            {/* Selecionador de fonte para filtrar os resultados */}
            <div className='flex justify-center gap-4 mt-4'>
                <label htmlFor="sourceSelect">Selecionar fonte:</label>
                <select id="sourceSelect" value={selectedSource} onChange={handleSourceChange}>
                    <option value="Todos">Todos</option>
                    <option value="Especies">Especies</option>
                    <option value="Equipe">Equipe</option>
                    <option value="Atividade">Atividade</option>
                    {/* Renderiza a opção de postagem apenas se mostrarAgenda for verdadeiro */}
                    {mostrarAgenda && (
                        <option value="Postagem">Postagem</option>
                    )}
                </select>
            </div>
            {/* Seção de resultados de pesquisa */}
            <div className='flex flex-col py-8 px-6 mx-auto max-w-screen-xl lg:px-8 gap-8'>
                {/* Renderiza os resultados das espécies se a fonte selecionada for 'Todos' ou 'Especies' */}
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
                {/* Renderiza os resultados da equipe se a fonte selecionada for 'Todos' ou 'Equipe' */}
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
                {/* Renderiza os resultados das atividades se a fonte selecionada for 'Todos' ou 'Atividade' */}
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
                {/* Renderiza os resultados das postagens se a fonte selecionada for 'Todos', 'Postagem' e mostrarAgenda for verdadeiro */}
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
