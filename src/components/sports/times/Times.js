import React,{useEffect} from "react";
import styles from "./times.module.css";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  Phone,
  TelephoneFill,
} from "react-bootstrap-icons";
import img3 from "../../../images/img3.png";
import img4 from "../../../images/img4.png";
import img5 from "../../../images/img5.png";
import img6 from "../../../images/img6.png";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import BigCalendar from "../../sports/calendar/BigCalendar";
const Times = () => {
  useEffect(() => {
    console.log('Times component mounted');
    return () => {
      console.log('Times component unmounted');
    };
  }, []);
  const timeSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <ArrowLeftCircleFill size={90} />,
    nextArrow: <ArrowRightCircleFill size={90} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };
  return (
    <>
    <div className={styles.mainContainer}>
      <div className={styles.times}>
        <img
          src="https://marketplace.canva.com/EAFL8GIA214/1/0/1600w/canva-modern-minimalist-basketball-team-logo-gnFZBqra6FQ.jpg"
          alt="err"
          width={120}
          height={100}
        />
        <div className={styles.wrapper}>
          <h4>Club Name</h4>
          <p>Imadol, Lalitpur</p>
          <div className={styles.phoneWrapper}>
            <p>
              <TelephoneFill  style={{color:"red"}}/> 01-2453652 ,
            </p>
            <p>
              <Phone   style={{color:"red"}}/> 9802542632
            </p>
          </div>
        </div>
      </div>
        <BigCalendar/>
      <div className={styles.cardWrapper}>
        <h1>CHOOSE YOUR GAME</h1>
        <div className={styles.cardsWrap}>
          <Slider className={styles.timeSlider} {...timeSettings}>
            <div className={styles.timescardDiv}>
              <Card
                style={{
                  width: "15rem",
                  marginLeft: "20px",
                  boxShadow: "4px 4px 5px #e5e4e4",
                }}
              >
                <Card.Img className={styles.cardImg} src={img3} />
                <Card.Body className={styles.timesCardBody}>
                  <Card.Title>Futsal</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="timescardDiv">
              <Card
                style={{
                  width: "15rem",
                  marginLeft: "25px",
                  boxShadow: "4px 4px 5px #e5e4e4",
                }}
              >
                <Card.Img className={styles.cardImg} src={img4} />
                <Card.Body className={styles.timesCardBody}>
                  <Card.Title>Basketball</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="timescardDiv">
              <Card
                style={{
                  width: "15rem",
                  marginLeft: "25px",
                  boxShadow: "4px 4px 5px #e5e4e4",
                }}
              >
                <Card.Img className={styles.cardImg} src={img5} />
                <Card.Body className={styles.timesCardBody}>
                  <Card.Title>Cricket</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="timescardDiv">
              <Card
                style={{
                  width: "15rem",
                  marginLeft: "25px",
                  boxShadow: "4px 4px 5px #e5e4e4",
                }}
              >
                <Card.Img src={img6} className={styles.cardImg} />
                <Card.Body className={styles.timesCardBody}>
                  <Card.Title>Badminton</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Slider>
        </div>
      </div>
      <div className={styles.timesFooter}>
        <p>©2024 Khelam.com.np. All Rights Reserved'</p>
      </div>
    </div>
      </>
  );
};

export default Times;
