import React, { useState } from "react";
import styles from "./signin.module.css";
import { Form } from "react-bootstrap";
import {
  EyeFill,
  EyeSlashFill,
  FileLockFill,
  TelephoneFill,
  Phone,
} from "react-bootstrap-icons";
import Home from "../home/Home";
const Signin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayPassword, setDisplayPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("please enter valid email address");
      return;
    }
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (passwordRegex.test(password)) {
      setIsLoggedIn(true);
    } else {
      alert(
        "Your password must be 8-16 characters long and contain at least one special character and one number."
      );
    }
  };
  if (isLoggedIn) {
    return <Home />;
  }
  return (
    <div>
      <div className={styles.signInWrapper}>
        <div className={styles.signIn}>
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
                <TelephoneFill style={{ color: "red" }} /> 01-2453652 ,
              </p>
              <p>
                <Phone style={{ color: "red", marginLeft: "10px" }} />{" "}
                9802542632
              </p>
            </div>
          </div>
        </div>
        <h3>
          Sign In
          <FileLockFill size={25} />
        </h3>
        <Form className={styles.signInForm} onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Control
              type="text"
              placeholder="Email Address"
              style={{
                width: "320px",
                margin: "10px",
                marginLeft: "480px",
                height: "40px",
                border: "1px solid black",
              }}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <div style={{ display: "flex" }}>
              <Form.Control
                type={displayPassword ? "text" : "password"}
                placeholder="Password"
                style={{
                  width: "320px",
                  margin: "10px",
                  marginLeft: "480px",
                  height: "40px",
                  border: "1px solid black",
                }}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              {displayPassword ? (
                <EyeSlashFill
                  onClick={() => setDisplayPassword(!displayPassword)}
                  style={{
                    position: "absolute",
                    marginLeft: "770px",
                    marginTop: "22px",
                  }}
                />
              ) : (
                <EyeFill
                  onClick={() => setDisplayPassword(!displayPassword)}
                  style={{
                    position: "absolute",
                    marginLeft: "770px",
                    marginTop: "22px",
                  }}
                />
              )}
            </div>
          </Form.Group>
          <div className={styles.checkbox}>
            <input type="checkbox" style={{ marginLeft: "0px" }} />
            <label htmlFor="remember" style={{ marginLeft: "3px" }}>
              Remember me
            </label>
          </div>
          <button
            className={styles.signinButton}
            type="submit"
            style={{ width: "150px", marginTop: "25px", marginLeft: "10px" }}
          >
            Sign In
          </button>
        </Form>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "25px",
            marginLeft: "20px",
          }}
        >
          {/* <a href="/forgot" className={styles.firsta}>
            Forgot Password?
          </a> */}

          <a href="/signup" className={styles.seconda}>
            Don't have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
