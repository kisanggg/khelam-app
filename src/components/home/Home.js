import React from "react";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";
import ReactCardSlider from "react-card-slider-component";
import "./home.css";
import { Lock, Person } from "react-bootstrap-icons";
import { InputGroup, Form } from "react-bootstrap";
const Home = () => {
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
        <div className="cards">
          <ReactCardSlider slides={slides} />
        </div>
      </div>
      <div className="footer">
        <p>©2024 Khelam.com.np. All Rights Reserved'</p>
      </div>
    </>
  );
};

export default Home;
