# Treyce Meredith — Portfolio

A responsive portfolio website built from a Figma design, using Vite + React + TypeScript + Tailwind CSS v4. Typography is set in [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Inter from Google Fonts (loaded via `<link>` in `index.html`)

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start dev server on http://localhost:5173
npm run build    # production build
npm run preview  # preview production build
```

## Structure

```
src/
  App.tsx                    # Page composition
  index.css                  # Tailwind + theme tokens
  main.tsx                   # React entry
  components/
    Hero.tsx                 # Dark hero with name + role
    CareerHighlights.tsx     # Green section with 4 cards + Linkedin button
    About.tsx                # Cream section with white feature card
```

The page is responsive: the hero and about sections stack vertically on small screens, and the career-highlight cards adapt from a 4-column row down to a 2-column grid and finally a single column.
