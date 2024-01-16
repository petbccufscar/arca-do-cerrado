import 'leaflet/dist/leaflet.css';
import './InteractiveMap.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import React from 'react';

import { MapContainer, Marker, Popup, ImageOverlay } from 'react-leaflet';

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
            style={{ height: '800px', width: '80%' }}
        >

            <ImageOverlay
                url="./src/assets/map/mapa2.png"
                bounds={imageBounds}
            />

            {species.map(specie => (
                <Marker key={specie.id} position={specie.position} icon={customIcon}>
                    <Popup>
                        <div className='popup'>
                            <img src={`./src/assets/species/${specie.id}.png`} alt={specie.name} style={{ maxWidth: '100%' }} />
                            <h3>{specie.name}</h3>
                            <p>{specie.scientificName}</p>
                            <a href={`/species/${specie.id}`}>Leia mais</a>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default InteractiveMap