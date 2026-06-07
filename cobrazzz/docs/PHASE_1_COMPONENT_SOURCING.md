# Phase 1 Component Sourcing

## Purpose

Phase 1 covers the first usable web foundation for Hostel Premium:

```text
Home page first impression
UCC-first search entry
Responsive desktop/mobile header
Search module
Trust/sign-in value messaging
Popular UCC area discovery
Owner/manager CTA
Basic footer
```

No application UI should be implemented until this sourcing checklist is reviewed.

## Current Decisions

```text
1. Mobile carousel:
   Explain and defer until the static responsive home page is approved.

2. First homepage images:
   Use temporary web-sourced, license-safe hostel/student accommodation images for prototype visuals.
   Replace them with verified real hostel photos as soon as field/admin listing work begins.

3. Search tabs:
   Use Hostels / Areas / Map / Verified / For Managers.
   Keep Hostels as the main focus.
   For Managers is allowed as a tab/route, but manager acquisition must not dominate the home page.

4. Get the app:
   Do not show it in Phase 1.
   Add it later when the mobile app exists or has a real waitlist/app plan.

5. First UCC area chips/cards:
   Science / New Site
   Ayensu
   Kwaprow
   Amamoma
   Apewosika / Old Site
   Kokoado / Old Site
```

## Source Decision Rules

Use this order:

```text
1. Use Reales for licensed layout/component inspiration where it fits hostel discovery.
2. Use Expedia for search-marketplace behavior, responsive structure, and serious post-search logic.
3. Use shadcn/Radix for accessible primitives, not default styling.
4. Use Iconsax for icon direction and animated icon opportunities.
5. Use Motion Primitives for controlled, reusable motion.
6. Build custom components when Hostel Premium needs a unique product pattern.
```

Do not copy:

```text
Expedia branding, exact layout, rewards logic, travel payment assumptions.
Foodpanda branding, mascot, colors, food category content, flash-deal pressure.
Reales real-estate language, mortgage/sales/payment assumptions.
```

## Recommended Approach

Use a hybrid approach:

```text
Structure: Expedia search-marketplace logic.
Visual rhythm: Reales property-browsing polish.
Mobile header motion: Foodpanda-style reference adapted to UCC context.
Primitives: shadcn/Radix.
Icons: Iconsax.
Motion: Motion Primitives plus custom CSS where simpler.
```

Why:

```text
This keeps the site unique while avoiding random AI layout decisions.
It also prevents the Soccer11 mistake where desktop becomes stretched mobile.
```

## Temporary Image Policy

For Phase 1 prototype visuals, use temporary web-sourced images only from sources with clear commercial-friendly licenses.

Recommended temporary sources:

```text
Pexels
Pixabay
Unsplash
Wikimedia Commons only when the exact image license is checked
```

Use image search terms like:

```text
student accommodation room
hostel room
student housing
shared room
campus accommodation
student apartment exterior
Ghana student accommodation
Cape Coast campus
```

Rules:

```text
Do not use random hotel luxury photos that make UCC hostels look fake.
Do not use identifiable students without a clear model release/license.
Do not use photos from hostel websites unless permission is granted.
Do not imply the image is a real listed hostel unless it is approved listing media.
Mark temporary images internally as placeholder/reference assets.
```

Production rule:

```text
Real listing photos must come from hostel managers, field visits, admin verification, or approved photographers.
Prototype stock photos are only for visual planning and early layout testing.
```

## Phase 1 Build Order

```text
1. Foundation tokens and primitives
2. Header system
3. Search module
4. Home page discovery blocks
5. Trust and sign-in value card
6. Owner CTA
7. Footer
8. Loading/empty/error states for home data
9. Desktop/mobile responsive audit
```

---

## 1. Foundation Tokens And Primitives

| Component | MVP | Source | Decision |
| --- | --- | --- | --- |
| `Button` | Yes | shadcn/Radix + custom tokens | Use as base. Restyle heavily. |
| `IconButton` | Yes | shadcn/Radix + Iconsax | Use for menu, search, close, map, save. |
| `Input` | Yes | shadcn/Radix | Use for search and form fields. |
| `SearchInput` | Yes | shadcn/Radix + Iconsax | Must support desktop large field and mobile pill. |
| `Tabs` | Yes | shadcn/Radix + Motion Primitives | Use for search categories. |
| `Card` | Yes | shadcn/Radix + custom | Use sparingly; no nested-card clutter. |
| `Skeleton` | Yes | shadcn/Radix + custom shapes | Skeleton must match real layout. |
| `EmptyState` | Yes | Custom | Needed for no featured hostels/no areas. |
| `ErrorState` | Yes | Custom | Needed for safe retry state. |

