
import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';
import { Provider } from "react-redux";
import { store } from "../store/store";
import styles from '../styles/Cadastro.module.css';
import SignupForm from '../components/SignupForm'
import Header from '../components/Header'

export default function cadastro() {


    return (
        <div>
            <div className={styles.cadastro}>

                <SignupForm />
            </div>
        </div>
    )

}
