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
    atividades.sort((a, b) => new Date(a.data) - new Date(b.data));

    // Extrair a primeira atividade e as demais
    const [firstActivity, ...remainingActivities] = atividades;

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
            <div className='mt-20 flex flex-col items-center justify-center'>
                <h2 className='text-2xl font-semibold border-b-2 border-primary-color max-w-full px-2'>Próxima Atividade</h2>

                {firstActivity && (
                    <div className='rounded-md bg-primary-color mt-8 mb-8 p-5 text-center' key={firstActivity.id}>
                        <h3 className='text-xl text-white font-semibold'>{firstActivity.titulo}</h3>
                        <p className='text-white' dangerouslySetInnerHTML={{ __html: firstActivity.descricao.replace(/&nbsp;/g, ' ') }} />
                        <p className='text-white'>Data: {formatarData(firstActivity.data)}</p>
                    </div>
                )}

                <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-full px-2'>Atividades Futuras</h2>
                <ul>
                    {remainingActivities.map(activity => (
                        <li className='rounded-md bg-primary-color mt-8 mb-8 p-5 text-center' key={activity.id}>
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