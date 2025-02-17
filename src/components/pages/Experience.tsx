import React from 'react';
import { FaBriefcase } from "react-icons/fa";
import './Experience.css';

const experiences = [
    {
        year: "2023 - 2024",
        title: "Développeuse Web & Créatrice de contenu",
        company: "Freelance",
        description: "Développement d'applications web modernes, création de contenu tech et formation en ligne."
    },
    {
        year: "2021 - 2023",
        title: "Ingénieure Télécom",
        company: "Entreprise X",
        description: "Conception et maintenance d'infrastructures télécom, optimisation des réseaux mobiles."
    },
    {
        year: "2019 - 2021",
        title: "Stage Développement Logiciel",
        company: "Start-up Y",
        description: "Développement d'outils internes, optimisation de bases de données et gestion de projet agile."
    }
];

const Experience: React.FC = () => {
    return (
        <section className="experience-section">
            <h2 className="section-title">Expérience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                        <div className="experience-card">
                            <FaBriefcase className="experience-icon" />
                            <div className="experience-content">
                                <h3>{exp.year}</h3>
                                <h4>{exp.title}</h4>
                                <p className="company">{exp.company}</p>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="timeline-line"></div>
            </div>
        </section>
    );
};

export default Experience;