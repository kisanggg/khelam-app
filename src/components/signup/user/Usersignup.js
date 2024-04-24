import React, { useState } from "react";
import styles from "./usersignup.module.css";
import { Form } from "react-bootstrap";
import {
  EyeFill,
  EyeSlashFill,
  FileLockFill,
  TelephoneFill,
  Phone,
  ArrowLeftCircleFill,
} from "react-bootstrap-icons";
import Signin from "../../signin/Signin";
import { Link } from "react-router-dom";

export default function Usersignup() {
  const [isSignedIn, setIsSignedIn] = useState();
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailData)) {
      alert("please enter a valid email address");
      return;
    }
    const passwordregex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (
      passwordData.password !== passwordData.confirmPassword ||
      !passwordregex.test(passwordData.password)
    ) {
      alert("passwords do not match or do not meet the requirements");
      return;
    } else {
      setIsSignedIn(true);
    }
  };

  const handleChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.id]: e.target.value,
    });
  };
  if (isSignedIn) {
    return <Signin />;
  }
  return (
    <div className={styles.mainWrapper}>
      <Link to="/signup">
        <ArrowLeftCircleFill size={30} className={styles.backArrow} />
      </Link>
      <div className={styles.formWrapper}>
        <div className={styles.signUp}>
          <img
            src="https://marketplace.canva.com/EAFL8GIA214/1/0/1600w/canva-modern-minimalist-basketball-team-logo-gnFZBqra6FQ.jpg"
            alt="err"
            width={120}
            height={100}
          />
          <div className={styles.wrapper}>
            <h5>HiTech</h5>
            <p>Imadol, Lalitpur</p>
            <div className={styles.phoneWrapper}>
              <p>
                <TelephoneFill style={{ color: "red" }} /> 01-2453652 ,
              </p>
              <p>
                <Phone style={{ color: "red", marginLeft: "7px" }} /> 9802542632
              </p>
            </div>
          </div>
        </div>
        <h4>
          Sign Up <FileLockFill size={30} />
        </h4>
        <Form className={styles.signUpForm} onSubmit={handleSubmit}>
          <Form.Group
            controlId="Name"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Form.Control
              type="text"
              placeholder="First Name"
              style={{
                width: "150px",
                margin: "10px",
                marginBottom: "5px",
                border: "1px solid black",
                marginLeft: "65px",
              }}
              required
            />
            <Form.Control
              type="text"
              placeholder="Last Name"
              style={{
                width: "150px",
                margin: "10px",
                marginBottom: "5px",
                marginLeft: "0px",
                border: "1px solid black",
              }}
              required
            />
          </Form.Group>
          <Form.Group controlId="Address">
            <Form.Control
              type="text"
              placeholder="Address"
              style={{
                width: "311px",
                marginLeft: "65px",
                marginTop: "8px",
                border: "1px solid black",
              }}
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Control
              type="text"
              placeholder="Email Address"
              style={{
                width: "311px",
                margin: "10px",
                border: "1px solid black",
                marginLeft: "65px",
                marginTop: "13px",
              }}
              required
              onChange={(e) => setEmailData(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <div style={{ display: "flex" }}>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="password"
                style={{
                  width: "311px",
                  border: "1px solid black",
                  margin: "10px",
                  marginLeft: "65px",
                  marginTop: "5px",
                }}
                required
                onChange={handleChange}
              />
              {showPassword ? (
                <EyeSlashFill
                  className={styles.eyeIcon}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    marginTop: "14px",
                    marginLeft: "345px",
                    position: "absolute",
                    color: "black",
                  }}
                />
              ) : (
                <EyeFill
                  className={styles.eyeIcon}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    marginTop: "14px",
                    marginLeft: "345px",
                    position: "absolute",
                    color: "black",
                  }}
                />
              )}
            </div>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <div style={{ display: "flex" }}>
              <Form.Control
                type={showConPassword ? "text" : "password"}
                placeholder="confirm password"
                style={{
                  width: "311px",
                  margin: "10px",
                  border: "1px solid black",
                  marginLeft: "65px",
                  marginTop: "5px",
                }}
                required
                onChange={handleChange}
              />
              {showConPassword ? (
                <EyeSlashFill
                  className={styles.eyeIcon}
                  onClick={() => setShowConPassword(!showConPassword)}
                  style={{
                    marginTop: "14px",
                    marginLeft: "345px",
                    position: "absolute",
                    color: "black",
                  }}
                />
              ) : (
                <EyeFill
                  className={styles.eyeIcon}
                  onClick={() => setShowConPassword(!showConPassword)}
                  style={{
                    position: "absolute",
                    marginTop: "14px",
                    marginLeft: "345px",
                    color: "black",
                  }}
                />
              )}
            </div>
          </Form.Group>
          <br />
          <button className={styles.signupButton} type="submit">
            Sign Up
          </button>
        </Form>
        <a
          href="/login"
          style={{
            textAlign: "center",
            marginTop: "0px",
            color: "black",
            fontSize: "14px",
            marginLeft: "0px",
            marginBottom: "50px",
          }}
        >
          Already have an account?
        </a>
      </div>
    </div>
  );
}
