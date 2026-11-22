# Cobra Hostel

Cobra Hostel is a student hostel discovery and comparison MVP for Cape Coast students, starting with UCC areas such as Science, Ayensu, Kwaprow, and Amamoma.

The goal is to help students compare verified rooms before calling a manager or visiting a property. The product focuses on clear room details, realistic prices, campus distance, availability, amenities, house rules, and enquiry actions.

## Current MVP

The current build includes:

- Mobile-first homepage for student room discovery.
- Search and listing pages for hostel comparison.
- Premium property details page inspired by proven student accommodation patterns.
- Sticky section tabs for property details.
- Context-aware sticky booking bar.
- Room Types / Availability section with room cards, images, pricing, features, and booking options.
- Soft card-based UI with Cobra pink accents.

## App Location

The active Next.js app is inside:

```bash
Cobra ZZZ/web
```

If deploying on Vercel from this repository, set the Vercel project root directory to:

```bash
Cobra ZZZ/web
```

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn-style project structure
- lucide-react icons
- Base UI dependency available for future accessible primitives

## Local Development

From the app folder:

```bash
cd "Cobra ZZZ/web"
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Checks

Run these before publishing or deploying:

```bash
npm run lint
npm run build
```

## Important Routes

- `/` - homepage
- `/search` - search entry page
- `/search/results?q=UCC` - listing results
- `/hostels/science-view-residence` - property details page

## MVP Notes

This is still a frontend MVP. Some flows are currently placeholders and should be connected later:

- Real search backend
- Real hostel inventory data
- Enquiry form submission
- Room booking flow
- Manager dashboard
- Auth and saved wishlist
- Production map provider

## Deployment Plan

For now, deploy through Vercel for quick previews and mobile testing.

When the MVP is stable, the app can move to a dedicated server or a fuller production stack.

## Repository

GitHub:

```bash
https://github.com/Gyansolomon/Cobra-Hostel.git
```

The repository is private during MVP development.
