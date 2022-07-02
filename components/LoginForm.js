import React from 'react'
import Router from 'next/router'
import { useState } from 'react'
import styles from '../styles/LoginForms.module.css'
import axios from "axios"

import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ClientAuthenticated } from '../store/isAutheticatedClientSlice'
import { FuncAuthenticated } from '../store/isAuthenticatedFuncSlice'
function LoginForm() {

  const dispatch = useDispatch();
  const isAuthenticatedClient = useSelector((state) => state.isAuthenticatedClient);
  const isAuthenticatedFunc = useSelector((state) => state.isAuthenticatedFunc);

  const [user, setUser] = useState();

  const handleLoginClient = () => {
    axios.get(`http://localhost:3001/loginClient/${user.CPF}/${user.SENHA}`)
      .then((c) => {
        if ((c.data.rows[0]) == undefined) {
          axios.get(`http://localhost:3001/loginFunc/${user.CPF}/${user.SENHA}`)
            .then((c) => {
              if ((c.data.rows[0]) == undefined) {
                alert('Usuário não encontrado');
              } else {
                dispatch(addUser(c.data.rows[0]));
                dispatch(FuncAuthenticated(!isAuthenticatedFunc.isAuthenticatedFunc));
                Router.push('/testesClient')
              }
            })
        } else {
          dispatch(addUser(c.data.rows[0]));
          dispatch(ClientAuthenticated(!isAuthenticatedClient.isAuthenticatedClient));
          Router.push('/testesClient')
        }
      })
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
          <input className={styles.bar} type="text" onChange={handleChange} name="CPF" id="cpf" maxLength="11" />
        </div>
        <div className={styles.formGroup} >
          <label htmlFor="password">Senha:</label>
          <input className={styles.bar} type="password" onChange={handleChange} name="SENHA" id="password" />
        </div>
        <div className={styles.loginDirecao} >
          <div>
            <p>Não tem conta? <a href='/cadastro'>Cadastre-se</a></p>
          </div>
          <button type="button" className={styles.loginButton} placeholder="Login client..." onClick={handleLoginClient}>Logar</button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm