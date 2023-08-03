import SobreMim from "./pages/SobreMim";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";

console.log(window.location);


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Pagina nao encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
