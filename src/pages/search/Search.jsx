import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Search = ({ search }) => {
    const [speciesData, setSpeciesData] = useState([]);
    const [equipeData, setEquipeData] = useState([]);
    const [atividadeData, setAtividadeData] = useState([]);
    const [postagemData, setPostagemData] = useState([]);

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
            species.texto.toLowerCase().includes(search.toLowerCase())
            , setSpeciesData);
    }, [search]);

    useEffect(() => {
        fetchData('http://127.0.0.1:8000/api/Equipe/', membro =>
            membro.nome.toLowerCase().includes(search.toLowerCase()) ||
            membro.bibliografia.toLowerCase().includes(search.toLowerCase()) ||
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

    return (
        <div>
            <h1 className='bg-primary-color p-4 text-white text-center text-xl sm:text-3xl font-semibold'>Resultados de pesquisa</h1>
            <div className='flex flex-col py-8 px-6 mx-auto max-w-screen-xl lg:px-8 gap-8'>
                {speciesData.length > 0 && (
                    <div>
                        <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-2'>Especies</h2>
                        <div className='flex flex-col gap-1'>
                            {speciesData
                                .map(specie => (
                                    <a className='hover:underline' href={`/especies/${specie.id}`}>{specie.apelido}</a>
                                ))
                            }
                        </div>
                    </div>
                )}

                {equipeData.length > 0 && (
                    <div>
                        <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-2'>Equipe</h2>
                        <div className='flex flex-col gap-1'>
                            {equipeData
                                .map(membro => (
                                    <a className='hover:underline' href={`/equipe/${membro.id}`}>{membro.nome}</a>
                                ))
                            }
                        </div>
                    </div>
                )}

                {atividadeData.length > 0 && (
                    <div>
                        <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-2'>Equipe</h2>
                        <div className='flex flex-col gap-1'>
                            {atividadeData
                                .map(atividade => (
                                    <a className='hover:underline' href={"#"}>{atividade.titulo}</a>
                                ))
                            }
                        </div>
                    </div>
                )}

                {postagemData.length > 0 && (
                    <div>
                        <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-2'>Equipe</h2>
                        <div className='flex flex-col gap-1'>
                            {postagemData
                                .map(postagem => (
                                    <a className='hover:underline' href={`/blog/${postagem.id}`}>{postagem.titulo}</a>
                                ))
                            }
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}

export default Search