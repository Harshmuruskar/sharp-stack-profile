# Polished Profile

Build a modern, minimal, and highly polished personal portfolio website for a Java Full Stack Developer. 

The design should feel premium and intentional — think Linear, Vercel, or Stripe's landing pages: lots of 

whitespace, subtle motion, sharp typography, and a restrained color palette (not a generic template look).

DESIGN DIRECTION

- Style: minimal, dark-mode-first with a light mode toggle

- Color palette: deep charcoal/near-black background (#0A0A0B style), one confident accent color (electric 

  blue or emerald), off-white text — avoid purple/blue gradient clichés

- Typography: a clean modern sans-serif (Inter, Geist, or Satoshi), strong type hierarchy, generous line-height

- Motion: subtle scroll-triggered fade/slide-ins, smooth hover states on cards and buttons, no gimmicky animations

- Layout: generous padding, grid-based, asymmetric touches allowed for visual interest, fully responsive

SECTIONS

1. Hero — Name, title "Java Full Stack Developer", a short one-line value prop focused on building scalable 

   full-stack systems with modern AI-assisted workflows. Subtle animated background (grid, particles, or 

   gradient mesh — kept minimal). CTA buttons: "View Projects" and "Download Resume".

2. About — Short bio: B.Tech graduate, currently a Java Full Stack Developer at a tech company, background 

   spanning backend architecture, frontend engineering, and AI-assisted development tooling.

3. Skills — Grouped, icon-based grid:

   - Backend: Java, Spring Boot, Spring AI, Microservices, JWT, REST APIs

   - Frontend: React.js, TypeScript, Tailwind CSS

   - Database & Infra: PostgreSQL, Docker, Redis

   - AI/Dev Tooling: Claude Code, Lovable, Bolt, Google AI Studio

   Use clean icon chips or a hover-interactive grid, not a boring progress-bar list.

4. Projects — Card-based grid (3 featured projects), each with title, one-line description, tech stack tags, 

   and a link/button. Leave placeholder content structured for:

   - A veterinary practice management platform (owner/pet registration, vaccination tracking, self-service portal)

   - A secure online exam proctoring platform (AI-based monitoring, scalable architecture)

   - A luxury e-commerce brand concept (React + Spring Boot, custom admin dashboard)

5. Experience — Vertical timeline component, minimal line-and-dot style, with role, company, and duration.

6. Contact — Simple, elegant contact section with email, GitHub, LinkedIn icons, and a working contact form UI 

   (no backend needed, just the form).

TECHNICAL REQUIREMENTS

- Fully responsive (mobile-first)

- Smooth scroll navigation with a sticky, minimal navbar that highlights the active section

- Fast-loading, accessible (proper contrast, alt text, semantic HTML)

- Footer with social links and a small "built with React & Spring Boot mindset" easter egg line

Keep everything clean and uncluttered — prioritize whitespace and typography over decoration. Avoid stock 

photos, avoid emoji icons, use proper SVG icon sets (lucide or heroicons style).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/86fd64ba-fb2f-45f5-b1fc-d5aa0563f9aa).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
