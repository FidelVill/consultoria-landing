# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Type-check (tsc -b) then bundle for production
npm run lint      # Run ESLint
npm run preview   # Serve the production build locally
```

There is no test runner configured.

## Stack

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS v4** — configured via `@theme {}` in `src/index.css` (no `tailwind.config.js`)
- **Framer Motion** for scroll-triggered animations
- **React Router DOM v7** — flat route list in `src/router/index.tsx`
- **lucide-react** and **react-icons** for icons
- Path alias `@/` → `src/`

## Architecture

### Page composition pattern

Every page in `src/pages/` follows the same structure: `<Navbar />` → page-specific sections → `<Footer />`. Pages are thin composers; all visual logic lives in section components.

```
src/
  pages/          # Route-level composers (Home, About, Service, Benefits, NotFound)
  sections/       # Visual sections grouped by page
    Home/         # Hero, Stats, Services, About
    About/        # AboutUs, Purpose, Values, Team
    Service/      # Features, Process, Solutions
    Benefits/     # BenefitsHero, WhyUs, WhatWeDo, Impact, PowerInfo, TrustStats
    shared/       # CTA (reused across pages)
  components/
    layout/       # Navbar, Footer
    ui/           # Button
  constants/      # Static data arrays consumed by sections (services.ts, benefits.ts, about.ts)
  hooks/          # useFadeUp.ts — exports Framer Motion variant objects (not a hook despite the name)
  router/         # createBrowserRouter config
```

### Design tokens (Tailwind custom theme)

Defined in `src/index.css` under `@theme {}`:

| Token | Value |
|---|---|
| `negro-premium` | `#0A0A0A` |
| `dorado-principal` | `#C8A24D` |
| `dorado-claro` | `#E6C26F` |
| `blanco-hueso` | `#F8F6F2` |

Fonts by semantic role:
- `font-dm-serif` / `h1` — hero/premium headings
- `font-cormorant` / `h2` — section headings
- `font-space` / `h3` — subtitles
- `font-poppins` / `h4` — card labels
- `font-inter` — body text (default)
- `font-numbers` (JetBrains Mono) — numeric displays

Utility classes: `.title-premium`, `.title-modern`, `.number-text`, `.ui-text`.

### Animation pattern

Import variants from `@/hooks/useFadeUp` and apply them with `whileInView`:

```tsx
import { fadeUpVariants, staggerContainer, fadeUpItem } from '@/hooks/useFadeUp'

<motion.div
  variants={fadeUpVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
```

Use `staggerContainer` on the wrapper and `fadeUpItem` on children for staggered reveals.

### Shared CTA

`src/sections/shared/CTA.tsx` is the WhatsApp contact call-to-action used on multiple pages. The WhatsApp number is currently a placeholder (`https://wa.me/TUNUMERO`) in both `CTA.tsx` and `Navbar.tsx`.

### Static content

Business copy (service cards, benefit items, team/about data) lives in `src/constants/` as typed arrays. Sections import from there rather than hardcoding JSX. Add new data entries there before updating section components.
