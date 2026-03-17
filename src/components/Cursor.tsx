// src/components/Cursor.tsx
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => {
      cursor.classList.add('hovering');
      ring.classList.add('hovering');
    };
    const onLeave = () => {
      cursor.classList.remove('hovering');
      ring.classList.remove('hovering');
    };

    const interactives = document.querySelectorAll('a, button, [role="button"]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
