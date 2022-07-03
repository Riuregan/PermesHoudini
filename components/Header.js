import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/header.module.css"
export default function Header() {
    <script src="https://kit.fontawesome.com/8a0b54b24f.js" crossorigin="anonymous"></script>
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
                    sx={{ mr: 2 }}
                >
                    {/*This is a simple Menu 
             Icon wrapped in Icon */}
                    <MenuIcon />
                </IconButton>
                {/* The Typography component applies 
           default font weights and sizes */}
                <div className={styles.divTypography}>
                    <Typography className={styles.typography} variant="h6"
                        component="div" >
                        Meus exames
                    </Typography>
                    <Typography className={styles.typography} variant="h6"
                        component="div" >
                        Solicitar exame
                    </Typography>
                    <Typography className={styles.typography} onClick={() => console.log("teste")} variant="h6"
                        component="div" >
                        Laborátorios

                    </Typography>
                </div>

                <Button color="inherit" >Logout</Button>
            </Toolbar>
        </AppBar>
    );
}