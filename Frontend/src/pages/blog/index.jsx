import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePosts from '../../hooks/usePosts';

import Loading from '../../components/layout/loading';
import Post from '../../components/blog/Post';

const Blog = () => {
    const { posts, isLoading } = usePosts();
    const navigate = useNavigate();

    if (isLoading)
        return <Loading />;

    const goToSubscribe = () => navigate('/inscrever');

    return (
        <div className='flex flex-col min-h-screen w-full items-center'>
            <h1 className='bg-primary-color p-4 text-white text-center text-xl sm:text-3xl font-semibold w-full'>Blog</h1>
            <section className='flex flex-col px-6 mx-auto max-w-screen-xl lg:px-8 justify-center items-center'>
                <section className='flex flex-col gap-8 mt-8'>
                    {posts.length > 0 ? (
                        posts.map(post => (
                            <Post key={post.id} post={post} />
                        ))
                    ) : (
                        <p>Nenhuma postagem encontrada.</p>
                    )}
                </section>
                <section className='flex flex-col justify-center items-center mt-10 mb-10'>
                    <h2>Inscreva-se para receber notificações.</h2>
                    <button className='mt-4 text-sm' onClick={goToSubscribe}>Inscrever-se</button>
                </section>
            </section>
        </div>
    );
};

export default Blog;
