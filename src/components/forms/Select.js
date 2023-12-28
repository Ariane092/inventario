import styles from './Select.module.css';

function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.forms}>
            <label htmlFor={name}>{text}:</label>
            <select 
            name={name} 
            id={name} 
            onChange={handleOnChange} 
            value={value || ''}
            options={options}>
            </select>
        </div>
    );
};

export default Select;