import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import BookingForm from "../bookingform/BookingForm";
import { Modal } from "react-bootstrap";
const BookingCalendar = () => {
  const [bookings, setBooking] = useState({});
  const [selectedDate,setSelectedDate]=useState(null);
  const [showModal,setShowModal]=useState(false);

  const tileClassname = ({ date }) => {
    const dateString = date.toISOString().split("T")[0];
    return bookings[dateString] && bookings[dateString].length > 0 ? "booked" : "available";
  };

  const tileContent = ({ date }) => {
    const dateString = date.toISOString().split('T')[0];
    return (
      <div className="tileContent">
        {bookings[dateString] && bookings[dateString].length > 0 ? 'booked' : <button onClick={() => bookDate(date)}>Book now</button>}
      </div>
    );
  };

  const bookDate = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };
  const handleCloseModal=()=>{
    setSelectedDate(null);
    setShowModal(false);
  }

  return (
    <div>
      <Calendar 
        tileClassName={tileClassname}
        tileContent={tileContent}
      />
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Book Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      {selectedDate &&(
        <BookingForm date={selectedDate} onClose={handleCloseModal}/>
      )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BookingCalendar;
