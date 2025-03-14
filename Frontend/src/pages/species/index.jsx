import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePlantas from '../../hooks/usePlantas';

import SpecieCard from '../../components/species/SpecieCard';
import Loading from '../../components/layout/loading';

const Species = () => {
    const { plantas, isLoading: plantasLoading } = usePlantas();
    const [speciesData, setSpeciesData] = useState([]);

    useEffect(() => {
        if (plantas) {
            const sortedSpeciesData = plantas.sort((a, b) => a.apelido.localeCompare(b.apelido));
            setSpeciesData(sortedSpeciesData);
        }
    }, [plantas])

    if (plantasLoading) {
        return <Loading />;
    }
    return (
        <div className='flex flex-col min-h-screen w-full'>
            <h1 className='bg-primary-color p-4 text-white text-center text-xl sm:text-3xl font-semibold w-full'>Espécies</h1>
            <section className='flex flex-col lg:flex-row py-8 px-6 lg:max-w-screen-xl 2xl:max-w-full lg:px-8 gap-8'>
                <div className='w-1/8 pr-8'>
                    <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-2'>Lista de Plantas</h2>
                    <ul>
                        {speciesData.map((specie, index) => (
                            <li key={index}>
                                <Link to={`/especies/${specie.id}`} className="cursor-pointer hover:underline">
                                    {specie.apelido}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex-1'>
                    <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit pr-2'>Catálogo</h2>
                    <div className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 justify-items-stretch'>
                        {speciesData.map((specie, index) => (
                            <SpecieCard key={index} specie={specie} className="w-full overflow-hidden" />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Species;
