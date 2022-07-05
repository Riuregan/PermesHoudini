
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import LoginForm from '../components/LoginForm';
import { Provider } from "react-redux";
import { store } from "../store/store";
import styles from '../styles/perfil.module.css';
import SignupForm from '../components/SignupForm'
import Header from '../components/header/HeaderCliente'

export default function perfil() {

    const [name, setName] = useState();
    const [senha, setSenha] = useState();

    

    useEffect(()=>{
        setName(localStorage.getItem("name"));
        setSenha(localStorage.getItem("senha"));
    }, []);


    const [boolName, setBoolName] = useState(true);
    const [boolSenha, setBoolSenha] = useState(true);
    const icon = require("../components/images/icon.png");
    
    


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
                        <input value={name} disabled={boolName}
                            onChange={evento =>{setName(evento.target.value)}}
                        ></input>
                        <button className={styles.button} onClick={()=>{setBoolName(!boolName)}}>edit</button>
                    </div>
                    <div className={styles.input}>
                        <label>Senha</label>
                        <input value={senha} type={boolSenha?"password":"text"} disabled={boolSenha}
                            onChange={evento =>{setSenha(evento.target.value)}}
                        ></input>
                        <button className={styles.button} onClick={()=>{setBoolSenha(!boolSenha)}}>edit</button>
                    </div>
                    <button className={styles.buttonX} style={{backgroundColor:'#791e94'}} 
                    onClick={()=>{
                        /* chamar back */
                    }}>Salvar</button>
                    <button className={`${styles.buttonX} ${styles.excluir}`}>Excluir</button>
                </div>

            </div>
        </div>

    )

}