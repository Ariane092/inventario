import styles from "./Input.module.css";

function Input({ type, text, date, name, placeholder, onChange, value }) {
  if (type === "textarea") {
    return (
      <div className={styles.textarea}>
        <label htmlFor={name}>{text}:</label>
        <textarea name={name} id={name} onChange={onChange} value={value} />
      </div>
    );
  } else {
    return (
      <div className={styles.inputs}>
        <label htmlFor={name}>{text}:</label>
        <input
          type={type}
          name={name}
          id={name}
          date={date}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
}

export default Input;
