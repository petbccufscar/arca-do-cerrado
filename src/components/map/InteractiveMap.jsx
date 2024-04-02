import React, { useRef } from 'react';
import { MapContainer, ImageOverlay, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define as dimensões do mapa e a imagem
const bounds = [[0, 0], [1280, 350]]; // Troquei a ordem dos limites
const imageUrl = './src/assets/map/mapa_mesclado.png';

// Estilos para a imagem
const imageStyle = {
  opacity: 0.7,
  width: '100%',
  height: '100%'
};

// Componente do mapa
const InteractiveMap = () => {
  const mapRef = useRef(null);

  const handleMapInit = (map) => { 
    // Definir o centro e o zoom do mapa aqui
    map.setView([0, 0], 0);
  };

  return (
    <MapContainer
      ref={mapRef}
      style={{ height: '904px', width: '1280px' }}
      center={[-21.9802, -47.8812]} 
      zoom={15}
      //whenCreated={handleMapInit} // Chame a função whenCreated para definir o centro e o zoom do mapa
    >
      <ImageOverlay
        url={imageUrl}
        bounds={bounds}
        stylie={imageStyle}
      />
    </MapContainer>
  );
}

export default InteractiveMap;
