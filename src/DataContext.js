import moment from "moment";
import React, { useState, useEffect } from "react";

export const DataContext = React.createContext();
export const DataProvider = ({ children }) => {
  const [days, setDays] = useState([
    moment().format("YYYY-MM-DD"),
    moment().add(1, "days").format("YYYY-MM-DD"),
    moment().add(2, "days").format("YYYY-MM-DD"),
    moment().add(3, "days").format("YYYY-MM-DD"),
    moment().add(4, "days").format("YYYY-MM-DD"),
    moment().add(5, "days").format("YYYY-MM-DD"),
    moment().add(6, "days").format("YYYY-MM-DD"),
  ]);
  console.log("days:", days);
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
  ].map((time) => moment(time, "hh A").toDate());

  const [bookedTime, setBookedTime] = useState({});
  const [disabledTimeSlots, setDisabledTimeSlots] = useState([]);
  const [formDataList, setFormDataList] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const addFormData = (formData) => {
    setFormDataList((prevFormDataList) => [...prevFormDataList, formData]);
  };

  useEffect(() => {
    console.log("DataProvider - bookedTime:", bookedTime);
    console.log("DataProvider - formDataList:", formDataList);
  }, [bookedTime, formDataList]);

  const value = {
    days,
    times,
    setDays,
    bookedTime,
    isLoggedIn,
    addFormData,
    displayModal,
    formDataList,
    setIsLoggedIn,
    setBookedTime,
    setFormDataList,
    setDisplayModal,
    disabledTimeSlots,
    setDisabledTimeSlots,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
