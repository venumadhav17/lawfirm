import React from "react";
import styles from "./Card.module.css";

const Card = ({ imageUrl, fullName, caseNum }) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} className={styles.image} alt="" />
      <div className={styles.text}>
        <h3 className={styles.fullname}>{fullName}</h3>
        <p className={styles.caseNum}>{caseNum} Cases</p>
      </div>
    </div>
  );
};

export default Card;