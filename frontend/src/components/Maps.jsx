import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useFuncionarios } from "../hooks/useFuncionarios";

const Maps = () => {
  const { dados } = useFuncionarios();

  const funcionariosComLocalizacao = dados.filter(
    (funcionario) =>
      funcionario.localizacao &&
      funcionario.localizacao.compartilhando === true &&
      funcionario.localizacao.latitude != null &&
      funcionario.localizacao.longitude != null,
  );

  return (
    <MapContainer
      center={[-22.2040405, -49.9839115]}
      zoom={11}
      scrollWheelZoom={false}
      className="h-100 w-full border-[#D2D2D2] border"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {funcionariosComLocalizacao.map((funcionario) => (
        <Marker
          key={funcionario.id}
          position={[
            funcionario.localizacao.latitude,
            funcionario.localizacao.longitude,
          ]}
        >
          <Popup>
            <strong>{funcionario.nome}</strong>
            <br />
            {funcionario.obra?.nome}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Maps;
