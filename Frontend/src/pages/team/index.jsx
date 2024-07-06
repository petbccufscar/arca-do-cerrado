import React, { useState, useEffect } from 'react';
import useEquipe from '../../hooks/useEquipe';
import Loading from '../../components/layout/loading';

const Person = ({ personName, personImage, personId }) => {
    // Pega apenas o primeiro nome da pessoa 
    const firstName = personName.split(' ')[0];

    return (
        <div className="text-center text-gray-500">
            <a href={`/equipe/${personId}`} className='cursor-pointer'>
                <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover hover:opacity-85" src={personImage} alt="Foto da Pessoa" />
            </a>

            <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900">
                <a href={`/equipe/${personId}`}>{firstName}</a>
            </h3>
        </div>
    );
};

const Team = () => {
    const { equipe, isLoading: equipeLoading } = useEquipe();
    const [coordenador, setCoordenador] = useState(null);
    const [membros, setMembros] = useState([]);

    useEffect(() => {
        if (equipe) {
            // Busca o coordenador
            setCoordenador(equipe.find(person => person.cargo === 'Coordenador'));

            // Retira o coordenador do resto dos membros
            setMembros(equipe.filter(person => person.cargo !== 'Coordenador'));
        }
    }, [equipe]);

    if (equipeLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h1 className='bg-primary-color p-4 text-white text-center text-xl sm:text-3xl font-semibold'>Quem somos</h1>
            <section className='py-8 px-6 mx-auto max-w-screen-xl lg:px-8 items-center'>
                <h2 className='text-2xl font-semibold mb-8 border-b-2 border-primary-color max-w-fit px-4 text-center mx-auto'>Coordenador</h2>
                <div className='mx-auto mb-8 w-36 h-36'>
                    {coordenador && <Person personId={coordenador.id} personName={coordenador.nome} personImage={coordenador.imagem} />}
                </div>
                <div className='mb-20'></div>
                <h2 className='text-2xl font-semibold mb-8 border-b-2 border-primary-color max-w-fit px-4 text-center mx-auto'>Equipe</h2>
                <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {membros.map((membro, index) => (
                        <Person key={index} personId={membro.id} personName={membro.nome} personImage={membro.imagem} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Team;
