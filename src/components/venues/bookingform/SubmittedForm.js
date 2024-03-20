import React from 'react'
import styles from './submittedform.module.css';

export default function SubmittedForm() {
  return (
    <div>
      <div>
        <form id='submittedForm' className={styles.submittedForm}>
            <p>Hello User,<br/>Please check your booking detail.</p>
        </form>
      </div>
    </div>
  )
}
