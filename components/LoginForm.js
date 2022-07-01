import React from 'react'
import Router from 'next/router'
import { useState } from 'react'
import styles from '../styles/LoginForms.module.css'
import axios from "axios"

import { setCurrentUser } from "../store/user/user.action";
import { setIsClientAuthenticated } from "../store/user/user.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function LoginForm() {

  const dispatch = useDispatch();
  const isClientAuth = useSelector(setIsClientAuthenticated);

  const [user, setUser] = useState();

  const handleLoginClient = () => {
    axios.get(`http://localhost:3001/loginClient/${user.CPF}/${user.SENHA}`)
      .then((c) => {
        dispatch(setCurrentUser(c));
        console.log(isClientAuth)
        dispatch(setIsClientAuthenticated(!isClientAuth.payload.user.isClientAuthenticated));
        Router.push('/')

      }
      )
  }

  const handleChange = (value) => {
    console.log(user)
    setUser((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };


  return (
    <form>
      <div className={styles.LoginForm}>
        <h2>Faça Login</h2>

        {/*ERRO */}
        <div className={styles.formGroup}>
          <label htmlFor="CPF">CPF:</label>
          <input className={styles.bar} type="text" onChange={handleChange} name="CPF" id="cpf" maxlength="11" />
        </div>
        <div className={styles.formGroup} >
          <label htmlFor="password">Senha:</label>
          <input className={styles.bar} type="password" onChange={handleChange} name="SENHA" id="password" />
        </div>
        <div className={styles.loginDirecao} >
          <div>
            <p>Não tem conta? <a href='/cadastro'>Cadastre-se</a></p>
          </div>
          <button className={styles.loginButton} placeholder="Login client..." onClick={handleLoginClient}>Logar</button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm