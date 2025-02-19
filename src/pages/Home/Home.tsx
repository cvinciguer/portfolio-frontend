import React, { useRef } from "react";
import "./Home.css";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";

export const Home: React.FC = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  
  return (
    <div className="home-container">
      {/* HEADER AVEC EFFET PARALLAXE */}
      <HeroSection contactRef={contactRef} />

      {/* SECTION À PROPOS */}
      <AboutSection />

      {/* SECTION COMPÉTENCES AVEC ICÔNES */}
      <SkillsSection />

      {/* SECTION EXPÉRIENCE */}
      <ExperienceSection />

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
