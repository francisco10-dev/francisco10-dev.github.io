// src/sections/experience/Experience.tsx
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useApp } from '../../context/AppContext';
import './Experience.css';

export default function Experience() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useApp();
  const items = t.experience.items;

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <p className="section-label">{t.experience.label}</p>
        <h2 className="section-heading">{t.experience.heading}</h2>
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`exp-list fade-up ${isVisible ? 'visible' : ''}`}>
          {items.map((exp, i) => (
            <div key={i} className="exp-item">
              <div className="exp-year mono">{exp.year}</div>
              <div className="exp-line">
                <div className="exp-dot" />
                {i < items.length - 1 && <div className="exp-track" />}
              </div>
              <div className="exp-body">
                <div className="exp-header">
                  <h3 className="exp-title">{exp.title}</h3>
                  <span className="exp-period mono">{exp.period}</span>
                </div>
                <div className="exp-company">{exp.company}</div>
                <p className="exp-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
