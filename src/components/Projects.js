import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  
  {
    emoji: '🌍',
    title: 'Tourism Management System',
    description: 'A Spring Boot-based travel management platform that allows users to explore tour packages, make bookings, and manage travel information through a secure and efficient web application.',
    tech: ['Java','Spring Boot','OOP','MYSQL', 'REST API', 'Maven', 'React.js'],
    features: ['User Registration & Authentication',
      'Tour Package Management', 
      'Online Booking System',
      'Customer Profile Management',
      'Package Search & Filtering',
      'Booking History Tracking',
      'RESTful API Integration',
      'Secure Database Management'],
    github: 'https://github.com/vaibhavgosavi21/Tourism-Management',
    color: '#a78bfa',
  },
  {
    emoji: '🏧',
    title: 'ATM System',
    description: 'A Spring Boot-based banking application that simulates ATM operations, allowing users to securely manage their accounts, perform transactions, and track transaction history through a user-friendly interface.',
    tech: ['Java', 'Spring Boot', 'OOP', 'MYSQL','REST API', 'Maven','React.js'],
    features: ['Account balance check', 'Cash withdrawal & deposit', 'Transaction history', 'PIN verification'],
    github: 'https://github.com/vaibhavgosavi21/ATM-System',
    color: '#6c63ff',
  },
  {
    emoji: '📚',
    title: 'Library Management',
    description: 'Complete library management application to efficiently manage books, users, borrowing, and fine calculations.',
    tech: ['Java', 'OOP', 'JDBC', 'MYSQL'],
    features: ['Book inventory management', 'User registration', 'Borrow/return tracking', 'Fine calculation'],
    github: 'https://github.com/vaibhavgosavi21/Library-Management-System',
    color: '#a78bfa',
  },
  {
    emoji: '🚗',
    title: 'Vehicle Rental System',
    description: 'Comprehensive vehicle rental system with advanced booking, return management, and rental history tracking.',
    tech: ['Java', 'OOP', 'JDBC'],
    features: ['Vehicle booking system', 'Return management', 'User authentication', 'Rental history'],
    github: 'https://github.com/vaibhavgosavi21/Vehicle-Rental-System',
    color: '#38bdf8',
  },
  {
    emoji: '🛒',
    title: 'FreshCart',
    description: 'Comprehensive vehicle rental system with advanced booking, return management, and rental history tracking.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'REST API'],
    features: [' User Authentication', ' Product Search', 'Shopping Cart', 'Wishlist Management','Order Tracking','Responsive Design'],
    github: 'https://github.com/vaibhavgosavi21/FreshCart',
    color: '#38bdf8',
  },
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()} style={{ '--proj-color': project.color }}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <span className="modal-emoji">{project.emoji}</span>
          <div>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-desc">{project.description}</p>
          </div>
        </div>
        <div className="modal-features">
          <p className="features-label">Key Features</p>
          <ul>
            {project.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
        <div className="modal-tech">
          {project.tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-github-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.8 1.3 3.48.99.1-.77.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} style={{ background: 'var(--bg2)' }}>
      <div className="section-title">
        <h2>Projects</h2>
        <p>Things I've built</p>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`project-card ${visible ? 'visible' : ''}`}
            style={{ '--proj-color': p.color, animationDelay: `${i * 0.15}s` }}
            onClick={() => setSelected(p)}
          >
            <div className="project-card-top">
              <span className="project-emoji">{p.emoji}</span>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="icon-link" title="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.8 1.3 3.48.99.1-.77.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
              </div>
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="project-tech">
              {p.tech.map((t, j) => <span key={j} className="tech-tag">{t}</span>)}
            </div>
            <button className="project-details-btn">View Details →</button>
          </div>
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

export default Projects;
