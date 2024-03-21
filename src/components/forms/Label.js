import './Label.css';

function Label({ text, value }) {
    return (
        <div className="label">
            <label>{text}:</label>
            <div>{value}</div>
        </div>
    );
};

export default Label;