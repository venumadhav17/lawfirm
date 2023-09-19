import logo from "../../assests/LogoImg.png";
import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="law_firm_logo" />
      </div>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Attorneys</li>
        <li>Practice Areas</li>
        <li>About Us</li>
      </ul>
      <button className={styles.button}>Contact Now</button>
    </div>
  );
};

export default Navbar;