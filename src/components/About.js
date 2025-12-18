import React, { useState, useEffect, useRef } from 'react';
import './About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <h2>About Me</h2>
      <div className={`about-content ${isVisible ? 'animate' : ''}`}>
        <div className="about-photo">
          <div className="photo-wrapper">
            <img src="/images/photo.jpg" alt="Profile" />
          </div>
        </div>
        <div className="about-details">
          <h3>Vaibhav Gosavi</h3>
          <p className="role">Java Developer</p>
          <p>Hi, I’m Vaibhav, a passionate Java Developer and Full Stack Developer skilled in C, Java, SQL, HTML, CSS, and JavaScript. I love building applications that solve real-world problems. Looking for opportunities to work as a Java/Full Stack Developer to contribute and grow.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
