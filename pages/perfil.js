
import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';
import { Provider } from "react-redux";
import { store } from "../store/store";
import styles from '../styles/perfil.module.css';
import SignupForm from '../components/SignupForm'
import Header from '../components/Header'

export default function perfil() {


    return (
        <div className={styles.perfil}>
            <div className={styles.box}>
                <h1>Perfil</h1>

                <div className={styles.input}>
                    <label>Nome</label>
                    <input></input>
                    <button className={styles.button}>edit</button>
                </div>
                <div className={styles.input}>
                    <label>Senha</label>
                    <input></input>
                    <button className={styles.button}>edit</button>
                </div>
                <button className={styles.buttonX}>Excluir</button>
            </div>

        </div>
    )

}