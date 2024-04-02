import React from 'react';
import { FaArrowRight, FaLocationDot, FaSeedling } from 'react-icons/fa6';

const SpecieCard = ({ specie }) => {
    const firstImage = specie.imagens.length > 0 ? specie.imagens[0].imagem : null;
    return (
        <div className="w-72 h-100 bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
            <a href={`/especies/${specie.id}`}>
                <img className="rounded-t-lg h-40 w-full object-cover" src={firstImage} alt="" />
            </a>
            <div className="p-4 flex flex-col justify-between h-64">
                <div>
                    <a href={`/especies/${specie.id}`}>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{specie.apelido}</h5>
                        <h6 className='flex items-center text-neutral-400 text-sm mb-2 gap-2'><FaSeedling />{specie.nome_cientifico}</h6>
                    </a>
                    <div className="mb-3 text-sm text-neutral-700 clamp-text line-clamp-4" dangerouslySetInnerHTML={{ __html: specie.resumo }} />
                </div>
                <div className='flex justify-between items-end'>
                    <a href={`/especies/${specie.id}`} className="text-sm inline-flex items-center px-3 py-2 font-medium text-white bg-primary-color rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 gap-2">
                        Saiba mais <FaArrowRight />
                    </a>
                    <a href={`/mapa/${specie.id}`} className="text-sm inline-flex items-center px-3 py-3 font-medium text-white bg-primary-color rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <FaLocationDot/>
                    </a>
                </div>
            </div>
        </div>
    );

};

export default SpecieCard;
