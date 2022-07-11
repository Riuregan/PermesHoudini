import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from '../../styles/basicModal.module.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '65vh',
    bgcolor: '#F7FFF7',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalAddFuncionario({ confirmModal, open, setOpen, dados, setDados, type }) {
    const handleClose = () => setOpen(false);


    const handleChange = (value) => {
        setDados((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));

    };


    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={styles.box}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <h1 className={styles.titulo}>{type ? 'Adicionar Funcionario' : 'Editar Funcionario'}</h1>
                    </Typography>
                    <div className={styles.conteudo}>
                        <div className={styles.input}>
                            <label ><h2>Nome:</h2></label>
                            <input onChange={handleChange} value={dados.nome} name="nome"></input>
                        </div>
                        <div className={styles.input}>
                            <label ><h2>CPF:</h2></label>
                            <input onChange={handleChange} value={dados.cpf} name="tcpf"></input>
                        </div>
                        <div className={styles.input}>
                            <label ><h2>Numero:</h2></label>
                            <input onChange={handleChange} value={dados.numero} name="numero"></input>
                        </div>
                        <div className={styles.input}>
                            <label ><h2>Email:</h2></label>
                            <input onChange={handleChange} value={dados.email} name="email"></input>
                        </div>
                        <div className={styles.input}>
                            <label ><h2>Senha:</h2></label>
                            <input onChange={handleChange} value={dados.senha} name="senha"></input>
                        </div>
                        <div className={styles.input}>
                            <label ><h2>Lab CEP:</h2></label>
                            <input onChange={handleChange} value={dados.laboratorio_cep} name="laboratorio_cep"></input>
                        </div>
                        <div className={styles.input}>
                            <label ><h2>Lab número:</h2></label>
                            <input onChange={handleChange} value={dados.laboratorio_numero} name="laboratorio_numero"></input>
                        </div>
                        <button onClick={() => { confirmModal(dados); setOpen(false); }} className={styles.button}>{type ? 'Adicionar' : 'Editar'}</button>

                    </div>
                </Box>
            </Modal>
        </div>
    );
}