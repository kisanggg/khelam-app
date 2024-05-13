import React, { useContext, useState } from "react";
import styles from "./signin.module.css";
import { Button, Form, FormControl } from "react-bootstrap";
import {
  EyeFill,
  EyeSlashFill,
  FileLockFill,
  TelephoneFill,
  Phone,
  ArrowLeftCircleFill,
} from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../DataContext";
const Signin = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(DataContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [displayPassword, setDisplayPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setIsLoggedIn(true);
      navigate("/home");
    }
  };
  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9]{3,20}$/;
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!data.email.trim()) {
      errors.email = "Enter the username";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Please enter the valid username";
    }
    if (!data.password.trim()) {
      errors.password = "Enter the password.";
    } else if (!passwordRegex.test(data.password)) {
      errors.password = "Please enter the valid password.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  return (
    <>
      <Link to="/usersignup">
        <ArrowLeftCircleFill size={30} className={styles.backArrow} />
      </Link>
      <div className={styles.mainContainer}>
        <div className={styles.signInWrapper}>
          <div className={styles.signIn}>
            <img
              src="https://marketplace.canva.com/EAFL8GIA214/1/0/1600w/canva-modern-minimalist-basketball-team-logo-gnFZBqra6FQ.jpg"
              alt="err"
              width={120}
              height={100}
            />
            <div className={styles.wrapper}>
              <h4>HiTech</h4>
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
          <div className={styles.formWrapper}>
            <h3>
              Sign In
              <FileLockFill size={25} />
            </h3>
            <Form className={styles.signInForm} onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={data.email}
                  style={{
                    width: "320px",
                    margin: "10px",
                    marginLeft: "40px",
                    height: "40px",
                    border: "1px solid black",
                  }}
                  isInvalid={!!formErrors.email}
                  onChange={(e) =>
                    setData({
                      ...data,
                      email: e.target.value,
                    })
                  }
                />
                <FormControl.Feedback
                  type="invalid"
                  style={{ textAlign: "left", marginLeft: "40px" }}
                >
                  {formErrors.email}
                </FormControl.Feedback>
              </Form.Group>
              <Form.Group controlId="password">
                <div style={{ display: "flex" }}>
                  <div>
                    <Form.Control
                      type={displayPassword ? "text" : "password"}
                      placeholder="Password"
                      value={data.password}
                      style={{
                        width: "320px",
                        margin: "10px",
                        marginLeft: "40px",
                        height: "40px",
                        border: "1px solid black",
                      }}
                      onChange={(e) =>
                        setData({
                          ...data,
                          password: e.target.value,
                        })
                      }
                      isInvalid={!!formErrors.password}
                    />
                    <FormControl.Feedback
                      type="invalid"
                      style={{ textAlign: "left", marginLeft: "40px" }}
                    >
                      {formErrors.password}
                    </FormControl.Feedback>
                  </div>
                  {displayPassword ? (
                    <EyeSlashFill
                      onClick={() => setDisplayPassword(!displayPassword)}
                      style={{
                        position: "absolute",
                        marginLeft: "310px",
                        marginTop: "22px",
                      }}
                    />
                  ) : (
                    <EyeFill
                      onClick={() => setDisplayPassword(!displayPassword)}
                      style={{
                        position: "absolute",
                        marginLeft: "310px",
                        marginTop: "22px",
                      }}
                    />
                  )}
                </div>
              </Form.Group>
              <div className={styles.checkbox}>
                <input type="checkbox" style={{ marginLeft: "0px" }} />
                <label htmlFor="remember" style={{ marginLeft: "5px" }}>
                  Remember me
                </label>
              </div>
              <Button
                className={styles.signinButton}
                type="submit"
                style={{
                  width: "150px",
                  marginTop: "25px",
                  marginLeft: "10px",
                }}
              >
                Sign In
              </Button>
              <div
                style={{
                  marginTop: "10px",
                  marginLeft: "20px",
                }}
              >
                <a href="/usersignup" className={styles.seconda}>
                  Don't have an account? Sign Up
                </a>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
