import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from '../../styles/basicModal.module.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40vw',
    height: '40vh',
    bgcolor: '#F7FFF7',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalLab({ confirmModal, dados, setDados, open, setOpen, type, setType }) {

    const handleClose = () => setOpen(false);

    const handleChange = (value) => {
        console.log(dados)
        setDados({
            ...dados,
            [value.target.name]: value.target.value,
        });

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
                        <h1 className={styles.titulo}>{type ? 'Adicionar Laboratório' : 'Editar Laboratório'}</h1>
                    </Typography>
                    <div className={styles.input}>
                        <label htmlFor="data"><h2>Nome:</h2></label>
                        <input onChange={handleChange} value={dados.nome} name="nome"></input>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="data"><h2>CEP</h2></label>
                        <input max="31/12/9999" onChange={handleChange} value={dados.cep} name="cep"></input>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="data"><h2>Numero:</h2></label>
                        <input type='date' max="31/12/9999" onChange={handleChange} value={dados.numero} name="numero"></input>
                    </div>
                    {/* <div className={styles.input}>
                        <label for="data"><h2>CPF do gerente:</h2></label>
                        <input max="31/12/9999" onChange={handleChange} name="time_teste"></input>
                    </div> */}
                    <button onClick={() => { confirmModal(dados); setOpen(false); }} className={styles.button}>Adicionar</button>
                </Box>
            </Modal>
        </div>
    );
}