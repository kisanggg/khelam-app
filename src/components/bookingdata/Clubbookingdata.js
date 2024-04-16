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
    formDataList,
    displayModal,
    setBookedTime,
    setDisplayModal,
    setFormDataList,
    disabledTimeSlots,
    setDisabledTimeSlots,
  } = useContext(DataContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [latestBookedSlots, setLatestBookedSlots] = useState({});
  const [bookedModal, setBookedModal] = useState(false);
  const [selectedFormData, setSelectedFormData] = useState(null);
  const [data, setData] = useState({
    fullName: "",
    contactNumber: "",
    address: "",
    bookedBy: "",
  });

  const validateForm = () => {
    const errors = {};
    if (!data.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!data.contactNumber.trim()) {
      errors.contactNumber = "Contact Number is required";
    } else if (!/^[0-9]+$/.test(data.contactNumber.trim())) {
      errors.contactNumber = "Contact Number should contain only digits";
    }
    if (!data.address.trim()) {
      errors.address = "Address is required";
    }
    if (!data.bookedBy.trim()) {
      errors.bookedBy = "Required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleShowDetails = (formData) => {
    console.log("form data:", formData);
    setData(formData);
    console.log("formDataList:", formDataList);

    const isInternalBooking = formData.source === "internal";
    if (isInternalBooking) {
      setBookedModal(true);
      setDisplayModal(false);
      console.log("booked modal");
    } else {
      setDisplayModal(true);
      console.log("displaymodal");
    }
  };

  const handleCloseModal = () => {
    setDisplayModal(false);
    setShowModal(false);
    setData({
      fullName: "",
      contactNumber: "",
      address: "",
      bookedBy: "",
    });
    setFormErrors({});
    setBookedModal(false);
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
        const newBooking = {
          date: dateString,
          time: timeString,
          ...data,
          source: "internal",
        };
        setLatestBookedSlots(newBooking);
        setFormDataList([...formDataList, newBooking]);
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
        (formData) =>
          formData.date === dateString && formData.time === timeString
      );
      return (
        <>
          {bookedSlots.map((formData, index) => (
            <>
              Booked
              <button
                key={index}
                className={styles.detailsBtn}
                onClick={() => handleShowDetails(formData)}
              >
                Details
              </button>
            </>
          ))}
        </>
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
              <TelephoneFill style={{ color: "red" }} /> 01-2453652,
            </p>
            <p style={{ marginLeft: "5px" }}>
              <Phone style={{ color: "red" }} /> 9802542632
            </p>
          </div>
        </div>
      </div>
      <div className={styles.clubdataWrapper}>
        <Table striped bordered hover style={{ border: "1px solid black" }}>
          <thead className={styles.tableHead}>
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
              return (
                <tr key={dateString}>
                  <td className={styles.daydateCell}>
                    {day}
                    <br />({dateString})
                  </td>
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
        <Modal.Header closeButton className={styles.bookingDetailsModal}>
          <Modal.Title>Booking Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.bookingDetailsModal}>
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
            <p>No booking details available.</p>
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
                value={data.fullName}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    fullName: e.target.value,
                  }))
                }
                isInvalid={!!formErrors.fullName}
              />

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
                value={data.contactNumber}
                isInvalid={!!formErrors.contactNumber}
                onChange={(e) => {
                  const input = e.target.value;
                  const numericInput = input.replace(/\D/g, "");
                  setData((prevData) => ({
                    ...prevData,
                    contactNumber: numericInput,
                  }));
                }}
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
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
                isInvalid={!!formErrors.address}
              ></Form.Control>
              <Form.Control.Feedback
                type="invalid"
                className={styles.errorWrapper}
              >
                {formErrors.address}
              </Form.Control.Feedback>
            </Form>
            <Form>
              <Form.Label>Booked By</Form.Label>
              <Form.Control
                type="text"
                placeholder="booked by"
                className={styles.input}
                value={data.bookedBy}
                onChange={(e) => setData({ ...data, bookedBy: e.target.value })}
                isInvalid={!!formErrors.bookedBy}
              />
            </Form>
            <Form.Control.Feedback
              type="invalid"
              className={styles.errorWrapper}
            >
              {formErrors.bookedBy}
            </Form.Control.Feedback>
            <Button type="submit" className={styles.confirmBtn}>
              Confirm
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal
        show={bookedModal}
        onHide={handleCloseModal}
        className={styles.internalModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Booking Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data && (
            <>
              <p>Fullname: {data.fullName}</p>
              <p>Contact Number: {data.contactNumber}</p>
              <p>Address: {data.address}</p>
              <p>Booked By: {data.bookedBy}</p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Clubbookingdata;
