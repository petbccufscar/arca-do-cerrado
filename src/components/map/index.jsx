import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import MapCard from './mapCard/MapCard';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';

import ImagemMapa from '../../assets/map/mapa_mesclado.png';

const Mapa = ({ species, filter }) => {
    const [map, setMap] = useState(null);
    const [cluster, setCluster] = useState(null);

    useEffect(() => {
        // Cria o mapa Leaflet com CRS.Simple quando o componente é montado
        const leafletMap = L.map('map', {
            crs: L.CRS.Simple,
            minZoom: -1,
            maxZoom: 3,
            zoomSnap: 0.5,
            maxBounds: [
                [-1000, -1000], // Canto sudoeste dos limites máximos
                [2000, 2000]    // Canto nordeste dos limites máximos
            ],
        });

        // Define os limites da imagem
        const bounds = [
            [0, 0],
            [904, 1280]
        ];

        // Cria a imagem overlay e adiciona ao mapa
        const image = L.imageOverlay(ImagemMapa, bounds);
        image.addTo(leafletMap);

        // Cria um cluster de marcadores
        const markerCluster = L.markerClusterGroup({
            disableClusteringAtZoom: 2,
        });
        setCluster(markerCluster);

        // Ajusta o mapa para que a imagem ocupe toda a visualização
        leafletMap.fitBounds(bounds);

        // Define o mapa criado no estado
        setMap(leafletMap);

        // Retorna uma função de limpeza para remover o mapa quando o componente é desmontado
        return () => {
            leafletMap.remove();
        };
    }, []);

    useEffect(() => {
        // Adiciona marcadores ao cluster de marcadores quando o mapa e as espécies estiverem disponíveis
        if (map && species && cluster) {
            let speciesWithId = species;
            if(filter){
                speciesWithId = species.filter(specie => 
                    specie.id == filter
                )
            }

            // Filtra apenas as espécies que têm posições definidas e não são nulas
            const speciesWithPositions = speciesWithId.filter(specieWithId =>
                specieWithId.coordenadas.length > 0 
            );


            function adjustPosition(x, y) {
                return [(y*15.85) + 167, (x*15.85) + 148.5];
            }

            // Limpa o cluster de marcadores
            cluster.clearLayers();

            
            speciesWithPositions.forEach(specie => {
                const popupContent = ReactDOMServer.renderToString(<MapCard specie={specie} />);


                specie.coordenadas.forEach(coordenada => {
                    let marker = L.marker(adjustPosition(coordenada.posicao_x, coordenada.posicao_y)); // Cria um marcador
                    marker.bindPopup(popupContent); // Define um popup para o marcador
                    cluster.addLayer(marker); // Adiciona o marcador ao cluster de marcadores
                })
                
            });

            // Adiciona o cluster de marcadores ao mapa
            map.addLayer(cluster);
        }
    }, [map, species, cluster]); // Este efeito é executado sempre que os estados 'map', 'species' ou 'cluster' mudarem

    return (
        <div id="map" style={{ width: '80%', height: '400px' }}></div>
    );
};

export default Mapa;
