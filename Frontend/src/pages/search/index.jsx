import React, { useState, useEffect } from 'react';
import Loading from '../../components/layout/loading';
import usePlantas from '../../hooks/usePlantas';
import useEquipe from '../../hooks/useEquipe';
import useAtividades from '../../hooks/useAtividades';
import usePosts from '../../hooks/usePosts';
import useConfiguracao from '../../hooks/useConfiguracao';

const Search = ({ search }) => {
    const { configuracao, error: configuracaoError, isLoading: configuracaoLoading } = useConfiguracao();
    const { plantas: plantasData, error: plantasError, isLoading: plantasLoading } = usePlantas();
    const { equipe: equipeData, error: equipeError, isLoading: equipeLoading } = useEquipe();
    const { atividades: atividadeData, error: atividadeError, isLoading: atividadeLoading } = useAtividades();
    const { posts: postagemData, error: postagemError, isLoading: postagemLoading } = usePosts();

    const [selectedSource, setSelectedSource] = useState('Todos');
    const [mostrarAgenda, setMostrarAgenda] = useState(true);
    const [filteredPlantas, setFilteredPlantas] = useState([]);
    const [filteredEquipe, setFilteredEquipe] = useState([]);
    const [filteredAtividades, setFilteredAtividades] = useState([]);
    const [filteredPostagens, setFilteredPostagens] = useState([]);

    useEffect(() => {
        if (!configuracaoLoading && !configuracaoError && configuracao) {
            setMostrarAgenda(configuracao.mostrar_agenda);
        }
    }, [configuracao, configuracaoLoading, configuracaoError]);

    const removeAccents = (text) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const filterSpecies = (species) =>
        removeAccents(species.apelido).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
        removeAccents(species.resumo).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
        removeAccents(species.nome_cientifico).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
        removeAccents(species.texto).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
        (species.imagens && species.imagens.tags && removeAccents(species.imagens.tags).toLowerCase().includes(removeAccents(search).toLowerCase()));

    const filterEquipe = (membro) =>
        removeAccents(membro.nome).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
        removeAccents(membro.biografia).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
        removeAccents(membro.cargo).toLowerCase().includes(removeAccents(search).toLowerCase());

    const filterAtividade = (atividade) =>
        removeAccents(atividade.titulo).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
        removeAccents(atividade.descricao).toLowerCase().includes(removeAccents(search).toLowerCase());

    const filterPostagem = (postagem) =>
        removeAccents(postagem.titulo).toLowerCase().includes(removeAccents(search).toLowerCase()) ||
        removeAccents(postagem.conteudo).toLowerCase().includes(removeAccents(search).toLowerCase());


    const handleSourceChange = (event) => {
        setSelectedSource(event.target.value);
    };

    if (plantasLoading || equipeLoading || atividadeLoading || postagemLoading || configuracaoLoading) {
        return <Loading />;
    }

    if (configuracaoError || plantasError || equipeError || atividadeError || postagemError) {
        return <div>{configuracaoError || plantasError || equipeError || atividadeError || postagemError}</div>;
    }

    let filteredData;
    switch (selectedSource) {
        case 'Especies':
            filteredData = plantasData.filter(filterSpecies);
            break;
        case 'Equipe':
            filteredData = equipeData.filter(filterEquipe);
            break;
        case 'Atividade':
            filteredData = atividadeData.filter(filterAtividade);
            break;
        case 'Postagem':
            filteredData = postagemData.filter(filterPostagem);
            break;
        default:
            filteredData = [
                "Especies",
                ...plantasData.filter(filterSpecies),
                "Equipe",
                ...equipeData.filter(filterEquipe),
                "Atividades",
                ...atividadeData.filter(filterAtividade),
                "Postagens",
                ...postagemData.filter(filterPostagem),
            ];
    }

    return (
        <div className='min-h-screen'>
            <h1 className='bg-primary-color p-4 text-white text-center text-xl sm:text-3xl font-semibold'>Resultados de pesquisa</h1>
            <div className='flex justify-center gap-4 mt-4'>
                <label htmlFor="sourceSelect">Selecionar fonte:</label>
                <select id="sourceSelect" value={selectedSource} onChange={handleSourceChange}>
                    <option value="Todos">Todos</option>
                    <option value="Especies">Especies</option>
                    <option value="Equipe">Equipe</option>
                    <option value="Atividade">Atividade</option>
                    {mostrarAgenda && <option value="Postagem">Postagem</option>}
                </select>
            </div>
            <div className='flex flex-col py-8 px-6 mx-auto max-w-screen-xl lg:px-8 gap-8'>
                {filteredData.length > 0 ? (
                    <div>
                        {selectedSource !== 'Todos' && <h2 className='text-2xl font-semibold mb-2 border-b-2 border-primary-color max-w-fit pr-2'>{selectedSource}</h2>}
                        
                        <div className='flex flex-col'>
                            {filteredData.map((item, index) => (
                                <div className='flex flex-col'>
                                    {typeof item === 'string' && (
                                        <h2 className='text-2xl font-semibold mt-4 mb-2 border-b-2 border-primary-color max-w-fit pr-2'>{item}</h2>
                                    )}
                                    <a key={index} className='hover:underline' href={`/${selectedSource.toLowerCase()}/${item.id}`}>{item.nome || item.apelido || item.titulo}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>Nenhum resultado encontrado para a fonte selecionada.</div>
                )}
            </div>
        </div>
    );
}

export default Search;