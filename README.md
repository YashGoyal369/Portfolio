// ...existing code...
# Yash Goyal — Portfolio

Personal portfolio website showcasing projects, experience and contact info.

## Quick start

1. Install dependencies:
    ```bash
    npm install
    ```
   (see package.json)

2. Run dev server:
    ```bash
    npm run dev
    ```

3. Build for production:
    ```bash
    npm run build
    ```

4. Preview production build:
    ```bash
    npm run preview
    ```

## Project structure (important files)

- [index.html](http://_vscodecontentref_/0) — main HTML template.
- package.json — scripts & deps.
- vite.config.js — dev server / build config.
- tailwind.config.js — Tailwind setup.
- src/main.jsx — app entry.
- src/App.jsx — root application component (`App`).
- src/index.css — global styles.
- Components:
  - `Projects` — projects section.
  - `Experience` — experience section.
  - `Hero`, `Navbar`, `Contact`
- UI primitives:
  - `NavigationMenu`
  - `Tabs`
  - `Toaster`
  - `Drawer`
  - `Command`

## Development notes

- Uses Vite + React (JSX) and Tailwind CSS.
- Icons from `lucide-react` (used across components).
- UI primitives are Radix-based (see files in `src/components/ui/`).

## Deployment

Build with `npm run build` and serve the `dist/` output with any static host (Vercel, Netlify, GitHub Pages, etc).

## Contributing

- Open a PR with a concise description.
- Keep styles consistent with Tailwind classes in existing components.

## License

Include your preferred license here.
// ...existing code...