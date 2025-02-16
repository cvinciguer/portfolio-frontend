import React from "react";
import "./CVPreview.css";

interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

const experiences: Experience[] = [
    {
        title: "Bullshit",
        company: "Freelance",
        date: "2022 - Présent",
        description: "Développement d'applications web et mobiles. Expertise en React, TypeScript et Node.js.",
      },
  {
    title: "Développeuse Web & Logiciel",
    company: "Freelance",
    date: "2022 - Présent",
    description: "Développement d'applications web et mobiles. Expertise en React, TypeScript et Node.js.",
  },
  {
    title: "Créatrice de contenu",
    company: "Instagram & Réseaux sociaux",
    date: "2023 - Présent",
    description: "Partage de contenu sur les voyages et les langues, création d'une communauté engagée.",
  },
  {
    title: "Ingénieure Télécom",
    company: "Ancienne activité",
    date: "2019 - 2022",
    description: "Conception et maintenance de réseaux télécom. Expertise en infrastructure et sécurité.",
  },
  {
    title: "Diplôme d'ingénieure",
    company: "École d'ingénieur",
    date: "2016 - 2019",
    description: "Spécialisation en télécommunications et réseaux informatiques.",
  },
];

const CVPreview: React.FC = () => {
  return (
    <div className="cv-container">
      <h2 className="cv-title">Mon Parcours</h2>
      <div className="cv-list">
        {experiences.map((exp, index) => (
          <div key={index} className="cv-card">
            <h3 className="cv-card-title">{exp.title}</h3>
            <p className="cv-card-company">{exp.company} - <span>{exp.date}</span></p>
            <p className="cv-card-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVPreview;
