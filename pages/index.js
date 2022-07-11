
import React, { useState } from 'react'
import { Provider } from "react-redux";
import { store } from "../store/store";
import styles from '../styles/home.module.css';
import Header from '../components/header/HeaderHome'
import Image from 'next/image';

import Carousel from '../components/carousel/carousel.js';


const img = require("../components/images/imagemHome.jpg");

export default function home() {

    return (
        <div>
            <div className={styles.home}>

                <Header />
                <Image className={styles.imgHome} src={img}></Image>
                <div class={styles.text}>Permes Houdini</div>
                <div class={styles.text2}>Medicina, saúde e bem-estar</div>
                <form action="/login" >
                    <button className={styles.button}>Login</button>
                </form>

                <Carousel />
            </div>
        </div>
    )

}
