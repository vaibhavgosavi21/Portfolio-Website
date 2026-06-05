import React, { useState, useEffect, useRef } from 'react';
import './About.css';

function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const highlights = [
    { icon: '💡', label: 'Problem Solving', sub: 'Algorithms & OOP' },
    { icon: '☕', label: 'Java Expert', sub: 'Core & Advanced' },
    { icon: '🌐', label: 'Web Dev', sub: 'Full Stack' },
  ];

  return (
    <section id="about" ref={ref} style={{ background: 'var(--bg2)' }}>
      <div className="section-title">
        <h2>About Me</h2>
        <p>Get to know me a little better</p>
      </div>
      <div className={`about-grid ${visible ? 'visible' : ''}`}>
        <div className="about-photo-col">
          <div className="photo-ring">
            <img src="/images/photo.jpeg" alt="Vaibhav Gosavi" />
          </div>
          <div className="about-highlights">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-chip">
                <span className="chip-icon">{h.icon}</span>
                <div>
                  <p className="chip-label">{h.label}</p>
                  <p className="chip-sub">{h.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-text-col">
          <p className="about-greeting">Hello there 👋</p>
          <h3 className="about-name">Vaibhav Gosavi</h3>
          <p className="about-role-badge">Full Stack Java Developer</p>
          <p className="about-bio">
            I'm a passionate Java Developer skilled in building robust backend systems and modern web applications.
            I love turning complex problems into clean, efficient solutions. Currently seeking opportunities to
            contribute, learn, and grow as a Java / Full Stack Developer.
          </p>
          <div className="about-info">
            {[
              { label: 'Languages', value: 'Java, C, JavaScript, SQL' },
              { label: 'Focus', value: 'Backend & Full Stack Development' },
              { label: 'Status', value: 'Open to Opportunities ✅' },
              { label: 'Email', value: 'vaibhavgosavi2003@gmail.com' },
            ].map(({ label, value }) => (
              <div key={label} className="info-row">
                <span className="info-label">{label}</span>
                <span className="info-value">{value}</span>
              </div>
            ))}
          </div>
          <div className="about-actions">
            <a href="#contact" className="btn-primary">Let's Connect</a>
            <a href="/images/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">View Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
