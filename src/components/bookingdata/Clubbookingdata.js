import React, { useContext, useState } from "react";
import { TelephoneFill, Phone } from "react-bootstrap-icons";
import styles from "./clubdata.module.css";
import { Table, Modal, Form, Button } from "react-bootstrap";
import { DataContext } from "../../DataContext";
import moment from "moment";

const Clubbookingdata = () => {
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
    setFormDataList,
  } = useContext(DataContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedFormData, setSelectedFormData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [latestBookedSlots, setLatestBookedSlots] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!contactNumber.trim()) {
      errors.contactNumber = "Contact Number is required";
    } else if (!/^[0-9]+$/.test(contactNumber.trim())) {
      errors.contactNumber = "Contact Number should contain only digits";
    }
    if (!address.trim()) {
      errors.address = "Address is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleShowDetails = (formData) => {
    setDisplayModal(true);
    setSelectedFormData(formData);
    console.log("selectedFormData:", selectedFormData);
  };

  const handleCloseModal = () => {
    setDisplayModal(false);
    setShowModal(false);
    setFullName("");
    setAddress("");
    setContactNumber("");
    setFormErrors({});
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      if (selectedDate && selectedTime) {
        const dateString = moment(selectedDate).format("YYYY-MM-DD");
        const timeString = moment(selectedTime).format("hh A");
        const newBooking={
          date:dateString,
          time:timeString,
          Name:fullName,
          Contact:contactNumber,
          Address:address,
        }
        setLatestBookedSlots(newBooking);
        setFormDataList([...formDataList,newBooking]);
        const bookingKey = `${dateString} ${timeString}`;
        setBookedTime((prevBookedTime) => ({
          ...prevBookedTime,
          [bookingKey]: true,
        }));
      }
      handleCloseModal();
    }
  };

  const handleDisableSlot = (date, time) => {
    const dateString = new Date(date);
    const timeString = moment(time, "hh A").toDate();
    const slotToDisable = { date: dateString, time: timeString };
    setDisabledTimeSlots((prevDisabledSlots) => [
      ...prevDisabledSlots,
      slotToDisable,
    ]);
    console.log("disable slot", disabledTimeSlots);
  };

  const renderSlotContent = (date, time, isBooked, isDisabled) => {
    const dateString = moment(date).format("YYYY-MM-DD");
    const timeString = moment(time).format("hh A");
  
    if (isBooked) {
      const bookedSlots = formDataList.filter(
        (formData) => formData.date === dateString && formData.time === timeString
      );
     
  
      return (
        <div className={styles.bookedSlot}>
          Booked
          {bookedSlots.map((formData, index) => (
            <button
              key={index}
              className={styles.detailsBtn}
              onClick={() => handleShowDetails(formData)}
            >
              Details
            </button>
          ))}
        </div>
      );
    } else if (isDisabled) {
      return <div className={styles.disabledSlot}>Not Available</div>;
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
  

  const handleContactNumberChange = (e) => {
    const input = e.target.value;
    const numericInput = input.replace(/\D/g, "");
    setContactNumber(numericInput);
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
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className={styles.formModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="full name"
                className={styles.input}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                isInvalid={!!formErrors.fullName}
              ></Form.Control>
              <Form.Control.Feedback
                type="invalid"
                className={styles.errorWrapper}
              >
                {formErrors.fullName}
              </Form.Control.Feedback>
            </Form>
            <Form>
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="tel"
                placeholder="number"
                className={styles.input}
                value={contactNumber}
                onChange={handleContactNumberChange}
                isInvalid={!!formErrors.contactNumber}
              ></Form.Control>
              <Form.Control.Feedback
                type="invalid"
                className={styles.errorWrapper}
              >
                {formErrors.contactNumber}
              </Form.Control.Feedback>
            </Form>
            <Form>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="address"
                className={styles.input}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                isInvalid={!!formErrors.address}
              ></Form.Control>
              <Form.Control.Feedback
                type="invalid"
                className={styles.errorWrapper}
              >
                {formErrors.address}
              </Form.Control.Feedback>
            </Form>
            <Button type="submit" className={styles.confirmBtn}>
              Confirm
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Clubbookingdata;
