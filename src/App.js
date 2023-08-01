import SobreMim from "./pages/SobreMim";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

console.log(window.location);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Pagina nao encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
