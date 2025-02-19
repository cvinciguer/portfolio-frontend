import React from "react";
import "./Home.css";
import avatar from "../../assets/images/avatar.png";
import { about } from "../../data/data";

export const AboutSection: React.FC = () => {
  return (
    <section className="about fade-in">
      <div className="about-content">
        <img src={avatar} alt="Clément" className="profile-pic" />
        <div className="about-text">
          <h2>À propos</h2>
          <p>{about}</p>
        </div>
      </div>
    </section>
  );
};