import React from "react";
import styles from "./times.module.css";
import { Phone, TelephoneFill } from "react-bootstrap-icons";
import img3 from "../../../images/img3.png";
import img4 from "../../../images/img4.png";
import img5 from "../../../images/img5.png";
import img6 from "../../../images/img6.png";
import ReactCardSlider from "react-card-slider-component";
const Times = () => {
  const slides = [
    { image: img3, title: "FUTSAL", clickEvent: sliderClick },
    { image: img4, title: "BASKETBALL", clickEvent: sliderClick },
    { image: img5, title: "CRICKET", clickEvent: sliderClick },
    { image: img6, title: "BADMINTON", clickEvent: sliderClick },
  ];
  function sliderClick() {
    console.log("hi");
  }
  return (
    <div>
      <div className={styles.times}>
        <img
          src="https://marketplace.canva.com/EAFL8GIA214/1/0/1600w/canva-modern-minimalist-basketball-team-logo-gnFZBqra6FQ.jpg"
          alt="err"
          width={120}
          height={100}
        />
        <div className={styles.wrapper}>
          <h4>Times</h4>
          <p>Imadol, Lalitpur</p>
          <div className={styles.phoneWrapper}>
            <p>
              <TelephoneFill /> 0105410006
            </p>
            <p>
              <Phone /> 9812345678
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div className={styles.cardWrapper}>
        <h1>CHOOSE YOUR GAME</h1>
        <div className="cards">
          <ReactCardSlider slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Times;
