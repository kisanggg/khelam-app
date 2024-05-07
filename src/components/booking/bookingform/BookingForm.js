import React, { useContext } from "react";
import styles from "./bookingform.module.css";
import {
  TelephoneFill,
  Phone,
  CalendarEvent,
  Alarm,
} from "react-bootstrap-icons";
import { useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import SubmittedForm from "../submittedform/SubmittedForm";
import { DataContext } from "../../../DataContext";

const BookingForm = ({ selectedTime, onClose, selectedDate, onSubmit }) => {
  const pradesh = [
    "Province No. 1",
    "Province No. 2",
    "Province No. 3",
    "Gandaki Pradesh",
    "Province No. 5",
    "Karnali Pradesh",
    "Sudurpashchim Pradesh",
  ];
  const districtByPradesh = {
    "Province No. 1": ["Khotang", "Ilam", "Jhapa", "Okhaldhunga", "Dhankuta"],
    "Province No. 2": ["Saptari", "Siraha", "Dhanusa", "Bara", "Parsa"],
    "Province No. 3": [
      "Rasuwa",
      "Kathmandu",
      "Lalitpur",
      "Nuwakot",
      "Chitwan",
      "Dhading",
    ],
    "Gandaki Pradesh": ["Baglung", "Gorkha", "Manang", "Mustang", "Lamjung"],
    "Province No. 5": ["Dang", "Palpa", "Pyuthan", "Rolpa", "Bardiya"],
    "Karnali Pradesh": ["Humla", "Jumla", "Kalikot", "Mugu", "Surkhet"],
    "Sudurpashchim Pradesh": [
      "Bajhang",
      "Bajura",
      "Achham",
      "Kailali",
      "Darchula",
    ],
  };
  const [selectedProvince, setSelectedProvince] = useState(pradesh[0]);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const bookingDateRef = useRef(null);
  const bookingTimeRef = useRef(null);
  const reserveTimeRef = useRef(null);
  const bookingTypeRef = useRef(null);
  const pradeshRef = useRef(null);
  const districtRef = useRef(null);
  const noteRef = useRef(null);
  const [formData, setFormData] = useState({});
  const { displayModal, setDisplayModal, addFormData } =
    useContext(DataContext);
  const Submit = (e) => {
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
      pradesh: pradeshRef.current.value,
      district: districtRef.current.value,
      note: noteRef.current.value,
    };
    addFormData(formData);
    setFormData(formData);
    console.log("submitted form", formData);
    onSubmit(formData);
    setDisplayModal(true);
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
          <label htmlFor="Name" style={{ marginLeft: "23px" }}>
            Name
          </label>
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
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                placeholder="Email"
                className={styles.email}
                ref={emailRef}
                name="email"
                required
              />
            </div>

            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <label htmlFor="Phone">Phone</label>
              <input
                type="tel"
                placeholder="Phone Number"
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
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <label htmlFor="bookingdate" style={{ marginLeft: "0px" }}>
                Booking Date
              </label>
              <div style={{ display: "flex" }}>
                <CalendarEvent
                  size={20}
                  style={{
                    position: "absolute",
                    color: "red",
                    marginLeft: "160px",
                    marginTop: "4px",
                  }}
                />

                <input
                  type="date"
                  className={styles.bDate}
                  ref={bookingDateRef}
                  name="bookingDate"
                  value={selectedDate}
                  readOnly
                  required
                />
              </div>
            </div>

            <div style={{ marginTop: "10px" }}>
              <label htmlFor="bookingTime" style={{ marginLeft: "0px" }}>
                Booking Time
              </label>
              <br />
              <div style={{ display: "flex" }}>
                <Alarm
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
                style={{ width: "186px", height: "30px", paddingLeft: "10px"}}
              >
                <option>1 hour</option>
                <option>2 hour</option>
                <option>3 hour</option>
              </select>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label htmlFor="bookingType" style={{ marginLeft: "0px" }}>
                Booking Type
              </label>
              <br />
              <select
                name="bookingType"
                ref={bookingTypeRef}
                style={{ width: "184px", height: "30px",  paddingLeft: "10px" }}
              >
                <option>Full Court</option>
                <option>Half Court</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                marginLeft: "22px",
              }}
            >
              <label htmlFor="Pradesh">Pradesh</label>
              <select
                style={{ width: "186px", height: "30px",  paddingLeft: "10px"}}
                ref={pradeshRef}
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
              >
                {pradesh.map((p, index) => (
                  <option key={index} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="districtbypradesh" style={{ marginLeft: "50px" }}>
                District
              </label>
              <br />
              <select
                style={{ width: "184px", marginLeft: "50px", height: "30px" , paddingLeft: "10px"}}
                ref={districtRef}
              >
                {districtByPradesh[selectedProvince].map((d, index) => (
                  <option key={index} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="Note" style={{ marginLeft: "25px" }}>
              Note
            </label>
            <br />
            <textarea
              type="text"
              name="note"
              ref={noteRef}
              style={{ marginLeft: "24px", width: "418px", height: "80px" , paddingLeft: "10px"}}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.bButton}>
            Book
          </button>
        </form>
      </div>
      <div className={styles.submittedFormWrapper}>
        <Modal show={displayModal} onHide={handleCloseModal}>
          <Modal.Body className={styles.submittedFormBody}>
            <SubmittedForm formData={formData} onClose={handleCloseModal} />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default BookingForm;
