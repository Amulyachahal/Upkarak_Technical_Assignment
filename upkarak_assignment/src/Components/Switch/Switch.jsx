import React from "react";
import styles from "./Switch.module.css";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
