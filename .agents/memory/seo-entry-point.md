---
name: SEO entry point
description: The salon app's framework-specific location for crawler-facing SEO metadata and structured data.
---

This app is a Vite/React single-page site, not a Next.js App Router project. Keep default title, description, Open Graph/Twitter metadata, canonical URL, robots directives, and JSON-LD in the static HTML shell so crawlers can read them before JavaScript executes.

**Why:** The requested Next.js `app/layout.js` file does not exist in this project, and SPA metadata added only after hydration is less reliable for search crawlers.

**How to apply:** Update `index.html` for page-head SEO, `public/robots.txt` and `public/sitemap.xml` for crawlability, and keep a real text H1 in the React page when important hero copy is baked into an image.