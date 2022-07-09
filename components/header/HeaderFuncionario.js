import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/MedicalServices';

import styles from "../../styles/header.module.css"

import Router from 'next/router'

export default function Header() {

    const handleClickClienteTestes = () => Router.push('/funcionarioTestes');
    const handleClickPerfil = () => Router.push('/perfil');


    return (
        <AppBar position="static">
            <Toolbar className={styles.toolbar}>
                {/*Inside the IconButton, we 
           can render various icons*/}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                >
                    {/*This is a simple Menu 
             Icon wrapped in Icon */}
                    <MenuIcon />
                    <h6>Permes Houdini</h6>
                </IconButton>
                {/* The Typography component applies 
           default font weights and sizes */}
                <div className={styles.divTypography}>
                    <Typography className={styles.typography} variant="h6"
                        component="div" >
                        <div style={{ cursor: 'pointer' }} onClick={handleClickClienteTestes}>Testes</div>
                    </Typography>
                    <Typography className={styles.typography} variant="h6"
                        component="div" >
                        <div style={{ cursor: 'pointer' }} onClick={handleClickPerfil}>Perfil</div>
                    </Typography>
                    {/*<Typography className={styles.typography} onClick={() => console.log("teste")} variant="h6"
                        component="div" >
                        Laborátorios}
                

                    </Typography>*/
                    }
                </div>

                <Button color="inherit" href="/"  >Logout</Button>
            </Toolbar>
        </AppBar >
    );
}