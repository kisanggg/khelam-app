import React from 'react'
import  styles from './dunkmandu.module.css'
import { ArrowLeftCircleFill, ArrowRightCircleFill,  Phone, TelephoneFill} from "react-bootstrap-icons";
import img3 from "../../../images/img3.png";
import img4 from "../../../images/img4.png";
import img5 from "../../../images/img5.png";
import img6 from "../../../images/img6.png";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import BigCalendar from '../calendar/BigCalendar';
const Dunkmandu = () => {
  const dunkSettings=
    {
      dots:false,
      infinite:true,
      speed:500,
      slidesToShow:4,
      slidesToScroll:4,
      initialSlide:0,
      prevArrow:<ArrowLeftCircleFill size={90} />,
      nextArrow:<ArrowRightCircleFill size={90} />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div>
      <div className={styles.dunkWrapper}>
        <img src='https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Basketball_Logo_Designs_19_1024x1024.png?v=1672938941' alt='err' width={200}></img>
        <div>
          <h4>Dunkmandu</h4>
          <p className={styles.locationWrapper}>Imadol, Lalitpur</p>
          <div className={styles.phoneWrapper}>
          <div className={styles.telephone}>
          <TelephoneFill size={18} style={{color:"#a09e9e"}}/>
          <p>9828211108</p>
          </div>
          <div className={styles.phone}>
          <Phone size={18} style={{color:"#a09e9e"}}/>
          <p>010128273</p>
          </div>
          </div>
        </div>
      </div>
      <BigCalendar/>
      <div className={styles.cardWrapper}>
        <h1>CHOOSE YOUR GAME</h1>
        <div className={styles.cardsWrap}>
        <Slider className={styles.dunkSlider} {...dunkSettings}>
          <div className={styles.dunkcardDiv}>
          <Card style={{width:"15rem",marginLeft:"20px",boxShadow:"4px 4px 5px #e5e4e4"}}>
            <Card.Img  className={styles.cardImg} src={img3}/>
            <Card.Body className={styles.dunkCardBody}>
              <Card.Title>Futsal</Card.Title>
            </Card.Body>
          </Card>
          </div>
          <div className={styles.dunkcardDiv}>
          <Card style={{width:"15rem",marginLeft:"25px",boxShadow:"4px 4px 5px #e5e4e4"}}>
              <Card.Img className={styles.cardImg} src={img4}/>
            <Card.Body className={styles.dunkCardBody}>
              <Card.Title>Basketball</Card.Title>
            </Card.Body>
          </Card>
          </div>
          <div className={styles.dunkcardDiv}>
          <Card style={{width:"15rem",marginLeft:"25px",boxShadow:"4px 4px 5px #e5e4e4"}}>
              <Card.Img className={styles.cardImg} src={img5}/>
            <Card.Body className={styles.dunkCardBody}>
              <Card.Title>Cricket</Card.Title>
            </Card.Body>
          </Card>
          </div>
          <div className={styles.dunkcardDiv}>
          <Card style={{width:"15rem",marginLeft:"25px",boxShadow:"4px 4px 5px #e5e4e4"}}>
              <Card.Img src={img6} className={styles.cardImg}/>
            <Card.Body className={styles.dunkCardBody}>
              <Card.Title>Badminton</Card.Title>
            </Card.Body>
          </Card>
          </div>
          </Slider>
        </div>
      </div>
      <div className={styles.dunkFooter}>
        <p>©2024 Khelam.com.np. All Rights Reserved'</p>
      </div>
    </div>
  )
}

export default Dunkmandu
