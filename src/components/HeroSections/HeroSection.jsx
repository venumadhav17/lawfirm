import Navbar from "../Navbar/Navbar";
import styles from "./HeroSection.module.css";
import heroImage from "../../assests/HeroImage.png";
import message from "../../assests/Message.png";
const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <Navbar />
      <div className={styles.customcontainer}>
        <div className={styles.leftColumn}>
          <h2 className={styles.maintitle}>
            You don't have to <br />
            <span className={styles.titlebold}>Fight them Alone.</span>
          </h2>

          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>

          <div className={styles.inputcontainer}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.emailInput}
            />
            <button className={styles.talkbutton}>Let’s Talk</button>
            <img
              src={message}
              className={styles.messageicon}
              alt="message icon"
            />
          </div>
        </div>
        <div className={styles.rightcolumn}>
          <img src={heroImage} alt="hero_Image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;