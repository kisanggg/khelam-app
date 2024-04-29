import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import BookingForm from "../booking/bookingform/BookingForm";
import { Modal } from "react-bootstrap";
import { CaretRightFill } from "react-bootstrap-icons";
import Slider from "react-slick";
import styles from "./bookingcalendar.module.css";
import moment from "moment";
import { DataContext } from "../../DataContext";

const BigCalendar = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log("Current path:", id);
  console.log("Current location:", location.pathname);
  const {
    days,
    bookedTime,
    setBookedTime,
    times,
    disabledTimeSlots,
    setDisabledTimeSlots,
  } = useContext(DataContext);
  useEffect(() => {
    console.log("BigCalendar mounted");
    return () => {
      console.log("BigCalendar unmounted");
    };
  }, []);
  const slideSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 5,
    slidesToShow: 7,
    initialSlide: 0,
    nextArrow: (
      <div className={styles.nextArrow}>
        <CaretRightFill size={45} className={styles.sliderArrow} />
      </div>
    ),
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
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

  const handleBooking = (date, time, hour) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    const formattedTime = moment(time, "hh A").format("hh A");
    const bookingKey = `${formattedDate} ${formattedTime}`;

    if (hour.includes("2 hour")) {
      const nextTimeIndex =
        times.findIndex((t) => moment(t).format("hh A") === formattedTime) + 1;
      if (nextTimeIndex < times.length) {
        const nextTime = times[nextTimeIndex];
        const nextFormattedTime = moment(nextTime).format("hh A");
        const nextBookingKey = `${formattedDate} ${nextFormattedTime}`;

        setBookedTime((prevBookedTime) => ({
          ...prevBookedTime,
          [bookingKey]: true,
          [nextBookingKey]: true,
        }));
      }
    } else if (hour.includes("3 hour")) {
      const currentIndex = times.findIndex(
        (t) => moment(t).format("hh A") === formattedTime
      );
      const nextTimeIndex1 = currentIndex + 1;
      const nextTimeIndex2 = currentIndex + 2;
      if (nextTimeIndex1 < times.length && nextTimeIndex2 < times.length) {
        const nextTime1 = times[nextTimeIndex1];
        const nextTime2 = times[nextTimeIndex2];
        const nextFormattedTime1 = moment(nextTime1).format("hh A");
        const nextFormattedTime2 = moment(nextTime2).format("hh A");
        const nextBookingKey1 = `${formattedDate} ${nextFormattedTime1}`;
        const nextBookingKey2 = `${formattedDate} ${nextFormattedTime2}`;

        setBookedTime((prevBookedTime) => ({
          ...prevBookedTime,
          [bookingKey]: true,
          [nextBookingKey1]: true,
          [nextBookingKey2]: true,
        }));
      }
    } else {
      setBookedTime((prevBookedTime) => ({
        ...prevBookedTime,
        [bookingKey]: true,
      }));
    }
    setShowModal(true);
    setSelectedDate(formattedDate);
    setSelectedTime(formattedTime);
  };

  const handleDisableTimeSlots = (date, time) => {
    const disabledSlot = { date, time };
    setDisabledTimeSlots((prevDisabledTimeSlots) => [
      ...prevDisabledTimeSlots,
      disabledSlot,
    ]);
  };

  return (
    <>
      <div className={styles.calendarContainer}>
        {days.map((date, index) => {
          console.log("date:", date);
          const modifiedDay = moment(date).format("dddd").toUpperCase();
          const modifiedDate = moment(date).format("MMMM D, YYYY");
          const futureTimes = times.filter((time) =>
            moment(time).isAfter(new Date())
          );
          console.log("future times:", futureTimes);

          return (
            <div key={index} className={styles.dayContainer}>
              <div className={styles.dateWrapper}>
                <h6
                  style={{
                    borderBottom: "1px solid red",
                    height: "40px",
                    paddingTop: "10px",
                    color: "white",
                    backgroundColor: "red",
                  }}
                >
                  {modifiedDay}
                </h6>
                <h6 style={{ paddingTop: "20px", fontWeight: "700" }}>
                  {modifiedDate}
                </h6>
              </div>
              <div className={styles.timeContainer}>
                <Slider {...slideSettings} className={styles.timeSlider}>
                  {times.map((time) => {
                    const bookingKey = `${moment(date).format(
                      "YYYY-MM-DD"
                    )} ${moment(time).format("hh A")}`;
                    const isBooked = !!bookedTime[bookingKey];
                    const currentTime = new Date();
                    if (moment(date).day() === currentTime.getDay()) {
                      const futureTime = moment(time).isAfter(currentTime);
                      if (futureTime) {
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
                                    onClick={() => {
                                      setSelectedDate(
                                        moment(date).format("YYYY-MM-DD")
                                      );
                                      setSelectedTime(
                                        moment(time, "hh A").format("hh A")
                                      );
                                      setShowModal(true);
                                    }}
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
                      } else {
                        return null;
                      }
                    } else {
                      return (
                        <div
                          key={time}
                          className={`${styles.timeSlot} ${
                            isBooked ? styles.booked : ""
                          } ${
                            disabledTimeSlots.some(
                              (slot) =>
                                slot.date.getTime() === date.getTime() &&
                                slot.time.getTime() === time.getTime()
                            )
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
                                  onClick={() => {
                                    setSelectedDate(
                                      moment(date).format("YYYY-MM-DD")
                                    );
                                    setSelectedTime(
                                      moment(time, "hh A").format("hh A")
                                    );
                                    setShowModal(true);
                                  }}
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
                    }
                  })}
                </Slider>
              </div>
            </div>
          );
        })}
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
                handleBooking(selectedDate, selectedTime, formData.hour);
              }}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default BigCalendar;
