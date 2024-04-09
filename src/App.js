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
import BigCalendar from "./components/venues/calendar/BigCalendar";

const App = () => {
  return (
    <>
      <Header />
      <DataProvider>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/sports" element={<Sports />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/adminsignup" element={<Adminsignup/>}></Route>
          <Route path="/usersignup" element={<Usersignup />}></Route>
          <Route path="/calendar" element={<BigCalendar />}></Route>
          <Route path="/clubbookingdata" element={<Clubbookingdata />}></Route> 
        </Routes>
      </DataProvider>
    </>
  );
};

export default App;
