import SobreMim from "./pages/SobreMim";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "pages/Home/Post";
import NaoEncontrada from "components/NaoEncontrada";
import ScrollToTop from "components/ScrollToTop";

console.log(window.location);


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
