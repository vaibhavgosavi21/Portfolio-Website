import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const projects = [
    {
      title: '🏧 ATM System',
      description: 'A Java-based ATM simulation with deposit, withdraw, and balance check features..',
      tech: ['Java', 'MySQL',]
    },
    {
      title: '📚 Library Management System',
      description: 'Developed a library management system with book inventory, member management, and borrowing functionality using Java and JDBC.',
      tech: ['Java', 'MYSQL']
    },
    {
      title: '🚗 Vehicle Rental System',
      description: 'A comprehensive Core Java project that simulates a vehicle rental system with advanced booking and return features.',
      tech: ['Java', 'MYSQL']
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
          <div key={index} className={`project-card ${isVisible ? 'animate' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
