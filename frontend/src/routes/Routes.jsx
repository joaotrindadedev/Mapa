import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Geral from "../pages/Geral";
import Mapa from "../pages/Mapa";
import Funcionarios from "../pages/Funcionarios";
import Relatorio from "../pages/Relatorio";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/geral" element={<Geral />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/relatorios" element={<Relatorio />} />
      </Route>
    </Routes>
  );
}