Cost:

```text
shadcn/Radix are free.
Iconsax has free icons; animated/premium packs may need license check.
Motion Primitives is open-source, but verify package/license before install.
```

## 2. Header System

| Component | MVP | Source | Decision |
| --- | --- | --- | --- |
| `DesktopHeader` | Yes | Expedia + custom | Full web header, not mobile stretched wide. |
| `MobileHeader` | Yes | Foodpanda/Expedia mobile + custom | Compact, context-first. |
| `MobileDiscoveryHeader` | Yes | Foodpanda-style reference + custom | UCC/area context row plus large search pill. |
| `MobileMenuButton` | Yes | Iconsax | Website uses menu icon instead of favorite icon. |
| `MobileMenuDrawer` | Yes | shadcn Sheet + custom | Account card, navigation, manager link. |
| `AccountMenuPopover` | Later/P1 | Expedia + shadcn Popover | Useful after auth flow is clearer. |

Desktop behavior:

```text
Logo left.
Navigation grouped by student tasks and manager task.
Header should feel calm and professional.
Search is not hidden behind menu on desktop.
```

Mobile behavior:

```text
First load can show logo briefly.
Logo transitions into UCC/area context using a fast spin-down or roll-down motion.
Menu icon appears on the right for website.
Favorite/save icon is reserved for future app behavior.
Search pill remains visible early and must not be delayed by animation.
```

Motion:

```text
Header context transition: 300-500ms.
Respect reduced motion.
No blocking splash on web.
```

## 3. Search Module

| Component | MVP | Source | Decision |
| --- | --- | --- | --- |
| `HeroSearchModule` | Yes | Expedia + Reales + custom | Core Phase 1 component. |
| `SearchTabs` | Yes | Expedia tabs + shadcn Tabs | Hostels, Areas, Map, Verified, For Managers. |
| `DestinationSearchField` | Yes | Expedia field + Iconsax | Search UCC, area, or hostel name. |
| `MoveInPeriodField` | Yes | Expedia date field adapted | Move-in period/semester, not hotel dates. |
| `RoomOccupantsField` | Yes | Expedia travellers field adapted | Room type and occupants. |
| `RoomOccupantsSelector` | Later/P1 | shadcn/Radix + custom | Add once search behavior is confirmed. |
| `MobileSearchModule` | Yes | Expedia mobile + custom | Stacked mobile fields. |
| `MobileSearchButton` | Yes | Custom Button | Full-width, clear CTA. |

Desktop behavior:

```text
Centered but not oversized.
Fields arranged in a real web layout.
Search panel can use two rows if needed.
Avoid giant mobile pills stretched across the page.
```

Mobile behavior:

```text
Search fields stack cleanly.
Search button is full-width.
Use bottom sheet later for advanced search editing if needed.
```

Search tab priority:

```text
Primary: Hostels
Secondary: Areas, Map, Verified
Low priority: For Managers
```

Rule:

```text
The manager path should be present and professional, but it must not steal attention from students searching for hostels.
```

## 4. Home Discovery Blocks

| Component | MVP | Source | Decision |
| --- | --- | --- | --- |
| `PopularAreaCard` | Yes | Expedia destination cards + custom | UCC areas with image/count/price context. |
| `AreaChips` | Yes | Reales/Foodpanda rhythm + custom | Quick area browsing. |
| `QuickDiscoveryShortcuts` | Later/P1 | Foodpanda pattern + Iconsax | Near Campus, Available, Private, Verified. |
| `MobileHeroCarousel` | Later/P1 | Foodpanda-style motion + custom | Use only if it supports search/trust. |
| `CarouselProgressTimer` | Later/P1 | Custom + Motion | Animated bar-to-dot timer. |
| `CarouselPauseButton` | Later/P1 | Iconsax + custom | Required if carousel auto-plays. |

Decision:

```text
For first web MVP, defer the carousel until the static responsive home page is approved.
The page should succeed even without animated promo cards.
If used, the carousel must be useful: verified rooms, map discovery, owner onboarding, safety.
```

Explanation:

```text
The carousel is a polish layer, not the foundation.
It adds premium motion, but it also adds risk: timing bugs, responsive issues, distraction, and accessibility requirements.
Build the home page first with strong search, real layout, images, trust, and area cards.
After the page works on desktop/tablet/mobile, add the carousel as an enhancement.
```

## 5. Trust And Sign-In Value

