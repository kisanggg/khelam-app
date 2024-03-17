import React from 'react';
import styles from './signup.module.css'; 
import { Button, Form } from 'react-bootstrap';
import { FileLockFill } from 'react-bootstrap-icons';

export default function Signup() {
  return (
    <div className={styles.formWrapper}>
        <h1>Sign Up <FileLockFill size={40}/></h1>
        <Form className={styles.signUpForm}> 
            <Form.Group controlId='Name' style={{display:"flex",justifyContent:"flex-start"}}>
                <Form.Control type='text' placeholder='First Name' style={{width:"150px",margin:"10px",marginBottom:"0px",border:"1px solid black",marginLeft:"440px"}} required/>
                <Form.Control type='text' placeholder='Last Name' style={{width:"150px",margin:"10px",marginBottom:"0px",marginLeft:"0px",border:"1px solid black"}} required/>
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.Control type='text' placeholder='Email Address' style={{width:"311px",margin:"20px",border:"1px solid black",marginLeft:"440px"}} required/>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Control type='password' placeholder='password' style={{width:"311px",margin:"20px",border:"1px solid black",marginLeft:"440px"}} required/>  
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Control type='password' placeholder='confirm password' style={{width:"311px",margin:"20px",border:"1px solid black",marginLeft:"440px"}} required/>
            </Form.Group>
            <div className={styles.termsWrapper}>
           <input type='checkbox' style={{marginleft:"0px"}}></input>
           <label style={{marginLeft:"6px"}}>I agree to Terms and Conditions.</label>
            </div>
           <br/>
            <Button variant="primary" type="submit" style={{width:"150px",marginTop:"10px"}}>Sign Up</Button>
        </Form>
            <a href="/login" style={{ textAlign: "center", marginTop: "0px", color: "black", fontSize: "15px",marginLeft:"0px" }}>Already have an account?</a>
    </div>
  );
}
