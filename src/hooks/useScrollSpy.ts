// src/hooks/useScrollSpy.ts
import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], offset = 100): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      let current = ids[0] ?? '';

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
}
