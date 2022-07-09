import * as React from 'react';
import { useState, useEffect } from 'react'
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
    width: '30vw',
    height: '30vh',
    bgcolor: '#F7FFF7',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ confirmModal }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [dados, setDados] = useState();

    const handleChange = (value) => {
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
                        <h1 className={styles.titulo}>Novo teste</h1>
                    </Typography>
                    <div className={styles.input}>
                        <label><h2>Teste:</h2></label>
                        <select name="id_tipo_teste" id="teste-select" onChange={handleChange}>
                            <option value="0">--Selecione uma opção an option--</option>
                            <option value='1'>Teste de sangue</option>
                            <option value='2'>Teste covid</option>
                            <option value='3'>Fezes</option>
                            <option value='4'>Urina</option>
                            <option value='5'>HIV</option>
                            <option value='6'>Gravidez</option>
                            <option value='7'>Vitamico</option>
                            <option value='8'>Colesterol</option>
                            <option value='9'>DNA</option>
                        </select>
                    </div>
                    <div className={styles.input}>
                        <label><h2>Data:</h2></label>
                        <input onChange={handleChange} name="time_teste"></input>

                    </div>
                    <button onClick={() => { confirmModal(dados); setOpen(false); }} className={styles.button}>Pedir</button>

                </Box>
            </Modal>
        </div>
    );
}