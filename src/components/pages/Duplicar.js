import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchProvider } from "../pages/FetchProvider.js";
import Projeto from "../forms/Selects/Projeto.js";
import Responsavel from "../forms/Selects/Responsavel.js";
import Marca from "../forms/Selects/Marca.js";
import Modelo from "../forms/Selects/Modelo.js";
import Status from "../forms/Selects/Status.js";
import Memoria from "../forms/Selects/Memoria.js";
import HardDisk from "../forms/Selects/HardDisk.js";
import Processador from "../forms/Selects/Processador.js";
import Office from "../forms/Selects/Office.js";
import TipoComputadores from "../forms/Selects/TipoComputadores.js";
import Processo from "../forms/Inputs/Processo.js";
import DataCompra from "../forms/Inputs/DataCompra.js";
import Local from "../forms/Inputs/Local.js";
import Usuario from "../forms/Inputs/Usuario.js";
import NotaFiscal from "../forms/Inputs/NotaFiscal.js";
import CodDoacao from "../forms/Inputs/CodDoacao.js";
import Patrimonio from "../forms/Inputs/Patrimonio.js";
import ServiceTag from "../forms/Inputs/ServiceTag.js";
import Configuracao from "../forms/Inputs/Configuracao.js";
import Observacao from "../forms/Inputs/Observacao.js";
import "./Cadastro.css";
import { Button, Alert, Space, Form } from "antd";
import { MdLinkedCamera } from "react-icons/md";
import axios from "axios";
import moment from "moment";

function Duplicar() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/cadastro/${id}`);
        const data = response.data;
        // Converte a data_compra para um objeto moment
        data.data_compra = data.data_compra ? moment(data.data_compra) : null;
        setInitialValues(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [id]);

  const onFinish = async (values) => {
    try {
      await axios.post(`http://localhost:3001/cadastro/${id}`, values);
      setSubmitSuccess(true);
      setSubmitError(false);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      setSubmitSuccess(false);
      setSubmitError(true);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Space
        direction="vertical"
        style={{
          width: "100%",
          marginBottom: "10px",
        }}
      >
        {submitSuccess ? (
          <Alert
            message="O equipamento foi duplicado e cadastrado com novo id."
            type="success"
            showIcon
          />
        ) : submitError ? (
          <Alert message="Erro ao editar equipamento." type="error" showIcon />
        ) : null}
      </Space>

      <h2>Copiar Equipamento</h2>

      <FetchProvider>
        {initialValues && (
          <Form
            className="form-inputs"
            initialValues={initialValues}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Processo />
            <DataCompra />
            <Responsavel isVisibleAdd = {false} />
            <Local />
            <Usuario />
            <NotaFiscal />
            <CodDoacao />
            <Patrimonio />
            <Projeto isVisibleAdd = {false} />
            <Status isVisibleAdd = {false} />
            <ServiceTag />
            <Marca isVisibleAdd = {false} />
            <Modelo isVisibleAdd = {false} />
            <Memoria isVisibleAdd = {false} />
            <HardDisk isVisibleAdd = {false} />
            <Processador isVisibleAdd = {false} />
            <Office isVisibleAdd = {false} />
            <TipoComputadores isVisibleAdd = {false} />
            <Configuracao />
            <Observacao />

            <div>
              <Button
                type="primary"
                shape="default"
                style={{ background: "rgb(55, 119, 87)" }}
                htmlType="submit"
              >
                Enviar
              </Button>
              <Button
                type="primary"
                shape="default"
                style={{ margin: 10, background: "rgb(55, 119, 87)" }}
                icon={<MdLinkedCamera />}
              />
            </div>
          </Form>
        )}
      </FetchProvider>
    </div>
  );
}

export default Duplicar;










































// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./Cadastro.css";
// import { Button, Radio, Alert, Space, Input } from "antd";
// import { MdLinkedCamera } from "react-icons/md";
// import axios from "axios";

// function Duplicar() {
//   const [size, setSize] = useState("default");
//   const [duplicateSuccess, setDuplicateSuccess] = useState(false);
//   const [duplicateError, setDuplicateError] = useState(false);
//   const { id } = useParams();
//   const [formData, setFormData] = useState({
//     processo: "",
//     data_compra: "",
//     responsavel: "",
//     local: "",
//     usuario: "",
//     nota_fiscal: "",
//     cod_doacao: "",
//     patrimonio: "",
//     projeto: "",
//     status: "",
//     servicetag: "",
//     tipo_equipamento: "",
//     marca: "",
//     modelo: "",
//     memoria: "",
//     hard_disk: "",
//     processador: "",
//     office: "",
//     configuracao: "",
//     observacao: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/cadastro/${id}`);
//         const data = await response.json();
//         setFormData({
//           ...data
//         });
//       } catch (error) {
//         console.error("Erro ao obter dados da API", error);
//       }
//     };
//     fetchData();
//   }, [id]);

