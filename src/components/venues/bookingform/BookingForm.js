import React from "react";
import styles from "./bookingform.module.css";
import { TelephoneFill, Phone, Stopwatch } from "react-bootstrap-icons";
import SubmittedForm from "./SubmittedForm";
import { useState, useRef} from "react";
import { Modal } from "react-bootstrap";

const BookingForm = ({ date, selectedTime, onClose, setBookings }) => {
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
  const [isBooked, setIsBooked] = useState(false);
  const [displayModal,setDisplayModal]=useState(false);
  console.log("Date prop:", date);
  if (!(date instanceof Date)) {
    return <div>Error: Invalid date</div>;
  }

  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const fullName = `${firstName} ${lastName}`;

    const formData = {
      name: fullName,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      date: bookingDateRef.current.value,
      time: bookingTimeRef.current.value,
      hour: reserveTimeRef.current.value,
      type: bookingTypeRef.current.value,
      note: noteRef.current.value,
    };
    setFormData(formData);
    setIsBooked(true);
    setDisplayModal(true);
    console.log("submitted form",formData);
    onClose();
  };

  const handleCloseModal = () => {
    setIsBooked(false);
    setFormData({});
    setDisplayModal(false)
  };

  return (
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
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <br />
        <input
          type="text"
          className={styles.fName}
          placeholder="First Name"
          ref={firstNameRef}
          name="firstName"
        />
        <input
          type="text"
          className={styles.lName}
          placeholder="Last Name"
          ref={lastNameRef}
          name="lastName"
        />
        <div className={styles.emailWrapper}>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="Email" style={{ marginLeft: "0px" }}>
              Email
            </label>
            <br />
            <input type="text" className={styles.email} ref={emailRef} name="email" />
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
            />
          </div>
        </div>
        <div className={styles.bookingWrapper}>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="bookingdate" style={{ marginLeft: "0px" }}>
              Booking Date
            </label>
            <br />
            <input type="date" className={styles.bDate} ref={bookingDateRef} name="bookingDate" />
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
                value={selectedTime}
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
          ></textarea>
        </div>
        <button type="submit" className={styles.bButton} disabled={isBooked}>
          Book
        </button>
      </form>
      <Modal 
      show={displayModal}
      onHide={handleCloseModal}
      style={{
        backgroundColor: "rgba(43, 40, 40, 0.5)",
        backdropFilter: "blur(0.5px)",
      }}
      >
      <Modal.Body style={{ backgroundColor: "black" }}>
        {isBooked &&(
        <SubmittedForm
          formData={formData}
          onClose={handleCloseModal}
        />
        )}
        
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BookingForm;
