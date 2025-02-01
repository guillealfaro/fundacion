import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contactenos from "./pages/Contactenos";
import Admisiones from "./pages/Admisiones";
import Donaciones from "./pages/Donaciones";
import Services from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Contactenos" element={<Contactenos />} />
          <Route path="/Admisiones" element={<Admisiones />} />
          <Route path="/Donaciones" element={<Donaciones />} />
          <Route path="/Servicios" element={<Services />} />
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
