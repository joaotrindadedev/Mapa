import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const App = () => {
  const [posicao, SetPosicao] = useState();
  const nav = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        SetPosicao([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("Erro ao pegar localização:", error);
      },
    );
  };
  useEffect(() => {
    nav();
  }, [!posicao]);
  console.log(posicao);

  if (!posicao) {
    return <p>Teste</p>;
  }

  return (
    <MapContainer
      center={posicao}
      zoom={13}
      scrollWheelZoom={false}
      className="h-125 w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={posicao}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default App;
