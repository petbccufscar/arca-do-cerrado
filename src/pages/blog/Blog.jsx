import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Post from '../../components/blog/Post'
import axios from 'axios';

const Blog = () => {

    const [postsData, setPostsData] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/Postagem`)
            .then(response => {
                setPostsData(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar dados das postagens:', error);
            });
    }, []);

    const navigate = useNavigate();
    const goToSubscribe = () => navigate('/inscrever')

    return (
        <div className='flex flex-col min-h-screen w-full items-center'>
            <h1 className='bg-primary-color p-4 text-white text-center text-xl sm:text-3xl font-semibold w-full'>Blog</h1>
            <section className='flex flex-col py-8 px-6 mx-auto max-w-screen-xl lg:px-8 justify-center items-center'>
                <section className='flex flex-col justify-center items-center mt-10 mb-10'>
                    <h2>Inscreva-se para receber mais notificações</h2>
                    <button className='mt-4 text-sm' onClick={goToSubscribe}>Inscrever-se</button>
                </section>

                <section className='flex flex-col gap-8 mt-8'>
                    {postsData
                        .reverse()
                        .map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                </section>
            </section>
        </div>

    )
}

export default Blog