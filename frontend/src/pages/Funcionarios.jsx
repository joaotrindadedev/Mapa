import { useState } from "react";
import Modal from "../components/Modal";

const Funcionarios = () => {
  const [estado, setEstado] = useState(false);

  const test = [
    {
      nome: "João",
      local: "Obra",
      min: "15",
      id: 1,
    },
    {
      nome: "Pedro",
      local: "Casa",
      min: "10",
      id: 2,
    },
    {
      nome: "Pedro",
      local: "Casa",
      min: "10",
      id: 3,
    },
    {
      nome: "Pedro",
      local: "Casa",
      min: "10",
      id: 4,
    },
  ];

  return (
    <div className="p-7.5">
      <h1 className="text-[#292929] text-[22px] font-bold">Funcionários</h1>

      <p className="text-[#6A6A6A] text-[14px]">
        Cadastro básico das pessoas que fazem parte da equipe.
      </p>

      <div className="flex my-6.25 items-center justify-between">
        <input
          type="text"
          className="w-[278px] h-[36px] focus:outline-none border border-[#AFAFAF] pl-[12px]"
          placeholder="Buscar por nome"
        />

        <button
          className="w-[158px] h-[36px] bg-[#235BC6] text-white text-[16px] rounded-[5px] cursor-pointer transition active:opacity-80"
          onClick={() => setEstado(true)}
        >
          Novo funcionário
        </button>
      </div>

      <div>
        <div className="grid grid-cols-4 text-[#292929] text-[14px] font-bold bg-[#F3F3F3] border-[#D2D2D2] border w-full h-10 items-center pl-3.75">
          <p>Funcionário</p>
          <p>Local</p>
          <p>Situação</p>
          <p>Ação</p>
        </div>

        {test.map((i) => (
          <div
            key={i.id}
            className="grid grid-cols-4 pl-3.75 h-12.5 w-full items-center border-b border-[#D2D2D2]"
          >
            <p>{i.nome}</p>
            <p>{i.local}</p>
            <p>{i.min}</p>

            <button className="text-[#235BC6] text-[14px] w-[35px] cursor-pointer">
              Editar
            </button>
          </div>
        ))}
      </div>
      <p className="text-[#6A6A6A] text-[14px] mt-4">
        {3} funcionários cadastrados
      </p>
      {estado && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <Modal estado={estado} setEstado={setEstado} />
        </div>
      )}
    </div>
  );
};

export default Funcionarios;
