import { useState, useEffect, useRef } from "react";
import styles from "./Select.module.css";
import { MdAddCircleOutline } from "react-icons/md";
import Input from "../forms/Input.js";
import { Button, Radio } from "antd";

function Select({ text, name, onChange, value, apiUrl }) {
  const [size, setSize] = useState("default");
  const [options, setOptions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const selectRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error("Erro ao obter dados da API", error);
      }
    };
    fetchData();
  }, [apiUrl]);

  const handleCreate = () => {
    
    console.log("Valor do input:", inputValue);
    
    setShowPopup(false);
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
          <Radio.Group value={size} onChange={(e) => setSize(e.target.value)} style={{marginTop: "10px", display: "flex", justifyContent: "flex-end"}}>
          <Button type="link" size={"small"} shape="round" onClick={handleClose}>Fechar</Button>
            <Button
              type="primary"
              shape="round"
              size={"small"}
              style={{ background: "rgb(55, 119, 87)" }}
              onClick={handleCreate}
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
