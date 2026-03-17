// src/sections/contact/Contact.tsx
import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { personalInfo } from '../../data/portfolio';
import { useApp } from '../../context/AppContext';
import './Contact.css';

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 });
  const { t } = useApp();
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`contact-inner fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="contact-left">
            <p className="section-label">{c.label}</p>
            <h2 className="contact-heading">
              {c.heading}<br />
              <span className="accent-text">{c.headingAccent}</span>
            </h2>
            <p className="contact-sub">{c.sub}</p>
          </div>
          <div className="contact-right">
            <div className="contact-card">
              <div className="contact-item">
                <span className="contact-label mono">{c.emailLabel}</span>
                <div className="contact-value-row">
                  <a href={`mailto:${personalInfo.email}`} className="contact-val">{personalInfo.email}</a>
                  <button className="copy-btn mono" onClick={copyEmail}>
                    {copied ? c.copied : c.copy}
                  </button>
                </div>
              </div>
              <div className="contact-divider" />
              <div className="contact-item">
                <span className="contact-label mono">{c.phoneLabel}</span>
                <a href={`tel:${personalInfo.phone}`} className="contact-val">{personalInfo.phone}</a>
              </div>
              <div className="contact-divider" />
              <div className="contact-item">
                <span className="contact-label mono">{c.locationLabel}</span>
                <span className="contact-val">{personalInfo.location}</span>
              </div>
              <div className="contact-actions">
                <a href={`mailto:${personalInfo.email}`} className="btn-primary">{c.send}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
