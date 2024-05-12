import { Button, Card, CardBody, CardTitle } from "react-bootstrap";
import React from "react";
import styles from "./signup.module.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signupWrapper}>
        <h1
          style={{
            color: "black",
            fontWeight: "600",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Get started by creating an account now!
        </h1>
        <h5 style={{ marginTop: "20px", textAlign: "center" }}>
          Khelam's platforms can be tailored to meet your needs, whether you are
          a player trying to locate your local club or a corporation trying to
          automate its management procedures.
        </h5>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "100px",
          }}
          className={styles.cardWrapper}
        >
          <div>
            <Card
              style={{
                width: "50rem",
                height: "20rem",
                border: "1px solid #d2d2d2",
                marginBottom: "50px",
                borderRadius: "10px",
                boxShadow: "#d0d0d0 5px 5px 5px",
                padding: "20px",
              }}
              className={styles.playerCardWrapper}
            >
              <div style={{ display: "flex" }}>
                <img
                  src="https://thumbs.dreamstime.com/b/tennis-player-background-sky-17563461.jpg"
                  alt="playerimage"
                  width={220}
                  height={275}
                />
                <div
                  style={{
                    marginLeft: "30px",
                    textAlign: "justify",
                    marginTop: "10px",
                  }}
                >
                  <CardTitle
                    style={{ fontSize: "40px", textAlign: "center" }}
                    className={styles.cardTitleWrapper}
                  >
                    Player
                  </CardTitle>
                  <CardBody
                    style={{ color: "#515050", textAlign: "justify" }}
                    className={styles.cardBodyWrapper}
                  >
                    "To discover the best clubs near you, sign up now! Unlock
                    access to a vibrant community of players, exclusive events,
                    and top-notch facilities. Join today and elevate your game
                    with like-minded enthusiasts. Don't miss out—your next
                    thrilling match awaits!"
                  </CardBody>
                  <Link to="/login">
                    <Button className={styles.signupButton}>
                      Sign up as Player
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: "50rem",
                height: "21rem",
                border: "1px solid #d2d2d2",
                borderRadius: "10px",
                boxShadow: "#d0d0d0 5px 5px 5px",
              }}
              className={styles.clubCardWrapper}
            >
              <div style={{ display: "flex", padding: "20px" }}>
                <div style={{ marginTop: "0px" }}>
                  <CardTitle
                    style={{ fontSize: "40px" }}
                    className={styles.cardTitleWrapper}
                  >
                    Club
                  </CardTitle>
                  <CardBody
                    style={{ color: "#515050", textAlign: "justify" }}
                    className={styles.cardBodyWrapper}
                  >
                    "Connect with local players and showcase your club's
                    offerings. Register now to expand your reach, attract new
                    members, and join a thriving community of passionate
                    athletes. Sign up today and let your club's excellence
                    shine!"
                  </CardBody>
                  <Link to="/adminsignin">
                    <Button
                      className={styles.signupButton}
                      style={{ marginLeft: "10px" }}
                    >
                      Sign up as Admin
                    </Button>
                  </Link>
                </div>
                <img
                  src="https://t3.ftcdn.net/jpg/00/48/74/22/360_F_48742247_ahpuJEWvd70ahR1B2Df9XRxBYzUWIn6j.jpg"
                  alt="adminimage"
                  width={350}
                  className={styles.clubImgWrapper}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
