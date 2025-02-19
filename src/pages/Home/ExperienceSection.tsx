import React from "react";
import styles from "./ExperienceSection.module.css"
import { experiences } from "../../data/data";

const latestExperiences = experiences.slice(0, 3); // Prendre les 3 dernières expériences

export const ExperienceSection: React.FC = () => {
  return (
    <section className={styles.experience + " fade-in"}>
      <h2>Expériences</h2>
      <div className={styles.timeline}>
        {latestExperiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem + "slide-in"}>
            <h3>{exp.title}</h3>
            <p>{exp.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};