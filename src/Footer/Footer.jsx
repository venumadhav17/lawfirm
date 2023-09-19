import React from "react";
import logoImage from "../assests/LogoImg.png";
import instaLogo from "../assests/SocialMedia/InstagramLogo.png";
import tweeterLogo from "../assests/SocialMedia/TwitterLogo.png";
import facebookLogo from "../assests/SocialMedia/FacebookLogo.png";
import pentrestLogo from "../assests/SocialMedia/PinterestLogo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerleft}>
        <img src={logoImage} alt="Company Logo" />
      </div>
      <div className={styles.footermiddle}>
        <ul>
          <li>Home</li>
          <li>Attorneys</li>
          <li>Practice Areas</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className={styles.footerright}>
        <a href="#">
          <img src={instaLogo} alt="Instagram" />
        </a>
        <a href="#">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="#">
          <img src={tweeterLogo} alt="twitter" />
        </a>
        <a href="#">
          <img src={pentrestLogo} alt="pinterest" />
        </a>
      </div>
      <div className={styles.footercompanydetails}>
        <p>@2020 Acme. All right reserved. </p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;