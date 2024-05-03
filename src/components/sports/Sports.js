import React, { useState, useEffect, useContext } from "react";
import {
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
  Modal,
  Button,
} from "react-bootstrap";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styles from "./sports.module.css";
import Times from "../venues/times/Times";
import { DataContext } from "../../DataContext";

const Sports = () => {
  const { id } = useParams();
  const location = useLocation();
  const { isLoggedIn } = useContext(DataContext);
  const [selectedSports, setSelectedSports] = useState("");
  const [selectedVenue, setSelectedVenue] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Sports component mounted");
    console.log("Id:", id);
    console.log("Location:", location.pathname);
    return () => {
      console.log("Sports component unmounted");
    };
  }, [id, location.pathname]);

  const handleSportsOptionClick = (option) => {
    setSelectedSports(option);
  };

  const handleVenueOptionClick = (option) => {
    setSelectedVenue(option);
  };

  const renderSportSection = (venue, sport) => {
    switch (venue) {
      case "Times":
        switch (sport) {
          case "Basketball":
          case "Futsal":
            return isLoggedIn ? <Times /> : null;
          default:
            return null;
        }
      default:
        return null;
    }
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleLogin = () => {
    navigate("/usersignup");
  };

  useEffect(() => {
    if (selectedSports && selectedVenue && !isLoggedIn) {
      handleShowLoginModal();
    }
  }, [selectedSports, selectedVenue, isLoggedIn]);

  return (
    <>
      <div className={styles.mainContainer}>
        <img
          src="https://flex.f6s.com/content-resource/media/938025.jpg"
          alt="err"
        />
        <div className={styles.sportsContainer}>
          <div className={styles.firstContainer}>
            <p>Sports</p>
            <InputGroup
              style={{ height: "25px", width: "200px", marginLeft: "60px" }}
              className={styles.sportsWrapper}
            >
              <Form.Control
                placeholder="select sports type"
                aria-label="select"
                aria-describedby="basic-addon1"
                value={selectedSports}
                readOnly
              />
              <DropdownButton
                id="sports-dropdown"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid white",
                  borderLeft: "1px solid #e3e3e3",
                }}
              >
                <Dropdown.Item
                  onClick={() => handleSportsOptionClick("Basketball")}
                >
                  Basketball
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleSportsOptionClick("Futsal")}
                >
                  Futsal
                </Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </div>
          <div className={styles.secondContainer}>
            <p>Venue</p>
            <InputGroup
              style={{ height: "25px", width: "300px", marginLeft: "60px" }}
              className={styles.venueWrapper}
            >
              <Form.Control
                placeholder="select your venue"
                aria-label="select"
                aria-describedby="basic-addon1"
                value={selectedVenue}
                readOnly
              />
              <DropdownButton
                id="venue-dropdown"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid white",
                  borderLeft: "1px solid #e3e3e3",
                }}
              >
                <Dropdown.Item onClick={() => handleVenueOptionClick("Times")}>
                  Times
                </Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </div>
        </div>
      </div>
      {selectedSports && selectedVenue && (
        <div className={styles.selectedSection}>
          {renderSportSection(selectedVenue, selectedSports)}
        </div>
      )}

      {!isLoggedIn && (
        <Modal
          show={showLoginModal}
          onHide={handleCloseLoginModal}
          className={styles.sportsModal}
        >
          <Modal.Header>
            <Modal.Title>Please login to access this feature.</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseLoginModal}>
              Close
            </Button>

            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Sports;
