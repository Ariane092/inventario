import "../layout/Card.css";

function Card (props) {
    return (
        <div className="card-container">
            <div className="card-title">
                {props.icon}
                <span>{props.title}</span>
            </div>
            <div className="card-content">
                {props.children}
            </div>
        </div>
    );
}

export default Card;