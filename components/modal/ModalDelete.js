import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from '../../styles/modalDelete.module.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '35vw',
    height: '25vh',
    bgcolor: '#F7FFF7',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalDelete({ confirmModal, open, setOpen, id }) {

    console.log(id);
    const handleClose = () => setOpen(false);

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
                        <h1 className={styles.titulo}>Deseja mesmo excluir?</h1>
                    </Typography>
                    <div >
                        <button className={styles.buttons} onClick={() => { confirmModal(id); setOpen(false); }}>Sim</button>
                        <button className={styles.buttons} onClick={handleClose}>Não</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}