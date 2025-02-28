import React from 'react';
import Loading from '../../components/layout/loading';
import useAtividade from '../../hooks/useAtividades';

const Schedule = () => {
    const { atividades, error, isLoading } = useAtividade();

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    // Ordenar as atividades por data
    atividades.sort((a, b) => new Date(b.data) - new Date(a.data));

    function formatarData(data) {
        var partesData = data.split('-');
        var ano = partesData[0];
        var mes = partesData[1];
        var dia = partesData[2];
        return dia + '/' + mes + '/' + ano.substr(2);
    }

    return (
        <div className='schedule'>
            <h1 className='bg-primary-color p-4 text-white text-center text-3xl font-semibold w-full'>Agenda</h1>
            <div className='flex flex-col items-center justify-center p-10'>
                <ul>
                    {atividades.map(activity => (
                        <li className='rounded-md bg-primary-color p-5 mb-8 text-center' key={activity.id}>
                            <h3 className='text-xl text-white font-semibold'>{activity.titulo}</h3>
                            <p className='text-white' dangerouslySetInnerHTML={{ __html: activity.descricao.replace(/&nbsp;/g, ' ') }} />
                            <p className='text-white'>Data: {formatarData(activity.data)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Schedule;