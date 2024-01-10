import styles from './Input.module.css';

function Input({ type, text, date, name, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.inputs}>
            <label htmlFor={name}>{text}:</label>
            <input
                type={type}
                name={name}
                id={name}
                date={date}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </div>
    );
};

export default Input;