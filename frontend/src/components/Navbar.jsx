import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="flex w-full h-16.25 border-b border-[#D2D2D2] items-center pl-7.5">
      <h1 className="text-[#235BC6] font-bold text-[20px] absolute">
        GeoEquipe
      </h1>
      <ul className="flex gap-11.25 justify-center w-full ml-37.5">
        <Link to="/geral">
          <li
            className={`
            ${location.pathname === "/geral" ? "text-[#235BC6] font-bold text-[16px] border-[#235BC6] border-b-2" : "text-[#555555] font-normal border-0"}
            `}
          >
            Visão geral
          </li>
        </Link>
        <Link to="/mapa">
          <li
            className={`
            ${location.pathname === "/mapa" ? "text-[#235BC6] font-bold text-[16px] border-[#235BC6] border-b-2" : "text-[#555555] font-normal border-0"}
            `}
          >
            Mapa
          </li>
        </Link>
        <Link to="/funcionarios">
          <li
            className={`
            ${location.pathname === "/funcionarios" ? "text-[#235BC6] font-bold text-[16px] border-[#235BC6] border-b-2" : "text-[#555555] font-normal border-0"}
            `}
          >
            Funcionários
          </li>
        </Link>
        <Link to="/relatorios">
          <li
            className={`
            ${location.pathname === "/relatorios" ? "text-[#235BC6] font-bold text-[16px] border-[#235BC6] border-b-2" : "text-[#555555] font-normal border-0"}
            `}
          >
            Relatórios
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;
