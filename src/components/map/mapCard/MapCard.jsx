import React from 'react';
import { FaArrowRight, FaSeedling } from 'react-icons/fa6';

const MapCard = ({ specie }) => {
    const firstImage = specie.imagens.length > 0 ? specie.imagens[0].imagem : null;
    return (
        <div className="max-w-xs sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <a href={`/especies/${specie.id}`}>
                <img className="w-full h-32 sm:h-30 object-cover" src={firstImage} alt="" />
            </a>
            <div className="p-4">
                <a href={`/especies/${specie.id}`}>
                    <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900">{specie.apelido}</h5>
                    <h6 className='flex items-center text-neutral-400 text-sm mb-1 gap-2'><FaSeedling />{specie.nome_cientifico}</h6>
                </a>
                <div className='flex justify-end'>
                    <a href={`/especies/${specie.id}`} className="text-sm inline-flex items-center px-3 py-1 font-medium text-center text-white bg-primary-color rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 gap-2">
                        Saiba mais <FaArrowRight />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MapCard;
