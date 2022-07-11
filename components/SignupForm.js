import React from 'react'
import styles from '../styles/SignupForm.module.css'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import axios from "axios"

function LoginForm() {

    const [user, setUser] = useState();

    const handleClickCreate = (client) => {
        console.log(client);
        console.log('client');
        axios.post(`http://localhost:3001/postUsuario`, {
            nome: client.nome,
            email: client.email,
            cpf: client.cpf,
            senha: client.senha,
            telefone: client.telefone,
        })
            .then(function (response) {
                Router.push('/')
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
            <div className={styles.signupForm}>
                <h2>Faça o cadastro</h2>
                {/*ERRO */}
                <div className={styles.teste}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input onChange={handleChange} type="email" name="email" id="email" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome:</label>
                        <input onChange={handleChange} type="name" name="nome" id="nome" />
                    </div >
                    <div className={styles.formGroup}>
                        <label htmlFor="CPF">CPF:</label>
                        <input onChange={handleChange} type="name" name="cpf" id="cpf" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Senha:</label>
                        <input onChange={handleChange} type="password" name="senha" id="password" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="tel">Telefone:</label>
                        <input onChange={handleChange} type="tel" name="telefone" id="tel" />
                    </div>
                    <div className={styles.signupButtonDirection}></div>
                    <button onClick={() => handleClickCreate(user)} className={styles.signupButton} > Criar</button>

                </div>

            </div>
        </form >
    )
}

export default LoginForm