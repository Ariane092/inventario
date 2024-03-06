import { useState, useEffect, useRef } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { Button, Radio } from "antd";
import Input from "../forms/Input.js";
import styles from "./Select.module.css";
import axios from "axios";

function Select({ text, name, onChange, value, apiUrl }) {
  const [size, setSize] = useState("default");
  const [options, setOptions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const selectRef = useRef(null);
  
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setOptions(data);
    } catch (error) {
      console.error("Erro ao obter dados da API", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  const handleCreate = async (e, tableName) => {
    e.preventDefault();
    try {
      switch (tableName) {
        case "responsavel":
          await axios.post("http://localhost:3001/responsavel", {
            nome: inputValue,
          });
          break;
        case "projeto":
          await axios.post("http://localhost:3001/projeto", {
            nome: inputValue,
          });
          break;
        case "marca":
          await axios.post("http://localhost:3001/marca", { nome: inputValue });
          break;
        case "modelo":
          await axios.post("http://localhost:3001/modelo", {
            nome: inputValue,
          });
          break;
        case "status":
          await axios.post("http://localhost:3001/status", {
            nome: inputValue,
          });
          break;
        case "memoria":
          await axios.post("http://localhost:3001/memoria", {
            nome: inputValue,
          });
          break;
        case "hard_disk":
          await axios.post("http://localhost:3001/hd", { nome: inputValue });
          break;
        case "processador":
          await axios.post("http://localhost:3001/processador", {
            nome: inputValue,
          });
          break;
        case "office":
          await axios.post("http://localhost:3001/office", {
            nome: inputValue,
          });
          break;
        case "tipo_computadores":
          await axios.post("http://localhost:3001/computadores", {
            nome: inputValue,
          });
          break;
        case "tipo_escritorio":
          await axios.post("http://localhost:3001/escritorio", {
            nome: inputValue,
          });
          break;
        case "tipo_impressoras":
          await axios.post("http://localhost:3001/impressoras", {
            nome: inputValue,
          });
          break;
        case "tipo_monitores":
          await axios.post("http://localhost:3001/monitores", {
            nome: inputValue,
          });
          break;
        default:
          break;
      }
      fetchData();
      setInputValue("");
      setShowPopup(false);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const selectOffsetTop = selectRef.current ? selectRef.current.offsetTop : 0;
  const selectOffsetLeft = selectRef.current ? selectRef.current.offsetLeft : 0;

  return (
    <div className={styles.selects}>
      <label htmlFor={name}>
        {text}:{" "}
        <MdAddCircleOutline
          onClick={() => setShowPopup(true)}
          className={styles.add_button}
        />
      </label>
      <select ref={selectRef} name={name} onChange={onChange} value={value}>
        <option></option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.nome}
          </option>
        ))}
      </select>

      {showPopup && (
        <div
          style={{
            position: "absolute",
            top:
              selectOffsetTop +
              (selectRef.current ? selectRef.current.offsetHeight : 0),
            left: selectOffsetLeft,
            background: "#fff",
            padding: "12px",
            width: "240px",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            borderRadius: "6px",
            zIndex: "9999",
          }}
          className={styles.add_option}
        >
          <Input
            type="text"
            text="Adicionar nova opção"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Radio.Group
            value={size}
            onChange={(e) => setSize(e.target.value)}
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              type="link"
              size={"small"}
              shape="round"
              onClick={handleClose}
            >
              Fechar
            </Button>
              <Button
                type="primary"
                shape="round"
                size={"small"}
                style={{ background: "rgb(55, 119, 87)" }}
                onClick={(e) => handleCreate(e, name)}
              >
                Criar
              </Button>
          </Radio.Group>
        </div>
      )}
    </div>
  );
}

export default Select;
