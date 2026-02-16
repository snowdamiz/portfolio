# yurlovandrew.me

Personal portfolio built with React, TypeScript, and Vite.

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4 + shadcn/ui
- Motion (Framer Motion) for animations
- Space Grotesk + Space Mono fonts

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview  # preview the production build locally
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, Projects, Contact
│   ├── ui/           # shadcn/ui primitives
│   └── icons/        # Custom SVG icons
├── data/             # Projects and social links data
├── lib/              # Utilities
└── providers/        # Theme provider
```

## Deployment

Static site — deploy the `dist/` output to any hosting provider (Vercel, Netlify, Cloudflare Pages, etc.).
