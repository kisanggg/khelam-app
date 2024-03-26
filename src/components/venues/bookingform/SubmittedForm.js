import React from 'react'
import { TelephoneFill,Phone } from 'react-bootstrap-icons'
import styles from "./submittedform.module.css"
const SubmittedForm = ({formData,onClose}) => {
  return (
    <div>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <div className={styles.headerWrapper}>
        <img
          src="https://marketplace.canva.com/EAFL8GIA214/1/0/1600w/canva-modern-minimalist-basketball-team-logo-gnFZBqra6FQ.jpg"
          alt="err"
          width={80}
          height={70}
        />
        <div className={styles.wrapper}>
          <h4>Times</h4>
          <p style={{ marginBottom: "0px" }}>Imadol, Lalitpur</p>
          <div className={styles.phoneWrapper}>
            <p>
              <TelephoneFill style={{ color: "red" }} /> 0105410006
            </p>
            <p>
              <Phone style={{ color: "red" }} /> 9812345678
            </p>
          </div>
        </div>
      </div>
      <h4>Hello User,<br/> Please Check your booking details:</h4>
      <p>NAME     :{formData.name}</p>
      <p>PHONE NO :{formData.phone}</p>
      <p>EMAIL    : {formData.email}</p>
      <p>Date     : {formData.date.toDateString()}</p>
      <p>TIME     : {formData.time}</p>
      <p>HOUR     : {formData.hour}</p>
      <p>TYPE     :{formData.type}</p>
      <p>NOTE     :{formData.note}</p>
      <p>Cost: Rs.1000</p>
      <button className={styles.confirmBtn}>Confirm</button>
      </div>
      </div>
    </div>
  )
}

export default SubmittedForm
