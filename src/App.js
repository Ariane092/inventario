import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Inventario from "./components/pages/Inventario.js";
import Relatorios from "./components/pages/Relatorios.js";
import Login from "./components/pages/Login.js";
import Sidebar from "./components/layout/Sidebar.js";
import Computadores from "./components/pages/Computadores.js";
import Impressoras from "./components/pages/Impressoras.js";
import Monitores from "./components/pages/Monitores.js";
import Escritorio from "./components/pages/Escritorio.js";

function App() {
  return (
    <Router>
      <Sidebar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/computadores" element={<Computadores />} />
        <Route path="/impressoras" element={<Impressoras />} />
        <Route path="/monitores" element={<Monitores />} />
        <Route path="/escritorio" element={<Escritorio />} />
      </Routes>
      </Sidebar>
    </Router>
  );
}

function LoginPage() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export { App, LoginPage };


