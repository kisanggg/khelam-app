import React, { useContext, useState } from "react";
import "./header.css";
import logo from "../../images/logo.png";
import {
  BoxArrowRight,
  List,
  PersonCircle,
  Search,
  XLg,
} from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../DataContext";
import { Modal, Button, Offcanvas} from "react-bootstrap";
const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleLogout = () => {
    setShowModal(true);
  };
  const confirmLogout = () => {
    setIsLoggedIn(false);
    setShowModal(false);
    navigate("/home");
  };

  const closeModal = () => {
    setShowModal(false);
    setFeedbackModal(false);
  };
  const toggleDrawer = () => {
    setShowDrawer(true);
  };
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Feedback received");
  //   setFeedbackModal(false);
  // };

  const handleSearch = () => {
    setShowSearch(true);
  };

  const closeSearch = () => {
    setShowSearch(false);
  };
  return (
    <>
      <div className="header">
        <div
          className="divv"
        >
          <div className="div-wrapper"></div>
          <div className="div1-wrapper"></div>
        </div>
        <div className="header-wrapper">
          <img src={logo} alt="err" />
          <div className="wrapper">
            <h1>KHELAM</h1>
            <p>Khelam to be Healthy</p>
          </div>
          <button className="drawer-toggle" onClick={toggleDrawer}>
            <List size={30} />
          </button>
        </div>
        {showDrawer ? (
          <Offcanvas
            show={showDrawer}
            onHide={() => setShowDrawer(false)}
            className="offCanvas"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <div className="navWrapper">
                {isLoggedIn ? (
                  <Button className="logoutButton">
                    <Link
                      to="/home"
                      className="logoutLink"
                      onClick={handleLogout}
                    >
                      Logout <BoxArrowRight size={24} />
                    </Link>
                  </Button>
                ) : (
                  <Button className="signupButton">
                    <Link
                      to="/signup"
                      className="signupLink"
                      style={{
                        textAlign: "end",
                        marginTop: "9px",
                        color: "white",
                        fontSize: "15px",
                        marginLeft: "0px",
                      }}
                    >
                      Signup
                    </Link>
                  </Button>
                )}
                <Link to="/home" className="navLink" onClick={toggleDrawer}>
                  HOME
                </Link>
                <Link to="/about" className="navLink" onClick={toggleDrawer}>
                  ABOUT
                </Link>
                <Link
                  to="/sports/123"
                  className="navLink"
                  onClick={toggleDrawer}
                >
                  SPORTS
                </Link>
                <Link to="/contact" className="navLink" onClick={toggleDrawer}>
                  CONTACT
                </Link>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        ) : (
          <div className="sub-header">
            <div className="signUp" >
              {isLoggedIn ? (
                <div className="logoutWrapper">
                  <Link
                    to="/home"
                    className="logoutLink"
                    onClick={handleLogout}
                  >
                    Logout <BoxArrowRight size={24} />
                  </Link>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginLeft: "520px",
                  }}
                >
                  <Link to="/signup" className="nava-link">
                    <PersonCircle /> signup
                  </Link>
                </div>
              )}  
            </div>
            <div className="navBar">
              <nav className="nav">
                <Link
                  to="/home"
                  className="nav-link"
                  style={{
                    marginLeft: "80px",
                    color: "white",
                    fontSize: "13px",
                    padding: "15px",
                  }}
                >
                  HOME
                </Link>
                <Link
                  to="/about"
                  className="nav-link"
                  style={{ color: "white", fontSize: "13px", padding: "15px" }}
                >
                  ABOUT
                </Link>
                <Link
                  to="/sports/123"
                  className="nav-link"
                  style={{ color: "white", fontSize: "13px", padding: "15px" }}
                >
                  SPORTS
                </Link>
                <Link
                  to="/contact"
                  className="nav-link"
                  style={{ color: "white", fontSize: "13px", padding: "15px" }}
                >
                  CONTACT
                </Link>
                <Button onClick={handleSearch}>
                  <Search
                    size={28}
                    style={{
                      color: "white",
                      marginTop: "0px",
                      marginLeft: "0px",
                    }}
                  />
                </Button>
              </nav>
            </div>
          </div>
        )}
      </div>
      <Modal show={showModal} onHide={closeModal} className="logoutModal">
        <Modal.Header closeButton>
          <Modal.Title>Logout Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ height: "80px", paddingBottom: "50px", textAlign: "center" }}
        >
          Are you sure you want to log out?
        </Modal.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="secondary"
            onClick={closeModal}
            style={{ width: "120px", marginRight: "30px",marginLeft:"50px" }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={confirmLogout}
            style={{ width: "120px",marginRight:"50px" }}
          >
            Yes, Logout
          </Button>
        </div>
      </Modal>
      <div>
        {showSearch && (
          <div className="search-overlay">
            <Button onClick={closeSearch} className="closeButton">
              <XLg size={25} className="closeIcon" />
            </Button>
            <div className="search-container">
              <label htmlFor="search" className="search-for">
                SEARCH FOR:
              </label>
              <div className="container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                ></input>
                <Search size={30} className="searchIcon" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
