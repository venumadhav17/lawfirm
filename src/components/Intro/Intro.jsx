import styles from "./Intro.module.css";
const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introleft}>
        <h2 className={styles.introtitle}>Let’s Introduce Ourself</h2>
      </div>

      <div className={styles.introdivider}></div>

      <div className={styles.introright}>
        <h2 className={styles.introsubtitle}>Criminal Lawyer</h2>
        <p className={styles.introtext}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Intro;