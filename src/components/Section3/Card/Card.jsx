import giftImage from "../../../assests/GiftImage.png";
import styles from "./Card.module.css";
const Card = ({ num }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={giftImage} className={styles.cardImage} alt="giftimage" />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{num}% Success Rate</h3>
        <p className={styles.cardDescription}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer.
        </p>
        <button className={styles.cardButton}>Read More</button>
      </div>
    </div>
  );
};

export default Card;