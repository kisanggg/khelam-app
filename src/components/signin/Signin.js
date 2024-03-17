import React from 'react'
import styles from './signin.module.css';
import { Button, Form } from 'react-bootstrap';
import { FileLockFill } from 'react-bootstrap-icons';
const Signin = () => {
  return (
    <div>
      <div className={styles.signInWrapper}>
        <h1>Sign In<FileLockFill/></h1>
        <Form className={styles.signInForm}>
            <Form.Group controlId='username'>
              <Form.Control type='text' placeholder='Email Address' style={{width:"350px",margin:"10px",marginLeft:"460px",height:"50px"}}/>
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Control type='password' placeholder='Password' style={{width:"350px",margin:"10px",marginLeft:"460px",height:"50px"}}/>
            </Form.Group>
            <div className={styles.checkbox}>
              <input type='checkbox'/>
              <label htmlFor='remember' style={{marginLeft:"3px"}}>Remember me</label>
            </div>
            <Button style={{width:"150px",marginTop:"30px"}}>Sign In</Button>
        </Form>
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"25px"}}>
          <a href='/forgot' className={styles.firsta} >Forgot Password?</a>
         
          <a href='/signup' className={styles.seconda}>Don't have an account? Sign Up</a>
        
        </div>
      </div>
    </div>
  )
}

export default Signin
