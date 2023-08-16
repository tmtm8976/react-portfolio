import React from 'react'
import styles from './about.module.css'

export default function About() {
  return (
    <div className={styles["about-cont"]} id="about">
    <div className={styles["txt"]}>
        <img src="images/abt.png" alt="" className={styles["abt"]}/>
        <div className={styles["desc"]}>
            <h1>About me</h1>
            <hr/>
            <br/>
            <p className={styles['txt-p']}>
                Alexandria University Oct 2020 – Present
                Bachelor of Science in Software Industry and Multi-Media (SIM)- department
                Academic Achievements:
                <br/>
                • computer science GPA: 3.83/4 (A-/A Average)
                <br/>
                • Attained the 3rd highest ranking in the computer science program

            </p>
        </div>
    </div>

</div>

  )
}
