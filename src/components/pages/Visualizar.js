import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Radio, Modal, App } from "antd";
import Label from "../forms/Label.js";
import styles from "./Cadastro.module.css";
import { EditOutlined, QrcodeOutlined } from "@ant-design/icons";

function Visualizar() {
  const [size, setSize] = useState("default");
  const [editOpen, setEditOpen] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/cadastro/${id}`); 
        const data = await response.json();
        setData(data); 
      } catch (error) {
        console.error("Erro ao obter dados da API", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h4>Equipamentos CEPEA</h4>
        <div className={styles.input_group}>
          <Label text="Processo" name="processo" value={data.processo} />
          <Label text="Data Compra" name="data_compra" value={data.data_compra} />
          <Label text="Responsável" name="responsavel" value={data.responsavel} />
          <Label text="Local" name="local" value={data.local} />
          <Label text="Usuário" name="usuario" value={data.usuario} />
          <Label text="NF" name="nota_fiscal" value={data.nota_fiscal} />
          <Label text="Cód. Doação" name="cod_doacao" value={data.cod_doacao} />
          <Label text="Patrimônio" name="patrimonio" value={data.patrimonio} />
          <Label text="Projeto" name="projeto" value={data.projeto} />
          <Label text="Status" name="status" value={data.status} />
          <Label text="Service Tag" name="servicetag" value={data.servicetag} />
          <Label text="Marca" name="marca" value={data.marca} />
          <Label text="Modelo" name="modelo" value={data.modelo} />
          <Label text="Memória" name="memoria" value={data.memoria} />
          <Label text="Hard Disk" name="hard_disk" value={data.hard_disk} />
          <Label text="Processador" name="processador" value={data.processador} />
          <Label text="Office" name="office" value={data.office} />
          <Label text="Tipo de Equipamento" name="tipo_equipamento" value={data.tipo_equipamento} />
          <Label text="Configuração" name="configuracao" value={data.configuracao} />
          <Label text="Observação" name="observacao" value={data.observacao} />
        </div>
        
        <div className={styles.form_btn}>
          <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
            <Button
              type="primary"
              shape="round"
              size={size}
              style={{ background: "rgb(55, 119, 87)" }}
              onClick={() => setEditOpen(true)}
            >
              <EditOutlined /> Editar
            </Button>
            <Button
              type="primary"
              shape="round"
              size={size}
              style={{ background: "rgb(55, 119, 87)" }}
            >
              <QrcodeOutlined /> Qr Code
            </Button>
          </Radio.Group>
        </div>
      </form>

      <Modal
        title="Editar Equipamento"
        style={{
          top: 20,
        }}
        open={editOpen}
        onOk={() => setEditOpen(false)}
        onCancel={() => setEditOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
}

export default Visualizar;
