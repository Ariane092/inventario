import Select from "../forms/Select";
import Input from "../forms/Input";
import styles from "./Relatorios.module.css";
import categories from "./dbCadastro";
import { BsFiletypePdf, BsFiletypeCsv } from "react-icons/bs";
import Form from "../forms/Form";


function Relatorios() {
  const showPicBtn = false;

  return (
    <Form title="Relatórios" text="Gerar Relatório" showPicBtn={showPicBtn}>
      <Select name="tipo_produto" text="Tipo Produto" options={categories} />
      <Select name="responsavel" text="Responsável" options={categories} />
      <Select name="projeto" text="Projeto" options={categories} />
      <Select name="status" text="Status" options={categories} />
      <Select name="marca" text="Marca" options={categories} />
      <Select name="modelo" text="Modelo" options={categories} />
      <Select name="memoria" text="Memória" options={categories} />
      <Select name="hd" text="Hard Disk" options={categories} />
      <Select name="processador" text="Processador" options={categories} />
      <div className={styles.input_rel}>
        <BsFiletypePdf className={styles.icons} /> <Input type="radio" text="PDF" />
        <BsFiletypeCsv className={styles.icons} /> <Input type="radio" text="Excel" />
      </div>
    </Form>
  )
}

export default Relatorios;
