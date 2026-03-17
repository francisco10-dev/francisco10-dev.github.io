# Francisco Ortiz — Portfolio

A modern, minimalist portfolio built with **React + TypeScript + Vite**.

## Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Shared UI components (Navbar, Footer, Cursor)
├── data/            # Portfolio content (portfolio.ts)
├── hooks/           # Custom React hooks
│   ├── useScrollSpy.ts
│   └── useIntersectionObserver.ts
├── pages/           # Page-level components (if needed)
├── sections/        # Page sections
│   ├── about/
│   ├── contact/
│   ├── education/
│   ├── experience/
│   ├── hero/
│   ├── projects/
│   └── skills/
├── styles/          # Global styles
└── utils/           # Utility functions
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Customization

All portfolio content lives in `src/data/portfolio.ts` — edit that file to update your personal info, experience, projects, skills, and education.

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS Modules (no external UI libraries)
- Google Fonts (Syne + DM Mono)
