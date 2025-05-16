import React from "react";
import styles from "./SkillsSection.module.css";
import { useI18n } from "../../utils/i18n";

export const SkillsSection: React.FC = () => {
  const { t, lang } = useI18n();
  // @ts-ignore
  const skills = t("skills") as { title: string; description: string }[] || [];

  return (
    <section className={styles.skills + " fade-in"}>
      <h2 className={styles.skillsTitle}>{t("skillsTitle") || "Compétences"}</h2>
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
