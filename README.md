# Ankush Bhat — Portfolio

A personal portfolio built with Next.js, featuring animated UI, a blog, and sections for experience, projects, and more.

## Overview

This project is a personal portfolio built with Next.js and React, featuring:

- animated hero section with custom particles and visual effects
- portfolio sections: About, Experience, Projects, Education, Certifications, Communities, Writing, GitHub Activity, and Contact
- markdown-powered blog with syntax highlighting via `rehype-pretty-code`
- dark/light theme toggle with smooth transitions
- Vercel Analytics and Speed Insights integration
- daily cache refresh via Vercel cron job

## Tech stack

- **Next.js** 16.2.4
- **React** 19.2.4
- **Tailwind CSS** v4
- **TypeScript**
- **Framer Motion** — animations
- **Lucide React** — icons
- **Radix UI / shadcn** — accessible UI primitives
- **MagicUI** — additional UI components
- **gray-matter + remark + rehype** — markdown blog rendering
- **@vercel/analytics**, **@vercel/speed-insights** — monitoring

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app at:

```
http://localhost:3000
```

## Build & Deploy

```bash
npm run build   # production build
npm run start   # start production server
npm run lint    # run ESLint
```

The project is deployed on [Vercel](https://vercel.com).

## Project Structure

```
app/            # Next.js app router (pages, layout, server actions)
components/     # Reusable UI components and page sections
content/blog/   # Markdown blog posts
lib/            # Utility functions and markdown helpers
public/         # Static assets
```

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [MagicUI](https://magicui.design)
