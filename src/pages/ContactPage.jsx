import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactPage() {
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ text: '', type: '' });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'whatsapp' || name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ text: '', type: '' });
    setSubmitting(true);

    try {
      const response = await fetch('https://kishores-portfolio-api.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message.');
      }

      setStatus({
        text: 'Message sent successfully! You will receive a confirmation email shortly.',
        type: 'success'
      });
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({
        text: 'Something went wrong. Please try again or contact me directly.',
        type: 'error'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <section id="contact-form" className="section form-page-section">
        <div className="section-header" data-reveal>
          <h3 className="contact-heading">Let's build something great together</h3>
          <p className="contact-text">
            Have a project in mind, an opportunity to discuss, or just want to talk tech?
            I'm always open to interesting conversations — reach out through whichever
            works best for you.
          </p>
        </div>

        <p className="intro-paragraph form-intro" data-reveal>
          Fill out the form below and I'll get back to you as soon as I can, or reach out directly
          using whichever works best for you.
        </p>

        <div className="form-page-grid">
          <form className="form-card" id="contact-form-el" data-reveal="left" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="cf-name">Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="cf-name"
                  name="name"
                  placeholder="Your full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="cf-email">Email</label>
                <input
                  className="form-input"
                  type="email"
                  id="cf-email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="cf-whatsapp">WhatsApp</label>
                <input
                  className="form-input"
                  type="tel"
                  id="cf-whatsapp"
                  name="whatsapp"
                  placeholder="WhatsApp Number (+91)"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="cf-contact">Phone</label>
                <input
                  className="form-input"
                  type="tel"
                  id="cf-contact"
                  name="phone"
                  placeholder="Phone Number (+91)"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="cf-subject">Subject</label>
              <input
                className="form-input"
                type="text"
                id="cf-subject"
                name="subject"
                placeholder="What's this about?"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="cf-message">Message</label>
              <textarea
                className="form-textarea"
                id="cf-message"
                name="message"
                placeholder="Tell me a bit about your project or idea..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="form-submit" id="cf-submit" disabled={submitting}>
              {submitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message <span className="nav-cta-arrow">&#8599;</span>
                </>
              )}
            </button>

            <p
              className={`form-status ${status.type === 'success' ? 'is-success' : status.type === 'error' ? 'is-error' : ''}`}
              id="cf-status"
              role="status"
              aria-live="polite"
            >
              {status.text}
            </p>
          </form>

          <aside className="form-side-card" data-reveal="right">
            <div className="form-side-header">
              <span className="form-side-dot" aria-hidden="true"></span>
              <h3 className="form-side-title">Open to freelance work &amp; internships</h3>
            </div>

            <p className="form-side-text">
              Prefer a quicker route? Ping me directly on any of these.
            </p>

            <div className="form-side-buttons">
              <a href="mailto:kishorekumarp.311@gmail.com" className="contact-btn contact-btn--email">
                <img src="/assets/icons/email.svg" alt="" className="contact-btn-icon" />
                <span>kishorekumarp.311@gmail.com</span>
              </a>

              <a
                href="https://wa.me/917200405785?text=Hi%20Kishore%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
                className="contact-btn contact-btn--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/icons/whatsapp.svg" alt="" className="contact-btn-icon" />
                <span>WhatsApp Me</span>
              </a>

              <a href="tel:+917200405785" className="contact-btn contact-btn--phone">
                <img src="/assets/icons/phone.svg" alt="" className="contact-btn-icon" />
                <span>+91 72004 05785</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kishore-kumar-b9a32a290/"
                className="contact-btn contact-btn--linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/icons/linkedin.webp" alt="" className="contact-btn-icon contact-btn-icon--linkedin" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            <div className="form-side-footer">
              <span className="featured-info-label">Based in</span>
              <span className="featured-info-value">Chennai, Tamil Nadu, India</span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
