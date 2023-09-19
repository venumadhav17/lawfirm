import styles from "./Card.module.css";
const Card = ({ imageUrl, fullName, designation, content }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={imageUrl} className={styles.image} alt={fullName} />
      <div className={styles.text}>
        <div className={styles.innerText}>
          <h3 className={styles.fullname}>{fullName} </h3>
          <p className={styles.designationt}>{designation}</p>
        </div>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default Card;