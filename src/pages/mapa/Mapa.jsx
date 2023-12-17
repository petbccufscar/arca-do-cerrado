import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapa.css';

const Mapa = () => {
    const imageBounds = [
        [71.2831, -172.6875],
        [165.65, -81.637]
    ];

    const infos = [
        {
            id: 1,
            nome: 'Planta 1',
            nomeCientifico: 'Plantus planta',
            imagePath: './src/assets/plantas/palmeira.png',
            posicao: [80, -126.633],
            link: '/especies'
        },
        {
            id: 2,
            nome: 'Planta 2',
            nomeCientifico: 'Plantis plantu',
            imagePath: './src/assets/plantas/plantapotes.png',
            posicao: [82, -126.633],
            link: '/especies'
        }
    ]

    return (
        <div className='mapaInterativo'>
            <div className='titulo'>
                <h1> MAPA INTERATIVO</h1>
            </div>
            <MapContainer
                center={[80.2, -126.633]}
                zoom={4}
                style={{ height: '800px', width: '80%' }}
            >

                <ImageOverlay
                    url="./src/assets/map/mapa2.png"
                    bounds={imageBounds}
                />

                {infos.map(info => (
                    <Marker key={info.id} position={info.posicao}>
                        <Popup>
                            <div className='conteudoPopup'>
                                <img src={info.imagePath} alt={info.nome} style={{ maxWidth: '100%' }} />
                                <h3>{info.nome}</h3>
                                <p>{info.nomeCientifico}</p>
                                <a href={info.link}>Leia mais</a>
                            </div>
                        </Popup>
                    </Marker>
                 ))}


            </MapContainer> 
            <div className='mapaDescricao'>
                <h2>Sobre o Mapa Interativo</h2>
                <p>Este mapa tem como o intuito te permitir conhecer o projeto Arca do Cerrado de maneira mais próxima, o utilize para explorar
                    cada uma das espécies presentes.
                </p>
                <p>
                    Utilize o zoom e pings para analisar a Arca do Cerrado detalhadamente e obter mais informações sobre as espécies nelas.
                </p>
            </div>
        </div>
    );
};

export default Mapa