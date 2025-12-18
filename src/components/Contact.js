import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p>I'm currently looking for opportunities as a Java Developer. Feel free to reach out!</p>
        <div className="contact-links">
          <a href="mailto:vaibhavgosavi2003@gmail.com" className="contact-link">Email</a>
          <a href="https://www.linkedin.com/in/vaibhav-gosavi22/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href="https://github.com/vaibhavgosavi21" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
