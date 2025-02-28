import React from 'react'

const PageCard = ({ icon, name, desc, path }) => {
    return (
        <a href={path} className="flex flex-col md:h-full">
            <div className="flex justify-center items-center mb-4 text-7xl text-primary-color">
                {icon}
            </div>
            <h3 className="mb-2 text-2xl font-bold text-neutral-700 text-center">{name}</h3>
            <div className="flex-grow">
                <p className="text-neutral-500 mb-4 text-center text-sm">{desc}</p>
            </div>
            <div className="flex justify-center text-sm mt-auto">
                <p className="bg-primary-color px-4 py-2 rounded-full text-white">
                    Acesse {name}
                </p>
            </div>
        </a>
    );
};

export default PageCard;