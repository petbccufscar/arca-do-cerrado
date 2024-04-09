import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { formatDate } from '../../../utils/FormatDateUtils';
import Loading from '../../../components/layout/loading/Loading';
import LogoArca from '../../../assets/logos/arca.png'


const Page = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState(null);
    const [autor, setAutor] = useState({
        imagem: LogoArca,
        nome: 'Arca do Cerrado',
        id: ''
    });

    useEffect(() => {
        // Função assíncrona para buscar os dados da post com base no 'id'
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://127.0.0.1:8000/api/Postagem/${id}`);
                setPost(response.data);

                const responseEquipe = await axios.get(`http://127.0.0.1:8000/api/Equipe/${response.data.autor_equipe}`);
                setAutor(responseEquipe.data);
            } catch (error) {
                console.error('Error fetching post data:', error);
            } finally {
                setIsLoading(false); // Define isLoading como false após o carregamento ser concluído
            }
        };

        fetchData(); // Chama a função fetchData ao montar o componente ou sempre que 'id' mudar
    }, [id]);


    // Renderiza uma mensagem de carregamento enquanto isLoading é true
    if (isLoading) {
        return <Loading />;
    }

    // Define o link do perfil do autor
    let perfilAutorLink = `/equipe/${autor.id}`;
    if (!autor.id) {
        perfilAutorLink = `/home`;
    }

    return (
        <div className='flex w-full justify-center items-center px-4 lg:px-16 py-10'>
            {post && (
                <div className='flex flex-col w-[90%] lg:max-w-[1200px] justify-center'>
                    <h1 className='font-bold text-4xl lg:text-5xl mb-4'>{post.titulo}</h1>
                    <div className='flex gap-4 mb-8'>
                        <img src={autor.imagem} alt="Imagem do autor" className='rounded-full h-12 w-12 object-cover' />
                        <div>
                            <p>{autor.nome} <a href={perfilAutorLink} className='ml-2 cursor-pointer text-primary-color hover:underline'>Perfil</a></p>
                            <p className='text-sm text-neutral-400'>{formatDate(post.data)}</p>
                        </div>
                    </div>
                    <img src={post.imagem} alt="Imagem do post" />
                    <p className='mt-4' dangerouslySetInnerHTML={{ __html: post.conteudo }} />
                    {post.link && (
                        <div className='mt-8'>
                            <p>Veja completo:</p>
                            <a href={post.link} className='cursor-pointer text-primary-color hover:underline'>{post.link}</a>
                        </div>
                    )}
                </div>

            )}
        </div>
    )
}

export default Page