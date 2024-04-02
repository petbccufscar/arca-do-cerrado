import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Header = ({ imagem }) => {
    return (
        <header>
            <div className='h-[300px] w-[300px]'>
                <img src={imagem} alt="slide-item" className='h-[300px] w-[300px] object-cover' />
            </div>
        </header>
    )
}

const Member = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [member, setMember] = useState(null);

    // Pega os dados do membro em específico da equipe
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://127.0.0.1:8000/api/Equipe/${id}`);
                setMember(response.data);
            } catch (error) {
                console.error('Error fetching member data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (isLoading) {
        return <p>Loading...</p>;
    }


    return (
        <div>
            <h1 className='bg-primary-color p-4 text-white text-center text-3xl font-semibold'>Membro</h1>
            <main className='flex flex-col sm:flex-row py-8 px-6 mx-auto max-w-screen-xl lg:px-8 gap-8'>
                <Header imagem={member.imagem}/>
                <section>
                    <h2 className='text-2xl font-semibold'>{member.nome}</h2>
                    <p className='flex items-center gap-2 text-neutral-500'>{member.cargo}</p>
                    <div className='flex flex-col py-4 gap-2'>
                        <h3 className='text-xl'>Descrição</h3>
                        <div dangerouslySetInnerHTML={{ __html: member.biografia }} />
                    </div>
                    <a href={member.link} className='cursor-pointer text-primary-color hover:underline'>Entre em contato</a>
                </section>
            </main>
        </div>
    )
}

export default Member