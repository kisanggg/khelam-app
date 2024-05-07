import React, { useContext, useState } from "react";
import { Button, Form, FormControl, FormLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  TelephoneFill,
  Phone,
  LockFill,
  EyeSlashFill,
  EyeFill,
  ArrowLeftCircleFill
} from "react-bootstrap-icons";
import styles from "./adminsignin.module.css";
import { DataContext } from "../../../DataContext";
const Adminsignin = () => {
  const {  setIsLoggedIn } = useContext(DataContext);
  const [showPassword, setShowPassword] = useState(false);
  const [signinErrors, setSigninErrors] = useState({});
  const [signinData, setSigninData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      navigate("/clubbookingdata");
      setIsLoggedIn(true);
    }
  };

  const validateForm = () => {
    const errors = {};
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!signinData.username || !signinData.username.trim()) {
      errors.username = "Enter the username.";
    } else if (!usernameRegex.test(signinData.username)) {
      errors.username = "Please enter valid username.";
    }
    if (!signinData.password || !signinData.password.trim()) {
      errors.password = "Enter the password.";
    } else if (!passwordRegex.test(signinData.password)) {
      errors.password = "Please enter valid password.";
    }
    setSigninErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
    <Link to="/adminsignup">
        <ArrowLeftCircleFill size={30} className={styles.backArrow} />
      </Link>
    <div className={styles.mainBody}>
      <div className={styles.container}>
        <div className={styles.signinWrapper}>
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
        <div className={styles.signinForm}>
          <h3>
            Sign in
            <LockFill />
          </h3>
          <Form onSubmit={handleSubmit}>
            <Form>
              <FormLabel className={styles.labelWrapper}>Username</FormLabel>
              <FormControl
                type="text"
                placeholder="Username"
                value={signinData.username}
                onChange={(e) =>
                  setSigninData({
                    ...signinData,
                    username: e.target.value,
                  })
                }
                className={styles.inputWrapper}
                isInvalid={!!signinErrors.username}
              />
              <FormControl.Feedback type="invalid">
                {signinErrors.username}
              </FormControl.Feedback>
            </Form>
            <Form>
              <FormLabel className={styles.labelWrapper}> Password</FormLabel>
              <div style={{ display: "flex" }}>
                <div>
                  <FormControl
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    value={signinData.password}
                    onChange={(e) =>
                      setSigninData({
                        ...signinData,
                        password: e.target.value,
                      })
                    }
                    className={styles.inputWrapper}
                    isInvalid={!!signinErrors.password}
                  />
                  <FormControl.Feedback type="invalid">
                    {signinErrors.password}
                  </FormControl.Feedback>
                </div>

                {showPassword ? (
                  <EyeSlashFill
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      marginLeft: "270px",
                      marginTop: "10px",
                    }}
                  />
                ) : (
                  <EyeFill
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      marginLeft: "270px",
                      marginTop: "10px",
                    }}
                  />
                )}
              </div>
            </Form>
            <Button type="submit" className={styles.signinButton}>
              Sign in
            </Button>
            <br/> 
            <Link to='/adminsignup' className={styles.link}> Don't have an account?</Link>
          </Form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Adminsignin;
