import { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useApp } from '../context/AppContext';
import './Navbar.css';

const NAV_IDS = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];

export default function Navbar() {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false);
  const activeId = useScrollSpy(NAV_IDS);

  const NAV_ITEMS = [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    //{ id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setPhotoOpen(false); };
  window.addEventListener('keydown', onKey);
  return () => window.removeEventListener('keydown', onKey);
}, []);

  return (
  <>
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <button className="logo" onClick={() => setPhotoOpen(true)}>
          <img src="/assets/profile-photo.jpeg" alt="Francisco Ortiz" className="logo-avatar" />
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeId === item.id ? 'active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}

          <div className="nav-controls">
            <button
              className="lang-btn mono"
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                </svg>
              )}
            </button>
          </div>

          <a href="mailto:franxiscortiz@gmail.com" className="nav-cta">
            {t.nav.hire}
          </a>
        </nav>

        <div className="mobile-controls">
          <button className="lang-btn mono" onClick={() => setLang(lang === 'en' ? 'es' : 'en')}>
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
    {photoOpen && (
        <div className="photo-overlay" onClick={() => setPhotoOpen(false)}>
          <div className="photo-modal" onClick={(e) => e.stopPropagation()}>
            <img src="/assets/profile-photo.jpeg" alt="Francisco Ortiz" />
            <button className="photo-close" onClick={() => setPhotoOpen(false)}>✕</button>
          </div>
        </div>
      )}
  </>
  );
}
