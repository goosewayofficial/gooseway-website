# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/landing website for GOOSEWAY, an accessibility app for wheelchair / mobility-constrained users. Static-content Next.js site (no backend, no database) deployed on Vercel. There are no tests.

## Commands

```bash
npm run dev      # dev server (Turbopack)
npm run build    # production build (Webpack — NOT Turbopack, intentional)
npm run start    # serve production build
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
```

Note the asymmetry: `dev` uses `--turbopack`, `build` uses `--webpack`. Keep it that way — `next-pwa` is wired into the Webpack build path and is disabled in development.

## Architecture

Next.js 16 App Router, React 19, TypeScript (strict). Path alias `@/*` → `src/*`.

**Pages** (`src/app/*/page.tsx`) are server components by default and stay thin — they compose section components from `src/components/<route>/`. Mark a file `"use client"` only when it needs hooks/state (notably `useLanguage`). On the home page, client-only sections are isolated into `HomeClient.tsx` so the rest of the page stays a server component.

**Internationalization** is custom, not a library. Thai (`th`) is the default language; English is `en`.
- `src/context/LanguageContext.tsx` — `LanguageProvider` (wraps the app in `layout.tsx`), persists choice to `localStorage`, and toggles `document.body.classList` `lang-th`. Consume via `useLanguage()` → `{ language, setLanguage, t }`.
- `t(key)` looks up flat string maps in `src/translations/en.ts` and `src/translations/th.ts`. **These two files must have identical keys.** Add UI copy here, not inline.
- Longer structured content (achievements, careers, sponsors) lives in `src/data/`. Pattern: store records as `{ th: string, en: string }` (`BilingualText`), then export a `getX(language)` function that flattens to the plain interface for the current language, plus a backward-compat default export hardcoded to `"en"`. When adding data, follow this exact shape and add both languages.

**Shared TypeScript interfaces** are centralized in `src/app/interfaces.ts` (TeamMember, Achievement, Career, Solution, Sponsor, Feature, Testimonial). Add new shared shapes here rather than redefining them per-component.

**Global modals** use `src/context/ModalContext.tsx` (`useModal()` → ComingSoon and Download modals). The modal components are mounted once in `layout.tsx`; trigger them from anywhere via the context rather than mounting local copies.

**PWA**: `next-pwa` config in `next.config.ts` writes the service worker to `public/` (`sw.js`, `workbox-*.js` are generated — don't hand-edit). Disabled in dev.

## Styling

Tailwind only. Brand colors are defined in `tailwind.config.ts` (`brand.blue`, `brand.yellow`, `brand.dark`, etc.) — prefer `bg-brand-blue` over raw hex, though some older components hardcode `#2563EB`/`#231F20`.

`src/app/globals.css` forces `font-family` on all text elements with `!important`, switching between Poppins (default) and Prompt (Thai, when `body.lang-th` is set) via the `--font-main` CSS variable. Don't fight this with inline font styles; it's how Thai rendering works.

Custom keyframes/animations (`float`, `blob`, `fade-up`, etc.) are defined in both `tailwind.config.ts` and per-feature `animations.css` files — reuse the existing utilities.
