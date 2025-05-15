import { Link } from "react-router-dom";
import styles from "./ExperienceSection.module.css";
import { useI18n } from "../../utils/i18n";

export const ExperienceSection: React.FC = () => {
  const { t } = useI18n();
  // @ts-ignore
  const experiences = t("experiences") as any[] || [];
  const latestExperiences = experiences.slice(0, 3).reverse();

  return (
    <section className={styles.experiences}>
      <h2 className={styles.title}>{t("latestExperiencesTitle") || "Dernières expériences"}</h2>
      <div className={styles.cards}>
        {latestExperiences.map((exp, index) => (
          <div key={index} className={styles.card}>
            <h3>{exp.title}</h3>
            <p>{exp.date}</p>
          </div>
        ))}
      </div>
      <div className={styles.seeMore}>
        <Link to="/about">
          <button>{t("seeMore") || "Voir plus"}</button>
        </Link>
      </div>
    </section>
  );
}