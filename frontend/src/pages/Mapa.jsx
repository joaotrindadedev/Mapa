import { useState } from "react";
import Maps from "../components/Maps";

const Mapa = () => {
  const [selecionado, setSelecionado] = useState();

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
  ];

  const funSelect = test.find((i) => i.id === selecionado);

  return (
    <div className="p-7.5">
      <h1 className="text-[#292929] text-[22px] font-bold">
        Localização da equipe
      </h1>
      <p className="text-[#6A6A6A] text-[14px]">
        Veja onde a equipe está e há quanto tempo permanece no local.
      </p>
      <div className="flex gap-7.5 mt-7.5">
        <div className="max-w-172.5 w-full">
          <Maps />
          <p className="text-[#6A6A6A] text-[12px] mt-2.5">
            A localização aparece quando o funcionário autoriza o
            compartilhamento.
          </p>
        </div>
        <div>
          <h2 className="text-[#292929] text-[16px] font-bold mb-4">
            Funcionários
          </h2>
          {test.map((i) => (
            <div
              onClick={() => setSelecionado(i.id)}
              className={`flex items-center w-81.25 h-15 ${selecionado === i.id ? "bg-[#F3F3F3]" : "bg-[#FFFFFF]"}`}
              key={i.id}
            >
              <strong className="bg-[#38875A] w-2 h-2 rounded-full mx-2.5" />
              <div>
                <p className="text-[15px] font-bold text-[#292929]">{i.nome}</p>
                <p className="text-[13px] text-[#6A6A6A]">
                  {i.local} • {i.min}
                </p>
              </div>
            </div>
          ))}
          <div className="bg-[#D2D2D2] h-px w-full my-2.5" />
          {funSelect && (
            <div className="text-[14px] font-normal text-[#292929]">
              <p className="font-bold text-[#292929] mb-2.5">
                Selecionado: {funSelect.nome}
              </p>
              <p>Local: {funSelect.local}</p>
              <p>Chegada: {funSelect.min}</p>
              <p>Tempo no local: {funSelect.min}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mapa;
