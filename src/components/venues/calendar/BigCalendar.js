import React, { useState, useEffect } from "react";
import BookingForm from "../bookingform/BookingForm";
import { Modal } from "react-bootstrap";
import { CaretRightFill } from "react-bootstrap-icons";
import Slider from "react-slick";
import styles from "./bookingcalendar.module.css";
const BigCalendar = () => {
  const days = [
    { date: "2024-03-03", day: "SUNDAY" },
    { date: "2024-03-04", day: "MONDAY" },
    { date: "2024-03-05", day: "TUESDAY" },
    { date: "2024-03-06", day: "WEDNESDAY" },
    { date: "2024-03-07", day: "THURSDAY" },
    { date: "2024-03-08", day: "FRIDAY" },
    { date: "2024-03-09", day: "SATURDAY" },
  ];

  const times = [
    "06 AM",
    "07 AM",
    "08 AM",
    "09 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "01 PM",
    "02 PM",
    "03 PM",
    "04 PM",
    "05 PM",
    "06 PM",
    "07 PM",
    "08 PM",
  ];

  const slideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 9,
    slidesToShow: 9,
    initialSlide: 0,
    nextArrow: (
      <div className={styles.nextArrow}>
        <CaretRightFill size={45} className={styles.sliderArrow} />
      </div>
    ),
    prevArrow: <></>,
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedTime, setBookedTime] = useState({});
  const [disabledTimeSlots, setDisabledTimeSlots] = useState([]);

  useEffect(() => {
    // const disabledDates = ["2024-03-04", "2024-03-07"];
    const disabledTimeSlots = [
      { date: "2024-03-03", time: "08 AM" },
      { date: "2024-03-05", time: "11 AM" },
      { date: "2024-03-08", time: "12 PM" },
    ];
    //   disabledDates.forEach((date) => {
    //   days.forEach((day) => {
    //     if (day.date === date) {
    //       day.disabled = true;
    //     }
    //   });
    // });

    disabledTimeSlots.forEach((slot) => {
      handleDisableTimeSlots(slot.date, slot.time);
    });
  }, []);

  useEffect(() => {
    console.log("Updated bookedTime:", bookedTime);
  }, [bookedTime]);

  const handleCloseModal = () => {
    setSelectedTime(null);
    setShowModal(false);
  };

  const handleBooking = (date, time) => {
    const bookingKey = `${date} ${time}`;
    setSelectedTime(time);
    setSelectedDate(date);
    setBookedTime((prevBookedTime) => ({
      ...prevBookedTime,
      [bookingKey]: true,
    }));

    if (!showModal) {
      setShowModal(true);
    }
  };
  const handleDisableTimeSlots = (date, time) => {
    const disabledSlot = { date, time };
    setDisabledTimeSlots((prevDisabledTimeSlots) => [
      ...prevDisabledTimeSlots,
      disabledSlot,
    ]);
  };
  return (
    <div style={{ height: "1100px" }}>
      <div className={styles.days}>
        <div className={styles.sundayWrapper}>
          <div className={styles.calendarContainer}>
            {days.map(({ date, day }) => (
              <div key={date} className={styles.dayContainer}>
                <div className={styles.dateHeader}>
                  <div className={styles.monthWrapper}>
                    <p className={styles.month}>MAR 2024</p>
                  </div>
                  <div>
                    <span className={styles.dayNumber}>
                      {date.split("-")[2]}
                    </span>
                    <br />
                    <span className={styles.dayName}>{day}</span>
                  </div>
                </div>
                <div className={styles.timeContainer}>
                  <Slider {...slideSettings} className={styles.timeSlider}>
                    {times.map((time) => {
                      const bookingKey = `${date} ${time}`;
                      const isBooked = !!bookedTime[bookingKey];
                      return (
                        <div
                          key={time}
                          className={`${styles.timeSlot} ${
                            isBooked ? styles.booked : ""
                          } ${
                            disabledTimeSlots.some(
                              (slot) => slot.date === date && slot.time === time
                            )
                              ? styles.disabled
                              : ""
                          }`}
                        >
                          {time}
                          <br />
                          {disabledTimeSlots.some(
                            (slot) => slot.date === date && slot.time === time
                          ) ? (
                            <span className={styles.notAvailableText}>
                              Not Available
                            </span>
                          ) : (
                            <>
                              {isBooked ? (
                                <span className={styles.bookedText}>
                                  Booked
                                </span>
                              ) : (
                                <button
                                  onClick={() => handleBooking(date, time)}
                                  disabled={isBooked}
                                  className={styles.bookButton}
                                >
                                  Book Now
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          style={{
            backgroundColor: "rgba(43, 40, 40, 0.5)",
            backdropFilter: "blur(0.5px)",
          }}
        >
          <Modal.Body style={{ backgroundColor: "black" }}>
            <BookingForm
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onClose={handleCloseModal}
              onBooking={handleBooking}
            />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default BigCalendar;
