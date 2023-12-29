import styles from "./Container.module.css";
import SubmitButton from "./SubmitButton";

function Container(props) {
  return (
    <div className={styles.container}>
      <p>{props.title}</p>
      {props.children} {/*form props*/}
      <SubmitButton text={props.btnText} />
    </div>
  );
}

export default Container;
