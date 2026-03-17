// src/sections/education/Education.tsx
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useApp } from '../../context/AppContext';
import './Education.css';

export default function Education() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useApp();

  return (
    <section id="education" className="education section">
      <div className="container">
        <p className="section-label">{t.education.label}</p>
        <h2 className="section-heading">{t.education.heading}</h2>
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`edu-grid fade-up ${isVisible ? 'visible' : ''}`}>
          {t.education.items.map((edu, i) => (
            <div key={i} className="edu-card">
              <div className="edu-year mono">{edu.year}</div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-inst">{edu.institution}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
