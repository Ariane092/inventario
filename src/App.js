import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Inventario from "./components/pages/Inventario";
import Relatorios from "./components/pages/Relatorios";
import Cadastro from "./components/pages/Cadastro";
import Login from "./components/pages/Login";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/relatorio" element={<Relatorios />} />
        <Route path="/cadastro" element={<Cadastro />} />
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


