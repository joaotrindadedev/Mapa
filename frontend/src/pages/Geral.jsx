const Geral = () => {
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

  const max = test.slice(0, 3);
  return (
    <div className="p-7.5">
      <h1 className="text-[#292929] text-[22px] font-bold">Visão Geral</h1>
      <p className="text-[#6A6A6A] text-[14px]">
        Resumo da localização da equipe neste momento.
      </p>
      <div className="flex gap-20 border-b border-[#D2D2D2] mt-7.5 pb-7.5">
        <div className="min-w-50">
          <strong className="text-[#292929] text-[26px] font-bold">{3}</strong>
          <p className="text-[#6A6A6A] text-[14px] mt-1.5">
            Funcionários cadastrados
          </p>
        </div>
        <div className="min-w-50">
          <strong className="text-[#292929] text-[26px] font-bold">{2}</strong>
          <p className="text-[#6A6A6A] text-[14px] mt-1.5">
            Compartilhando localização.
          </p>
        </div>
        <div className="min-w-50">
          <strong className="text-[#292929] text-[26px] font-bold">{1}</strong>
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
            <p>{i.local}</p>
            <p>{i.min}</p>
          </div>
        ))}
      </div>
      <button className="w-28.75 h-8 bg-[#235BC6] text-white text-[14px] rounded-[5px] mt-6.25">
        Abrir mapa
      </button>
    </div>
  );
};

export default Geral;
