import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import BookingForm from "../bookingform/BookingForm";
import { Modal } from "react-bootstrap";
import styles from './bookingcalendar.module.css'

const BookingCalendar = () => {
  const [bookings, setBookings] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const tileClassname = ({ date }) => {
    const dateString = date.toISOString().split("T")[0];
    return bookings[dateString] && bookings[dateString].length > 0
      ? "booked"
      : "available";
  };

  const tileContent = ({ date }) => {
    const dateString = date.toISOString().split("T")[0];
    return (
      <div className="tileContent">
        {bookings[dateString] && bookings[dateString].length > 0 ? (
          "booked"
        ) : (
          <button onClick={() => bookDate(date)}>Book now</button>
        )}
      </div>
    );
  };

  const bookDate = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
    setShowModal(false);
  };

  return (
    <div>
      <Calendar
        tileClassName={tileClassname}
        tileContent={tileContent}
        className={styles.calendarWrapper}
      />
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        style={{
          backgroundColor: "rgba(43, 40, 40, 0.5)",
          backdropFilter: "blur(0.5px)",
        }}
      >
        <Modal.Body style={{backgroundColor:"black"}}>
          {selectedDate && (
            <BookingForm
              date={selectedDate}
              onClose={handleCloseModal}
              setBookings={setBookings} 
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BookingCalendar;
