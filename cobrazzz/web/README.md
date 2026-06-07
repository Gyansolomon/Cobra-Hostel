# Cobra Hostel Web App

This is the active frontend application for Cobra Hostel.

Cobra Hostel helps students compare verified hostel rooms around UCC and Cape Coast before calling a manager or visiting a property.

## What This App Includes

- Homepage for student hostel discovery.
- Search entry and search results pages.
- Premium listing cards for comparing hostel options.
- Hostel details page with summary, offers, amenities, room types, house rules, and sticky booking actions.
- Mobile-first layouts built for student browsing.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- lucide-react icons
- shadcn-style component structure

## Run Locally

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Useful Commands

```bash
npm run lint
npm run build
```

## Main Routes

- `/`
- `/search`
- `/search/results?q=UCC`
- `/hostels/science-view-residence`

## Vercel Deployment

If deploying from the parent repository, set Vercel's root directory to:

```bash
cobrazzz/web
```

Build command:

```bash
npm run build
```

Install command:

```bash
npm install
```

Output is handled by Next.js.
