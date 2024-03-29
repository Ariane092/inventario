import styles from "./InputCad.css";
import { Input } from "antd";
const { TextArea } = Input;

function InputCad({ type, text, date, name, placeholder, onChange, value }) {
  if (type === "textarea") {
    return (
      <div className="inputs">
        <label htmlFor={name}>{text}:</label>
        <TextArea name={name} id={name} onChange={onChange} value={value} />
      </div>
    );
  } else {
    return (
      <div className="inputs">
        <label htmlFor={name}>{text}:</label>
        <Input
          type={type}
          name={name}
          id={name}
          date={date}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          allowClear={true}
        />
      </div>
    );
  }
}

export default InputCad;
