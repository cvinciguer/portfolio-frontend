import React from "react";
import styles from "./AboutSection.module.css"
import avatar from "../../assets/images/avatar.png";
import { about } from "../../data/data";

export const AboutSection: React.FC = () => {
  return (
    <section className={`${styles.aboutSection} fade-in`}>
      <div className={styles.aboutContent}>
        <img src={avatar} alt="Clément" className={styles.profilePic} />
        <div className={styles.aboutText}>
          <h2>À propos</h2>
          <p>{about}</p>
        </div>
      </div>
    </section>
  );
};