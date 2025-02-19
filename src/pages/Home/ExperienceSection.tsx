import React from "react";
import "./Home.css";

const experiences = [
  { title: "Développeur Web & Logiciel", date: "Freelance - 2022 à Aujourd’hui" },
  { title: "Créateur de Contenu", date: "Instagram & Réseaux sociaux - 2023 à Aujourd’hui" },
  { title: "Ingénieur Télécom", date: "Ancienne activité - 2019 à 2022" }
];

//const latestExperiences = experiences.slice(0, 3); // Prendre les 3 dernières expériences

export const ExperienceSection: React.FC = () => {
  return (
    <section className="experience fade-in">
      <h2>Expériences</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item slide-in">
            <h3>{exp.title}</h3>
            <p>{exp.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};