import React from 'react';
import { FaSeedling } from 'react-icons/fa6';

const SpecieCard = ({ specie }) => {
    const firstImage = specie.imagens.length > 0 ? specie.imagens[0].imagem : null;
    return (
        <div className="w-80 bg-white border border-gray-200 rounded-lg shadow">
            <a href={`/especies/${specie.id}`}>
                <img className="rounded-t-lg h-56 w-80 object-cover" src={firstImage} alt="" />
            </a>
            <div className="p-5">
                <a href={`/especies/${specie.id}`}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{specie.apelido}</h5>
                    <h6 className='flex items-center text-neutral-400 text-sm mb-4 gap-2'><FaSeedling/>{specie.nome_cientifico}</h6>
                </a>
                <p className="mb-3 text-sm text-neutral-700">{specie.resumo}</p>
                <a href={`/especies/${specie.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-color rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Saiba mais
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    );

};

export default SpecieCard;
