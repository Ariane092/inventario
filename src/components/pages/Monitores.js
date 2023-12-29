import Container from "../forms/Container";
import Cadastro from "./Cadastro";


function Monitores(){
    return(
        <Container title="Cadastro de Monitores" btnText="Enviar">
            <Cadastro />
        </Container>

    );
}

export default Monitores;