import React, { useEffect } from 'react';
import { FaBriefcase } from "react-icons/fa";
import styles from "./Experience.module.css";
import { useI18n } from '../../utils/i18n';

const Experience: React.FC = () => {
    const { t } = useI18n();
    // @ts-ignore
    const experiences = t("experiences") as any[] || [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={styles.experienceSection}>
            <h2 className={styles.sectionTitle}>{t("experienceTitle") || "Expérience"}</h2>
            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <div className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`} key={index}>
                        <div className={styles.experienceCard}>
                            <FaBriefcase className={styles.experienceIcon} />
                            <div className={styles.experienceContent}>
                                <h3>{exp.date}</h3>
                                <h4>{exp.title}</h4>
                                <p className={styles.company}>{exp.company}</p>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={styles.timelineLine}></div>
            </div>
        </section>
    );
};

export default Experience;