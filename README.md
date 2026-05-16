# IMPRAI Website

PLEASE NOTE: This website is just conceptual, and does not represent any campaign that actually exists.

A static advocacy website for **IMPRAI**, a campaign promoting responsible and regulated artificial intelligence development. The site educates visitors on AI's societal and environmental impacts, combats misinformation, and empowers people to take action.

Built with React, Vite, and Tailwind CSS. Deployed via GitHub Pages.

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Full-screen banner with a tagline and entry point |
| `/mission-statement` | Mission Statement | Three-section layout covering IMPRAI's core goals |
| `/faq` | FAQ | Collapsible Q&A dropdowns on AI's risks and impact |
| `/myths-versus-facts` | Myths vs. Facts | Interactive flip-card grid debunking AI myths |
| `/take-action` | Take Action | Calls to action: contacting politicians, other orgs, and community organizing |

## Components

- **`Navbar`** — Top navigation bar with active-link highlighting and the IMPRAI logo
- **`Footer`** — Site-wide footer with copyright and contributor credits
- **`Dropdown`** — Animated accordion component used in the FAQ page
- **`MythVersusFactBox`** — Interactive card that slides between a myth and a fact, with a blurred image backdrop
- **`ScrollToTop`** — Resets scroll position to the top on every route change

---

## Tech Stack

- [React 19](https://react.dev/) with [React Router v7](https://reactrouter.com/) (hash-based routing)
- [Vite 8](https://vite.dev/) for bundling and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) via the Vite plugin
- [gh-pages](https://github.com/tschaub/gh-pages) for deployment
- Google Fonts: Inter and Inter Tight
- All photography and video assets from [Pexels](https://www.pexels.com/)

---

## Getting Started

**Prerequisites:** Node.js 18+

**Install dependencies:**

```bash
npm install
```

**Run the dev server:**

```bash
npm run dev
```

The site will be available at `http://localhost:5173` by default.

**Build for production:**

```bash
npm run build
```

**Preview the production build locally:**

```bash
npm run preview
```

---

## Deployment

This project is configured to deploy to GitHub Pages using the `gh-pages` package. The Vite base path is set to `"./"` to support relative asset paths on GitHub Pages, and hash-based routing is used so all routes work without server-side configuration.

To deploy:

```bash
npm run deploy
```

This runs `npm run build` first (via the `predeploy` script), then publishes the `dist/` folder to the `gh-pages` branch of your repository.

---

## Project Structure

```
imprai-website/
├── public/
│   └── icon.png                  # Favicon
├── src/
│   ├── assets/                   # Images and GIFs (from Pexels)
│   │   ├── faq/
│   │   ├── mission_statement/
│   │   ├── mvf/
│   │   ├── take_action/
│   │   ├── home_banner.gif
│   │   └── logo.png
│   ├── components/
│   │   ├── Dropdown.jsx
│   │   ├── Footer.jsx
│   │   ├── MythVersusFactBox.jsx
│   │   ├── Navbar.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── FAQ.jsx
│   │   ├── MissionStatement.jsx
│   │   ├── MythsVersusFacts.jsx
│   │   └── TakeAction.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## Contributors

Maximus Bauman, Aaron James Caddick, Camille Witherspoon

© 2026 IMPRAI. All rights reserved.

:3
