import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.navList}>
          <NavLink className={styles.link} to="/">
            <li className={styles.navPills}> 🏠 Home</li>
          </NavLink>{" "}
          <NavLink className={styles.link} to="/events">
            <li className={styles.navPills}> 🌆 Events</li>
          </NavLink>{" "}
          <NavLink className={styles.link}>
            {" "}
            <li className={styles.navPills}> 📆 Calender</li>
          </NavLink>{" "}
          <NavLink className={styles.link}>
            {" "}
            <li className={styles.navPills}> 🧭 Explore</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
