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

export default function ModalEditTest({ confirmModal, dados, setDados, open, setOpen }) {

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
                        <h1 className={styles.titulo}>Editar Teste</h1>
                    </Typography>
                    <div className={styles.input}>
                        <label htmlFor="data"><h2>Funcionario CPF:</h2></label>
                        <input onChange={handleChange} value={dados.funcionarios_cpf} name="funcionarios_cpf"></input>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="data"><h2>Data entrega</h2></label>
                        <input max="31/12/9999" onChange={handleChange} value={dados.time_entrega} name="time_entrega"></input>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="data"><h2>Resultado</h2></label>
                        <input max="31/12/9999" onChange={handleChange} value={dados.resultado} name="resultado"></input>
                    </div>
                    <button onClick={() => { confirmModal(dados); setOpen(false); }} className={styles.button}>Editar</button>
                </Box>
            </Modal>
        </div>
    );
}