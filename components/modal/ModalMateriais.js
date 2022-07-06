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

export default function ModalMateriais({ confirmModal, open, setOpen, dados, setDados, type }) {
    const handleClose = () => setOpen(false);

    const handleChange = (value) => {
        console.log(dados)
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
                        <h1 className={styles.titulo}>{type ? 'Adicionar Material' : 'Editar Material'}</h1>
                    </Typography>
                    <div className={styles.input}>
                        <label htmlFor="data"><h2>Nome:</h2></label>
                        <input onChange={handleChange} value={dados.nome} name="nome"></input>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="data"><h2>Quantidade:</h2></label>
                        <input onChange={handleChange} value={dados.quantidade} name="quantidade"></input>
                    </div>
                    <button onClick={() => { confirmModal(dados); setOpen(false); }} className={styles.button}>{type ? 'Adicionar' : 'Editar'}</button>

                </Box>
            </Modal>
        </div>
    );
}