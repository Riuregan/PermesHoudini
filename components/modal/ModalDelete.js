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
    width: '40vw',
    height: '40vh',
    bgcolor: '#F7FFF7',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalDelete({ confirmModal }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [dados, setDados] = useState();


    const handleChange = (value) => {
        console.log(dados)
        setDados((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));

    };


    return (
        <div>
            <Button className={styles.button} onClick={handleOpen}>Solicitar novo teste</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={styles.box}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <h1 className={styles.titulo}>Deseja mesmo excluir</h1>
                    </Typography>
                    <img src={`../../public/check.png`}
                        onClick={() => { confirmModal(dados); setOpen(false); }} >Adicionar
                    </img>
                </Box>
            </Modal>
        </div>
    );
}