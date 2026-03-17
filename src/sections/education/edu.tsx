import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useApp } from '../../context/AppContext';
import '../experience/Experience.css';

export default function Edu() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useApp();
  const items = t.education.items;

  return (
    <section id="education" className="experience section">
      <div className="container">
        <p className="section-label">{t.education.label}</p>
        <h2 className="section-heading">{t.education.heading}</h2>
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
                  <h3 className="exp-title">{exp.degree}</h3>
                  <span className="exp-period mono">{}</span>
                </div>
                <div className="exp-company">{exp.institution}</div>
               {/*<p className="exp-desc">{exp.description}</p>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
