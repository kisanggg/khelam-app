import moment from "moment";
import React, { useState, useEffect } from "react";

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
  ].map((time) => moment(time, "hh A").toDate());

  const [bookedTime, setBookedTime] = useState({});
  const [disabledTimeSlots, setDisabledTimeSlots] = useState([]);
  const [formDataList, setFormDataList] = useState([]);
  const [displayModal, setDisplayModal]=useState(false)
  const addFormData = (formData) => {
    setFormDataList((prevFormDataList) => [...prevFormDataList, formData]);
  };
 
  useEffect(() => {
    console.log("DataProvider - bookedTime:", bookedTime);
    console.log("DataProvider - formDataList:", formDataList); 
  }, [bookedTime,formDataList]);

  const value = {
    days,
    times,
    setDays,
    bookedTime,
    addFormData,
    displayModal,
    formDataList,
    setFormDataList,
    setBookedTime,
    setDisplayModal,
    disabledTimeSlots,
    setDisabledTimeSlots,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
