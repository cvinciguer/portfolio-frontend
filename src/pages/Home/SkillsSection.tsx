import React from "react";
import "./Home.css";

const skills = [
  "💻 Développement Web",
  "🎨 UX/UI Design",
  "📱 Applications Mobiles",
  "🌎 Langues & Communication",
  "📸 Création de Contenu",
  "💃 Danse & Culture Latine"
];

export const SkillsSection: React.FC = () => {
  return (
    <section className="skills fade-in">
      <h2>Compétences</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};