// src/context/AppContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Lang } from '../data/translations';

interface AppContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.en;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) ?? 'en';
  });

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') ?? 'dark';
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const t = translations[lang];

  return (
    <AppContext.Provider value={{ lang, setLang, t, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
