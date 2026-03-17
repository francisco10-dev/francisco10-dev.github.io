// src/sections/hero/Hero.tsx
import { useEffect, useRef } from 'react';
import { personalInfo } from '../../data/portfolio';
import { useApp } from '../../context/AppContext';
import './Hero.css';

export default function Hero() {
  const { t } = useApp();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dots: { x: number; y: number; vx: number; vy: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.05,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 200, 0, ${d.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(180, 200, 0, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content container">
        <div className="hero-tag fade-up visible" style={{ '--delay': '0.1s' } as React.CSSProperties}>
          <span className="hero-status" />
          {t.hero.available}
        </div>
        <h1 className="hero-name fade-up visible" style={{ '--delay': '0.25s' } as React.CSSProperties}>
          {personalInfo.name.split(' ').map((word, i) => (
            <span key={i} className={i === 1 ? 'accent' : ''}>{word}{i === 0 && <br />}</span>
          ))}
        </h1>
        <p className="hero-role fade-up visible" style={{ '--delay': '0.4s' } as React.CSSProperties}>
          <span className="mono">&lt;</span>{t.hero.role}<span className="mono"> /&gt;</span>
        </p>
        <p className="hero-desc fade-up visible" style={{ '--delay': '0.55s' } as React.CSSProperties}>
          {t.hero.description}
        </p>
        <div className="hero-actions fade-up visible" style={{ '--delay': '0.7s' } as React.CSSProperties}>
          <button className="btn-primary" onClick={scrollToContact}>{t.hero.cta}</button>
         {/*} <button className="btn-ghost" onClick={scrollToProjects}>{t.hero.work}</button>*/}
        </div>
        <div className="hero-scroll fade-up visible" style={{ '--delay': '1s' } as React.CSSProperties}>
          <div className="scroll-line" />
          <span className="mono">welcome</span>
        </div>
      </div>
      <div className="hero-number">01</div>
    </section>
  );
}
