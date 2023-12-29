import Container from "../forms/Container";
import Cadastro from "./Cadastro";

function Escritorio() {
  return (
    <Container title="Cadastro Itens de Escritório" btnText="Enviar">
      <Cadastro />
    </Container>
  );
}

export default Escritorio;
