import React from "react";
import { Button, Form, FormControl, FormLabel } from "react-bootstrap";
import styles from "./contact.module.css";
import { Bank, GeoAlt, Whatsapp } from "react-bootstrap-icons";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.contactsContainer}>
          <h2>Send us a message</h2>
          <p>You can contact us with anything related to our service.</p>
          <Form onSubmit={handleSubmit}>
            <Form>
              <FormLabel>
                <span>*</span>Your name
              </FormLabel>
              <FormControl type="text" className={styles.nameWrapper} />
            </Form>
            <Form>
              <FormLabel>
                <span>*</span>Email
              </FormLabel>
              <FormControl type="text" className={styles.emailWrapper} />
            </Form>
            <Form>
              <FormLabel>
                <span>*</span>PhoneNumber
              </FormLabel>
              <FormControl type="tel" className={styles.phoneWrapper} />
            </Form>
            <Form>
              <FormLabel>
                <span>*</span>Your Message
              </FormLabel>
              <FormControl
                as="textarea"
                rows={4}
                className={styles.messageWrapper}
              />
            </Form>
            <Button type="submit" className={styles.submitButton}>
              Submit
            </Button>
          </Form>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.locationWrapper}>
            <GeoAlt
              size={26}
              style={{ color: "red", marginTop: "5px", marginLeft: "2px" }}
            />
            <div style={{ marginLeft: "20px" }}>
              <h5>Find us at the office</h5>
              <p>Imadol, Lalitpur</p>
            </div>
          </div>
          <div className={styles.socialmediaWrapper}>
            <Whatsapp
              size={23}
              style={{ color: "red", marginTop: "5px", marginLeft: "5px" }}
            />
            <div style={{ marginLeft: "20px" }}>
              <h5>Whatsapp us</h5>
              <p>Khelam Customer Service</p>
              <p>01-2453652</p>
              <p>7 AM-3 PM</p>
            </div>
          </div>
          <div className={styles.legalWrapper}>
            <Bank
              size={22}
              style={{ color: "red", marginTop: "5px", marginLeft: "5px" }}
            />
            <div style={{ marginLeft: "20px" }}>
              <h5>Legal Information</h5>
              <p>&copy;2024 Khelam.com.np. All Rights Reserved'</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
