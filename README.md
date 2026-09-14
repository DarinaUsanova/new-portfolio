# Portfolio

A clean starter for a personal product design portfolio built with React, TypeScript, and Vite.

## Stack

- React + TypeScript + Vite
- React Router
- Tailwind CSS
- Motion
- Lucide React
- clsx + tailwind-merge

No UI kit is installed, so the visual language can grow around the portfolio instead of a component-library preset.

## Getting started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Routes

- `/` — portfolio home
- `/sandbox` — isolated space for visual and interaction experiments

## Source structure

```text
src/
├── assets/       Static images, fonts, and media
├── components/   Reusable interface components
├── data/         Portfolio content and configuration
├── lib/          Utilities such as cn()
├── pages/        Route-level components
├── sections/     Page sections and case-study blocks
└── styles/       Global styles and design tokens
```
