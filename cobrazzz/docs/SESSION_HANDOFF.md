# Session Handoff

Last updated: 2026-07-09

This handoff is for the next Codex agent continuing the Cobra / Hostel Premium project.

## Read First

Before planning or implementing, read these files in order:

```text
C:\Users\HP\Desktop\Cobra master\cobrazzz\AGENTS.md
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\AGENTS.md
C:\Users\HP\Desktop\Cobra master\cobrazzz\docs\HOME_SCREEN_LAYOUT_PLAN.md
C:\Users\HP\Desktop\Cobra master\cobrazzz\docs\COLOR_SYSTEM.md
C:\Users\HP\Desktop\Cobra master\cobrazzz\docs\SESSION_HANDOFF.md
C:\Users\HP\Desktop\Cobra master\premium-app-os\global\SKILL_ROUTER.md
C:\Users\HP\Desktop\Cobra master\premium-app-os\planning\PAGE_PLANNING_RULES.md
C:\Users\HP\Desktop\Cobra master\premium-app-os\planning\COMPONENT_AND_TOOL_SELECTION.md
C:\Users\HP\Desktop\Cobra master\premium-app-os\planning\REFERENCE_GATHERING_RULES.md
```

User rule:

```text
Do not guess the next step.
Use the skills.
Use references.
Plan before building.
Do not create random components.
Do not copy protected brand assets or exact proprietary UI.
```

## Active Paths

Project:

```text
C:\Users\HP\Desktop\Cobra master\cobrazzz
```

Web app:

```text
C:\Users\HP\Desktop\Cobra master\cobrazzz\web
```

Premium planning system:

```text
C:\Users\HP\Desktop\Cobra master\premium-app-os
```

Important: ignore the older OneDrive folder unless the user explicitly redirects there.

Important deployment/path update:

```text
The tracked project folder was renamed from "Cobra ZZZ" to "cobrazzz" because Vercel failed when serverless function names contained spaces.
Use C:\Users\HP\Desktop\Cobra master\cobrazzz\web for all future app work.
The old local C:\Users\HP\Desktop\Cobra master\Cobra ZZZ folder may still exist with local-only build output, node_modules, and ignored/reference assets. Do not work from it.
```

## GitHub And Vercel State

Repository:

```text
https://github.com/Gyansolomon/Cobra-Hostel.git
```

Branch:

```text
main
```

Latest pushed commit before the 2026-07-09 MVP completion pass:

```text
d2e7a97 Wire routing and desktop layouts
```

Deployment:

```text
The user reported that the site has been deployed on Vercel.
Vercel Root Directory must be: cobrazzz/web
Framework: Next.js
Build command: npm run build
Install command: npm install
```

