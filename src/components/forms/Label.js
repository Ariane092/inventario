import './Label.css';

function Input({ type, text, date, name, value }) {
    return (
        <div className="label">
            <label htmlFor={name}>{text}:</label>
            <div
                type={type}
                name={name}
                id={name}
                date={date}
                value={value}
            />
        </div>
    );
};

export default Input;