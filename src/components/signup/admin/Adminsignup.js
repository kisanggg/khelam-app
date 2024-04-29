import React, { useState } from "react";
import styles from "./admin.module.css";
import {
  ArrowLeftCircleFill,
  FileLockFill,
  TelephoneFill,
  Phone,
} from "react-bootstrap-icons";
import {
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Adminsignup = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedPradesh, setSelectedPradesh] = useState("");
  const [selectedSports, setSelectedSports] = useState("");
  const phoneRegex = /^\D*(\d+)\D*$/;
  const mobileRegex = /^\D*(\d+)\D*$/;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
    mobileNo1: "",
    mobileNo2: "",
    startTime: "",
    endTime: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const districtByPradesh = {
    "Province No. 1": ["Khotang", "Ilam", "Jhapa", "Okhaldhunga", "Dhankuta"],
    "Province No. 2": ["Saptari", "Siraha", "Dhanusa", "Bara", "Parsa"],
    "Province No. 3": [
      "Rasuwa",
      "Kathmandu",
      "Lalitpur",
      "Nuwakot",
      "Chitwan",
      "Dhading",
    ],
    "Gandaki Pradesh": ["Baglung", "Gorkha", "Manang", "Mustang", "Lamjung"],
    "Province No. 5": ["Dang", "Palpa", "Pyuthan", "Rolpa", "Bardiya"],
    "Karnali Pradesh": ["Humla", "Jumla", "Kalikot", "Mugu", "Surkhet"],
    "Sudurpashchim Pradesh": [
      "Bajhang",
      "Bajura",
      "Achham",
      "Kailali",
      "Darchula",
    ],
  };
  const handleDistrictClick = (district) => {
    setSelectedDistrict(district);
  };
  const pradesh = [
    "Province No. 1",
    "Province No. 2",
    "Province No. 3",
    "Gandaki Pradesh",
    "Province No. 5",
    "Karnali Pradesh",
    "Sudurpashchim Pradesh",
  ];
  const handleClick = (pradesh) => {
    setSelectedPradesh(pradesh);
    setSelectedDistrict("");
  };
  const handleSportsClick = (sports) => {
    setSelectedSports(sports);
  };
  const filteredDistricts = districtByPradesh[selectedPradesh] || [];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("upload Image", file);
  };
  const handleImageUpload = () => {
    alert("image uploaded");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("form submitted successfully", formData);
      navigate("/adminsignin");
    } else {
      setError(validationErrors);
    }
  };

  const validateForm = (data) => {
    const error = {};
    if (!data.firstName.trim()) {
      error.firstName = "First Name is required";
    }
    if (!data.lastName.trim()) {
      error.lastName = "Last Name is required";
    }
    if (!data.password.trim()) {
      error.password = "Please enter the password";
    }
    if (!data.confirmPassword.trim()) {
      error.confirmPassword = "Please confirm the password";
    } else if (data.password !== data.confirmPassword) {
      error.confirmPassword = "Passwords do not match";
    }
    if (!phoneRegex.test(data.phoneNo)) {
      error.phoneNo = "Invalid phone number";
    }
    if (!mobileRegex.test(data.mobileNo1)) {
      error.mobileNo1 = "Invalid mobile number";
    }
    if (!mobileRegex.test(data.mobileNo2)) {
      error.mobileNo2 = "Invalid mobile number";
    }
    // if (!data.startTime.trim()) {
    //   error.startTime = "Start Time is required";
    // }
    // if (!data.endTime.trim()) {
    //   error.endTime = "End Time is required";
    // }
    return error;
  };
  return (
    <div className={styles.adminWrapper}>
      <Link to="/signup">
        <ArrowLeftCircleFill size={30} className={styles.arrowLeft} />
      </Link>
      <div className={styles.bodyWrapper}>
        <div className={styles.signUp}>
          <img
            src="https://marketplace.canva.com/EAFL8GIA214/1/0/1600w/canva-modern-minimalist-basketball-team-logo-gnFZBqra6FQ.jpg"
            alt="err"
            width={120}
            height={100}
          />
          <div className={styles.wrapper}>
            <h5>HiTech</h5>
            <p>Imadol, Lalitpur</p>
            <div className={styles.phoneWrapper}>
              <p>
                <TelephoneFill style={{ color: "red" }} /> 01-2453652 ,
              </p>
              <p>
                <Phone style={{ color: "red", marginLeft: "7px" }} /> 9802542632
              </p>
            </div>
          </div>
        </div>
        <div className={styles.formWrapper}>
          <h1>
            Sign Up <FileLockFill />
          </h1>
          <Form onSubmit={handleSubmit}>
            <div>
              <Form.Label htmlFor="name">Name</Form.Label>
              <div className={styles.nameWrapper}>
                <Form>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className={styles.firstName}
                      name="firstName"
                      required
                      onChange={handleChange}
                      isInvalid={error.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {error.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className={styles.lastName}
                      name="lastName"
                      required
                      onChange={handleChange}
                      isInvalid={error.lastName}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      style={{ marginLeft: "20px" }}
                    >
                      {error.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form>
              </div>
              <div className={styles.passwordWrapper}>
                <div>
                  <Form>
                    <Form.Group>
                      <Form.Label
                        htmlFor="password"
                        style={{ marginTop: "15px" }}
                      >
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        className={styles.passwordControl}
                        required
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        isInvalid={error.password}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        style={{ marginLeft: "20px" }}
                      >
                        {error.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form>
                </div>
                <div>
                  <Form>
                    <Form.Group>
                      <Form.Label
                        htmlFor="Confirmpassword"
                        style={{ marginTop: "15px", marginLeft: "20px" }}
                        className={styles.confirmLabel}
                      >
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        className={styles.confirmControl}
                        required
                        name="confirmPassword"
                        onChange={handleChange}
                        isInvalid={error.confirmPassword}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        style={{ marginLeft: "20px" }}
                      >
                        {error.confirmPassword}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form>
                </div>
              </div>
              <Form.Label htmlFor="address" style={{ marginTop: "15px" }}>
                Address
              </Form.Label>
              <div className={styles.addressWrapper}>
                <InputGroup style={{ width: "310px" }} className={styles.pradeshWrapper}>
                  <Form.Control
                    type="text"
                    placeholder="Pradesh"
                    style={{ border: "1px solid black" }}
                    value={selectedPradesh}
                    required
                    readOnly
                  />
                  <DropdownButton>
                    {pradesh.map((item, index) => (
                      <Dropdown.Item
                        onClick={() => handleClick(item)}
                        key={index}
                      >
                        {item}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </InputGroup>
                <InputGroup style={{ width: "330px" }} className={styles.districtWrapper}>
                  <Form.Control
                    type="text"
                    placeholder="District"
                    style={{ marginLeft: "20px", border: "1px solid black" }}
                    className={styles.districtControl}
                    value={selectedDistrict}
                    required
                    readOnly
                  />
                  <DropdownButton>
                    {filteredDistricts.map((district, index) => (
                      <Dropdown.Item
                        onClick={() => handleDistrictClick(district)}
                        key={index}
                      >
                        {district}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </InputGroup>
              </div>
              <div className={styles.sportsnumberWrapper}>
                <div>
                  <Form.Label
                    htmlFor="sports type"
                    style={{ marginTop: "15px" }}
                  >
                    Sports Type
                  </Form.Label>
                  <InputGroup
                    style={{ width: "310px" }}
                    className={styles.sportstypeWrapper}
                    required
                  >
                    <Form.Control
                      type="text"
                      placeholder="Select the Sport"
                      style={{
                        width: "260px",
                        border: "1px solid black",
                      }}
                      className={styles.sportscontrolWrapper}
                      value={selectedSports}
                      readOnly
                    />
                    <DropdownButton>
                      <Dropdown.Item
                        onClick={() => handleSportsClick("Futsal")}
                      >
                        Futsal
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSportsClick("Basketball")}
                      >
                        Basketball
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSportsClick("Cricket")}
                      >
                        Cricket
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSportsClick("Badminton")}
                      >
                        Badminton
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSportsClick("Volleyball")}
                      >
                        Volleyball
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleSportsClick("Swimming")}
                      >
                        Swimming
                      </Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </div>
                <div>
                  <Form>
                    <Form.Group>
                      <Form.Label
                        htmlFor="phoneNo"
                        style={{ marginTop: "15px", marginLeft: "20px" }}
                        className={styles.phoneLabel}
                      >
                        Phone No
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        pattern="[0-9]*"
                        placeholder="Phone No"
                        className={styles.phoneControl}
                        required
                        name="phoneNo"
                        onChange={handleChange}
                        isInvalid={error.phoneNo}
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(/\D/g, "");
                          handleChange(e);
                        }}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        style={{ marginLeft: "20px" }}
                      >
                        {error.phoneNo}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form>
                </div>
              </div>
              <Form>
                <Form.Group>
                  <Form.Label htmlFor="mobileno" style={{ marginTop: "15px" }}>
                    Mobile No
                  </Form.Label>
                  <div className={styles.mobileWrapper}>
                    <div>
                      <Form.Control
                        type="tel"
                        placeholder="Mobile No"
                        style={{ width: "310px", border: "1px solid black" }}
                        className={styles.mobile1Control}
                        required
                        name="mobileNo1"
                        onChange={handleChange}
                        isInvalid={error.mobileNo1}
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(/\D/g, "");
                          handleChange(e);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {error.mobileNo1}
                      </Form.Control.Feedback>
                    </div>
                    <div>
                      <Form.Control
                        type="tel"
                        placeholder=" Additional Mobile No"
                        style={{
                          width: "310px",
                          marginLeft: "20px",
                          border: "1px solid black",
                        }}
                        className={styles.mobile2Control}
                        required
                        name="mobileNo2"
                        onChange={handleChange}
                        isInvalid={error.mobileNo2}
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(/\D/g, "");
                          handleChange(e);
                        }}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        style={{ marginLeft: "20px" }}
                      >
                        {error.mobileNo2}
                      </Form.Control.Feedback>
                    </div>
                  </div>
                </Form.Group>
              </Form>
              {/* <Form>
                <div style={{display:"flex"}}>
                <Form.Group>
                  <Form.Label htmlFor="logo" style={{ marginTop: "15px" }}>
                    Insert Logo
                  </Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ width: "700px",border:"1px solid black"}}
                  />
                </Form.Group>
                <Button
                  onClick={handleImageUpload}
                  className={styles.uploadButton}
                >
                  Upload Image
                </Button>
                </div>
              </Form> */}
              {/* <div style={{ display: "flex" }}>
                <div>
                  <Form>
                    <Form.Group>
                      <Form.Label
                        htmlFor="starttime"
                        style={{ marginTop: "15px" }}
                      >
                        Start Time
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Start time"
                        style={{ width: "410px", border:"1px solid black" }}
                        name="startTime"
                        onChange={handleChange}
                        isInvalid={error.startTime}
                      />
                      <Form.Control.Feedback type="invalid">
                        {error.startTime}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form>
                </div>
                <div>
                  <Form>
                    <Form.Group>
                      <Form.Label
                        htmlFor="endtime"
                        style={{ marginTop: "15px", marginLeft: "20px" }}
                      >
                        End Time
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="End time"
                        style={{ marginLeft: "20px", width: "410px", border:"1px solid black" }}
                        name="endTime"
                        onChange={handleChange}
                        isInvalid={error.endTime}
                      />
                      <Form.Control.Feedback type="invalid" style={{marginLeft:"20px"}}>
                        {error.endTime}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form>
                </div>
              </div> */}
              <Button
                type="submit"
                variant="danger"
                className={styles.submitBtn}
              >
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Adminsignup;
