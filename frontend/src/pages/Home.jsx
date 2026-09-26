import { useState } from "react";
import { api } from "../server/api";

const Home = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  console.log(usuario);
  const [entrada, setEntrada] = useState(null);
  const [saida, setSaida] = useState(null);

  const Entrada = () => {
    const inicio = new Date().toISOString();
    const response = api.patch(`/pontos/${usuario.ponto.id}`, {
      entrada: inicio,
    });
    setEntrada(response);
  };
  const Saida = () => {
    const fim = new Date();
    const response = api.patch("/pontos", {
      saida: fim,
    });
    setSaida(response);
  };

  return (
    <div>
      <header className="flex w-screen h-16.25 border-b border-[#D2D2D2] items-center pl-7.5">
        <h1 className="text-[#235BC6] font-bold text-[20px] absolute">
          GeoEquipe
        </h1>
      </header>
      <div>
        <p>{entrada}</p>
        <button onClick={() => Entrada()}>Entrada</button>
        <button>Saida</button>
      </div>
    </div>
  );
};

export default Home;
