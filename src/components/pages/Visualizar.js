import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EditOutlined, QrcodeOutlined } from "@ant-design/icons";
import { Button, Radio, Modal } from "antd";
import Label from "../forms/Label.js";
import Editar from "./Editar.js";
import moment from "moment";
import QRCode from "qrcode.react";
import "./Visualizar.css";


function Visualizar() {
  const [size, setSize] = useState("default");
  const [editOpen, setEditOpen] = useState(false);
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/cadastro/${id}`);
        const data = await response.json();
        data.data_compra = moment(data.data_compra).format('DD-MM-YYYY');
        setData(data);
      } catch (error) {
        console.error("Erro ao obter dados da API", error);
      }
    };
    fetchData();
  }, [id]);

  const handleGenerateQRCode = () => {
    const qrCodeValue = `ID: ${data.id}`;
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      qrCodeValue
    )}`;
    const newWindow = window.open();
    const qrCodeHTML = `<html><head><title>QR Code</title></head><body><img src="${qrCodeURL}" alt="QR Code"/></body></html>`;
    newWindow.document.write(qrCodeHTML);
  };

  return (
    <div className="container">
      <div className="form">
        <h4>Equipamentos CEPEA</h4>
        <div className="form-group">       
              <Label text="Processo" value={data.processo} />
              <Label text="Data Compra" value={data.data_compra} />
              <Label text="Responsável" value={data.responsavel} />
              <Label text="Local" value={data.local} />
              <Label text="Usuário" value={data.usuario} />
              <Label text="NF" value={data.nota_fiscal} />
              <Label text="Cód. Doação" value={data.cod_doacao} />
              <Label text="Patrimônio" value={data.patrimonio} />
              <Label text="Projeto" value={data.projeto} />
              <Label text="Status" value={data.status} />
              <Label text="Service Tag" value={data.servicetag} />
              <Label text="Marca" value={data.marca} />
              <Label text="Modelo" value={data.modelo} />
              <Label text="Memória" value={data.memoria} />
              <Label text="Hard Disk" value={data.hard_disk} />
              <Label text="Processador" value={data.processador} />
              <Label text="Office" value={data.office} />
              <Label text="Tipo" value={data.tipo_equipamento} />
              <Label text="Configuração" value={data.configuracao} />
              <Label text="Observação" value={data.observacao} />
        </div>

        <div className="form-btn">
          <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
            <Button
              type="primary"
              shape="default"
              size={"small"}
              style={{ background: "rgb(55, 119, 87)" }}
              onClick={() => setEditOpen(true)}
            >
              <EditOutlined /> Editar
            </Button>
            <Button
              type="primary"
              shape="default"
              size={"small"}
              style={{ margin: 10, background: "rgb(55, 119, 87)" }}
              onClick={handleGenerateQRCode}
            >
              <QrcodeOutlined /> Qr Code
            </Button>
          </Radio.Group>
        </div>
      </div>

      <Modal
        style={{
          top: 20,
        }}
        width={900}
        open={editOpen}
        footer={null}
        onCancel={() => setEditOpen(false)}
      >
        <Editar />
      </Modal>
    </div>
  );
}

export default Visualizar;
