import React, { useEffect } from 'react';
import { FaBriefcase } from "react-icons/fa";
import './Experience.css';
import { experiences } from '../../data/data';

const Experience: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Remonte en haut au chargement
      }, []);
    return (
        <section className="experience-section">
            <h2 className="section-title">Expérience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                        <div className="experience-card">
                            <FaBriefcase className="experience-icon" />
                            <div className="experience-content">
                                <h3>{exp.date}</h3>
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