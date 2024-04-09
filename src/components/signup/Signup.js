import { Button } from "react-bootstrap";
import React from "react";
import styles from "./signup.module.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signupBtnWrapper}>
        <Link to="/adminsignup">
          <Button className={styles.adminButton}>Sign up as Admin</Button>
        </Link>
        <br/>
        <Link to="/usersignup">
          <Button className={styles.userButton}>Sign up as User</Button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
