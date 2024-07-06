import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/layout/loading';
import useEquipe from '../../../hooks/useEquipe';

const Header = ({ imagem }) => {
    return (
        <header>
            <div className='h-[300px] w-[300px]'>
                <img src={imagem} alt="slide-item" className='h-[300px] w-[300px] object-cover' />
            </div>
        </header>
    );
};

const Member = () => {
    const { id } = useParams();
    const { equipe, isLoading: equipeLoading, error } = useEquipe();
    const [membro, setMembro] = useState(null);

    useEffect(() => {
        if (equipe) {
            const membroEncontrado = equipe.find(membro => membro.id.toString() === id.toString());
            if (membroEncontrado) {
                setMembro(membroEncontrado);
            } else {
                console.warn(`Membro com id ${id} não encontrado.`);
            }
        }
    }, [equipe, id]);

    if (equipeLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Erro ao carregar os dados: {error.message}</div>;
    }

    if (!membro) {
        return <div>Membro não encontrado ou ainda carregando...</div>;
    }

    return (
        <div>
            <h1 className='bg-primary-color p-4 text-white text-center text-3xl font-semibold'>Membro</h1>
            <main className='flex flex-col sm:flex-row py-8 px-6 mx-auto max-w-screen-xl lg:px-8 gap-8'>
                {membro.imagem && <Header imagem={membro.imagem} />}
                <section>
                    <h2 className='text-2xl font-semibold'>{membro.nome}</h2>
                    <p className='flex items-center gap-2 text-neutral-500'>{membro.cargo}</p>
                    <div className='flex flex-col py-4 gap-2'>
                        <div dangerouslySetInnerHTML={{ __html: membro.biografia }} />
                    </div>
                    {membro.link && 
                        <a href={membro.link} className='cursor-pointer text-primary-color hover:underline'>Entre em contato</a>
                    }
                </section>
            </main>
        </div>
    );
};

export default Member;
