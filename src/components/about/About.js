import React from "react";
import styles from "./about.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Facebook, Github, Linkedin, Whatsapp } from "react-bootstrap-icons";

const About = () => {
  return (
    <div>
      <div className={styles.mainWrapper}>
        <img
          src="https://images.unsplash.com/photo-1559692048-79a3f837883d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhc2tldGJhbGwlMjBjb3VydHxlbnwwfHwwfHx8MA%3D%3D"
          alt="about us image"
          width={300}
          height={400}
        />
        <div className={styles.aboutusWrapper}>
          <h3>About us</h3>
          <p>
            Welcome to Khelam! At Khelam, we're passionate about bringing the
            joy of sports to everyone, everywhere. We understand the excitement
            of stepping onto the court, the rush of competition, and the
            camaraderie of playing with friends.
            <br />
            <br />
            That's why we've created a seamless platform that makes booking your
            favorite sports venues easier than ever before. Our mission is
            simple: to connect sports enthusiasts with their ideal playing
            spaces, empowering them to pursue their passion for sports with
            convenience and ease.
            <br />
            <br />
            Whether you're a seasoned athlete or a casual player, Khelam is your
            go-to destination for securing court time hassle-free. What sets
            Khelam apart is our commitment to providing a diverse range of
            sports options and venues tailored to your preferences.
            <br />
            <br />
            From basketball and tennis to badminton, we've got you covered. With
            just a few taps, you can browse through available time slots, select
            your preferred sport, choose a convenient venue, and book your
            spot—all from the palm of your hand.
          </p>
        </div>
      </div>
      <div className={styles.contactUsWrapper}>
        <img
          src="https://images.pexels.com/photos/9117912/pexels-photo-9117912.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200"
          alt=""
        />
        <div className={styles.container}>
          <h4>Interested in being a part of Khelam team?</h4>
          <h6>Contact us</h6>
          <Button className={styles.contactButtonWrapper}>
            <Link to="/contact" className={styles.contactLink}>
              Contact us
            </Link>
          </Button>
        </div>
      </div>
      <div className={styles.aboutFooter}>
        <p>&copy;2024 Khelam.com.np. All Rights Reserved'</p>
      </div>
    </div>
  );
};

export default About;
