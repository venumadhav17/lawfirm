import styles from "./Section8.module.css";
const Section8 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Subscribe Our Newsletter</h3>
        <div className={styles.inputs}>
          <input type="text" className={styles.nameinput} placeholder="Name" />
          <input
            type="email"
            className={styles.email}
            placeholder="Enter your Email"
          />
          <button className={styles.button}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Section8;