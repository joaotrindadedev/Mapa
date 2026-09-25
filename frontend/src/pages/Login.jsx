import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { api } from "../server/api";

const Login = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const Logar = async () => {
    try {
      const response = await api.get("/funcionarios");
      const usuario = response.data.find(
        (funcionario) =>
          String(funcionario.cpf).trim() === String(cpf).trim() &&
          String(funcionario.senha).trim() === String(senha).trim(),
      );
      if (!usuario) {
        alert("CPF ou senha incorretos");
        return;
      }
      localStorage.setItem("user", JSON.stringify(usuario));

      if (usuario.tipo === "admin") {
        navigate("/geral");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log("Erro:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <header className="flex w-screen h-16.25 border-b border-[#D2D2D2] items-center pl-7.5">
        <h1 className="text-[#235BC6] font-bold text-[20px] absolute">
          GeoEquipe
        </h1>
      </header>

      <div className="flex h-[calc(100vh-65px)] flex-col justify-center">
        <div className="mb-6">
          <h1 className="text-[#292929] text-[22px] font-bold">
            Acesse sua conta
          </h1>

          <p className="text-[#6A6A6A] text-[14px]">
            Entre para acompanhar sua equipe e as obras.
          </p>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <Input
            label="CPF"
            placeholder="Digite seu CPF"
            type="text"
            onChange={(i) => setCpf(i.target.value)}
          />

          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            onChange={(i) => setSenha(i.target.value)}
          />

          <button
            onClick={Logar}
            className="w-100 h-9 bg-[#235BC6] text-white text-[16px] rounded-[5px] cursor-pointer transition active:opacity-80"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
