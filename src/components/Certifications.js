import React, { useState, useEffect, useRef } from 'react';
import './Certifications.css';

const certifications = [
  {
    title: 'Java Programming',
    issuer: 'Infosys Springboard',
    date: '2024',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    link: '/images/Java Certificate.pdf',
    color: '#f89820',
    badge: 'Programming',
  },
  {
    title: 'SQL Database',
    issuer: 'HackerRank',
    date: '2024',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    link: '/images/SQL.pdf',
    color: '#4479a1',
    badge: 'Database',
  },
  {
    title: 'Web Designing',
    issuer: 'Softcrowd Technologies',
    date: '2024',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    link: '/images/WebDesigning.jpg',
    color: '#e44d26',
    badge: 'Web Dev',
  },
];

function Certifications() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="certifications" ref={ref} style={{ background: 'var(--bg)' }}>
      <div className="section-title">
        <h2>Certifications</h2>
        <p>Credentials & achievements</p>
      </div>
      <div className="cert-grid">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className={`cert-card ${visible ? 'visible' : ''}`}
            style={{ '--cert-color': cert.color, animationDelay: `${i * 0.15}s` }}
          >
            <div className="cert-top">
              <div className="cert-logo-wrap" style={{ background: `${cert.color}18`, borderColor: `${cert.color}40` }}>
                <img src={cert.logo} alt={cert.title} />
              </div>
              <span className="cert-badge">{cert.badge}</span>
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <div className="cert-footer">
              <span className="cert-date">📅 {cert.date}</span>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-view-btn">
                View →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
