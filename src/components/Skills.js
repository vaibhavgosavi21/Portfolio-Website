import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const skills = [
  { name: 'Java', level: 85, color: '#f89820', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'MySQL', level: 70, color: '#4479a1', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'HTML & CSS', level: 80, color: '#e44d26', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'JavaScript', level: 75, color: '#f7df1e', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Git', level: 75, color: '#f05032', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Maven', level: 70, color: '#c71a36', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
  { name: 'React.js', level: 65, color: '#61dafb', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
];

const RADIUS = 36;
const CIRC = 2 * Math.PI * RADIUS;

function SkillCard({ skill, visible, delay }) {
  const dash = visible ? CIRC * (1 - skill.level / 100) : CIRC;

  return (
    <div className="skill-card" style={{ animationDelay: `${delay}s`, animationPlayState: visible ? 'running' : 'paused' }}>
      <div className="skill-ring-wrap">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
          <circle
            cx="50" cy="50" r={RADIUS} fill="none"
            stroke={skill.color} strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={dash}
            transform="rotate(-90 50 50)"
            style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
        </svg>
        <div className="skill-logo-center">
          <img src={skill.logo} alt={skill.name} />
        </div>
      </div>
      <p className="skill-name">{skill.name}</p>
      <p className="skill-pct" style={{ color: skill.color }}>{visible ? skill.level : 0}%</p>
    </div>
  );
}

function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ background: 'var(--bg)' }}>
      <div className="section-title">
        <h2>Skills</h2>
        <p>Technologies I work with</p>
      </div>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <SkillCard key={s.name} skill={s} visible={visible} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
