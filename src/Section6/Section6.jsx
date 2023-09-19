import Card from "./Card/Card";
import teamMate1Image from "../assests/Team/TeamMate1.png";
import teamMate2Image from "../assests/Team/TeamMate2.png";
import teamMate3Image from "../assests/Team/TeamMate3.png";
import teamMate4Image from "../assests/Team/TeamMate4.png";
import teamMate5Image from "../assests/Team/TeamMate5.png";
import teamMate6Image from "../assests/Team/TeamMate6.png";
import styles from "./Section6.module.css";

const teamDetails = [
  {
    imageUrl: teamMate1Image,
    fullName: "Danial Def",
    caseNum: 301,
  },
  {
    imageUrl: teamMate2Image,
    fullName: "Sanfole",
    caseNum: 850,
  },
  {
    imageUrl: teamMate3Image,
    fullName: "Cesforila",
    caseNum: 470,
  },
  {
    imageUrl: teamMate4Image,
    fullName: "Colleen",
    caseNum: 180,
  },
  {
    imageUrl: teamMate5Image,
    fullName: "Haldone",
    caseNum: 212,
  },
  {
    imageUrl: teamMate6Image,
    fullName: "Nik Jeo",
    caseNum: 350,
  },
];

const Section6 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Our Team</h3>
      </div>
      <div className={styles.cardContainer}>
        {teamDetails.map((userObj) => {
          return (
            <Card
              key={userObj.fullName}
              imageUrl={userObj.imageUrl}
              fullName={userObj.fullName}
              caseNum={userObj.caseNum}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section6;