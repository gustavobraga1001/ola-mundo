import SobreMim from "./pages/SobreMim";
import Home from "./pages/Home";

console.log(window.location);

const pagina = window.location.pathname === "/" ? <Home /> : <SobreMim />

function App() {
  return (
    <div className="App">
      {pagina}
    </div>
  );
}

export default App;
