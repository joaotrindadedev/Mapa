import { useEffect, useState } from "react";
import { api } from "../server/api";
import { useFuncionarios } from "../hooks/useFuncionarios";

const Home = () => {
  const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));

  const { dados, loading, buscarDados } = useFuncionarios();

  const usuario = dados.find(
    (funcionario) => funcionario.id === usuarioLocal.id,
  );

  const [entrada, setEntrada] = useState(null);
  const [saida, setSaida] = useState(null);
  const [tempoTrabalhado, setTempoTrabalhado] = useState(0);

  const Entrada = async () => {
    if (!usuario?.ponto) {
      console.log("Ponto não encontrado");
      return;
    }

    const inicio = new Date().toISOString();

    await api.patch(`/pontos/${usuario.ponto.id}`, {
      entrada: inicio,
      saida: null,
    });

    await api.patch(`/localizacoes/${usuario.localizacao.id}`, {
      compartilhando: true,
      latitude: -22.227446,
      longitude: -49.935136,
    });

    setEntrada(inicio);
    setSaida(null);
    setTempoTrabalhado(0);

    buscarDados();
  };

  const Saida = async () => {
    if (!usuario?.ponto || !entrada) {
      return;
    }

    const fim = new Date().toISOString();

    const total = new Date(fim).getTime() - new Date(entrada).getTime();

    await api.patch(`/pontos/${usuario.ponto.id}`, {
      saida: fim,
      total: total,
    });

    await api.patch(`/localizacoes/${usuario.localizacao.id}`, {
      compartilhando: false,
      latitude: null,
      longitude: null,
    });

    setSaida(fim);
    setTempoTrabalhado(total);

    buscarDados();
  };

  useEffect(() => {
    if (!usuario?.ponto) return;

    setEntrada(usuario.ponto.entrada);
    setSaida(usuario.ponto.saida);
    setTempoTrabalhado(usuario.ponto.total || 0);
  }, [usuario]);

  useEffect(() => {
    if (!entrada || saida) return;

    const intervalo = setInterval(() => {
      const agora = new Date().getTime();
      const inicio = new Date(entrada).getTime();

      setTempoTrabalhado(agora - inicio);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [entrada, saida]);

  const formatarTempo = (tempo) => {
    const segundosTotais = Math.floor(tempo / 1000);

    const horas = Math.floor(segundosTotais / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(
      2,
      "0",
    )}:${String(segundos).padStart(2, "0")}`;
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <header className="flex w-screen h-16.25 border-b border-[#D2D2D2] items-center pl-7.5">
        <h1 className="text-[#235BC6] font-bold text-[20px]">GeoEquipe</h1>
      </header>

      <div className="w-full h-[calc(100vh-65px)] flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl font-bold">{formatarTempo(tempoTrabalhado)}</h2>

        <div className="flex gap-5">
          <button
            onClick={Entrada}
            disabled={entrada && !saida}
            className="bg-green-400 w-30 h-10 rounded-[5px] cursor-pointer"
          >
            Entrada
          </button>

          <button
            onClick={Saida}
            disabled={!entrada || saida}
            className="bg-red-400 w-30 h-10 rounded-[5px] cursor-pointer"
          >
            Saída
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
