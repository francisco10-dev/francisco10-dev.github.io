// src/sections/about/About.tsx
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { personalInfo } from '../../data/portfolio';
import { useApp } from '../../context/AppContext';
import './About.css';

export default function About() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { t } = useApp();
  const a = t.about;

  return (
    <section id="about" className="about section">
      <div className="container">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`about-inner fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="about-text">
            <p className="section-label">{a.label}</p>
            <h2 className="about-heading">
              {a.heading}<br />
              <span className="outline">{a.headingAccent}</span>
            </h2>
            <p className="about-body">{a.body1}</p>
            <p className="about-body">{a.body2}</p>
            <div className="about-links">
              <a href={`mailto:${personalInfo.email}`} className="about-link">
                <span className="about-link-icon">→</span>{personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="about-link">
                <span className="about-link-icon">→</span>LinkedIn
              </a>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-card">
              <div className="about-card-label mono">{a.cards.location}</div>
              <div className="about-card-value">C R 🇨🇷</div>
            </div>
            <div className="about-card">
              <div className="about-card-label mono">{a.cards.focus}</div>
              <div className="about-card-value">{a.cards.focusVal}</div>
            </div>
            <div className="about-card accent-card">
              <div className="about-card-label mono">{a.cards.status}</div>
              <div className="about-card-value">{a.cards.statusVal}</div>
            </div>
            <div className="about-card">
              <div className="about-card-label mono">{a.cards.experience}</div>
              <div className="about-card-value">{a.cards.experienceVal}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
