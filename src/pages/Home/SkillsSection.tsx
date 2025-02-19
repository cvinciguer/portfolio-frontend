import React from "react";
import styles from "./SkillsSection.module.css";
import { skills } from "../../data/data";

export const SkillsSection: React.FC = () => {
  return (
    <section className={styles.skills + " fade-in"}>
      <h2>Compétences</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div>{skill.title}</div>
            {/* <div className={styles.skillCardDescription}>{skill.description}</div> */}
          </div>
        ))}
      </div>
    </section>
  );
};
