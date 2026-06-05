import React, { useState, useEffect } from 'react';
import './Hero.css';

const roles = ['Full Stack Java Developer', 'Backend Engineer', 'Problem Solver'];

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 90);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className="hero">
      <div className="hero-orb orb1" />
      <div className="hero-orb orb2" />
      <div className="hero-orb orb3" />

      <div className="hero-content">
        <div className="hero-badge">👋 Available for opportunities</div>
        <h1 className="hero-name">
          Hi, I'm <span className="gradient-text">Vaibhav Gosavi</span>
        </h1>
        <div className="hero-role">
          <span className="role-text">{displayed}</span>
          <span className="cursor-blink">|</span>
        </div>
        <p className="hero-desc">
          Passionate about building scalable Java applications and modern web experiences.
          Turning complex problems into elegant solutions.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            <span>Get In Touch</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="/images/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Resume</span>
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat"><span className="stat-num">3+</span><span className="stat-label">Projects</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">3</span><span className="stat-label">Certifications</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">6+</span><span className="stat-label">Technologies</span></div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-indicator" />
      </div>
    </section>
  );
}

export default Hero;
