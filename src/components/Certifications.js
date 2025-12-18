import React, { useState, useEffect, useRef } from 'react';
import './Certifications.css';

function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const certifications = [
    {
      title: 'Java Programming',
      issuer: 'Infosys Springboard',
      date: '2024',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      link: '/images/Java Certificate.pdf'
    },
    {
      title: 'SQL Database',
      issuer: 'HackerRank',
      date: '2024',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      link: '/images/SQL.pdf'
    },
    {
      title: 'Web Designing',
      issuer: 'Softcrowd Technologies',
      date: '2024',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      link: '/images/WebDesigning.jpg'
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
    <section id="certifications" className="certifications" ref={sectionRef}>
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className={`cert-card ${isVisible ? 'animate' : ''}`} style={{ animationDelay: `${index * 0.15}s` }}>
            <img src={cert.logo} alt={cert.title} className="cert-logo" />
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">{cert.date}</p>
            <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">View Certificate →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
