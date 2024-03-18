import React from "react";
import styles from "./bookingform.module.css";
import { TelephoneFill, Phone } from "react-bootstrap-icons";
const BookingForm = ({ date, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("booking submitted for date:", date);
    onClose();
  };
  return (
    <div className={styles.bookingForm}>
      <div className={styles.header}>
        <img
          src="https://marketplace.canva.com/EAFL8GIA214/1/0/1600w/canva-modern-minimalist-basketball-team-logo-gnFZBqra6FQ.jpg"
          alt="err"
          width={120}
          height={100}
        />
        <div className={styles.wrapper}>
          <h4>Times</h4>
          <p>Imadol, Lalitpur</p>
          <div className={styles.phoneWrapper}>
            <p>
              <TelephoneFill /> 0105410006
            </p>
            <p>
              <Phone /> 9812345678
            </p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <br />
        <input type="text" className={styles.fName} placeholder="First Name" />
        <input type="text" className={styles.lName} placeholder="Last Name" />
        <div className={styles.emailWrapper}>
            <div>
          <label htmlFor="Email">Email</label>
          <br />
          <input type="text" className={styles.email} />
            </div>
                
          <div>
            <label htmlFor="Phone">Phone</label>
            <br />
            <input type="tel" className={styles.tel} />
          </div>
        </div>
        <div className={styles.bookingWrapper}>
            <div>
          <label htmlFor="bookingdate">Booking Date</label>
          <br/>
          <input type="date" className={styles.bDate} />
            </div>
            <div>
                
          <label htmlFor="bookingTime">Booking Time</label>
          <br/>
          <input type="number" className={styles.bTime} />
            </div>
        </div>
        <div className={styles.rTime}>
        <div>
          <label htmlFor="reserveTime">Reserve Time</label>
          <br/>
          <input type="number" className={styles.time} />
            </div>
            <div>
          <lable htmlFor="bookingType">Booking Type</lable>
          <br/>
          <select>
            <option>Full Court</option>
            <option>Half Court</option>
          </select>
            </div>
        </div>
        <div>
          <label htmlFor="Note">Note</label>
          <br/>
          <textarea type="text"></textarea>
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
