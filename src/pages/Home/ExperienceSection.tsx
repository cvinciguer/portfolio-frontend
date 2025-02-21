import { Link } from "react-router-dom";
import styles from "./ExperienceSection.module.css";
import { experiences } from "../../data/data";

const latestExperiences = experiences.slice(0, 3).reverse(); // Prendre les 3 dernières expériences

export const ExperienceSection: React.FC = () => {
  return (
    <section className={styles.experiences}>
      <h2 className={styles.title}>Dernières expériences</h2>
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
          <button>Voir plus</button>
        </Link>
      </div>
    </section>
  );
}