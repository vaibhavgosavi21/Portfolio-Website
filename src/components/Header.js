import React, { useState, useEffect } from 'react';
import './Header.css';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certification' },
  { href: '#contact', label: 'Contact' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => document.querySelector(l.href)).filter(Boolean);
      const current = sections.find(s => s.getBoundingClientRect().top >= -100 && s.getBoundingClientRect().top < 300);
      if (current) setActive(`#${current.id}`);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-inner">

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href ? 'nav-active' : ''}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span className={open ? 'bar open' : 'bar'} />
          <span className={open ? 'bar open' : 'bar'} />
          <span className={open ? 'bar open' : 'bar'} />
        </button>
      </nav>
    </header>
  );
}

export default Header;
