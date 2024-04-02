import React from "react";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";
import styles from "./about.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.aboutWrapper}>
        <img src={img2} alt="err" width={1263} height={450} />
        <div className={styles.wrapper}>
          <h5>About us</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            repellendus
            <br />
            necessitatibus dolore similique doloremque ratione quis architecto,
            cumque totam
            <br />
            numquam adipisci perferendis neque ipsum harum ab ex voluptatem
            alias. Nisi.
          </p>
        </div>
      </div>
      <div className={styles.mainWrapper}>
        <div className={styles.storyWrapper}>
          {/* <img
          src="https://www.nicepng.com/png/detail/20-206965_red-wave-line.png"
          alt="err"
          width={800}
          height={100}
        /> */}
          <div
            style={{
              width: "1px",
              height: "45px",
              border: "2px solid red",
              borderRadius: "8px",
              marginTop: "25px",
              marginLeft: "80px",
            }}
          ></div>
          <h2>Our Story</h2>
          <div className={styles.loremWrapper}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              provident quia qui. Non, quis excepturi odio libero itaque optio
              accusantium pariatur quidem temporibus, inventore obcaecati ea
              tenetur possimus ipsa nulla.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              esse omnis a possimus ex maxime fuga expedita libero nisi dolorem
              porro molestiae beatae temporibus eligendi architecto in? Quia,
              optio libero!
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
              aliquam cupiditate sunt praesentium laudantium rerum. Eos unde
              provident ex natus! Impedit deleniti iure, inventore accusantium
              sit quasi? Ipsam, ea assumenda? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Sint, eveniet facilis odio minus
              libero velit repudiandae architecto nisi numquam pariatur natus
              doloribus reprehenderit impedit nesciunt nobis nam mollitia aut
              consequuntur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam
              sunt distinctio temporibus iusto neque, perferendis et dignissimos
              laudantium quasi ullam quisquam libero deserunt? Aliquam dicta
              cumque at officiis adipisci! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Earum explicabo iure, non illo vel
              enim nisi pariatur tenetur quia repudiandae, iste, sequi at
              tempora in autem. Id quod suscipit ullam?
            </p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.divWrapper}></div>
          <div className={styles.imgWrapper}>
            <div className={styles.img1Wrapper}>
              <img src={img4} alt="err" width={270} height={220} />
            </div>
            <div className={styles.img2Wrapper}>
              <img src={img3} alt="err" width={200} height={230} />
            </div>
            <div className={styles.img5Wrapper}>
              <img src={img1} alt="err" width={380} height={270} />
            </div>

            <div className={styles.img3Wrapper}>
              <img src={img5} alt="err" width={200} />
            </div>
            <div className={styles.img4Wrapper}>
              <img src={img6} alt="err" width={270} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutFooter}>
      <p>©2024 Khelam.com.np. All Rights Reserved'</p>
      </div>
    </div>
  );
};

export default About;
