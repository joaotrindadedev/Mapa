import Input from "./Input";

const Modal = ({ estado, setEstado }) => {
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
        />

        <Input id="cpf" label="CPF" placeholder="000.000.000-00" type="text" />

        <Input id="obra" label="Obra" placeholder="Obra centro" type="text" />

        <Input
          id="senha"
          label="Senha"
          placeholder="Crie uma senha"
          type="password"
        />

        <button className="w-28.75 h-8 bg-[#235BC6] text-white text-[14px] rounded-[5px] cursor-pointer transition active:opacity-80">
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
