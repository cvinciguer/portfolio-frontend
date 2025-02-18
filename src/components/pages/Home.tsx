import React, { useRef } from "react";
import "./Home.css";
import { name, description, about, /*experiences*/ } from '../../data';
import avatar from '../../assets/avatar.png';

export const Home: React.FC = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  //const latestExperiences = experiences.slice(0, 3); // Prendre les 3 dernières expériences

  return (
    <div className="home-container">
      {/* HEADER AVEC EFFET PARALLAXE */}
      <header className="hero">
        <div className="hero-text">
          <h1 className="hero-title">{name}</h1>
          <h2 className="hero-subtitle">{description}</h2>
          <a className="cta-button" onClick={() => {
            contactRef.current?.scrollIntoView({
              behavior: "smooth"
            })
          }}>Me contacter</a>
        </div>
      </header>

      {/* SECTION À PROPOS */}
      <section className="about fade-in">
        <div className="about-content">
          <img src={avatar} alt="Clément" className="profile-pic" />
          <div className="about-text">
            <h2>À propos</h2>
            <p>
              {about}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION COMPÉTENCES AVEC ICÔNES */}
      <section className="skills fade-in">
        <h2>Compétences</h2>
        <div className="skills-grid">
          <div className="skill-card">💻 Développement Web</div>
          <div className="skill-card">🎨 UX/UI Design</div>
          <div className="skill-card">📱 Applications Mobiles</div>
          <div className="skill-card">🌎 Langues & Communication</div>
          <div className="skill-card">📸 Création de Contenu</div>
          <div className="skill-card">💃 Danse & Culture Latine</div>
        </div>
      </section>

      {/* SECTION EXPÉRIENCE */}
      <section className="experience fade-in">
        <h2>Expériences</h2>
        <div className="timeline">
          <div className="timeline-item slide-in">
            <h3>Développeur Web & Logiciel</h3>
            <p>Freelance - 2022 à Aujourd’hui</p>
          </div>
          <div className="timeline-item slide-in">
            <h3>Créateur de Contenu</h3>
            <p>Instagram & Réseaux sociaux - 2023 à Aujourd’hui</p>
          </div>
          <div className="timeline-item slide-in">
            <h3>Ingénieur Télécom</h3>
            <p>Ancienne activité - 2019 à 2022</p>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT INTERACTIF */}
      <section ref={contactRef} className="contact fade-in" id="contact">
        <h2>Me contacter</h2>
        <p>Envie de discuter d’un projet ou de collaborer ? Remplis le formulaire ci-dessous.</p>
        <form className="contact-form">
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="E-mail" required />
          <textarea placeholder="Votre message" required></textarea>
          <button type="submit" className="cta-button">Envoyer</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