//   const handleDuplicate = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3001/cadastro", formData);
//       setDuplicateSuccess(true);
//       setTimeout(() => {
//         window.location.reload(); 
//     }, 2000);
//     } catch (error) {
//       console.error("Error:", error);
//       setDuplicateError(true);
//     }
//   };

//   return (
//     <>
//         <form onSubmit={handleDuplicate}>
//           <Space
//             direction="vertical"
//             style={{
//               width: '100%',
//               marginTop: '10px',
//               marginBottom: '10px'
//             }}
//           >
//             {duplicateSuccess ? (
//               <Alert
//                 message="O equipamento foi duplicado e cadastrado com novo id."
//                 type="success"
//                 showIcon
//               />
//             ) : duplicateError ? (
//               <Alert
//                 message="Erro ao cadastrar equipamento."
//                 type="error"
//                 showIcon
//               />
//             ) : null}
//           </Space>
//           <h2>Duplicar e Cadastrar</h2>
//           <div className="input-group">
//             <Input
//               type="text"
//               text="Processo"
//               name="processo"
//               value={formData.processo}
//               onChange={handleChange}
//             />
//             {/* <Input
//               type="date"
//               text="Data Compra"
//               name="data_compra"
//               value={formData.data_compra}
//               onChange={handleChange}
//             /> */}
//             <Select
//               name="responsavel"
//               text="Responsável"
//               apiUrl="http://localhost:3001/responsavel"
//               value={formData.responsavel}
//               onChange={handleChange}
//             />
//             <Input
//               type="text"
//               text="Local"
//               name="local"
//               value={formData.local}
//               onChange={handleChange}
//             />
//             <Input
//               type="text"
//               text="Usuário"
//               name="usuario"
//               placeholder="Senão, digite ROTATIVO"
//               value={formData.usuario}
//               onChange={handleChange}
//             />
//             <Input
//               type="number"
//               text="NF"
//               name="nota_fiscal"
//               value={formData.nota_fiscal}
//               onChange={handleChange}
//             />
//             <Input
//               type="number"
//               text="Cód. Doação"
//               name="cod_doacao"
//               value={formData.cod_doacao}
//               onChange={handleChange}
//             />
//             <Input
//               type="number"
//               text="Patrimônio"
//               name="patrimonio"
//               value={formData.patrimonio}
//               onChange={handleChange}
//             />
//             <Select
//               name="projeto"
//               text="Projeto"
//               apiUrl="http://localhost:3001/projeto"
//               value={formData.projeto}
//               onChange={handleChange}
//             />
//             <Select
//               name="status"
//               text="Status"
//               apiUrl="http://localhost:3001/status"
//               value={formData.status}
//               onChange={handleChange}
//             />
//             <Input
//               type="text"
//               text="Service Tag"
//               name="servicetag"
//               value={formData.servicetag}
//               onChange={handleChange}
//             />
//             <Select
//               name="marca"
//               text="Marca"
//               apiUrl="http://localhost:3001/marca"
//               value={formData.marca}
//               onChange={handleChange}
//             />
//             <Select
//               name="modelo"
//               text="Modelo"
//               apiUrl="http://localhost:3001/modelo"
//               value={formData.modelo}
//               onChange={handleChange}
//             />
//             <Select
//               name="memoria"
//               text="Memória"
//               apiUrl="http://localhost:3001/memoria"
//               value={formData.memoria}
//               onChange={handleChange}
//             />
//             <Select
//               name="hard_disk"
//               text="Hard Disk"
//               apiUrl="http://localhost:3001/hd"
//               value={formData.hard_disk}
//               onChange={handleChange}
//             />
//             <Select
//               name="processador"
//               text="Processador"
//               apiUrl="http://localhost:3001/processador"
//               value={formData.processador}
//               onChange={handleChange}
//             />
//             <Select
//               name="office"
//               text="Office"
//               apiUrl="http://localhost:3001/office"
//               value={formData.office}
//               onChange={handleChange}
//             />
//             <Select
//               name="tipo_equipamento"
//               text="Tipo de Equipamento"
//               apiUrl="http://localhost:3001/equipamento"
//               value={formData.tipo_equipamento}
//               onChange={handleChange}
//             />
//             <Input
//               type="text"
//               text="Configuração"
//               name="configuracao"
//               value={formData.configuracao}
//               onChange={handleChange}
//             />
//             <Input
//               type="textarea"
//               text="Observação"
//               name="observacao"
//               value={formData.observacao}
//               onChange={handleChange}
//             />
//           </div>
//         </form>
//         <div className="form-btn">
//             <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
//               <Button
//                 type="primary"
//                 shape="default"
//                 size={size}
//                 style={{ background: "rgb(55, 119, 87)" }}
//                 htmlType="submit"
//               >
//                 Enviar
//               </Button>
//               <Button
//                 type="primary"
//                 size={size}
//                 shape="default"
//                 style={{ margin: 10, background: "rgb(55, 119, 87)" }}
//                 icon={<MdLinkedCamera />}
//               ></Button>
//             </Radio.Group>
//           </div>
//     </>
//   );
// }

// export default Duplicar;