| Component | MVP | Source | Decision |
| --- | --- | --- | --- |
| `SignInValueCard` | Yes | Expedia member banner adapted | Explain why signing in matters. |
| `TrustExplainer` | Yes | Custom | Explain verification labels honestly. |
| `TrustBadge` | Yes | Custom | Owner Submitted, Admin Reviewed, Photos Confirmed, Physically Verified. |
| `ProtectedActionGate` | Later/P1 | Custom + Dialog/Sheet | Needed when user opens full details/book/message. |

Copy direction:

```text
Sign in to view full details, save hostels, and send safe enquiries.
```

Do not imply:

```text
Payment is handled.
All hostels are physically verified.
Rooms are guaranteed without admin review.
```

## 6. Owner / Manager CTA

| Component | MVP | Source | Decision |
| --- | --- | --- | --- |
| `OwnerCTA` | Yes | Expedia list property pattern + custom | "List your hostel" / "Advertise your hostel". |
| `ManagerSetupTeaser` | Later/P1 | Custom | Explain future self-service listing. |

Business rule:

```text
MVP starts with manual/admin-managed listings.
Later owners/managers can submit listings for admin confirmation.
Managers pay to post/advertise hostels, not student booking payments.
```

Placement rule:

```text
Owner/manager content gets a dedicated section, banner, and route.
It should not be the hero focus.
Students finding hostels is the main product experience.
```

## First UCC Area Defaults

Use these as the first area chips/cards while the local area model is being refined:

| Display Name | Alternate / Context | Why It Starts Here |
| --- | --- | --- |
| Science / New Site | Northern Campus | UCC describes New Site/Northern Campus as popularly called Science and near Kwaprow and Amamoma. |
| Ayensu | Ayensu Park / New Site context | Appears in UCC hostel/location references and student-hostel search data. |
| Kwaprow | Kwaprow community | Close to UCC/New Site and appears in hostel listings. |
| Amamoma | Amamoma community | UCC surrounding community with hostel listings and official UCC community references. |
| Apewosika / Old Site | Southern Campus context | UCC describes Old Site as situated around Apewosika and Kokoado. |
| Kokoado / Old Site | Southern Campus context | Useful for Old Site discovery and campus-area SEO. |

Research notes:

```text
UCC official campus page confirms Science/New Site, Kwaprow, Amamoma, Apewosika, and Kokoado context.
Hostel listing/search references confirm Kwaprow, Amamoma, and Ayensu usage around UCC.
Final display names should be validated with local student language before launch.
```

## 7. Footer / SEO

| Component | MVP | Source | Decision |
| --- | --- | --- | --- |
| `Footer` | Yes | Expedia/Amber inspiration + custom | SEO, support, safety, manager links. |
| `FAQAccordion` | Yes/P1 | shadcn Accordion | Helps SEO and trust. |
| `SEOContentBlock` | Yes/P1 | Custom | UCC area guide content. |

Footer groups:

```text
Students
Managers
Trust and Safety
Universities and Areas
Support
Legal
```

## Phase 1 Deferred Items

Defer these until after the static/responsive home foundation is approved:

```text
MobileHeroCarousel
CarouselProgressTimer
CarouselPauseButton
RoomOccupantsSelector advanced popover
AccountMenuPopover
FloatingHelpButton
GetAppButtonFuture
Animated Iconsax paid pack
Full map view
Payments
Owner self-service dashboard
```

## Required Review Decisions

Before implementation, answer these:

```text
1. Should Phase 1 include the mobile carousel, or defer it until the static home page is approved?
2. Should the first homepage visual be a real hostel/student accommodation image, a map/search preview, or a licensed Reales-style property visual?
3. Should the search tabs be Hostels / Areas / Map / Verified / For Managers, or should For Managers stay in the header only?
4. Should desktop header include "Get the app" as future CTA, or hide it until mobile app work starts?
5. Which UCC areas should appear first in area chips/cards?
```

Answered:

```text
1. Defer carousel until static responsive home is approved.
2. Use temporary license-safe web images now; replace with real verified hostel/listing images later.
3. Use Hostels / Areas / Map / Verified / For Managers, with For Managers secondary.
4. Hide Get the app for now.
5. Start with Science/New Site, Ayensu, Kwaprow, Amamoma, Apewosika/Old Site, Kokoado/Old Site.
```

## Acceptance Criteria

Phase 1 component sourcing is ready when:

```text
Each MVP component has a source.
Paid/free status is clear.
Mobile and desktop behavior are defined.
Deferred components are agreed.
No component copies protected branding or exact layouts.
The first implementation can be tested against desktop, tablet, and mobile sizes.
```
