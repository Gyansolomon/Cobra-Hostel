# Component and Tool Selection

Choose components and tools deliberately. Do not add dependencies randomly.

## Selection Criteria

For every major library or service, define:

```text
Need:
Option:
Why it fits:
Cost:
License:
Setup required:
Alternatives:
Risk:
```

Ask before installing major dependencies.

## UI Component Options

Web:

```text
shadcn/ui - free, accessible React components
Radix UI - headless accessible primitives
Tailwind UI - paid premium component examples
Untitled UI - paid design/component system
Tremor - dashboards and charts
Framer Motion - motion
Lucide - icons
```

React Native / Expo:

```text
React Native Reusables - shadcn-style components
NativeWind - Tailwind-style styling
Expo Router - navigation
React Navigation - navigation
Reanimated - motion
Moti - simpler motion API
Lucide React Native - icons
Iconsax - premium icon direction if licensed/available
```

Design:

```text
Figma - design files and component libraries
FigJam - diagrams and planning
Figma Community - inspiration and templates
UI8 - paid assets
Mobbin - paid/free inspiration depending on access
```

Backend and Product:

```text
Supabase - auth, database, storage, realtime
Firebase - auth, database, storage, push
Stripe - payments
Resend - email
Sentry - monitoring
PostHog - analytics
Mapbox / Google Maps - maps
UploadThing / S3 - file uploads
```

## Rules

- Prefer the project's existing stack.
- Prefer official docs for current API usage.
- Use proven libraries for auth, payments, maps, charts, uploads, realtime, and notifications.
- Do not build complex infrastructure from scratch unless the user asks.
- Do not choose paid tools without explaining cost and alternatives.
- Do not choose a tool only because it looks premium.

## Output Required

Every project discovery should include:

```text
Base UI library:
Icon library:
Form solution:
Navigation:
Charts/maps/uploads if needed:
Auth/backend:
Monitoring:
Paid tools:
MCP connections:
```
