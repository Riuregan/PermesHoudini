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
    <form className={styles.Login}>
      <div className={styles.LoginForm}>
        <h2>Faça Login</h2>

        {/*ERRO */}
        <div className={styles.FormGroup}>
          <label htmlFor="CPF">CPF:</label>
          <input type="number" onChange={handleChange} name="CPF" id="cpf" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" onChange={handleChange} name="SENHA" id="password" />
        </div>
        <input placeholder="Login client..." onClick={handleLoginClient} />
        <input placeholder="Search..." />
      </div>
    </form>
  )
}

export default LoginForm