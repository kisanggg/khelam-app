import React  from "react";
import styles from "./bookingform.module.css";
import { TelephoneFill, Phone, Stopwatch } from "react-bootstrap-icons";
import SubmittedForm from "./SubmittedForm";
import { useState } from "react";

const BookingForm = ({ date, selectedTime, onClose, setBookings }) => {
  
  const [isBooked,setIsBooked]=useState(false);
  console.log("Date prop:", date);
  if (!(date instanceof Date)) {
    return <div>Error: Invalid date</div>;
  }

  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  const handleSubmit = (e) => {
    e.preventDefault();
    setBookings((prevBookings) => {
      const dateString = localDate.toISOString().split("T")[0];
      return { ...prevBookings, [dateString]: true };
    });
    setIsBooked(true);
    console.log("Booking submitted for time:", selectedTime);
    
    onClose();
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
      <form className={styles.formWrapper}>
        <label htmlFor="Name">Name</label>
        <br />
        <input type="text" className={styles.fName} placeholder="First Name" />
        <input type="text" className={styles.lName} placeholder="Last Name" />
        <div className={styles.emailWrapper}>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="Email" style={{ marginLeft: "0px" }}>
              Email
            </label>
            <br />
            <input type="text" className={styles.email} />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label htmlFor="Phone" style={{ marginLeft: "0px" }}>
              Phone
            </label>
            <br />
            <input
              type="tel"
              className={styles.tel}
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
            <input
              type="date"
              className={styles.bDate}
              
            />
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
            <select style={{ width: "190px", height: "30px" }}>
              <option>30 mins</option>
              <option>1 hour</option>
              <option>2 hour</option>
              <option>3 hour</option>
            </select>
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="bookingType">Booking Type</label>
            <br />
            <select style={{ width: "190px", height: "30px" }}>
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
            style={{ marginLeft: "20px", width: "425px", height: "80px" }}
          ></textarea>
        </div>
        <button type="submit" className={styles.bButton} onClick={handleSubmit} disabled={isBooked}
        style={{backgroundColor:isBooked?"pink":""}}
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
