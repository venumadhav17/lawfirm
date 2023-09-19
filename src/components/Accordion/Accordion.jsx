import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Accordion.module.css";

const Accordion = (props) => {
  const { data } = props;
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className={styles.accordion}>
      {data.map((item, index) => (
        <div
          className={`styles.item ${activeIndex === index ? "active" : ""}`}
          key={item.question}
        >
          <button className={styles.button} onClick={() => handleClick(index)}>
            <h3 className={styles.question}>{item.question}</h3>
            <span className={styles.icon}>
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>
          {activeIndex === index && (
            <div className={styles.answer}>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;