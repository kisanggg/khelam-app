import React, { useState } from "react";
import BookingForm from "../bookingform/BookingForm";
import { Modal } from "react-bootstrap";
import { CaretRightFill } from "react-bootstrap-icons";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styles from "./bookingcalendar.module.css";
const BigCalendar = () => {
  const time = [
    "06 AM",
    "07 AM",
    "08 AM",
    "09 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
  ];
  const slideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 10,
    slidesToShow: 10,
    initialSlide: 0,
    nextArrow: (
      <div className={styles.nextArrow}>
        <CaretRightFill size={30} className={styles.sliderArrow} />
      </div>
    ),
    prevArrow: <></>,
  };

  const [showModal, setShowModal] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedTime, setBookedTime] = useState({});

  const bookdate = (date, selectedTime) => {
    setSelectedDate(date);
    setSelectedTime(selectedTime);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setShowModal(false);
  };

  const handleBooking = (formData) => {
    if (!(formData.date instanceof Date)) {
      console.error("Error: formData.date is not a Date object.");
      return;
    }
    if (formData.time === undefined) {
      console.error("Error: formData.time is undefined.");
      return;
    }
    console.log("Form data:", formData);
    const bookingKey = `${formData.date.toDateString()} ${formData.time}`;
    console.log("Booking key:", bookingKey);
    setBookedTime((prevBookedTime) => ({
      ...prevBookedTime,
      [bookingKey]: true,
    }));
    console.log("Booked time:", bookedTime);
    setBookedTime((prevBookedTime) => {
      const updatedBookedTime = { ...prevBookedTime, [bookingKey]: true };
      console.log("Updated bookedTime:", updatedBookedTime);
      return updatedBookedTime;
    });
    handleCloseModal();
  };

  return (
    <div>
      <div className={styles.days}>
        <div className={styles.sundayWrapper}>
          <div
            style={{
              display: "flex",
              marginLeft: "0px",
              marginTop: "3px",
            }}
          >
            <div className={styles.sunday} style={{ width: "120px" }}>
              <p
                style={{
                  backgroundColor: "red",
                  color: "white",
                  height: "30px",
                }}
              >
                MAR 2024
              </p>
              <h4>
                <b>03</b>
              </h4>
              <p>SUNDAY</p>
            </div>
            <div className={styles.sliderWrapper}>
              <Slider className={styles.sliderWrap} {...slideSettings}>
                {time.map((t, index) => {
                  const bookingKey = selectedDate
                    ? `${selectedDate.toDateString()} ${t}`
                    : null;
                  return (
                    <div key={index} className={styles.times}>
                      {t}
                      <br />
                      {bookingKey && bookedTime[bookingKey] ? (
                        <span className={styles.booked}>Booked</span>
                      ) : (
                        <button
                          className={styles.btn}
                          onClick={() => bookdate(selectedDate, t)}
                        >
                          BOOK NOW
                        </button>
                      )}
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className={styles.mondayWrapper}>
          <div
            style={{
              display: "flex",
              marginLeft: "0px",
              marginTop: "3px",
            }}
          >
            <div className={styles.monday}>
              <p
                style={{
                  backgroundColor: "red",
                  color: "white",
                  height: "30px",
                }}
              >
                MAR 2024
              </p>
              <h4>
                <b>04</b>
              </h4>
              <p>MONDAY</p>
            </div>
            <div className={styles.sliderWrapper}>
              <Slider className={styles.sliderWrap} {...slideSettings}>
                {time.map((t, index) => {
                  return (
                    <div key={index} className={`${styles.times} `}>
                      {t}
                      <br />
                      {bookedTime[t] ? (
                        <span>Booked</span>
                      ) : (
                        <button
                          className={styles.btn}
                          onClick={() => bookdate(new Date(), t)}
                        >
                          BOOK NOW
                        </button>
                      )}
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className={styles.tuesdayWrapper}>
          <div style={{ display: "flex", marginLeft: "0px", marginTop: "3px" }}>
            <div className={styles.tuesday}>
              <p
                style={{
                  backgroundColor: "red",
                  color: "white",
                  height: "30px",
                }}
              >
                MAR 2024
              </p>
              <h4>
                <b>05</b>
              </h4>
              <p>TUESDAY</p>
            </div>
            <div className={styles.sliderWrapper}>
              <Slider className={styles.sliderWrap} {...slideSettings}>
                {time.map((t, index) => {
                  return (
                    <div key={index} className={styles.times}>
                      {t}
                      <br />
                      <button
                        className={styles.btn}
                        onClick={() => bookdate(new Date(), t)}
                      >
                        BOOK NOW
                      </button>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className={styles.wedWrapper}>
          <div style={{ display: "flex", marginLeft: "0px", marginTop: "3px" }}>
            <div className={styles.wednesday}>
              <p
                style={{
                  backgroundColor: "red",
                  color: "white",
                  height: "30px",
                }}
              >
                MAR 2024
              </p>
              <h4>
                <b>06</b>
              </h4>
              <p>WEDNESDAY</p>
            </div>
            <div className={styles.sliderWrapper}>
              <Slider className={styles.sliderWrap} {...slideSettings}>
                {time.map((t, index) => {
                  return (
                    <div key={index} className={styles.times}>
                      {t}
                      <br />
                      <button
                        className={styles.btn}
                        onClick={() => bookdate(new Date(), t)}
                      >
                        BOOK NOW
                      </button>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className={styles.thuWrapper}>
          <div style={{ display: "flex", marginLeft: "0px", marginTop: "3px" }}>
            <div className={styles.thursday}>
              <p
                style={{
                  backgroundColor: "red",
                  color: "white",
                  height: "30px",
                }}
              >
                MAR 2024
              </p>
              <h4>
                <b>07</b>
              </h4>
              <p>THURSDAY</p>
            </div>
            <div className={styles.sliderWrapper}>
              <Slider className={styles.sliderWrap} {...slideSettings}>
                {time.map((t, index) => {
                  return (
                    <div key={index} className={styles.times}>
                      {t}
                      <br />
                      <button
                        className={styles.btn}
                        onClick={() => bookdate(new Date(), t)}
                      >
                        BOOK NOW
                      </button>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className={styles.friWrapper}>
          <div style={{ display: "flex", marginLeft: "0px", marginTop: "3px" }}>
            <div className={styles.friday}>
              <p
                style={{
                  backgroundColor: "red",
                  color: "white",
                  height: "30px",
                }}
              >
                MAR 2024
              </p>
              <h4>
                <b>08</b>
              </h4>
              <p>FRIDAY</p>
            </div>
            <div className={styles.sliderWrapper}>
              <Slider className={styles.sliderWrap} {...slideSettings}>
                {time.map((t, index) => {
                  return (
                    <div key={index} className={styles.times}>
                      {t}
                      <br />
                      <button
                        className={styles.btn}
                        onClick={() => bookdate(new Date(), t)}
                      >
                        BOOK NOW
                      </button>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className={styles.satWrapper}>
          <div style={{ display: "flex", marginLeft: "0px", marginTop: "3px" }}>
            <div className={styles.saturday}>
              <p
                style={{
                  backgroundColor: "red",
                  color: "white",
                  height: "30px",
                }}
              >
                MAR 2024
              </p>
              <h4>
                <b>09</b>
              </h4>
              <p>SATURDAY</p>
            </div>
            <div className={styles.sliderWrapper}>
              <Slider className={styles.sliderWrap} {...slideSettings}>
                {time.map((t, index) => {
                  return (
                    <div key={index} className={styles.times}>
                      {t}
                      <br />
                      <button
                        className={styles.btn}
                        onClick={() => bookdate(new Date(), t)}
                      >
                        BOOK NOW
                      </button>
                    </div>
                  );
                })}
              </Slider>
            </div>
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
              date={selectedDate}
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
