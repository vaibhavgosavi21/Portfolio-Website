import React from 'react';
import './Contact.css';

const contactLinks = [
  {
    label: 'Email',
    value: 'vaibhavgosavi2003@gmail.com',
    href: 'mailto:vaibhavgosavi2003@gmail.com',
    color: '#ea4335',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'vaibhav-gosavi22',
    href: 'https://www.linkedin.com/in/vaibhav-gosavi22/',
    color: '#0a66c2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'vaibhavgosavi21',
    href: 'https://github.com/vaibhavgosavi21',
    color: '#e8e8f0',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.8 1.3 3.48.99.1-.77.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg2)' }}>
      <div className="section-title">
        <h2>Get In Touch</h2>
        <p>Let's build something great together</p>
      </div>
      <div className="contact-wrapper">
        <div className="contact-card">
          <div className="contact-glow" />
          <p className="contact-tagline">
            I'm currently looking for opportunities as a Software Developer.<br />
            Whether you have a role, a project, or just want to say hi — my inbox is open!
          </p>
          <a href="mailto:vaibhavgosavi2003@gmail.com" className="contact-cta-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
            Send Me an Email
          </a>
          <div className="contact-divider"><span>or connect via</span></div>
          <div className="contact-links">
            {contactLinks.map(({ label, value, href, color, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-link-card" style={{ '--link-color': color }}>
                <span className="link-icon" style={{ color }}>{icon}</span>
                <div>
                  <p className="link-label">{label}</p>
                  <p className="link-value">{value}</p>
                </div>
                <svg className="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l10-10M7 7h10v10"/></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer className="site-footer">
        <p>Designed & Built by <span className="footer-name">Vaibhav Gosavi</span> · {new Date().getFullYear()}</p>
      </footer>
    </section>
  );
}

export default Contact;