Local untracked items at handoff time:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ
C:\Users\HP\Desktop\Cobra master\README.local-before-merge.md
C:\Users\HP\Desktop\Cobra master\premium-app-os
```

Do not delete local folders unless the user explicitly confirms. If deleting old `Cobra ZZZ`, first make sure no dev server is running from that folder.

## Product Direction

Current brand/product name in the UI is:

```text
cobra
```

Product:

```text
Student hostel discovery marketplace for Ghana, starting with UCC / Cape Coast.
```

Primary user:

```text
Students looking for hostels/rooms near universities.
```

MVP behavior:

```text
Browse first.
Compare rooms, areas, prices, ratings, and manager/verification status.
Booking/payment is not the focus yet.
```

Visual direction:

```text
Premium marketplace.
White / rose / soft gray.
Airbnb compact card discipline.
Amber Student student-housing listing depth.
No cream/gold/purple-gradient/generic SaaS.
```

## Reference Folders

Homepage references:

```text
C:\Users\HP\Desktop\Cobra master\cobrazzz\images reference
```

Listing/search references:

```text
C:\Users\HP\Desktop\Cobra master\cobrazzz\images reference\listing list
```

Listing reference sources are Amber and Airbnb. Analyze the screenshots before implementation. The key shared patterns are:

```text
Sticky search header.
Horizontal filter pill row.
Result count/title.
Detailed listing cards.
Desktop list + sticky map/right rail.
Mobile single-column list + horizontal filters + map action.
Serious filter modal/sheet.
Trust/support layer.
```

Illustration source:

```text
Use https://undraw.co/ as the current free illustration source for empty states and simple editorial illustrations.
Prefer downloaded/local SVG assets from unDraw over hand-built CSS illustrations.
Premium illustration sources can be added later when the user provides/approves them.
Current unDraw asset in app: cobrazzz/web/public/illustrations/undraw-house-searching.svg
```

## Current Homepage State

Main edited files:

```text
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\src\app\page.tsx
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\src\components\home-header.tsx
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\src\components\area-map-client.tsx
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\src\components\premium-asset-icon.tsx
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\src\app\globals.css
```

Static assets added:

```text
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\public\hero\student-with-luggage.png
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\public\premium-assets\3dicons\...
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\public\university-logos\...
```

Homepage implemented:

```text
Mobile pink hero with cobra wordmark, menu, search pill, promo text, and student-with-luggage hero image.
Curved hero bottom is required. Do not remove it.
Metrics row below hero uses 3D icons and must stay 3D.
Popular universities/campuses gallery near Cape Coast.
Continue your search section.
Continue where you left off section.
Popular hostels around UCC row.
LocationFilterBar below popular hostel title.
Available near UCC this semester row.
OpenStreetMap area map section.
Mobile bottom nav: Explore, Wishlist, Profile.
```

Important user preferences from the latest homepage work:

```text
Keep 3D icons only for the metrics row and hostel-card rating stars.
Do not use 3D icons for nav or normal UI icons.
Keep the mobile hero curve.
The hero image must show the bag; current class is in home-header.tsx.
Use arrowheads/chevrons in circular view-more buttons, not full arrows.
Homepage hostel cards should stay compact: two text lines only.
Room labels use "1 in a room", "2 in a room", "3 in a room".
LocationFilterBar pattern is: first pill is city dropdown, then university/area chips.
```

Current `LocationFilterBar` is in:

```text
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\src\app\page.tsx
```

Current structure:

```text
CityDropdownChip: Cape Coast
University/area chips: UCC, CCTU, NDU, Science, Ayensu, Kwaprow
```

## Current Search Page State

The current `/search` page is still a placeholder/simple search discovery page:

```text
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\src\app\search\page.tsx
```

It currently has:

```text
Back button.
Search input.
Simple category tabs.
Recently searched chips.
Top cities and top universities.
Mobile bottom nav.
```

The premium listing work currently lives on `/search/results`.

Current `/search/results` state:

```text
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\src\app\search\results\page.tsx
```

Implemented:

```text
Mobile compact sticky header with cobra wordmark/search/menu.
Horizontal filter pill row.
Premium listing cards using Amber-style information density.
Card image carousel indicators, save heart, offer badge, rating on title line.
Compact feature pills limited to two rows with horizontal overflow.
Price format uses Ghana currency symbol style, e.g. ¢3,200/year.
See Availability button links to hostel details page.
Desktop listing mode has left results column and right map/trust panel.
Floating Map button exists on mobile listing.
```

Important listing user preferences:

```text
Keep listing card typography compact.
Pills should fit text and stay single-line.
Do not make pill text wrap into two lines.
If there are too many pills, use horizontal scrolling.
Rating belongs on the same line as the title, right aligned, black text.
Use currency symbol amount/year style.
```

## Current Hostel Details Page State

Main files:

```text
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\src\app\hostels\[slug]\page.tsx
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\src\app\hostels\[slug]\hostel-details-client.tsx
C:\Users\HP\Desktop\Cobra master\cobrazzz\web\src\lib\hostels.ts
```

Route currently used for review:

```text
http://localhost:3000/hostels/science-view-residence
```

Implemented:

```text
Mobile-first Amber-inspired details page.
Hero image gallery area with back/search/share/heart controls.
Property summary card overlapping hero.
Summary card has breadcrumb, title, price block, address, distance row, View map action.
Feature chip panel has three separate horizontal chip rows inside a soft gray lower panel.
Sticky section tabs: Overview, Offers, Description, Amenities, Room Types, House Rules.
Offers card with discount pill, coupon divider, offer rows, View All.
Trust benefits card with icon badges and social proof row.
About the Property card with collapsed text and Show more.
Amenities card with bills included group, savings card, shared utilities, fitness/recreation, View all amenities.
Room Types section with filters, category tabs, room cards, tenancy rows, Book buttons.
StickyBookingBar is context-aware: before Room Types it shows Support + See Availability + Enquire Now; at Room Types it shows Support + Enquire Now only.
Floating support widget exists above bottom CTA.
```

Details page user preferences:

```text
Sizing is the biggest concern: all new components and text must use compact Cobra sizing, not oversized Amber sizing.
Use white rounded cards on soft light-gray page background.
Brand pink only for active tabs, links, primary actions, and outlines.
Dark text for titles; muted gray for secondary text.
Pale pink for icon backgrounds; pale green for savings/discount areas.
Feature chips must be three independent horizontal rows, not flex-wrap.
Hide horizontal scrollbars visually while keeping swipe scrolling.
Do not bring back the Overview stats card that was removed.
Do not let the floating support widget cover important content or bottom CTA.
```

## Next Implementation Target

The next agent should continue from the deployed MVP state, not restart `/search`.

Likely next work:

```text
Continue polishing the hostel details page.
Finish Room Types / House Rules / Meet the Host sections if the user asks.
Wire enquiry/support flows after the visual MVP is stable.
Keep checking mobile sizing, spacing, and overflow in the in-app browser.
```

If the user asks for deployment help:

```text
Use Vercel Root Directory: cobrazzz/web
Do not use the old spaced path: Cobra ZZZ/web
If a Vercel build fails, inspect the build log first.
```
## Listing Page Verdict From Reference Audit

Use a hybrid of Airbnb and Amber:

```text
Airbnb gives list/map clarity and compact cards.
Amber gives student-accommodation filters, right rail trust, detailed cards, and FAQ/support structure.
Cobra should be Ghana/UCC-specific, not global.
```

Mobile listing:

```text
Sticky search header.
Horizontal filters.
Result count/title.
Single-column cards.
Floating map button.
Bottom nav stays.
```

Desktop listing:

```text
Header/search.
Filter pill row.
Left results column.
Right sticky map panel or map + trust rail.
```

## 2026-07-09 MVP Completion Pass

The current app now includes working responsive flows for:

```text
Home discovery and city selection
Search, filters, sorting, listing cards, and regional map results
Twelve hostel detail routes with room, rules, fees, FAQs, reviews, and related properties
City hubs for Cape Coast, Accra, Kumasi, and Takoradi
University hubs for UCC, CCTU, UG, KNUST, and TTU
Wishlist, recently viewed, enquiries, and booked empty states
Login, signup, forgot password, two-step onboarding, and profile editing
Student enquiry submission and manager listing submission
Support, safety, how-it-works, terms, and privacy pages
```

Important implementation boundary:

```text
Authentication, profile, wishlist, and enquiry persistence are browser-local demo implementations.
Passwords are never stored.
Wishlist and enquiry data are scoped by signed-in email in the browser.
No payments are collected.
Production still requires the approved backend, authenticated sessions, database policies, email delivery, admin moderation, and real inventory verification.
```

The local production server is currently expected at:

```text
http://localhost:3000
```

## Verification Status

Checks passed after the 2026-07-09 MVP completion pass:

```text
npm run lint
npm run build
```

Run both again after any implementation.

Most recent verified build command:

```text
cd C:\Users\HP\Desktop\Cobra master\cobrazzz\web
npm install
npm run build
```

Result:

```text
Build passed on 2026-07-09 with 64 generated routes.
Browser checks passed across 18 representative mobile routes and desktop home, listing, details, wishlist, city, university, map, auth, onboarding, support, manager submission, and enquiry flows.
No browser console warnings or errors were present in the final verification pass.
```

## Cautions For Next Agent

```text
Do not remove the mobile hero curve.
Do not convert the homepage into desktop-stretched mobile.
Do not use white card slabs around every filter.
Do not add 3D icons everywhere.
Do not scrape unDraw assets automatically.
Do not use expensive paid map APIs without discussing cost.
Do not start from the OneDrive folder.
Do not start from the old local "Cobra ZZZ" folder.
Do not ignore the user's browser comments; they are the current visual source of truth.
```

## Suggested First Message From New Agent

```text
I read SESSION_HANDOFF.md and the required project docs. I see the app is now deployed from main with Vercel Root Directory cobrazzz/web. I will continue from the current details/listing MVP, use the in-app browser as visual truth, and keep new UI compact with the established Cobra sizing.
```

