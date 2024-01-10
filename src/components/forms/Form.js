import styles from "./Form.module.css";
import Button from "../forms/Button";

function Form(props) {
  const { showPicBtn } = props;

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <h4>{props.title}</h4>
          <div className={styles.input_group}>
            {props.children} {/*inputs props*/}
          </div>
          <div className={styles.form_btn}>
            <Button text={props.text} />
            {showPicBtn && <Button text="Tirar Foto" />}
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
