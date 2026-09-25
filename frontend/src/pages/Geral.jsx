import { useFuncionarios } from "../hooks/useFuncionarios";
import { Link } from "react-router-dom";

const Geral = () => {
  const { dados } = useFuncionarios();

  const max = dados.slice(1, 4);
  const loc = dados.filter((i) => i.localizacao);
  return (
    <div className="p-7.5">
      <h1 className="text-[#292929] text-[22px] font-bold">Visão Geral</h1>
      <p className="text-[#6A6A6A] text-[14px]">
        Resumo da localização da equipe neste momento.
      </p>
      <div className="flex gap-20 border-b border-[#D2D2D2] mt-7.5 pb-7.5">
        <div className="min-w-50">
          <strong className="text-[#292929] text-[26px] font-bold">
            {dados.slice(1).length}
          </strong>
          <p className="text-[#6A6A6A] text-[14px] mt-1.5">
            Funcionários cadastrados
          </p>
        </div>
        <div className="min-w-50">
          <strong className="text-[#292929] text-[26px] font-bold">
            {loc.length}
          </strong>
          <p className="text-[#6A6A6A] text-[14px] mt-1.5">
            Compartilhando localização.
          </p>
        </div>
        <div className="min-w-50">
          <strong className="text-[#292929] text-[26px] font-bold">
            {dados.slice(1).length - loc.length}
          </strong>
          <p className="text-[#6A6A6A] text-[14px] mt-1.5">Sem localização.</p>
        </div>
      </div>

      <div>
        <h3 className="text-[#292929] text-[16px] font-bold my-5">
          Situação da equipe
        </h3>
        <div className="grid grid-cols-3 text-[#292929] text-[14px] font-bold bg-[#F3F3F3] border-[#D2D2D2] border w-full h-10 items-center pl-3.75">
          <p>Funcionário</p>
          <p>Local</p>
          <p>Situação</p>
        </div>
        {max.map((i) => (
          <div
            key={i.id}
            className="grid grid-cols-3 pl-3.75 h-12.5 w-full items-center border-b border-[#D2D2D2]"
          >
            <p>{i.nome}</p>
            <p>{i.obra.nome}</p>
            <p>{i.localizacao?.compartilhando ? "Online" : "Offline"}</p>
          </div>
        ))}
      </div>
      <button className="w-28.75 h-8 bg-[#235BC6] text-white text-[14px] rounded-[5px] mt-6.25">
        <Link to="/mapa">Abrir mapa</Link>
      </button>
    </div>
  );
};

export default Geral;
