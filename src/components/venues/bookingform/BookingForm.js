import React from "react";
import styles from "./bookingform.module.css";
import { TelephoneFill, Phone, Stopwatch } from "react-bootstrap-icons";
import { useState, useRef,useEffect} from "react";
import { Modal } from "react-bootstrap";
import SubmittedForm from "./SubmittedForm";

const BookingForm = ({  selectedTime, onClose,onBooking}) => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const bookingDateRef = useRef(null);
  const bookingTimeRef = useRef(null);
  const reserveTimeRef = useRef(null);
  const bookingTypeRef = useRef(null);
  const noteRef = useRef(null);

  const [formData, setFormData] = useState({});
  const [displayModal,setDisplayModal]=useState(false);
  
  console.log("BookingForm component rendered");
  
  const Submit = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const fullName = `${firstName} ${lastName}`;
    const date = new Date(bookingDateRef.current.value);

    const formData = {
      name: fullName,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      date: date,
      time: bookingTimeRef.current.value,
      hour: reserveTimeRef.current.value,
      type: bookingTypeRef.current.value,
      note: noteRef.current.value,
    };

    console.log("Selected Date:", formData.date);
    console.log("Selected times:", formData.time);
    setFormData(formData);
    console.log("submitted form",formData);
    onBooking(formData);
    setDisplayModal(true); 
    console.log(displayModal)
  };

  const handleCloseModal = () => {
    setFormData({});
    setDisplayModal(false);
    onClose();
  };

  return (
    <>
    <div className={styles.bookingForm}>
      <div className={styles.header}>
        <img
          src="https://marketplace.canva.com/EAFL8GIA214/1/0/1600w/canva-modern-minimalist-basketball-team-logo-gnFZBqra6FQ.jpg"
          alt="err"
          width={80}
          height={70}
        />
        <div className={styles.wrapper}>
          <h4>Times</h4>
          <p style={{ marginBottom: "0px" }}>Imadol, Lalitpur</p>
          <div className={styles.phoneWrapper}>
            <p>
              <TelephoneFill style={{ color: "red" }} /> 0105410006
            </p>
            <p>
              <Phone style={{ color: "red" }} /> 9812345678
            </p>
          </div>
        </div>
      </div>
      <form className={styles.formWrapper} onSubmit={Submit}>
        <label htmlFor="Name">Name</label>
        <br />
        <input
          type="text"
          className={styles.fName}
          placeholder="First Name"
          ref={firstNameRef}
          name="firstName"
          required
        />
        <input
          type="text"
          className={styles.lName}
          placeholder="Last Name"
          ref={lastNameRef}
          name="lastName"
          required
        />
        <div className={styles.emailWrapper}>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="Email" style={{ marginLeft: "0px" }}>
              Email
            </label>
            <br />
            <input type="text" className={styles.email} ref={emailRef} name="email"  required/>
          </div>

          <div style={{ marginTop: "10px" }}>
            <label htmlFor="Phone" style={{ marginLeft: "0px" }}>
              Phone
            </label>
            <br />
            <input
              type="tel"
              className={styles.tel}
              name="phone"
              ref={phoneRef}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
              required
            />
          </div>
        </div>
        <div className={styles.bookingWrapper}>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="bookingdate" style={{ marginLeft: "0px" }}>
              Booking Date
            </label>
            <br />
            <input type="date" className={styles.bDate} ref={bookingDateRef} name="bookingDate" required/>
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="bookingTime" style={{ marginLeft: "0px" }}>
              Booking Time
            </label>
            <br />
            <div style={{ display: "flex" }}>
              <Stopwatch
                size={20}
                style={{
                  position: "absolute",
                  color: "red",
                  marginLeft: "160px",
                  marginTop: "4px",
                }}
              />
              <input
                type="text"
                className={styles.bTime}
                name="bookingTime"
                ref={bookingTimeRef}
                value={selectedTime || ""}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className={styles.rTime}>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="reserveTime" style={{ marginLeft: "0px" }}>
              Reserve Time
            </label>
            <br />
            <select
              name="reserveTime"
              ref={reserveTimeRef}
              style={{ width: "190px", height: "30px" }}
            >
              <option>30 mins</option>
              <option>1 hour</option>
              <option>2 hour</option>
              <option>3 hour</option>
            </select>
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="bookingType">Booking Type</label>
            <br />
            <select
              name="bookingType"
              ref={bookingTypeRef}
              style={{ width: "190px", height: "30px" }}
            >
              <option>Full Court</option>
              <option>Half Court</option>
            </select>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <label htmlFor="Note">Note</label>
          <br />
          <textarea
            type="text"
            name="note"
            ref={noteRef}
            style={{ marginLeft: "20px", width: "425px", height: "80px" }}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.bButton} >
          Book
        </button>
      </form>
    </div>
      <div className={styles.submittedFormWrapper}>
      <Modal 
      show={displayModal}
      onHide={handleCloseModal}
      >
      <Modal.Body className={styles.submittedFormBody} >
        <SubmittedForm
          formData={formData}
          onClose={handleCloseModal}
        />
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
};

export default BookingForm;
