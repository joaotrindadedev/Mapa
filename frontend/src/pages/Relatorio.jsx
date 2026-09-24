import { useState } from "react";
import Modal from "../components/Modal";
import Input from "../components/Input";

const Relatorio = () => {

  const test = [
    {
      nome: "João",
      local: "Obra",
      min: "15",
      mins: "15",
      id: 1,
    },
    {
      nome: "Pedro",
      local: "Casa",
      min: "10",
      mins: "15",
      id: 2,
    },
    {
      nome: "Pedro",
      local: "Casa",
      min: "10",
      mins: "15",
      id: 3,
    },

  ];

  return (
    <div className="p-7.5">
      <h1 className="text-[#292929] text-[22px] font-bold">Relatórios</h1>

      <p className="text-[#6A6A6A] text-[14px]">
Consulte o tempo de permanência da equipe em cada local.      </p>

      <div className="flex my-6.25 items-end justify-between">
        <div className="flex gap-2 items-end">
          <Input type={"date"} label={"Data"}/>
                  <button
          className="w-20 h-9 bg-[#235BC6] text-white text-[16px] rounded-[5px] cursor-pointer transition active:opacity-80"
        >
          Filtrar
        </button>
        </div>

        <button
          className="w-50 h-9 bg-[#235BC6] text-white text-[16px] rounded-[5px] cursor-pointer transition active:opacity-80"
        >
          Exportar CSV
        </button>
      </div>

      <div>
        <div className="grid grid-cols-5 text-[#292929] text-[14px] font-bold bg-[#F3F3F3] border-[#D2D2D2] border w-full h-10 items-center pl-3.75">
          <p>Funcionário</p>
          <p>Local</p>
          <p>Chegada</p>
          <p>Saída</p>
          <p>Tempo no local</p>
        </div>

        {test.map((i) => (
          <div
            key={i.id}
            className="grid grid-cols-5 pl-3.75 h-12.5 w-full items-center border-b border-[#D2D2D2]"
          >
            <p>{i.nome}</p>
            <p>{i.local}</p>
            <p>{i.min}</p>
            <p>{i.mins}</p>
            <p>{i.id}</p>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default Relatorio;
