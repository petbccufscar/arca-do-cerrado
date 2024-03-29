import React from 'react'

import { FaInstagram, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className="bg-primary-color shadow mt-16">
            <div className="w-full max-w-screen-xl mx-auto p-8 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://www.ufscar.br" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="../src/assets/logos/ufscar.png" className="h-12" alt="UFSCar Logo" />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <a href="/sobre" className="hover:underline me-4 md:me-6">Sobre</a>
                        </li>
                        <li>
                            <a href="/equipe" className="hover:underline me-4 md:me-6">Quem somos</a>
                        </li>
                        <li>
                            <a href="/facaparte" className="hover:underline">Faça Parte</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className='flex items-center justify-between'>
                    <div className='flex gap-4 text-neutral-100 text-xl'>
                        <a href="" className='hover:text-white'>
                            <FaInstagram />
                        </a>
                        <a href="" className='hover:text-white'>
                            <FaYoutube />
                        </a>
                    </div>
                    <span className="block text-sm text-white sm:text-center">Criado por <a href="https://petbcc.ufscar.br" className="hover:underline">PET-BCC</a></span>
                </div>
            </div>
        </footer>

    )
}

export default Footer