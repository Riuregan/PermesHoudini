import axios from "axios"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import styles from '../styles/perfil.module.css';
import SignupForm from '../components/SignupForm'
import Header from '../components/header/HeaderCliente'
import Router from 'next/router'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

export default function Perfil() {

    const isAuthenticatedClient = useSelector((state) => state.isAuthenticatedClient);
    const isAuthenticatedFunc = useSelector((state) => state.isAuthenticatedFunc);
    const isAuthenticatedGerente = useSelector((state) => state.isAuthenticatedGerente);
    const userAtual = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const [user, setUser] = useState({
        nome: userAtual.user[1],
        senha: userAtual.user[3]
    });

    const [boolName, setBoolName] = useState(true);
    const [boolSenha, setBoolSenha] = useState(true);
    const icon = require("../components/images/icon.png");

    const handleClickEdit = (user) => {
        console.log(user.nome)
        console.log(user.senha)
        console.log(userAtual)
        if (isAuthenticatedClient.isAuthenticatedClient) {
            axios.put(`http://localhost:3001/putUsuario/${userAtual.user[0]}`, {
                nome: user.nome,
                senha: user.senha,
            })
                .then(function () {
                    alert('Usuário alterado com sucesso')
                    setBoolSenha(true);
                    setBoolName(true);
                    dispatch(addUser({
                        ...userAtual.user,
                        [[1]]: user.nome,
                        [[3]]: user.senha,

                    }));
                })
        }
        else if (isAuthenticatedFunc.isAuthenticatedFunc) {
            axios.put(`http://localhost:3001/putFuncionarios/${userAtual.user[0]}`, {
                nome: user.nome,
                senha: user.senha,
            })
                .then(function () {
                    alert('Usuário alterado com sucesso')
                    setBoolSenha(true);
                    setBoolName(true);
                    dispatch(addUser({
                        ...userAtual.user,
                        [[1]]: user.nome,
                        [[3]]: user.senha,

                    }));
                })

        } else if (isAuthenticatedGerente.isAuthenticatedGerente) {
            axios.put(`http://localhost:3001/putFuncionarios/${userAtual.user[0]}`, {
                nome: user.nome,
                senha: user.senha,
            })
                .then(function () {
                    alert('Usuário alterado com sucesso')
                    setBoolSenha(true);
                    setBoolName(true);
                    dispatch(addUser({
                        ...userAtual.user,
                        [[1]]: user.nome,
                        [[3]]: user.senha,

                    }));
                })

        }
    }

    const handleChange = (value) => {
        console.log(user)
        setUser({
            ...user,
            [value.target.name]: value.target.value,
        });

    };


    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.perfil}>
                <div className={styles.img}>
                    <Image src={icon}></Image>
                </div>
                <div className={styles.box}>
                    <h1>Perfil</h1>

                    <div className={styles.input}>
                        <label>Nome</label>
                        <input value={user.nome} disabled={boolName}
                            name="nome" onChange={handleChange}
                        ></input>
                        <button className={styles.button} onClick={() => { setBoolName(!boolName) }}>edit</button>
                    </div>
                    <div className={styles.input}>
                        <label>Senha</label>
                        <input value={user.senha} type={boolSenha ? "password" : "text"} disabled={boolSenha}
                            name="senha" onChange={handleChange}
                        ></input>
                        <button className={styles.button} onClick={() => { setBoolSenha(!boolSenha) }}>edit</button>
                    </div>
                    <button className={styles.buttonX} style={{ backgroundColor: '#791e94' }}
                        onClick={() => handleClickEdit(user)}>Salvar</button>
                    <button className={`${styles.buttonX} ${styles.excluir}`}>Excluir</button>
                </div>

            </div>
        </div >

    )

}