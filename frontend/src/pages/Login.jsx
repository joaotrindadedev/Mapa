import { Link } from "react-router-dom";
import Input from "../components/Input";

const Login = () => {
  return <div className="w-screen h-screen flex flex-col items-center justify-center">

    <header className="flex w-screen h-16.25 border-b border-[#D2D2D2] items-center pl-7.5">
      <h1 className="text-[#235BC6] font-bold text-[20px] absolute">
        GeoEquipe
      </h1> 
    </header>

      <div className="flex h-[calc(100vh-65px)] flex-col justify-center">
      <div className="mb-6">
      <h1 className="text-[#292929] text-[22px] font-bold">Funcionários</h1>

      <p className="text-[#6A6A6A] text-[14px]">
        Cadastro básico das pessoas que fazem parte da equipe.
      </p>
      </ div>

      <div className="flex flex-col gap-5 items-center">
      <Input label={"CPF"} placeholder={"Digite seu CPF"} type={"number"}/>
      <Input label={"Senha"} placeholder={"Digite sua senha"} type={"password"}/>
        <button
          className="w-100 h-9 bg-[#235BC6] text-white text-[16px] rounded-[5px] cursor-pointer transition active:opacity-80"
        >
          <Link to="/geral">Entrar</Link>
        </button>

    </div>
    </div>
    </div>
};

export default Login;