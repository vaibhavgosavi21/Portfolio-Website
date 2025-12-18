import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Java Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="fade-in">Hi, I'm <span>Vaibhav Gosavi</span></h1>
        <h2 className="typing">{text}<span className="cursor">|</span></h2>
        <p className="fade-in-delay">Passionate about building scalable applications and solving real-world problems with Java and modern web technologies.</p>
        <a href="#contact" className="cta-button fade-in-delay-2">Get In Touch</a>
      </div>
    </section>
  );
}

export default Hero;
