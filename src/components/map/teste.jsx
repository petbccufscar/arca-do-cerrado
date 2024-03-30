import { MapContainer, TileLayer, ImageOverlay } from "react-leaflet";

const Teste = () => {
    return (
        <div>
            <MapContainer center={[-21.9802, -47.8812]} zoom={20} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}

export default Teste;