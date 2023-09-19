import Accordian from "../components/Accordion/Accordion";
import styles from "./Section7.module.css";
const faqList = [
  {
    question: "Do I need a personal injury report?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit error enim ex quos maxime quia nobis eaque quis nesciunt illo est sed, mollitia esse illum velit, dicta recusandae praesentium officiis voluptatibus voluptas! Voluptates, accusamus quae!",
  },
  {
    question: "How much is my case worth?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit error enim ex quos maxime quia nobis eaque quis nesciunt illo est sed, mollitia esse illum velit, dicta recusandae praesentium officiis voluptatibus voluptas! Voluptates, accusamus quae!",
  },
  {
    question: "What should I do right after a car accident?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit error enim ex quos maxime quia nobis eaque quis nesciunt illo est sed, mollitia esse illum velit, dicta recusandae praesentium officiis voluptatibus voluptas! Voluptates, accusamus quae!",
  },
  {
    question: "How much is my case worth?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit error enim ex quos maxime quia nobis eaque quis nesciunt illo est sed, mollitia esse illum velit, dicta recusandae praesentium officiis voluptatibus voluptas! Voluptates, accusamus quae!",
  },
];

const Section7 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>faq</h3>
        <p className={styles.description}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className={styles.accordion}>
        <Accordian data={faqList} />
      </div>
    </div>
  );
};

export default Section7;