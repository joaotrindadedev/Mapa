import { useEffect, useState } from "react";
import Input from "./Input";
import { api } from "../server/api";

const Modal = ({ estado, setEstado }) => {
  const [obras, setObras] = useState([]);
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [obraId, setObraId] = useState("");
  const [senha, setSenha] = useState();
  const [messagem, setMessagem] = useState();

  const BuscarObras = async () => {
    const response = await api.get("/obras");
    setObras(response.data);
  };

  useEffect(() => {
    BuscarObras();
  }, []);

  const handleSubmit = async () => {
    if (!nome || !cpf || !obraId || !senha) {
      setMessagem("Complete as informações!");
      return;
    }

    try {
      // 1. Cadastra o funcionário
      const response = await api.post("/funcionarios", {
        nome,
        cpf,
        senha,
        obraId,
        tipo: "funcionario",
      });

      // ID que o JSON Server acabou de gerar
      const funcionarioId = response.data.id;

      // 2. Cria uma localização inicial
      await api.post("/localizacoes", {
        funcionarioId,
        latitude: null,
        longitude: null,
        compartilhando: false,
        atualizadoEm: null,
      });

      // 3. Se quiser já criar o registro de ponto também
      await api.post("/pontos", {
        funcionarioId,
        obraId,
        data: null,
        entrada: null,
        saida: null,
      });

      setMessagem("Funcionário cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      setMessagem("Erro ao cadastrar funcionário.");
    }
  };

  return (
    <div
      className={`w-250 bg-white h-100 flex flex-col justify-center items-center rounded-[5px] ${
        estado ? "visible" : "hidden"
      }`}
    >
      <button
        className="
          absolute ml-[49%] mb-[18%]
          w-10 h-10
          bg-[#235BC6]
          text-white text-[18px]
          rounded-full cursor-pointer
          transition active:opacity-80
        "
        onClick={() => setEstado(false)}
      >
        X
      </button>

      <h1 className="text-[#292929] text-[22px] font-bold">
        Cadastrar funcionário
      </h1>

      <p className="text-[#6A6A6A] text-[14px]">
        Adicione os dados do funcionário e vincule-o à obra.
      </p>

      <div className="grid grid-cols-2 gap-5 mt-5">
        <Input
          id="name"
          label="Nome completo"
          placeholder="Nome e sobrenome"
          type="text"
          onChange={(i) => setNome(i.target.value)}
        />

        <Input
          id="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          type="text"
          onChange={(i) => setCpf(i.target.value)}
        />

        <div className="flex flex-col">
          <label>Obra</label>
          <select
            className="w-100 h-9 border border-[#AFAFAF] pl-3 rounded-[5px]"
            onChange={(e) => setObraId(e.target.value)}
            defaultValue=""
            required
          >
            {obras.map((obras) => (
              <option value={obras.id} key={obras.id}>
                {obras.nome}
              </option>
            ))}
          </select>
        </div>
        <Input
          id="senha"
          label="Senha"
          placeholder="Crie uma senha"
          type="password"
          onChange={(i) => setSenha(i.target.value)}
        />

        <button
          className="w-28.75 h-8 bg-[#235BC6] text-white text-[14px] rounded-[5px] cursor-pointer transition active:opacity-80"
          onClick={() => handleSubmit()}
        >
          Cadastrar
        </button>
        <p className="text-red-600 font-bold">{messagem}</p>
      </div>
    </div>
  );
};

export default Modal;
