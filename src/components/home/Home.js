import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";
import ReactCardSlider from 'react-card-slider-component';
import "./home.css";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  Lock,
  Person,
} from "react-bootstrap-icons";
import { Card, InputGroup, Form } from "react-bootstrap";
const Home = () => {
const slides=[
  {image:img3,title:"FUTSAL",clickEvent:sliderClick},
  {image:img4,title:"BASKETBALL",clickEvent:sliderClick},
  {image:img5,title:"CRICKET",clickEvent:sliderClick},
  {image:img6,title:"BADMINTON",clickEvent:sliderClick}
]

function sliderClick(){
console.log("hi");
}


return (
  <>
      <div className="home" style={{ display: "flex" }}>
        <img src={img1} alt="err" width={1300} height={500}></img>
        <div className="text-wrapper">
          <p>Book YOUR Time</p>
        </div>
      </div>
      <div className="sub-wrapper">
        <div className="form">
          <h1>JOIN US</h1>

          <InputGroup
            className="username"
            style={{ height: "40px", width: "270px", marginLeft: "60px" }}
          >
            <InputGroup.Text id="basic-addon1">
              <Person size={22} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <br />
          <InputGroup
            className="password"
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
          <a href="/forgot" className="forgotDetails">
            forgot details?
          </a>
          <br />
          <button>LOGIN</button>
        </div>
        <div className="image-wrapper">
          <img src={img2} alt="err" width={840} height={350}></img>
        </div>
      </div>
      <div className="card-wrapper">
        <h1>CHOOSE YOUR GAME</h1>
        {/* <Slider {...settings}> */}
          <div className="cards">
            <ReactCardSlider slides={slides}/>
            {/* <div>
              <ArrowLeftCircleFill
                className="leftArrow"
                size={30}
                style={{ marginTop: "130px" }}
              />
            </div>
            <div>
              <Card
                style={{
                  width: "15rem",
                  border: "2px solid #c9c9c9",
                  borderRadius: "0px",
                  borderColor: "hsla(0, 10%, 80%, 0.5)",
                  cursor: "pointer",
                  margin: "20px",
                }}
              >
                <Card.Body>
                  <Card.Img src={img3} alt="er"></Card.Img>
                  <Card.Title
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontSize: "18px",
                      marginTop: "30px",
                    }}
                  >
                    FUTSAL
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  width: "15rem",
                  border: "2px solid #c9c9c9",
                  borderRadius: "0px",
                  borderColor: "hsla(0, 10%, 80%, 0.5)",
                  cursor: "pointer",
                  margin: "20px",
                }}
              >
                <Card.Body>
                  <Card.Img src={img4} alt="er"></Card.Img>
                  <Card.Title
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontSize: "18px",
                      marginTop: "30px",
                    }}
                  >
                    BASKETBALL
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  width: "15rem",
                  border: "2px solid #c9c9c9",
                  borderRadius: "0px",
                  borderColor: "hsla(0, 10%, 80%, 0.5)",
                  cursor: "pointer",
                  margin: "20px",
                }}
              >
                <Card.Body>
                  <Card.Img src={img4} alt="er"></Card.Img>
                  <Card.Title
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontSize: "18px",
                      marginTop: "30px",
                    }}
                  >
                    BASKETBALL
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  width: "15rem",
                  border: "2px solid #c9c9c9",
                  borderRadius: "0px",
                  borderColor: "hsla(0, 10%, 80%, 0.5)",
                  cursor: "pointer",
                  margin: "20px",
                }}
              >
                <Card.Body>
                  <Card.Img src={img5} alt="er"></Card.Img>
                  <Card.Title
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontSize: "18px",
                      marginTop: "30px",
                    }}
                  >
                    CRICKET
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  width: "15rem",
                  border: "2px solid #c9c9c9",
                  borderRadius: "0px",
                  borderColor: "hsla(0, 10%, 80%, 0.5)",
                  cursor: "pointer",
                  margin: "20px",
                }}
              >
                <Card.Body>
                  <Card.Img src={img6} alt="er"></Card.Img>
                  <Card.Title
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontSize: "18px",
                      marginTop: "30px",
                    }}
                  >
                    BADMINTON
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>

            <div>
              <ArrowRightCircleFill
                className="rightArrow"
                size={30}
                style={{ marginTop: "130px" }}
              />
            </div>
          </Slider> */}
          </div>
      </div>
      <div className="footer">
        <p>©2024 Khelam.com.np. All Rights Reserved'</p>
      </div>
    </>
  );
};

export default Home;
