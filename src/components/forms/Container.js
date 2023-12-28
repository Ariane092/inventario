import styles from "./Container.module.css";
import SubmitButton from "./SubmitButton";

function Container(props) {
  return (
    <div className={styles.container}>

      <h4>{props.name}</h4>

        {props.children} {/*form props*/}

      <SubmitButton text="Enviar" />
    </div>
  );
}

export default Container;
