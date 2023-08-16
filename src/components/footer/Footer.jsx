import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles["footer"]} id="contact">
      <div className="container">
        <div className="social-media-icons">
          <a href="https://web.facebook.com/fatma.yasser.1048554/" target="_blank" className={styles['social-media-icons-a']}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://github.com/tmtm8976" target="_blank" className={styles['social-media-icons-a']}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/fatma-yasser-68b784202/" target="_blank" className={styles['social-media-icons-a']}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:fatemaysser963@gmail.com" className={styles['social-media-icons-a']}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </footer>
  )
}