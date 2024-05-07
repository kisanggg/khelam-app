import React, { useContext, useState } from "react";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";
import {
  Lock,
  Person,
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons";
import { InputGroup, Form, Card, Button, FormControl } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../DataContext";
const Home = () => {
  const { setIsLoggedIn } = useContext(DataContext);
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <ArrowLeftCircleFill size={80} />,
    nextArrow: <ArrowRightCircleFill size={80} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  const [signinErrors, setSigninErrors] = useState({});
  const [signinData, setSigninData] = useState({
    username: "",
    password: "",
  });

  const validateForm = () => {
    const errors = {};
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!signinData.username.trim()) {
      errors.username = "Username is required";
    } else if (!usernameRegex.test(signinData.username)) {
      errors.username = "Enter valid username ";
    }
    if (!signinData.password.trim()) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(signinData.password)) {
      errors.password =
        "Your password must be 8-16 characters long and contain at least one special character and one number.";
    }
    setSigninErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    console.log("isvalid", isValid);
    if (isValid) {
      navigate("/sports/123");
      console.log("navigate", navigate);
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      <div className={styles.home}>
        <img
          src={img1}
          alt="err"
          style={{ width: "100%", maxWidth: "100%", height: "auto" }}
        ></img>
        <div
          className={styles.textWrapper}
          // style={{ width: "100%", maxWidth: "540px" }}
        >
          <p>Book YOUR Time</p>
        </div>
      </div>
      <div className={styles.subWrapper}>
        <div className={styles.form}>
          <h1>JOIN US</h1>
          <Form onSubmit={handleSubmit}>
            <Form>
              <InputGroup
                className={styles.usernameWrapper}
                style={{ width: "270px ", height: "40px", marginLeft: "60px" }}
              >
                <InputGroup.Text id="basic-addon1">
                  <Person size={22} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className={styles.formControl}
                  value={signinData.username}
                  onChange={(e) =>
                    setSigninData((prevData) => ({
                      ...prevData,
                      username: e.target.value,
                    }))
                  }
                  isInvalid={!!signinErrors.username}
                />
                <FormControl.Feedback type="invalid">
                  {signinErrors.username}
                </FormControl.Feedback>
              </InputGroup>
            </Form>
            <br />
            <Form>
              <InputGroup
                className={styles.passwordWrapper}
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
                  className={styles.formControl}
                  value={signinData.password}
                  onChange={(e) =>
                    setSigninData((prevData) => ({
                      ...prevData,
                      password: e.target.value,
                    }))
                  }
                  isInvalid={!!signinErrors.password}
                />
                <FormControl.Feedback
                  type="invalid"
                  style={{ marginBottom: "10px" }}
                >
                  {signinErrors.password}
                </FormControl.Feedback>
              </InputGroup>
            </Form>
            <div
              style={{ marginTop: "15px" }}
              className={styles.forgotDetailsWrapper}
            >
              <a
                href="/forgot"
                className={styles.forgotDetails}
                style={{ marginTop: "20px" }}
              >
                forgot details?
              </a>
            </div>
            <Button type="submit" className={styles.loginButton}>
              LOGIN
            </Button>
          </Form>
        </div>
        <div className={styles.imageWrapper}>
          <img src={img2} alt="err"></img>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <h1>CHOOSE YOUR GAME</h1>
        <div className={styles.cards}>
          <Slider className={styles.innerSlider} useCSS={true} {...settings}>
            <div>
              <Card
                style={{ width: "16rem !important" }}
                className={styles.cardsContainer}
              >
                <Card.Img src={img3} />
                <Card.Body className={styles.homeCardBody}>
                  <Card.Title>Futsal</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.cardsContainer}>
                <Card.Img src={img4} />
                <Card.Body className={styles.homeCardBody}>
                  <Card.Title>Basketball</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.cardsContainer}>
                <Card.Img src={img5} />
                <Card.Body className={styles.homeCardBody}>
                  <Card.Title>Cricket</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.cardsContainer}>
                <Card.Img src={img6} />
                <Card.Body className={styles.homeCardBody}>
                  <Card.Title>Badminton</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Slider>
        </div>
      </div>
      <div className={styles.footer}>
        <p>&copy;2024 Khelam.com.np. All Rights Reserved'</p>
      </div>
    </>
  );
};

export default Home;
