import React from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Sports from "./components/sports/Sports";
import Contact from "./components/contact/Contact";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Adminsignup from "./components/signup/admin/Adminsignup";
import Usersignup from "./components/signup/user/Usersignup";
import Clubbookingdata from "./components/bookingdata/Clubbookingdata";
import { DataProvider } from "./DataContext";
import BigCalendar from "./components/sports/calendar/BigCalendar";

const App = () => {
  return (
    <>
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sports/:id" element={<Sports />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/adminsignup" element={<Adminsignup />} />
          <Route path="/usersignup" element={<Usersignup />} />
          <Route path="/calendar/:id" element={<BigCalendar />} />
          <Route path="/clubbookingdata" element={<Clubbookingdata />} />
        </Routes>
      </DataProvider>
    </>
  );
};


export default App;
  