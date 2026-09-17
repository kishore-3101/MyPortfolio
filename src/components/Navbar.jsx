import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const mainNavRef = useRef(null);

  // Scroll listener for sticky header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mainNavRef.current && !mainNavRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e, targetHash) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const targetId = targetHash.replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If on another page like /contact, navigate to / with hash
      e.preventDefault();
      navigate('/' + targetHash);
    }
  };

  return (
    <header id="site-header" className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav id="main-nav" className="main-nav" ref={mainNavRef}>
        <div className="nav-container">
          <Link
            to="/#home"
            className="nav-logo"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            Kishore<span className="nav-logo-accent">Kumar</span>
          </Link>

          <ul className={`nav-list ${isOpen ? 'is-open' : ''}`} id="nav-list">
            <li className="nav-item">
              <Link
                to="/#home"
                className="nav-link"
                onClick={(e) => handleNavClick(e, '#home')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#experience"
                className="nav-link"
                onClick={(e) => handleNavClick(e, '#experience')}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#projects"
                className="nav-link"
                onClick={(e) => handleNavClick(e, '#projects')}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#achievements"
                className="nav-link"
                onClick={(e) => handleNavClick(e, '#achievements')}
              >
                Achievements
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>

            {/* Mobile resume link */}
            <li className="nav-item nav-item--mobile-only">
              <a
                href="https://drive.google.com/file/d/1InbRZkr3hO6wxbChlHGscTBfSwzcrBN3/view?usp=sharing"
                className="nav-link nav-link--resume"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Resume &#8599;
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <a
              href="https://github.com/kishore-3101"
              className="nav-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img src="/assets/icons/github.png" alt="" className="nav-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/kishore-kumar-b9a32a290/"
              className="nav-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src="/assets/icons/linkedin.webp" alt="" className="nav-icon nav-icon--linkedin" />
            </a>
            <a
              href="https://drive.google.com/file/d/1InbRZkr3hO6wxbChlHGscTBfSwzcrBN3/view?usp=sharing"
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Resume <span className="nav-cta-arrow">&#8599;</span>
            </a>
          </div>

          <button
            type="button"
            className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
            id="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="nav-list"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="nav-toggle-dot"></span>
            <span className="nav-toggle-dot"></span>
            <span className="nav-toggle-dot"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
