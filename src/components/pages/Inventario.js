import {
  LaptopOutlined,
  DesktopOutlined,
  PrinterOutlined,
  PushpinOutlined
} from "@ant-design/icons";
import { PiOfficeChair } from "react-icons/pi";
import Card from "../layout/Card.js";

function Inventario() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
      <Card icon={<LaptopOutlined />} title="Computadores">
        <p>Desktops:</p>
        <p>Notebooks:</p>
        <p>Servidores:</p>
        <p>Nobreaks:</p>
      </Card>
      <Card icon={<PrinterOutlined />} title="Impressoras">
        <p>Impressoras:</p>
        <p>Scanners:</p>
        <p>Fax:</p>
        <p>Fragmentadores:</p>
      </Card>
      <Card icon={<DesktopOutlined />} title="Monitores">
        <p>Monitores:</p>
        <p>Projetores:</p>
      </Card>
      <Card icon={<PiOfficeChair />} title="Escritório">
        <p>Cadeiras:</p>
        <p>Ar Condicionado:</p>
        <p>Mesas:</p>
        <p>Armários:</p>
        <p>Gavetas:</p>
      </Card>
      <Card icon={<PushpinOutlined />} title="Inventário">
        <p>Itens totais:</p>
       
      </Card>
    </div>
  );
}

export default Inventario;
