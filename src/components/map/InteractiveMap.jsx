import 'leaflet/dist/leaflet.css';
import './InteractiveMap.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import MapCard from './mapCard/MapCard';

import React from 'react';

import { MapContainer, Marker, Popup, ImageOverlay } from 'react-leaflet';

const posix = (ponto) => {
    const coord = 1.095 * ponto - 162.8;
    return coord;
}

const posiy = (ponto) => {
    const coord = -0.23 * (ponto + 0.9) + 83.7;
    return coord;
}

const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [16, 25],
    iconAnchor: [16, 50],
    popupAnchor: [0, -25],
    shadowUrl: markerShadow,
    shadowSize: [20, 20],
});

const InteractiveMap = ({ species }) => {
    const imageBounds = [
        [71.2831, -172.6875],
        [165.65, -81.637]
    ];

    return (
        <MapContainer
            center={[80.2, -126.633]}
            zoom={3.5}
            //maxBounds={[[71.2831, -172.6875], [165.65, -81.637]]}
            zoomSnap={0.5}
            maxZoom={6}
            minZoom={3}
            style={{ height: '400px', width: '80%' }}
        >

            <ImageOverlay
                url="./src/assets/map/mapa_mesclado.png"
                bounds={imageBounds}
            />

            {species.map(specie => (
                <Marker key={specie.id} position={[posiy(specie.posicao_y), posix(specie.posicao_x)]} icon={customIcon}>
                    <Popup>
                        <MapCard specie={specie} />
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default InteractiveMap;
