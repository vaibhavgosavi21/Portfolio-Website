import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  
  const projects = [
    {
      title: '🏧 ATM System',
      description: 'A Java-based ATM simulation system with complete banking operations including secure transactions.',
      tech: ['Java', 'OOP','JDBC'],
      details: 'Key Features:\n• Account balance check\n• Cash withdrawal\n• Cash deposit\n• Transaction history\n• PIN verification\n\nTech Stack: Core Java, OOP Principles',
      github: 'https://github.com/vaibhavgosavi21/ATM-System'
    },
    {
      title: '📚 Library Management System',
      description: 'A complete library management application to efficiently manage books, users, and library transactions.',
      tech: ['Java','OOP','JDBC'],
      details: 'Key Features:\n• Book inventory management\n• User registration\n• Book borrowing system\n• Return tracking\n• Fine calculation\n\nTech Stack: Core Java',
      github: 'https://github.com/vaibhavgosavi21/Library-Management-System'
    },
    {
      title: '🚗 Vehicle Rental System',
      description: 'A comprehensive Core Java project that simulates a vehicle rental system with advanced booking and return features.',
      tech: ['Java', 'OOP','JDBC'],
      details: 'Key Features:\n• Vehicle booking system\n• Return management\n• User authentication\n• Rental history tracking\n\nTech Stack: Core Java, OOP Principles',
      github: 'https://github.com/vaibhavgosavi21/Vehicle-Rental-System'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${isVisible ? 'animate' : ''}`} style={{ animationDelay: `${index * 0.2}s` }} onClick={() => setSelectedProject(project)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <button className="view-details">View Details →</button>
          </div>
        ))}
      </div>
      
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
            <h3>{selectedProject.title}</h3>
            <p className="modal-description">{selectedProject.details}</p>
            <div className="tech-stack">
              {selectedProject.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="modal-actions">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="github-btn">View on GitHub</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
