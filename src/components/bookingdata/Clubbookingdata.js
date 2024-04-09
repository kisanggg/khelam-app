import React, { useContext } from "react";
import { TelephoneFill, Phone } from "react-bootstrap-icons";
import styles from "./clubdata.module.css";
import { Table } from "react-bootstrap";
import { DataContext } from "../../DataContext";
import moment from "moment";
const Clubbookingdata = () => {
  const { days, times, bookedTime } = useContext(DataContext);
  console.log("booked time", bookedTime);
  return (
    <div className={styles.clubdataWrapper}>
      <div>
        <div className={styles.adminHeader}>
          <img
            src="https://marketplace.canva.com/EAFL8GIA214/1/0/1600w/canva-modern-minimalist-basketball-team-logo-gnFZBqra6FQ.jpg"
            alt="err"
            width={120}
            height={100}
          />
          <div className={styles.wrapper}>
            <h4>Club Name</h4>
            <p>Imadol, Lalitpur</p>
            <div className={styles.phoneWrapper}>
              <p>
                <TelephoneFill style={{ color: "red" }} /> 01-2453652 ,
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
                      console.log("isBooked", isBooked);
                      return (
                        <td
                          key={`${dateString}-${timeString}`}
                          className={isBooked ? styles.bookedSlot : ""}
                        >
                          {/* {isBooked ? "Booked" : "Available"} */}
                          {/* <button
                            style={{
                              fontSize: "12px",
                              border: "1px solid black",
                              width: "50px",
                              borderRadius: "10px",
                            }}
                          >
                            {" "}
                            Details
                          </button> */}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Clubbookingdata;
