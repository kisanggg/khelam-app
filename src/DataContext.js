import moment from "moment";
import React, { useState } from "react";

export const DataContext = React.createContext();
export const DataProvider = ({ children }) => {
  const [days, setDays] = useState([
    { date: new Date("2024-03-03"), day: "SUNDAY" },
    { date: new Date("2024-03-04"), day: "MONDAY" },
    { date: new Date("2024-03-05"), day: "TUESDAY" },
    { date: new Date("2024-03-06"), day: "WEDNESDAY" },
    { date: new Date("2024-03-07"), day: "THURSDAY" },
    { date: new Date("2024-03-08"), day: "FRIDAY" },
    { date: new Date("2024-03-09"), day: "SATURDAY" },
  ]);
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

  const [bookedTime, setBookedTime] = useState({});

  const updateBookingStatus = (bookingKey, isBooked) => {
    setBookedTime((prevBookedTime) => ({
      ...prevBookedTime,
      [bookingKey]: isBooked,
    }));
  };
  const [selectedSports, setSelectedSports] = useState("");
  const [selectedVenue, setSelectedVenue] = useState("");
  const value = {
    days,
    setDays,
    times,
    bookedTime,
    setBookedTime,
    updateBookingStatus,
    selectedSports,
    setSelectedSports,
    selectedVenue,
    setSelectedVenue,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
