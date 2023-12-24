// import { useState, useEffect } from "react";
import Input from "../forms/Input";
import SubmitButton from "../forms/SubmitButton";
import logo from "../../img/cepea_img.png";
import styles from "./Login.module.css";

function Login({}) {
  return (
    <div className={styles.container}>
      <h4>Inventário CEPEA/ESALQ-USP</h4>
      <div>
        <div className={styles.logo}>
          <img src={logo} alt="cepea_logo" />  
        </div>
        <div className={styles.login_box}> 
          <Input type="text" text="Email" name="email" />
          <Input type="password" text="Senha" name="senha" />
        </div>
      </div>
      <SubmitButton text="Login" />
    </div>
  );
}

export default Login;
