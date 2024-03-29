import React, { useState } from "react";
import { Form, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import styles from "./sports.module.css";
import Times from "../venues/times/Times";
import Dunkmandu from "../venues/dunkmandu/Dunkmandu";

const Sports = () => {
  const [selectedSports, setSelectedSports] = useState("");
  const [selectedVenue, setSelectedVenue] = useState("");

  const handleSportsOptionClick = (option) => {
    setSelectedSports(option);
  };

  const handleVenueOptionClick = (option) => {
    setSelectedVenue(option);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <img
          src="https://flex.f6s.com/content-resource/media/938025.jpg"
          alt="err"
          width={1280}
          height={617}
        />
        <div className={styles.sportsContainer}>
          <div className={styles.firstContainer}>
            <p>Sports</p>
            <InputGroup
              style={{ height: "25px", width: "200px", marginLeft: "60px" }}
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
                <Dropdown.Item
                  onClick={() => handleVenueOptionClick("Dunkmandu")}
                >
                  Dunkmandu
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
    </>
  );
};

const renderSportSection = (venue, sport) => {
  switch (venue) {
    case "Times":
      switch (sport) {
        case "Basketball":
          return (
            <div>
              <Times />
            </div>
          );
        case "Futsal":
          return (
            <div>
              <Times />
            </div>
          );
        default:
          return null;
      }
    case "Dunkmandu":
      switch (sport) {
        case "Basketball":
          return (
            <div>
              <Dunkmandu />
            </div>
          );
        case "Futsal":
          return (
            <div>
              <Dunkmandu />
            </div>
          );
        default:
          return null;
      }
    default:
      return null;
  }
};

export default Sports;
