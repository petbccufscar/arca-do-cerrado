import React from 'react'
import './Team.css'

const Person = ({ personName, personLink, personImage, personRole }) => {
    return (
        <div className="text-center text-gray-5000">
            <a href={"#"}>
                <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover hover:opacity-85" src={personImage} alt="Person photo" />
            </a>
            
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href={personLink}>{personName}</a>
            </h3>
            <p>{personRole}</p>
        </div>

    )
}

const Team = () => {
    const person = {
        name: "John Doe",
        role: "Colaborador",
        link: "/",
        image: "https://img.freepik.com/fotos-gratis/feliz-jovem-aluna-segurando-cadernos-de-cursos-e-sorrindo-para-a-camera-em-pe-com-roupas-de-primavera-contra-um-fundo-azul_1258-70161.jpg"
    }

    return (
        <div>
            <h1 className='bg-primary-color p-4 text-white text-center text-3xl font-semibold'>Quem somos</h1>
            <section>
                <div className='flex flex-col py-8 px-6 mx-auto max-w-screen-xl lg:px-8  items-center'>
                    <h2 className='text-2xl font-semibold mb-8 border-b-2 border-primary-color max-w-fit px-4 text-center'>Responsável Geral</h2>
                    <Person personName={person.name} personLink={person.link} personImage={person.image} personRole={"Professor Responsável"} />
                </div>
                <div className='flex flex-col py-8 px-6 mx-auto max-w-screen-xl lg:px-8  items-center'>
                    <h2 className='text-2xl font-semibold mb-8 border-b-2 border-primary-color max-w-fit px-4 text-center'>Colaboradores</h2>
                    <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        <Person personName={person.name} personLink={person.link} personImage={person.image} personRole={"Colaborador"}/>
                        <Person personName={person.name} personLink={person.link} personImage={person.image} personRole={"Colaborador"}/>
                        <Person personName={person.name} personLink={person.link} personImage={person.image} personRole={"Colaborador"}/>
                        <Person personName={person.name} personLink={person.link} personImage={person.image} personRole={"Colaborador"}/>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Team