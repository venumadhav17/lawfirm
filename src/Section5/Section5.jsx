import Card from "./Card/Card";
import cl1Image from "../assests/Client/Client1.png";
import cl2Image from "../assests/Client/Client2.png";
import cl3Image from "../assests/Client/Client3.png";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import styles from "./Section5.module.css";
const userDetails = [
  {
    imageUrl: cl1Image,
    fullName: "Jane Copper",
    designation: "Ceo of Hunt",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt deleniti voluptas quos eius mollitia facilis porro iste molestiae praesentium.",
  },
  {
    imageUrl: cl2Image,
    fullName: "Devon Lane",
    designation: "Ceo of Hunt",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt deleniti voluptas quos eius mollitia facilis porro iste molestiae praesentium.",
  },
  {
    imageUrl: cl3Image,
    fullName: "Robert fox",
    designation: "Ceo of Hunt",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt deleniti voluptas quos eius mollitia facilis porro iste molestiae praesentium.",
  },
];

const Section5 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>What says our happy Clients</h3>
        <div className={styles.navigation}>
          <button className={styles.button}>
            <WestIcon />
          </button>
          <button className={styles.button}>
            <EastIcon />
          </button>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {userDetails.map((userObj) => {
          return (
            <Card
              key={userObj.fullName}
              designation={userObj.designation}
              imageUrl={userObj.imageUrl}
              fullName={userObj.fullName}
              content={userObj.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section5;