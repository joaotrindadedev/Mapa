import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { api } from "../server/api";

const Funcionarios = () => {
  const [estado, setEstado] = useState(false);
  const [funcs, setFuncs] = useState([])

  const EventFuncionario = async () => {
    const response = await api.get("/funcionario")
    setFuncs(response.data)
  }

  useEffect(() => {
    EventFuncionario()
  }, [])

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
          className="w-100 h-9 bg-[#235BC6] text-white text-[16px] rounded-[5px] cursor-pointer transition active:opacity-80"
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

      {funcs.map((i) => (
          <div
            key={i.id}
            className="grid grid-cols-4 pl-3.75 h-12.5 w-full items-center border-b border-[#D2D2D2]"
          >
            <p>{i.nome}</p>
            <p>{i.obra}</p>
            <p>{i.cpf}</p>

            <button className="text-[#235BC6] text-[14px] w-[35px] cursor-pointer">
              Editar
            </button>
          </div>
        ))}
        
      </div>
      <p className="text-[#6A6A6A] text-[14px] mt-4">
        {funcs.length} funcionários cadastrados
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
