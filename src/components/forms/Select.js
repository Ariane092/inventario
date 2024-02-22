import { useState, useEffect } from "react";
import styles from "./Select.module.css";

function Select({ text, name, handleOnChange, value, apiUrl }) {
  const [options, setOptions] = useState([]);

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

  return (
    <div className={styles.selects}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} onChange={handleOnChange} value={value}>
        <option></option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.nome}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
