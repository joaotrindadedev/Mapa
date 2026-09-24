import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { api } from "../server/api";

const Maps = () => {
  const [posicao, SetPosicao] = useState();
  const nav = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        SetPosicao([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        console.error("Erro ao pegar localização");
      },
    );
  };
  useEffect(() => {
    nav();
  }, [!posicao]);

  if (!posicao) {
    return <p>carregando mapa...</p>;
  }

  return (
    <MapContainer
      center={posicao}
      zoom={13}
      scrollWheelZoom={false}
      className="h-100 w-full border-[#D2D2D2] border"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={posicao}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
