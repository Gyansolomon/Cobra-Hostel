# Tools and Component Selection

## Purpose

Choose the project tools deliberately before implementation. Do not add dependencies randomly. Paid tools, API keys, MCP connections, and account setup require approval before installation or configuration.

## Recommended MVP Stack

```text
Frontend: Next.js App Router
Styling: Tailwind CSS
UI components: shadcn/ui + Radix primitives
Icons: Iconsax free icons for product/navigation where available; Lucide as fallback for missing utility icons
Forms: React Hook Form + Zod
Data fetching/cache: Supabase server/client reads first; TanStack Query where client-side server state needs caching/refetch control
Backend/Auth/Database/Storage: Supabase
Maps: free/low-cost map approach first with stored coordinates; paid maps only after approval
Motion: Motion Primitives for reusable web motion patterns
Monitoring: Sentry before production launch
Analytics: PostHog or Vercel Analytics later, after MVP flows exist
Email: Resend later for enquiry notifications if approved
Payments: no student payments in MVP; owner listing/ad payment later only after terms/receipts/admin approval workflow is planned
```

## Frontend Framework

Need:

```text
SEO-friendly public pages, fast routing, server rendering, future app/API reuse, owner/admin dashboard.
```

Choice:

```text
Next.js App Router
```

Why:

```text
Best fit for Google-discoverable university/hostel pages, public listing/detail pages, and protected dashboard routes.
```

Cost:

```text
Framework is free. Hosting may cost money depending on provider and traffic.
```

Alternatives:

```text
React/Vite for simpler SPA, but weaker for SEO-first product.
Expo later for mobile app.
```

## UI Components

Choice:

```text
shadcn/ui + Radix primitives
```

Why:

```text
Good base for accessible forms, dialogs, sheets, tabs, dropdowns, buttons, tables, and dashboard controls. It gives project-owned component code instead of a black-box component library.
```

Cost:

```text
Free/open source.
```

Usage rule:

```text
Do not accept default shadcn visuals as final design. Customize tokens, spacing, cards, forms, and page composition to match Hostel Premium.
```

Use for:

```text
Button, Input, Select, Checkbox, Switch, Dialog, Sheet, Tabs, Dropdown, Table, Badge, Toast, Tooltip, Accordion.
```

## Icons

Choice:

```text
Iconsax free icons first where available, including animated Iconsax icons where the free license allows.
Lucide as fallback for utility icons that Iconsax does not cover cleanly.
```

Why:

```text
Iconsax has a more premium mobile/product feel and fits the Hostel Premium visual direction. Lucide is reliable, free, and easy for common interface actions.
```

Rules:

```text
Use one icon style per area.
Do not mix filled, outline, bulk, and linear styles randomly.
For MVP, choose one main Iconsax style and keep it consistent.
Use Lucide only when Iconsax does not provide the needed utility icon or when implementation speed matters.
Animated Iconsax icons are allowed for premium feedback moments, not as constant decoration.
```

License:

```text
Iconsax has free and premium usage terms. Use free icons/animations only unless a paid license is confirmed.
```

## Design System Direction

Base mood:

```text
premium, warm, trustworthy, student-friendly, calm, modern, clean.
```

Use:

```text
Warm neutrals, strong hierarchy, restrained amber/green accents, real hostel imagery, clear trust labels, precise spacing.
```

Avoid:

```text
Generic blue SaaS look, stretched mobile desktop layout, random gradients, unverified trust claims, crowded cards.
```

Paid design references:

```text
Tailwind Plus and Untitled UI can be used as inspiration only if approved. They are paid products and should not be required for MVP.
```

## Forms and Validation

Choice:

```text
React Hook Form + Zod
```

Why:

```text
The product has many forms: enquiry form, profile form, owner listing form, room type form, contact settings, admin review forms. Zod supports shared validation rules and server-side validation.
```

Rules:

```text
Never trust frontend input.
Validate on server before database mutations.
Show field-level errors.
Add loading, disabled, success, and error states.
```

## Backend, Auth, Database, Storage

Choice:

```text
Supabase
```

Why:

```text
Good fit for structured relational data, auth, storage, row-level security, owner/admin workflows, listings, room types, requests, and future mobile reuse.
```

Cost:

```text
Can start low-cost/free while validating. Paid tiers or add-ons may be needed as usage, storage, custom domain, backups, or production requirements grow.
```

Auth:

```text
Web MVP: Google sign-in first.
Profile: collect phone/WhatsApp before enquiry or platform messaging.
Future mobile app: add Facebook and Apple sign-in.
No SMS OTP unless explicitly approved because it adds setup and per-message cost.
```

Security:

```text
Use Supabase Row Level Security.
Keep service role keys server-only.
Use environment variables.
Run Gitleaks before pushing.
```

## Maps

Need:

```text
Students should compare hostels visually by area, distance, price, availability, verification level, and team quality score.
```

Recommended MVP approach:

```text
Store approved hostel coordinates in the database.
Use a simple interactive free/low-cost map display after the coordinates are available.
Avoid paid geocoding on every page load.
Avoid advanced routing/directions until later.
```

Provider options:

