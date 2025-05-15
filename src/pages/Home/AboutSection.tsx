import React from "react";
import styles from "./AboutSection.module.css";
import avatar from "../../assets/images/headshot.png";
import { useI18n } from "../../utils/i18n";

export const AboutSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className={`${styles.aboutSection} fade-in`}>
      <div className={styles.aboutContent}>
        <img src={avatar} alt="Clément" className={styles.profilePic} />
        <div className={styles.aboutText}>
          <h2>{t("aboutTitle") || "À propos"}</h2>
          <p>{t("about")}</p>
        </div>
      </div>
    </section>
  );
};