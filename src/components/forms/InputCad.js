import "./InputCad.css";
import { Input, DatePicker, InputNumber } from "antd";
const { TextArea } = Input;

function InputCad({ type, text, name, placeholder, onChange, value }) {
  if (type === "textarea") {
    return (
      <div className="inputs">
        <label htmlFor={name}>{text}:</label>
        <TextArea name={name} id={name} onChange={onChange} value={value} />
      </div>
    );
  } else if (type === "date") {
    return (
      <div className="inputs">
        <label htmlFor={name}>{text}:</label>
        <DatePicker name={name} id={name} onChange={onChange} value={value} />
      </div>
    );
  } else if (type === "number") {
    return (
      <div className="inputs">
        <label htmlFor={name}>{text}:</label>
        <InputNumber
          name={name}
          id={name}
          onChange={onChange}
          value={value}
          style={{ width: "130px" }}
        />
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
