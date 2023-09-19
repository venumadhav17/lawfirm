import Card from "./Card/Card";
import styles from "./Section3.module.css";
const Section3 = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Why Choose us?</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Card num={98} />
        </div>
        <div className={styles.card}>
          <Card num={100} />
        </div>
        <div className={styles.card}>
          <Card num={100} />
        </div>
      </div>
    </div>
  );
};

export default Section3;