# Architecture

## App Name

```text
Hostel Premium
```

## System Overview

```text
Next.js web app
-> Supabase Auth
-> Supabase Postgres
-> Supabase Storage
-> Server actions/API routes where needed
-> Sentry later for monitoring
```

## Frontend

Recommended framework:

```text
Next.js with App Router
```

Responsibilities:

- SEO-friendly public pages.
- Responsive web UI for desktop, tablet, and mobile.
- Student discovery, search, favorites, and request flows.
- Owner/admin listing management.
- Loading, empty, error, and success states.

## Backend

Recommended backend:

```text
Supabase for auth, Postgres, storage, and row-level security.
Next.js server actions/API routes for protected business logic where needed.
```

## Authentication Direction

Web MVP:

```text
Supabase Auth with Google sign-in first.
Collect phone/WhatsApp number in the user profile before booking/request enquiry or manager messaging.
Avoid SMS OTP in MVP unless cost/setup is explicitly approved.
```

Future mobile app:

```text
Add Facebook and Apple sign-in when building the mobile app.
Apple sign-in is especially important for iOS app distribution and user trust.
```

## Responsive Architecture Rule

Layouts must be composed by breakpoint, not stretched.

```text
desktop: multi-column app composition
tablet: adaptive intermediate layout
mobile: focused single-column flow
```

Each route must define desktop/tablet/mobile acceptance criteria.
