import React, { useState } from "react";
import { Button, Form, FormControl, FormLabel, Modal } from "react-bootstrap";
import styles from "./contact.module.css";
import { Bank, GeoAlt, Whatsapp, XLg } from "react-bootstrap-icons";
const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setShowModal(true);
      setContactData({
        name: "",
        email: "",
        phonenumber: "",
        message: "",
      });
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!contactData.name.trim()) {
      errors.name = "Please enter the name.";
    }
    if (!contactData.email.trim()) {
      errors.email = "Please enter the email.";
    }
    if (!contactData.phonenumber.trim()) {
      errors.phonenumber = "Please enter your contact number.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleCloseModal = () => {
    setShowModal(false);
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
              <FormControl
                type="text"
                className={styles.nameWrapper}
                value={contactData.name}
                onChange={(e) =>
                  setContactData({
                    ...contactData,
                    name: e.target.value,
                  })
                }
                isInvalid={formErrors.name}
              />
              <FormControl.Feedback type="invalid">
                {formErrors.name}
              </FormControl.Feedback>
            </Form>
            <Form>
              <FormLabel>
                <span>*</span>Email
              </FormLabel>
              <FormControl
                type="text"
                className={styles.emailWrapper}
                value={contactData.email}
                onChange={(e) =>
                  setContactData({
                    ...contactData,
                    email: e.target.value,
                  })
                }
                isInvalid={formErrors.email}
              />
              <FormControl.Feedback type="invalid">
                {formErrors.email}
              </FormControl.Feedback>
            </Form>
            <Form>
              <FormLabel>
                <span>*</span>PhoneNumber
              </FormLabel>
              <FormControl
                type="tel"
                className={styles.phoneWrapper}
                value={contactData.phonenumber}
                onChange={(e) =>
                  setContactData({
                    ...contactData,
                    phonenumber: e.target.value,
                  })
                }
                isInvalid={formErrors.phonenumber}
              />
              <FormControl.Feedback type="invalid">
                {formErrors.phonenumber}
              </FormControl.Feedback>
            </Form>
            <Form>
              <FormLabel>
                <span>*</span>Your Message
              </FormLabel>
              <FormControl
                as="textarea"
                rows={4}
                className={styles.messageWrapper}
                value={contactData.message}
                onChange={(e) =>
                  setContactData({
                    ...contactData,
                    message: e.target.value,
                  })
                }
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
      <div className={styles.footer}>
        <p>&copy;2024 Khelam.com.np. All Rights Reserved'</p>
      </div>
      <div>
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          className={styles.contactModal}
        >
          <Modal.Header className={styles.modalHeader}>
            <Modal.Title>
              <XLg onClick={handleCloseModal} className={styles.closeButton} />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.modalBody}>
            Thankyou for contacting us.
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Contact;
