import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  const location = useLocation();
  useScrollReveal();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]);

  return (
    <main>
      {/* INTRO / ABOUT SECTION */}
      <section id="home" className="section intro-section">
        <div className="intro-container">
          <div className="intro-image-wrapper" data-reveal="left">
            <img
              src="/assets/profile.webp"
              alt="Kishore Kumar P profile photo"
              className="intro-image"
            />
          </div>

          <div className="intro-text" data-reveal="right">
            <span className="intro-badge">
              FULL STACK DEVELOPER &amp; CYBERSECURITY ENTHUSIASIST
            </span>

            <h1 className="intro-heading">Kishore Kumar</h1>

            <p className="intro-paragraph">
              I'm a B.E. CSE (Cybersecurity) student at Chennai Institute of Technology and a freelance web developer
              focused on building secure, scalable, and real-world applications.
            </p>

            <p className="intro-paragraph">
              I work across web development, backend engineering, cybersecurity, and AI/ML, with a passion for
              Linux and intelligent systems
            </p>

            <p className="intro-paragraph">
              As a freelancer, I design and build interactive websites and web applications end-to-end —
              from wireframes and UI design to backend architecture, database design, and deployment.
            </p>

            <p className="intro-paragraph">
              Currently open to freelance projects and internship opportunities — if you have an idea,
              a broken system, or a product that needs building, I'm happy to talk through it.
            </p>

            <div className="intro-cta-row">
              <a href="#projects" className="intro-cta">
                View My Work <span className="nav-cta-arrow">&#8599;</span>
              </a>
              <Link to="/contact" className="intro-cta intro-cta--outline">
                Contact Me <span className="nav-cta-arrow">&#8599;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE SECTION */}
      <section id="experience" className="section experience-section">
        <div className="section-header" data-reveal>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <div className="experience-list" data-reveal-group>
          <div className="experience-item">
            <h3 className="experience-role">
              Stephen Consulting And Ventures Pvt Ltd. &mdash; Full Stack Developer Intern
            </h3>
            <ul className="experience-description">
              <li>Built an AI-powered PII Redaction System for Australian accounting documents using FastAPI, Ollama &amp; PostgreSQL.</li>
              <li>Designed a privacy-preserving document reconstruction pipeline, using hashed PII mappings to securely restore original content across multiple document formats.</li>
              <li>Integrated local LLM inference via Ollama to process sensitive documents entirely on-premise, avoiding third-party data exposure and meeting client compliance requirements.</li>
              <li>Optimized document processing pipeline to handle batch uploads efficiently, reducing average processing time per document.</li>
              <li>Collaborated with the team to design a PostgreSQL schema for tracking redaction mappings, audit logs, and document versioning.</li>
              <li>Created wireframes for a business portfolio site, turning stakeholder requirements into clean, intuitive UI designs.</li>
              <li>Worked directly with stakeholders to gather requirements and iterate on features based on feedback across multiple review cycles.</li>
            </ul>

            <div className="experience-tags">
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">Ollama</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">Python</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section projects-section">
        <div className="section-header" data-reveal>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-list" data-reveal-group>
          <div className="project-card project-card--featured" id="project-digital-twin">
            <div className="featured-project-main">
              <span className="featured-badge">&#9733; FEATURED PROJECT</span>

              <h3 className="featured-project-title">SubAERO</h3>
              <p className="featured-project-subtitle">AI-Powered Turbojet Engine Health Monitoring System</p>

              <p className="featured-project-description">
                A machine learning-driven digital twin that predicts turbojet engine health in real time
                by analyzing raw sensor readings — enabling predictive maintenance and early fault detection.
              </p>

              <div className="featured-project-actions">
                <a
                  href="https://null-pointers-aerothon-2026.vercel.app/"
                  className="featured-btn featured-btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit <span className="nav-cta-arrow">&#8599;</span>
                </a>
                <a
                  href="https://github.com/Nithish-Bharathwaj-N/SubAERO"
                  className="featured-btn featured-btn--outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>

            <div className="featured-project-media">
              <img
                src="/assets/projects/subaero.jpg"
                alt="Digital Twin dashboard screenshot"
                className="featured-project-img"
              />
            </div>
            <div className="featured-tech-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">Pandas</span>
            </div>

            <div className="featured-project-info">
              <div className="featured-info-item">
                <span className="featured-info-label">Domain</span>
                <span className="featured-info-value">Aerospace • AI • Simulation</span>
              </div>
              <div className="featured-info-item">
                <span className="featured-info-label">Role</span>
                <span className="featured-info-value">Machine Learning</span>
              </div>
              <div className="featured-info-item">
                <span className="featured-info-label">Duration</span>
                <span className="featured-info-value">Jul 2026 – Present</span>
              </div>
              <div className="featured-info-item">
                <span className="featured-info-label">Impact</span>
                <span className="featured-info-value">Enables predictive maintenance and reduces unplanned engine downtime.</span>
              </div>
            </div>
          </div>

          <div className="project-card" id="project-lab-inventory">
            <h3 className="project-title">Lab Inventory Management System</h3>
            <p className="project-description">
              QR based asset Management system for laboratory for tracking and managing lab assets
            </p>

            <div className="project-tech-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">MySQL</span>
            </div>

            <div className="featured-project-actions">
              <a
                href="https://github.com/kishore-3101/asset_chain"
                className="featured-btn featured-btn--outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="project-card" id="project-expense-tracker">
            <h3 className="project-title">Expense Tracker Application</h3>
            <p className="project-description">
              A full-stack expense tracking application that helps users log, categorize, and visualize their daily spending
            </p>

            <div className="project-tech-tags">
              <span className="skill-tag">SpringBoot</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">MongoDB</span>
            </div>

            <div className="featured-project-actions">
              <a
                href="https://kishore-3101.github.io/expense-tracker-frontend/auth.html"
                className="featured-btn featured-btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit <span className="nav-cta-arrow">&#8599;</span>
              </a>
              <a
                href="https://github.com/kishore-3101/expense-tracker"
                className="featured-btn featured-btn--outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section skills-section">
        <div className="section-header" data-reveal>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-list" data-reveal-group>
          <div className="skill-group">
            <h3 className="skill-group-title">Languages &amp; Frontend</h3>
            <div className="skill-tags">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">CSS</span>
            </div>
          </div>

          <div className="skill-group">
            <h3 className="skill-group-title">Backend &amp; Dataservices</h3>
            <div className="skill-tags">
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>

          <div className="skill-group">
            <h3 className="skill-group-title">Development Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">n8n</span>
              <span className="skill-tag">Postman</span>
            </div>
          </div>

          <div className="skill-group">
            <h3 className="skill-group-title">Domains</h3>
            <div className="skill-tags">
              <span className="skill-tag">Cybersecurity</span>
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section id="achievements" className="section achievements-section">
        <div className="section-header" data-reveal>
          <h2 className="section-title">Achievements</h2>
        </div>
        <div className="achievements-list" data-reveal-group>
          <div className="achievement-card" id="achievement-smarthorizon">
            <div className="achievement-img">
              <img src="/assets/achivements/smarthorizon.jpeg" alt="Smart Horizon" />
            </div>
            <h3 className="achievement-title">Smart Horizon 2026 &ndash; 48 Hour International Hackathon</h3>
            <p className="achievement-description">
              Selected as one of 35 Finalist teams at the Smart Horizon International 48-Hour Hackathon, competing in the FinTech domain, advancing through two rounds of selection process.
            </p>
          </div>

          <div className="achievement-card" id="achievement-aerothon">
            <div className="achievement-img">
              <img src="/assets/achivements/aerothon.jpeg" alt="Aerothon'26 hackathon" />
            </div>
            <h3 className="achievement-title">Aerothon'26 &ndash; 24 Hour National Level Hackathon</h3>
            <p className="achievement-description">
              Top 25 Finalist among 2300+ participants from all over India, organised by Hindustan Aeronautics Limited, building an ML-powered Digital Twin and Live Health Monitoring System for a Turbojet Engine.
            </p>
          </div>

          <div className="achievement-card" id="achievement-codeathon">
            <div className="achievement-img">
              <img src="/assets/achivements/codeathon.jpeg" alt="H@CIT-26 Codeathon" />
            </div>
            <h3 className="achievement-title">&lt;H@CIT-26&gt; CODEATHON &ndash; 3rd Runner-up</h3>
            <p className="achievement-description">
              Secured 3rd Runner-up among 2,500+ participants advancing through three DSA rounds.
            </p>
          </div>

          <div className="achievement-card" id="achievement-unbound-creativity">
            <div className="achievement-img">
              <img src="/assets/achivements/hackbriven.jpeg" alt="Unbound Creativity Hackathon" />
            </div>
            <h3 className="achievement-title">Unbound Creativity</h3>
            <p className="achievement-description">
              Finalist at Unbound Creativity Hackathon, organised by HackBriven.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">
        <div className="section-header" data-reveal>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-content" data-reveal="scale">
          <span className="contact-badge">GET IN TOUCH</span>

          <h3 className="contact-heading">Let's build something great together</h3>

          <p className="contact-text">
            Have a project in mind, an opportunity to discuss, or just want to talk tech?
            I'm always open to interesting conversations — reach out through whichever
            works best for you.
          </p>

          <div className="contact-buttons">
            <a href="mailto:kishorekumarp.311@gmail.com" className="contact-btn contact-btn--email">
              <img src="/assets/icons/email.svg" alt="" className="contact-btn-icon" />
              kishorekumarp.311@gmail.com
            </a>

            <a
              href="https://wa.me/917200405785?text=Hi%20Kishore%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
              className="contact-btn contact-btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons/whatsapp.svg" alt="" className="contact-btn-icon" />
              WhatsApp Me
            </a>

            <a href="tel:+917200405785" className="contact-btn contact-btn--phone">
              <img src="/assets/icons/phone.svg" alt="" className="contact-btn-icon" />
              +91 72004 05785
            </a>

            <Link to="/contact" className="contact-btn contact-btn--form">
              <img src="/assets/icons/send.svg" alt="" className="contact-btn-icon" />
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
