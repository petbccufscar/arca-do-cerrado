import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';

import MapCard from './MapCard';
import ImagemMapa from '../../assets/map/mapa_mesclado.png';
import PinIcon from '../../assets/map/pin-icon.png';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';

const Mapa = ({ species, filter }) => {
    const [map, setMap] = useState(null);
    const [cluster, setCluster] = useState(null);

    useEffect(() => {
        const leafletMap = L.map('map', {
            crs: L.CRS.Simple,
            minZoom: -1,
            maxZoom: 3,
            zoomSnap: 0.5,
            maxBounds: [
                [0, 0],
                [1504, 1880]
            ],
        });

        const bounds = [
            [0, 0],
            [904, 1280]
        ];

        const image = L.imageOverlay(ImagemMapa, bounds);
        image.addTo(leafletMap);

        const markerCluster = L.markerClusterGroup({
            disableClusteringAtZoom: 2,
        });
        setCluster(markerCluster);

        leafletMap.fitBounds(bounds);
        setMap(leafletMap);

        // 📌 Criando um botão para resetar o mapa
        const ResetControl = L.Control.extend({
            options: {
                position: 'topright'
            },

            onAdd: function () {
                const container = L.DomUtil.create('div', 'leaflet-control reset-map-btn');

                const button = L.DomUtil.create('button', '', container);
                button.innerHTML = '🔄';
                button.style.width = '40px';
                button.style.height = '40px';
                button.style.fontSize = '20px';
                button.style.textAlign = 'center';
                button.style.cursor = 'pointer';
                button.style.background = '#fff';
                button.style.border = '2px solid #ccc';
                button.style.borderRadius = '5px';
                button.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.2)';
                button.style.display = 'flex';
                button.style.alignItems = 'center';
                button.style.justifyContent = 'center';
                button.style.padding = '5px';

                // Impede propagação para evitar conflitos no mapa
                L.DomEvent.disableClickPropagation(button);

                container.onclick = function () {
                    leafletMap.fitBounds(bounds);
                };

                return container;
            }
        });

        leafletMap.addControl(new ResetControl());

        return () => {
            leafletMap.remove();
        };
    }, []);


    useEffect(() => {
        if (map && species && cluster) {
            let speciesWithId = species;
            if (filter) {
                speciesWithId = species.filter(specie =>
                    specie.id == filter
                );
            }

            const speciesWithPositions = speciesWithId.filter(specieWithId =>
                specieWithId.coordenadas.length > 0
            );

            function adjustPosition(x, y) {
                return [(y * 15.85) + 167, (x * 15.85) + 148.5];
            }

            const customIcon = L.icon({
                iconUrl: PinIcon,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [0, -41],
            });

            cluster.clearLayers();

            speciesWithPositions.forEach(specie => {
                const popupContent = ReactDOMServer.renderToString(<MapCard specie={specie} />);

                specie.coordenadas.forEach(coordenada => {
                    let marker = L.marker(adjustPosition(coordenada.posicao_x, coordenada.posicao_y), { icon: customIcon });
                    marker.bindPopup(popupContent); // Define um popup para o marcador
                    cluster.addLayer(marker); // Adiciona o marcador ao cluster de marcadores
                })
            });

            map.addLayer(cluster);
        }
    }, [map, species, cluster, filter]);

    return (
        <div id="map" className="w-full h-[400px]"></div>
    );
};

export default Mapa;
