# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint
npm run format       # Prettier (write)
npx tsc --noEmit     # Type-check without emitting
```

## Architecture

**Orderbase** is a landing page / waitlist site for an Instagram-first order management tool, targeting Indian small sellers. Currently static — no backend integration yet.

### Stack

- **Framework**: TanStack Start (React 19 + TanStack Router, SSR-capable)
- **Styling**: Tailwind CSS v4 (no `tailwind.config` — config lives in `src/styles.css` via `@theme inline`)
- **Build**: Vite 7, configured via `@lovable.dev/vite-tanstack-config` (wraps TanStack Start plugin, React, Tailwind, tsconfig paths, and Cloudflare Workers support — do **not** add these plugins manually in `vite.config.ts`)
- **Deploy target**: Cloudflare Workers (see `wrangler.jsonc`)
- **UI components**: shadcn/ui (new-york style, `components.json`). Add components with `npx shadcn@latest add <name>`.
- **Icons**: lucide-react
- **Animations**: framer-motion

### Routing

TanStack Router with file-based routing. Route files live in `src/routes/`. The route tree is auto-generated in `src/routeTree.gen.ts` — never edit this file manually.

- `src/routes/__root.tsx` — HTML shell, global meta tags, stylesheet link, 404 component
- `src/routes/index.tsx` — Landing page (composes all section components)
- `src/router.tsx` — Router factory with custom error component (shows error details only in dev)

### Design System

Two variable fonts loaded from Google Fonts in `src/styles.css`:

- **Fraunces** (serif, weight 300–900) — used via `.font-display` utility class
- **Archivo** (sans-serif, weight 100–900) — default body font (`--font-sans`)

Brand color tokens defined as CSS custom properties in `:root` using oklch:

- `--ink`, `--cream`, `--paper`, `--terracotta` (primary), `--clay`, `--sage`, `--mustard` (accent)
- Order status colors: `--status-pending`, `--status-paid`, `--status-packed`, `--status-shipped`, `--status-delivered`

Custom utility classes defined in `@layer utilities` in `src/styles.css`:

- `.font-display`, `.bg-gradient-warm`, `.bg-gradient-sunset`, `.bg-gradient-ink`
- `.shadow-soft`, `.shadow-lift`, `.shadow-glow`, `.grain`
- `.animate-float`, `.animate-pop`, `.animate-pulse-dot`

Dark mode is defined but not currently toggled in the UI.

### Path Aliases

`@/*` maps to `./src/*` (configured in both `tsconfig.json` and Vite).

### Key Conventions

- `cn()` from `src/lib/utils.ts` for merging Tailwind classes (clsx + tailwind-merge)
- Prettier: 100 char width, double quotes, semicolons, trailing commas
- ESLint: unused vars are errors (with `_` prefix exception for args)
- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters` enabled
