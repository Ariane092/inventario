import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/pages/Home';
import Cadastro from './componentes/pages/Cadastro';
import Relatorio from './componentes/pages/Relatorio';
import Login from './componentes/pages/Login';
import Navbar from './componentes/layout/Navbar';
import Cadone from './componentes/pages/Cadone';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/relatorio" element={<Relatorio />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadone" element={<Cadone />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
