import React, { useContext, useState } from "react";
import { TelephoneFill, Phone } from "react-bootstrap-icons";
import styles from "./clubdata.module.css";
import { Table, Modal, Form, Button } from "react-bootstrap";
import { DataContext } from "../../DataContext";
import moment from "moment";

const Clubbookingdata = ({ formData }) => {
  const {
    days,
    times,
    bookedTime,
    setBookedTime,
    disabledTimeSlots,
    setDisabledTimeSlots,
    displayModal,
    setDisplayModal,
    formDataList,
  } = useContext(DataContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedFormData,setSelectedFormData]=useState(null)
  const [selectedDate, setSelectedDate] = useState(null); 
  const [selectedTime, setSelectedTime] = useState(null); 
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!contactNumber.trim()) {
      errors.contactNumber = 'Contact Number is required';
    }
    if (!address.trim()) {
      errors.address = 'Address is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0; 
  };

  const handleShowDetails = (formData) => {
    setDisplayModal(true);
    setSelectedFormData(formData);
  };

  const handleCloseModal = () => {
    setDisplayModal(false);
    setShowModal(false);
  };

  const isSlotDisabled = (date, time) => {
    const dateString = moment(date).format("YYYY-MM-DD");
    const timeString = moment(time).format("hh A");
    return disabledTimeSlots.some(
      (slot) =>
        moment(slot.date).format("YYYY-MM-DD") === dateString &&
        moment(slot.time).format("hh A") === timeString
    );
  };

  const handleBookSlot = () => {
    if(validateForm){
      if (selectedDate && selectedTime) {
        const dateString = moment(selectedDate).format("YYYY-MM-DD");
        const timeString = moment(selectedTime).format("hh A");
        const bookingKey = `${dateString} ${timeString}`;
        setBookedTime((prevBookedTime) => ({
          ...prevBookedTime,
          [bookingKey]: true,
        }));
        setShowModal(false);
      }
    }
  };

  const handleDisableSlot = (date, time) => {
    const dateString = new Date(date);
    const timeString = moment(time,"hh A").toDate();
    const slotToDisable = { date: dateString, time: timeString };
    setDisabledTimeSlots((prevDisabledSlots) => [
      ...prevDisabledSlots,
      slotToDisable,
    ]);
    console.log("disable slot",disabledTimeSlots)
  };

  const renderSlotContent = (date, time, isBooked, isDisabled) => {
    const dateString = moment(date).format("YYYY-MM-DD");
    const timeString = moment(time).format("hh A");
    const slotFormData = formDataList.find(
      (formData) => formData.date === dateString && formData.time === timeString
    );

    if (isBooked && slotFormData) {
      return (
        <div className={styles.bookedSlot}>
          Booked
          <button
            className={styles.detailsBtn}
            onClick={() => handleShowDetails(slotFormData)}
          >
            Details
          </button>
        </div>
      );
    } else if (isDisabled) {
      return <div className={styles.disabledSlot}>Not Available</div>;
    } else if (isBooked) {
      return (
        <div>
          <p>Booked</p>
          <button>Details</button>
        </div>
      );
    } else {
      return (
        <div className={styles.availableSlot}>
          Available
          <button
            onClick={() => {
              setSelectedDate(date);
              setSelectedTime(time);
              setShowModal(true);
            }}
            className={`${styles.bookBtn} ${styles.bookedBtn}`}
          >
            Book
          </button>
          <button
            onClick={() => handleDisableSlot(date, time)}
            className={styles.disableBtn}
          >
            Disable
          </button>
        </div>
      );
    }
  };

  return (
    <div className={styles.clubdataWrapper}>
      <div className={styles.adminHeader}>
        <img
          src="https://marketplace.canva.com/EAFL8GIA214/1/0/1600w/canva-modern-minimalist-basketball-team-logo-gnFZBqra6FQ.jpg"
          alt="Club Logo"
          width={120}
          height={100}
        />
        <div className={styles.wrapper}>
          <h4>Club Name</h4>
          <p>Imadol, Lalitpur</p>
          <div className={styles.phoneWrapper}>
            <p>
              <TelephoneFill style={{ color: "red" }} /> 01-2453652
            </p>
            <p>
              <Phone style={{ color: "red" }} /> 9802542632
            </p>
          </div>
        </div>
      </div>
      <div className={styles.clubdataWrapper}>
        <Table striped bordered hover style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th>Day/Date</th>
              {times.map((time, index) => (
                <th key={index}>{moment(time).format("hh A")}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map(({ date, day }) => {
              const dateString = moment(date).format("YYYY-MM-DD");
              const daydatecombined = `${day} (${dateString})`;
              return (
                <tr key={dateString}>
                  <td className={styles.daydatecCell}>{daydatecombined}</td>
                  {times.map((time) => {
                    const timeString = moment(time).format("hh A");
                    const bookingKey = `${dateString} ${timeString}`;
                    const isBooked = bookedTime[bookingKey];
                    const isDisabled = isSlotDisabled(date, time);

                    return (
                      <td
                        key={`${dateString}-${timeString}`}
                        className={`${isBooked ? styles.bookedSlot : ""} ${
                          isDisabled ? styles.disabledSlot : ""
                        }`}
                      >
                        {renderSlotContent(date, time, isBooked, isDisabled)}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Modal show={displayModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedFormData ? (
            <div className={styles.bookingDetails}>
              <p>Name: {selectedFormData.name}</p>
              <p>Contact: {selectedFormData.phone}</p>
              <p>Email: {selectedFormData.email}</p>
              <p>Date: {selectedFormData.date}</p>
              <p>Time: {selectedFormData.time}</p>
              <p>Pradesh:{selectedFormData.pradesh}</p>
              <p>District:{selectedFormData.district}</p>
            </div>
          ) : (
            <p>No booking details available</p>
          )}
        </Modal.Body>
      </Modal>
      <Modal show={showModal} onHide={handleCloseModal} className={styles.formModal}>
        <Modal.Header closeButton>
          <Modal.Title>Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="full name"
              className={styles.input}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></Form.Control>
             {formErrors.fullName && (
              <span className={styles.error}>{formErrors.fullName}</span>
            )}
          </Form>
          <Form>
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="tel"
              placeholder="number"
              className={styles.input}
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            ></Form.Control>
            {formErrors.contactNumber && (
              <span className={styles.error}>{formErrors.contactNumber}</span>
            )}
          </Form>
          <Form>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="address"
              className={styles.input}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
             {formErrors.address && (
              <span className={styles.error}>{formErrors.address}</span>
            )}
          </Form>
          <Modal.Footer className={styles.footerWrapper}>
            <Button onClick={handleBookSlot} className={styles.confirmBtn}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Clubbookingdata;
