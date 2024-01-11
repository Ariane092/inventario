import styles from './Button.module.css';

function Button({ text, icon}) {
    return (
        <div>
            <button className={styles.btn} >{icon} {text}</button>
        </div>
    );
};

export default Button;