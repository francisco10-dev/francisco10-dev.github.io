// src/sections/skills/Skills.tsx
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { skills } from '../../data/portfolio';
import { useApp } from '../../context/AppContext';
import './Skills.css';

const categories = ['frontend', 'backend', 'tools'] as const;

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 });
  const { t } = useApp();

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <p className="section-label">{t.skills.label}</p>
        <h2 className="section-heading">{t.skills.heading}</h2>
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`skills-content fade-up ${isVisible ? 'visible' : ''}`}>
          {categories.map((cat) => (
            <div key={cat} className="skills-group">
              <h3 className="skills-cat mono">{cat}</h3>
              <div className="skills-tags">
                {skills.filter((s) => s.category === cat).map((skill) => (
                  <span key={skill.name} className="skill-pill">{skill.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
