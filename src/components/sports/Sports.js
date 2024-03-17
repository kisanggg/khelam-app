import React, { useState } from 'react';
import { Form, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import styles from './sports.module.css';

const Sports = () => {
  const [selectedSports, setSelectedSports] = useState('');
  const [selectedVenue, setSelectedVenue] = useState('');

  const handleSportsOptionClick = (option) => {
    setSelectedSports(option);
  };

  const handleVenueOptionClick = (option) => {
    setSelectedVenue(option);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <img src='https://www.indystar.com/gcdn/presto/2022/01/15/POEN/fedfbe0e-e3c5-40a9-9c4c-476f94906640-Photo_Jan_15_3_18_40_PM.jpg?crop=4840,2723,x0,y235&width=3200&height=1801&format=pjpg&auto=webp' alt='err' width={1268} height={550}></img>
        <div className={styles.sportsContainer}>
          <div className={styles.firstContainer}>
            <p>Sports</p>
            <InputGroup style={{ height: "30px", width: "270px", marginLeft: "60px" }}>
              <Form.Control
                placeholder="select sports type"
                aria-label="select"
                aria-describedby="basic-addon1"
                value={selectedSports} 
                readOnly 
              />
              <DropdownButton id='sports-dropdown' style={{ backgroundColor: "white", color: "black", border: "1px solid white", borderLeft: "1px solid #e3e3e3" }}>
                <Dropdown.Item onClick={() => handleSportsOptionClick("Basketball")}>Basketball</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSportsOptionClick("Futsal")}>Futsal</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSportsOptionClick("Cricket")}>Cricket</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </div>
          <div className={styles.secondContainer}>
            <p>Venue</p>
            <InputGroup style={{ height: "30px", width: "360px", marginLeft: "60px" }}>
              <Form.Control
                placeholder="select your venue"
                aria-label="select"
                aria-describedby="basic-addon1"
                value={selectedVenue} 
                readOnly 
              />
              <DropdownButton id='venue-dropdown' style={{ backgroundColor: "white", color: "black", border: "1px solid white", borderLeft: "1px solid #e3e3e3" }}>
                <Dropdown.Item onClick={() => handleVenueOptionClick("Times")}>Times</Dropdown.Item>
                <Dropdown.Item onClick={() => handleVenueOptionClick("Gurkha")}>Gurkha</Dropdown.Item>
                <Dropdown.Item onClick={() => handleVenueOptionClick("Dunkmandu")}>Dunkmandu</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sports;
