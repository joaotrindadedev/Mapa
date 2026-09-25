import { useEffect, useState } from "react";
import { api } from "../server/api";

export const useFuncionarios = () => {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  const buscarDados = async () => {
    try {
      setLoading(true);

      const funcionariosResponse = await api.get("/funcionarios");
      const obrasResponse = await api.get("/obras");
      const localizacoesResponse = await api.get("/localizacoes");
      const pontosResponse = await api.get("/pontos");

      const funcionarios = funcionariosResponse.data;
      const obras = obrasResponse.data;
      const localizacoes = localizacoesResponse.data;
      const pontos = pontosResponse.data;

      const dadosCompletos = funcionarios.map((funcionario) => {
        const obra = obras.find((obra) => obra.id === funcionario.obraId);

        const localizacao = localizacoes.find(
          (local) => local.funcionarioId === funcionario.id,
        );

        const ponto = pontos.find(
          (ponto) => ponto.funcionarioId === funcionario.id,
        );

        return {
          ...funcionario,
          obra,
          localizacao,
          ponto,
        };
      });

      setDados(dadosCompletos);
    } catch (error) {
      setErro(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarDados();
  }, []);

  return {
    dados,
    loading,
    erro,
    buscarDados,
  };
};
