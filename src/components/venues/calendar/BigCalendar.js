import React, { useState, useEffect } from "react";
import BookingForm from "../bookingform/BookingForm";
import { Modal } from "react-bootstrap";
import { CaretRightFill } from "react-bootstrap-icons";
import Slider from "react-slick";
import styles from "./bookingcalendar.module.css";
import moment from "moment";
const BigCalendar = () => {
  const days = [
    { date: new Date("2024-03-03"), day: "SUNDAY" },
    { date: new Date("2024-03-04"), day: "MONDAY" },
    { date: new Date("2024-03-05"), day: "TUESDAY" },
    { date: new Date("2024-03-06"), day: "WEDNESDAY" },
    { date: new Date("2024-03-07"), day: "THURSDAY" },
    { date: new Date("2024-03-08"), day: "FRIDAY" },
    { date: new Date("2024-03-09"), day: "SATURDAY" },
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
  ].map((time) => moment(time, "hh A").toDate());

  const slideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 8,
    slidesToShow: 8,
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
    const disabledTimeSlots = [
      { date: new Date("2024-03-03"), time: moment("08 AM", "hh A").toDate() },
      { date: new Date("2024-03-05"), time: moment("11 AM", "hh A").toDate() },
      { date: new Date("2024-03-08"), time: moment("12 PM", "hh A").toDate() },
    ];
    console.log("disabled slots", disabledTimeSlots);
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

  const handleBooking = (date, time, rveTimeRef) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    const formattedTime = moment(time, "hh A").format("hh A");
        
        const bookingKey = `${formattedDate} ${formattedTime}`;
        setBookedTime((prevBookedTime) => ({
          ...prevBookedTime,
          [bookingKey]: true,
        }));
        setShowModal(true);
        setSelectedDate(formattedDate); 
        setSelectedTime(formattedTime);
      }
  
  
  
 
  const handleDisableTimeSlots = (date, time) => {
    const disabledSlot = { date, time };
    setDisabledTimeSlots((prevDisabledTimeSlots) => [
      ...prevDisabledTimeSlots,
      disabledSlot,
    ]);
  };
  const visibleTimeSlots = times.filter((time) => {
    const currentTime = new Date();
    return time > currentTime;
  });

  slideSettings.slidesToShow = Math.min(
    visibleTimeSlots.length,
    slideSettings.slidesToShow
  );
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
                    <span className={styles.dayNumber}>{date.getDate()}</span>
                    <br />
                    <span className={styles.dayName}>{day}</span>
                  </div>
                </div>
                <div className={styles.timeContainer}>
                  <Slider {...slideSettings} className={styles.timeSlider}>
                    {times.map((time) => {
                      const bookingKey = `${moment(date).format(
                        "YYYY-MM-DD"
                      )} ${moment(time).format("hh A")}`;
                      const isBooked =!!bookedTime[bookingKey];
                      
                      const currentTime = new Date();

                      if (time < currentTime) {
                        return null;
                      }
                      return (
                        <div
                          key={time}
                          className={`${styles.timeSlot} ${
                            isBooked ? styles.booked : ""
                          } ${
                            disabledTimeSlots.some((slot) => {
                              return (
                                slot.date.getTime() === date.getTime() &&
                                slot.time.getTime() === time.getTime()
                              );
                            })
                              ? styles.disabled
                              : ""
                          }`}
                        >
                          {moment(time).format("hh A")}
                          <br />
                          {disabledTimeSlots.some(
                            (slot) =>
                              slot.date.getTime() === date.getTime() &&
                              slot.time.getTime() === time.getTime()
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
                                 onClick={()=>{
                                  setSelectedDate( moment(date).format("YYYY-MM-DD"));
                                  setSelectedTime(moment(time, "hh A").format("hh A"));
                                  setShowModal(true);
                                 }}
                                  // onClick={() => handleBooking(date, time)}
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
              onSubmit={(formData) => {
                handleBooking(selectedDate, selectedTime,formData.hour); 
              }}
         
            />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default BigCalendar;
