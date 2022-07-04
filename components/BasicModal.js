import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from '../styles/basicModal.module.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <Button className={styles.button} onClick={handleOpen}>Solicitar novo teste</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Novo teste
                    </Typography>
                    <label for="tipo-teste">Teste:</label>

                    <select name="testes" id="teste-select">
                        <option value="">--Selecione uma opção an option--</option>
                        <option value="Exame de sangue">Dog</option>
                    </select>
                    <div>
                        <label for="data">Data:</label>
                        <input></input>

                    </div>
                    <button>Pedir</button>

                </Box>
            </Modal>
        </div>
    );
}