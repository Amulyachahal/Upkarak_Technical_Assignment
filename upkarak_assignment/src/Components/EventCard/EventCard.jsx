import { useContext } from "react";
import NavBar from "../Navbar/Navbar";
import styles from "./EventCard.module.css";
import { DataContext } from "../../Contexts/DataContext";

const EventCard = ({ formData }) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    eventName,
    startDate,
    endDate,
    eventLocation,
    requireApproval,
    image,
    color,
    typeFace,
  } = formData;
  return (
    <>
      <NavBar />
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.eventInfo}>
            {" "}
            <div className={styles.eventTime}>12:30</div>
            <div className={styles.eventTitle}>{eventName}</div>
            <div className={styles.eventHost}>By OctML</div>
            <div className={styles.eventType}>{eventLocation}</div>
            <div className={styles.inviteIcon}>Invited</div>
          </div>
          <div className={styles.eventImageContainer}>
            <img
              className={styles.eventImage}
              eventImage
              alt="event image"
              src={image ? image : ""}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default EventCard;
