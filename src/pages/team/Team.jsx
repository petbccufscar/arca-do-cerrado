import React from 'react'
import './Team.css'

const Person = ({ personImage, personName, personDesc }) => {
    return (
        <div className='person'>
            <a href="#">
                <img src={personImage} className='person-image' alt={`${personName} Image`} />
            </a>
            <h3>{personName}</h3>
            <p>{personDesc}</p>
        </div>
    )
}

const Team = () => {
    const professor = {
        name: "John Doe",
        image: "https://img.freepik.com/fotos-gratis/feliz-jovem-aluna-segurando-cadernos-de-cursos-e-sorrindo-para-a-camera-em-pe-com-roupas-de-primavera-contra-um-fundo-azul_1258-70161.jpg"
    }

    return (
        <div className='team'>
            <h1>Quem somos</h1>
            <section className='main'>
                <section className='content'>
                    <h2>Responsável Geral</h2>
                    <Person personImage={professor.image} personName={professor.name} personDesc={"Professor"} />
                </section>
                <section className='content'>
                    <h2>Participantes</h2>
                    <div className='participants'>
                        <Person personImage={professor.image} personName={professor.name} personDesc={"Colaborador"} />
                        <Person personImage={professor.image} personName={professor.name} personDesc={"Colaborador"} />
                        <Person personImage={professor.image} personName={professor.name} personDesc={"Colaborador"} />
                    </div>
                </section>
            </section>
        </div>

    )
}

export default Team