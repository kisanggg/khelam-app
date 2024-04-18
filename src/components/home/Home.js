import React from "react";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";
import { Lock, Person, ArrowLeftCircleFill, ArrowRightCircleFill } from "react-bootstrap-icons";
import { InputGroup, Form, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"
import styles from './home.module.css';
const Home = () => {
  const settings=
    {
      dots:false,
      infinite:true,
      speed:500,
      slidesToShow:4,
      slidesToScroll:4,
      initialSlide:0,
      prevArrow: <ArrowLeftCircleFill  size={80} />, 
      nextArrow: <ArrowRightCircleFill  size={80} />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots:false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }
      ] 
    };

  return (
    <>
      <div className={styles.home} style={{ display: "flex" }}>
        <img src={img1} alt="err" width={1400} height={500}></img>
        <div className={styles.textWrapper}>
          <p>Book YOUR Time</p>
        </div>
      </div>
      <div className={styles.subWrapper}>
        <div className={styles.form}>
          <h1>JOIN US</h1>
          <InputGroup
            className={styles.username}
            style={{ height: "40px", width: "270px", marginLeft: "60px" }}
          >
            <InputGroup.Text id="basic-addon1">
              <Person size={22} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              required
            />
          </InputGroup>
          <br />
          <InputGroup
            className={styles.password}
            style={{ height: "40px", width: "270px", marginLeft: "60px" }}
          >
            <InputGroup.Text id="basic-addon1" style={{}}>
              <Lock size={22} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Password"
              type="password"
              aria-label="password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <a href="/forgot" className={styles.forgotDetails}>
            forgot details?
          </a>
          <br />
          <button>LOGIN</button>
        </div>
        <div className={styles.imageWrapper}>
          <img src={img2} alt="err" width={840} height={350}></img>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <h1>CHOOSE YOUR GAME</h1>
        <div className={styles.cards} >
          <Slider className={styles.innerSlider} useCSS={true} {...settings}>
          <div className={styles.cardDiv}>
          <Card style={{width:"15rem",marginLeft:"20px",boxShadow:"4px 4px 5px #e5e4e4",textAlign:"center"}}>
              <Card.Img src={img3} className={styles.homeCardImg}/>
            <Card.Body className={styles.homeCardBody}>
              <Card.Title>Futsal</Card.Title>
            </Card.Body>
          </Card>
          </div>
          <div className={styles.cardDiv}>
          <Card style={{width:"15rem",marginLeft:"25px",boxShadow:"4px 4px 5px #e5e4e4",textAlign:"center"}}>
              <Card.Img src={img4} className={styles.homeCardImg}/>
            <Card.Body className={styles.homeCardBody}>
              <Card.Title>Basketball</Card.Title>
            </Card.Body>
          </Card>
          </div>
          <div className={styles.cardDiv}>
          <Card style={{width:"15rem",marginLeft:"25px",boxShadow:"4px 4px 5px #e5e4e4",textAlign:"center"}}>
              <Card.Img src={img5} className={styles.homeCardImg}/>
            <Card.Body className={styles.homeCardBody}>
              <Card.Title>Cricket</Card.Title>
            </Card.Body>
          </Card>
          </div>
          <div className={styles.cardDiv}>
          <Card style={{width:"15rem",marginLeft:"25px",boxShadow:"4px 4px 5px #e5e4e4",textAlign:"center"}}>
              <Card.Img src={img6} className={styles.homeCardImg}/>
            <Card.Body className={styles.homeCardBody}>
              <Card.Title>Badminton</Card.Title>
            </Card.Body>
          </Card>
          </div>
          </Slider>
        </div>
      </div>
      <div className={styles.footer}>
        <p>©2024 Khelam.com.np. All Rights Reserved'</p>
      </div>
    </>
  );
};

export default Home;
