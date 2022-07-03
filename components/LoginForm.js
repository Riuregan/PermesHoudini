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
    const axiosrequest1 = axios.get(`http://localhost:3001/loginClient/${user.CPF}/${user.SENHA}`);
    const axiosrequest2 = axios.get(`http://localhost:3001/loginFunc/${user.CPF}/${user.SENHA}`);
    const axiosrequest3 = axios.get(`http://localhost:3001/loginGerente/${user.CPF}`);

    // axios.all([axiosrequest1, axiosrequest2, axiosrequest3]).then(axios.spread(function (res1, res2, res3) {
    //   if (res1.data.rows[0] == undefined) {
    //     if (res2.data.rows[0] == undefined) {
    //       alert('usuário não encontrado')
    //     } else if (res3.data.rows[0] == undefined) {
    //       dispatch(addUser(res2.data.rows[0]));
    //       Router.push('/testesClient') // funcionario
    //     } else {
    //       dispatch(addUser(res2.data.rows[0]));
    //       Router.push('/testesClient') //gerente
    //     }
    //   } else {
    //     dispatch(addUser(res1.data.rows[0]));
    //     dispatch(ClientAuthenticated(!isAuthenticatedClient.isAuthenticatedClient));
    //     Router.push('/testesClient')
    //   }
    // }));
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