```text
Option A: Leaflet with free/open map data and a policy-safe tile approach for MVP.
Option B: OpenLayers if map needs become more advanced.
Option C: Mapbox later for polished production maps and scaling controls, only with approval.
Option D: Google Maps later if Google Places/search/routing becomes important, only with approval.
```

Recommendation:

```text
Start with Leaflet-style implementation and stored coordinates for MVP planning. Use a free/low-cost map setup first, but do not abuse public OpenStreetMap tile servers. For production traffic, choose a policy-safe tile provider or approved paid provider after expected usage is clearer.
```

Cost and policy notes:

```text
OpenStreetMap data is free, but the public tile servers are limited community infrastructure with usage rules. Do not rely on public OSM tiles for heavy commercial traffic without respecting caching, attribution, identification, and usage limits.

Mapbox uses pay-as-you-go pricing with free tiers for many products, then usage-based billing.

Google Maps Platform has product-specific pricing and billing requirements. Use only if its ecosystem is worth the cost.
```

Map rules:

```text
No strong distance/location claims unless location is verified.
Cache coordinates.
Do not geocode repeatedly.
Show attribution.
Do not hide map attribution under UI.
```

## Motion Primitives

Choice:

```text
Motion Primitives by ibelick for reusable web motion components.
```

Source:

```text
https://github.com/ibelick/motion-primitives
```

Why:

```text
It provides open-source, Tailwind-friendly motion components built with motion. Good fit for subtle filter sheets, accordions, animated tabs, preview panels, text effects, and small product interactions.
```

Rules:

```text
Use motion only where it improves clarity.
Do not over-animate core hostel browsing or enquiry flows.
Respect reduced motion.
Keep timing within the DESIGN.md motion system.
```

## Data Fetching and Caching

Default:

```text
Use server-rendered data for public SEO pages where possible.
Use Supabase client/server reads for straightforward data.
```

Use TanStack Query when:

```text
client-side filters need caching
dashboard tables need refetch control
map/list views need responsive client state
requests/messages need controlled loading/error states
```

Cost rule:

```text
Cache where useful. Avoid repeated reads for the same hostel/listing/map data.
```

## File Uploads and Images

Choice:

```text
Supabase Storage first.
```

Use for:

```text
hostel images
room images
verification evidence images if needed
owner documents later if approved
```

Rules:

```text
Validate file type and size.
Compress images before upload where possible.
Protect private verification evidence.
Public listing images should only come from approved/published listings.
```

## Notifications

MVP:

```text
In-app dashboard notifications/status first.
```

Later:

```text
Email via Resend for enquiry notifications.
SMS/WhatsApp only after cost, provider, compliance, and abuse controls are approved.
```

## Monitoring and Analytics

Monitoring:

```text
Add Sentry before production launch for frontend/backend errors.
```

Analytics:

```text
Add PostHog or Vercel Analytics later for product metrics such as searches, detail views, enquiry starts, enquiry submissions, saved hostels, and owner listing submissions.
```

## Paid Tools and Approval

Requires approval before use:

```text
Tailwind Plus
Untitled UI
UI8 assets
paid Iconsax/premium icon packs
Mapbox paid usage
Google Maps Platform usage
SMS/WhatsApp providers
Resend paid tier
Sentry paid tier
Supabase paid tier/add-ons
payment processor setup
Figma paid assets or premium templates
```

## MCP / Connector Setup

Useful connections:

```text
Figma - design system, page mockups, future handoff
GitHub - repo, issues, PRs, code review
Browser/Chrome - responsive visual QA
Supabase MCP/CLI if available - schema inspection and migrations
Sentry later - production debugging
```

Rules:

```text
Ask before connecting accounts, installing MCP servers, logging in, or changing user-level configuration.
```

## Component Inventory

Base UI:

```text
Button
IconButton
Input
Textarea
Select
Checkbox
Switch
Badge
Card
Tabs
Dialog
Sheet
Dropdown
Table
Toast
Tooltip
Accordion
Skeleton
EmptyState
ErrorState
LoadingState
```

Hostel product:

```text
HeroSearch
UniversityChips
AreaCard
HostelCard
HostelPreviewCard
TrustBadge
QualitySummary
PriceBadge
AmenityBadge
FilterSidebar
FilterSheet
MapToggle
MapView
HostelPin
HostelGallery
RoomTypeCard
StickyEnquiryPanel
RequestForm
SimilarHostels
FavoriteButton
```

Owner/admin:

```text
DashboardShell
ListingStatusCard
OwnerListingTable
AddHostelForm
RoomTypeForm
ImageManager
ContactSettingsForm
RequestInbox
RequestDetailPanel
MessageThread
AdminShell
PendingListingsTable
VerificationQueue
QualityAssessmentPanel
AuditLogTable
```

## Final Recommendation

```text
Build MVP with Next.js + Tailwind CSS + shadcn/ui + Supabase + Zod/React Hook Form.

Use Iconsax free icons where available, Motion Primitives for reusable motion, and stored coordinates with a free/low-cost map approach first.

Do not add payments, SMS OTP, paid map providers, paid UI kits, or premium assets without explicit approval.
```
