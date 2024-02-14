import React, { useState } from 'react';
import styles from "./Form.module.css";
import { Button, Radio } from "antd";
import { FaCameraRetro } from "react-icons/fa";

function Form(props) {
  const { showPicBtn } = props;
  const [size, setSize] = useState('default');

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <h4>{props.title}</h4>
          <div className={styles.input_group}>
            {props.children} {/*inputs props*/}
          </div>
          <div className={styles.form_btn}>
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
              <Button type="primary" size={size} style={{ background: 'rgb(55, 119, 87)' }}>{props.text}</Button>
              {showPicBtn && <Button type="primary" size={size} style={{ margin: 10, background: 'rgb(55, 119, 87)' }} icon={<FaCameraRetro />} >Foto</Button>}
            </Radio.Group>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
