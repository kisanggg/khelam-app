import React from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Sports from "./components/sports/Sports";
import Contact from "./components/contact/Contact";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/sports" element={<Sports/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Signin/>}></Route>
      </Routes>
      
    </>
  );
};

export default App;
