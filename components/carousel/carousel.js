import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
//import styles from "../../styles/carousel.module.css";
import Image from 'next/image';
import styles from '../../styles/carousel.module.css'

const sangue = require("../images/sangue.png");
const covid = require("../images/covid.jpeg");
const fezes = require("../images/fezes.png");
const urina = require("../images/urina.png");
const HIV = require("../images/HIV.jpeg");
const gravidez = require("../images/gravidez.jpg");
const vitaminico = require("../images/vitaminico.jpg");
const colesterol = require("../images/colesterol.jpeg");
const DNA = require("../images/DNA.png");

const breakPoints = [
  { width: 768, itemsToShow: 3 },
];

export default function App() {
  return (
    <div className={styles.carousel}>
      <hr className={styles.linha}/>
      <h1 className={styles.text}>Agende seu exame</h1>
      <hr className={styles.linha}/>
        <div >
          <Carousel breakPoints={breakPoints}>
            <Item >
              <div className={styles.img}>
                <Image src={sangue}></Image>
              </div>
            </Item>
            <Item>
              <div className={styles.img}>
                <Image className={styles.img} src={covid}></Image>
              </div>
            </Item>
            <Item>
              <div className={styles.img}>
                <Image className={styles.img} src={fezes}></Image>
              </div>
            </Item>
            <Item>
              <div className={styles.img}>
                <Image className={styles.img} src={urina}></Image>
              </div>
            </Item>
            <Item>
              <div className={styles.img}>
                <Image className={styles.img} src={HIV}></Image>
              </div>
            </Item>
            <Item>
              <div className={styles.img}>
                <Image className={styles.img} src={gravidez}></Image>
              </div>
            </Item>
            <Item>
              <div className={styles.img}>
                <Image className={styles.img} src={vitaminico}></Image>
              </div>
            </Item>
            <Item>
              <div className={styles.img}>
                <Image className={styles.img} src={colesterol}></Image>
              </div>
            </Item>
            <Item>
              <div className={styles.img}>
                <Image className={styles.img} src={DNA}></Image>
              </div>
            </Item>
          </Carousel>
        </div>
      </div>
      );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);