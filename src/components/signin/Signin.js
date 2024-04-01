import React, { useState } from "react";
import styles from "./signin.module.css";
import { Button, Form } from "react-bootstrap";
import { EyeFill, EyeSlashFill, FileLockFill } from "react-bootstrap-icons";
import Home from "../home/Home";
const Signin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [password, setPassword] = useState("");
  const [displayPassword,setDisplayPassword]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (passwordRegex.test(password)) {
      setIsLoggedIn(true);
    } else {
      alert('Your password must be 8-16 characters long and contain at least one special character and one number.');
    }
  };
  if (isLoggedIn) {
    return <Home />;
  }
  return (
    <div>
      <div className={styles.signInWrapper}>
        <h1>
          Sign In
          <FileLockFill />
        </h1>
        <Form className={styles.signInForm} onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Control
              type="text"
              placeholder="Email Address"
              style={{
                width: "350px",
                margin: "10px",
                marginLeft: "460px",
                height: "50px",
              }}
              required
            />
          </Form.Group>
          <Form.Group controlId="password">
            <div style={{display:"flex"}}>
            <Form.Control
              type={displayPassword ? "text" : "password"}
              placeholder="Password"
              style={{
                width: "350px",
                margin: "10px",
                marginLeft: "460px",
                height: "50px",
              }}
              required
              onChange={(e)=>setPassword(e.target.value)}
            />
            {displayPassword?(
              <EyeSlashFill
              onClick={()=>setDisplayPassword(!displayPassword)}
              style={{position:"absolute",marginLeft:"780px",marginTop:"25px"}}
              />
            ):(
              <EyeFill
              onClick={()=>setDisplayPassword(!displayPassword)}
              style={{position:"absolute",marginLeft:"780px",marginTop:"25px"}}
              />
            )}
            </div>
          </Form.Group>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <label htmlFor="remember" style={{ marginLeft: "3px" }}>
              Remember me
            </label>
          </div>
          <Button type="submit" style={{ width: "150px", marginTop: "30px" }}>
            Sign In
          </Button>
        </Form>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "25px",
          }}
        >
          <a href="/forgot" className={styles.firsta}>
            Forgot Password?
          </a>

          <a href="/signup" className={styles.seconda}>
            Don't have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
