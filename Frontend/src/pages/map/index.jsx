import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Mapa from '../../components/map/index';
import Loading from '../../components/layout/loading';
import ImagemMapa from '../../assets/map/map.png';

import usePlantas from '../../hooks/usePlantas';

const Map = () => {
    const { id } = useParams();
    const [showMap, setShowMap] = useState(false);
    const [speciesName, setSpeciesName] = useState('');
    const { plantas: speciesData, error, isLoading } = usePlantas();

    const toggleMap = () => {
        setShowMap(true);
    };

    useEffect(() => {
        if (id && speciesData) {
            const selectedSpecies = speciesData.find(species => species.id.toString() === id.toString());
            if (selectedSpecies) {
                setSpeciesName(selectedSpecies.apelido);
            }
        }
    }, [id, speciesData]);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Erro: {error.message}</div>;
    }

    return (
        <div>
            <h1 className='bg-primary-color p-4 text-white text-center text-3xl font-semibold'>Mapa</h1>
            <section className='flex flex-col py-8 px-6 mx-auto lg:px-8 justify-center items-center'>
                <section>
                    <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-4'>Sobre o Mapa Interativo</h2>
                    <div className='flex flex-col gap-5 mb-8'>
                        <p className='text-center text-justify'>Esta é uma representação gráfica do nosso jardim. 
                            Para conhecer mais de perto as espécies que temos, clique sobre o mapa e, depois, passe o mouse sobre o mapa. 
                            Os pins indicam os pontos onde há espécies plantadas. 
                            Clicando no pin, você pode saber o nome ou apelido da espécie e, caso queira saber mais 
                            sobre ela no nosso jardim - imagens e curiosidades - , clique no pop-up para ir até a página das Espécies.
                            Caso o pop-up fique cortado basta aplicar zoom no mapa. 

                        </p>
                        {id && speciesName && (
                            <p className='text-center'>
                                Você está vendo informações sobre a espécie: {speciesName}.<br />
                                Para voltar a ver todas as espécies clique em <a className='text-blue-500' href="/mapa">Mapa</a>.
                            </p>
                        )}
                    </div>
                </section>
                {!showMap ? (
                    <img
                        src={ImagemMapa}
                        alt="Imagem do mapa"
                        className='w-full max-w-[800px] cursor-pointer'
                        onClick={toggleMap}
                    />
                ) : (
                    <Mapa species={speciesData} filter={id} />
                )}
            </section>
        </div>
    );
};

export default Map;
