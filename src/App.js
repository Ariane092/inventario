import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Inventario from "./components/pages/Inventario";
import Relatorios from "./components/pages/Relatorios";
import Login from "./components/pages/Login";
import Sidebar from "./components/layout/Sidebar";
import Computadores from "./components/pages/Computadores";
import Impressoras from "./components/pages/Impressoras";
import Monitores from "./components/pages/Monitores";
import Escritorio from "./components/pages/Escritorio";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/computadores" element={<Computadores />} />
        <Route path="/impressoras" element={<Impressoras />} />
        <Route path="/monitores" element={<Monitores />} />
        <Route path="/escritorio" element={<Escritorio />} />
      </Routes>
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


