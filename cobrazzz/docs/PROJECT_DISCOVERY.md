# Project Discovery

## Project Vision

App name:

```text
Hostel Premium
```

What are we trying to establish?

```text
A web-first hostel/accommodation discovery platform where students can find, compare, save, and request rooms from trusted hostel owners. The MVP focuses on UCC, then expands to other universities in Ghana and later beyond Ghana if the model works.
```

Why should this exist?

```text
Students need an easy way to discover trustworthy hostels online from Google, shared links, schools, and social channels before installing any app. Once the web product proves demand, the same structure can expand into a mobile app.
```

Success means:

```text
1. A UCC student can discover hostels from Google or a shared link.
2. A student can compare room types, prices, amenities, photos, and location details.
3. A student can submit a request without confusion.
4. Hostel owners/admins can add and manage listings.
5. The data model supports multiple universities, starting with UCC and expanding across Ghana.
6. Desktop, tablet, and mobile layouts each feel intentionally designed.
```

## Target Users

Primary users:

```text
UCC students looking for hostel or accommodation options for the MVP. Later, students from other Ghanaian universities and eventually schools beyond Ghana.
```

Secondary users:

```text
Hostel owners, admins, support users, and future mobile app users.
```

User pain points:

```text
1. Students struggle to find reliable hostel information online.
2. Prices, rooms, photos, amenities, and location details are often scattered or outdated.
3. Many accommodation experiences feel generic, unsafe, or hard to trust.
4. Mobile-only products are harder to discover from Google.
```

## Scope

MVP must include:

```text
1. SEO-friendly public landing/discovery pages.
2. Hostel listing/search page.
3. Hostel detail page with photos, room types, amenities, prices, location, and request CTA.
4. Booking/request enquiry form.
5. Favorites or saved hostels.
6. Authentication for students and hostel owners.
7. Owner/admin listing management.
8. Responsive layouts for desktop, tablet, and mobile.
9. Paid or approved hostel-manager listing/advert placement workflow, handled carefully and professionally.
```

Not in MVP:

```text
1. Student hostel-fee payments, deposits, or room-fee collection.
2. In-app chat.
3. Reviews.
4. AI recommendations.
5. Native mobile app.
6. Complex map search.
7. Lease contract signing, payment invoices, or legal payment workflows.
```

Future vision:

```text
1. Native mobile app using the same product structure.
2. Student payments or deposits after legal, operational, authority, contract, receipt, and dispute workflows are planned.
3. Owner dashboard analytics.
4. Reviews and verification badges.
5. Map search.
6. Notifications.
7. Chat or guided enquiry flow.
8. Lease contract support, payment invoices, receipts, and compliant booking/payment records.
```

## Business Model Decision

```text
For MVP, students do not pay hostel fees, deposits, or room payments through the platform. Students only send booking/request enquiries.

Revenue comes from hostel managers/owners paying to post or advertise their hostels. The product should feel like a professional verified listing and lead-generation platform, not a casual classified site.

Any future student payment, lease, invoice, receipt, deposit, or contract workflow must be planned as a separate legal/operational phase with proper authority involvement and clear rules.
```

## Listing Operations Decision

```text
Use both admin-seeded listings and owner-submitted listings.

At launch, the admin/team can manually add UCC hostel listings to create useful supply and attract students.

After the system is ready, hostel owners/managers can submit and manage their own hostel listings, but public publishing requires admin approval.

The team should physically visit or otherwise verify hostels before showing strong verification/trust claims. Verification should confirm that rooms, images, prices, amenities, and location claims match reality.
```

Listing statuses:

```text
draft
submitted_for_review
needs_changes
approved
published
rejected
archived
```

Verification levels:

```text
unverified
owner_submitted
admin_reviewed
physically_verified
```

Public trust labels:

```text
Unverified - internal state only; avoid showing as a positive badge.
Owner Submitted - the hostel owner/manager submitted the listing, but the team has not confirmed it.
Admin Reviewed - the team reviewed the listing details online/admin-side and approved it for publishing.
Photos Confirmed - the team has evidence that room photos match the listing.
Physically Verified - the team visited or directly confirmed the hostel, room condition, amenities, price, and location.
```

Trust label rule:

```text
Do not show "Verified Hostel" unless the hostel has reached the physically_verified level or an equivalent documented verification record. Lower levels must use more precise labels so students are not misled.
```

## Key Product Decision

```text
Start with a web app first so users can access it directly from Google and shared links. Build product structure and backend choices so the later app can reuse the same concepts.
```

## Responsive Design Warning

```text
Do not build a mobile layout and stretch it across desktop.
Desktop needs its own composition: wider content constraints, multi-column sections, desktop navigation, meaningful side panels, and clear information density.
Mobile needs focused single-column flows.
Tablet needs an intermediate layout, not accidental scaling.
```

## Recommended Stack

Option A:

```text
Next.js + Supabase + Tailwind CSS + shadcn/ui - best fit for SEO, public pages, structured data, auth, storage, owner/admin workflows, and later mobile API reuse.
```

Option B:

```text
Expo React Native + Supabase - good for mobile experience, but weaker as the first Google-accessible product.
```

Recommendation:

```text
Use Next.js + Supabase first. Design data models, APIs, and components so the later mobile app can reuse product decisions and backend structure.
```

## Design Direction

Brand mood:

```text
premium, warm, trustworthy, student-friendly, calm, modern, clean
```

Color direction:

```text
Warm neutrals, soft off-white backgrounds, deep charcoal text, muted gold/amber or warm green accents, careful use of gradients.
```

Typography direction:

```text
Clean modern sans serif with strong hierarchy. Avoid oversized mobile-style text on desktop.
```

Visual asset direction:

```text
Real or generated student lifestyle imagery, hostel room photos, neighborhood/location visuals, clean empty states, and warm abstract backgrounds.
```

## Product References

Primary inspiration:

```text
Amber Student - use as a reference for student-accommodation marketplace structure, not for copied branding or exact layouts.
```

Ghana/UCC references:

```text
Downtown Virgins Hostel, Ewusiwa Hostel, Bookly, RooMates Ghana, Hostella, and other Ghana hostel/accommodation products.
```

Reference notes live in:

```text
docs/REFERENCES.md
```

## Pages and Screens

```text
1. Landing / Home
   Goal: explain value and send users into hostel discovery
   Primary action: search or browse hostels
   Desktop behavior: full desktop hero with search and featured content, not a centered mobile stack
   Mobile behavior: compact hero, sticky search, single-column cards

2. Hostel listing / Search
   Goal: help students compare hostels quickly
   Primary action: filter and open hostel detail
   Desktop behavior: filter sidebar + results grid/list + map panel or area context panel
   Mobile behavior: filter sheet + single-column results + map toggle
   Important filters: area, price range, room type, occupants, distance to campus, amenities, availability, team quality score, verification level

3. Hostel detail
   Goal: help a student decide whether to request/book
   Primary action: request/book room
   Desktop behavior: gallery, details, nearby hostels/map context, and sticky enquiry panel
   Mobile behavior: stacked content with sticky bottom CTA and nearby hostels/map entry

4. Booking request
   Goal: collect student enquiry details safely
   Primary action: submit request
   Desktop behavior: form + summary panel
   Mobile behavior: single-column form

5. Favorites / Saved hostels
   Goal: let students revisit options
   Primary action: open saved hostel

6. Auth
   Goal: sign in/sign up for students and owners
   Primary action: authenticate

7. Owner dashboard
   Goal: let owners manage listings and booking requests
   Primary action: add/manage hostel
   Desktop behavior: dashboard layout with table/panels
   Mobile behavior: simplified management list

8. Map search
   Goal: help students visually compare hostel location, closeness, price, team quality score, availability, and nearby alternatives
   Primary action: select a hostel from the map or filter visible hostels
   Desktop behavior: split view with filters/results on one side and map on the other
   Mobile behavior: map/list toggle with bottom sheet hostel previews
   MVP caution: map data must be accurate enough before relying on it for trust or distance claims
```

## Search and Map Filters

Core search filters:

```text
university
area
price range
room type
number of occupants
distance to campus
amenities
availability
team quality score
verification level
```

Map behavior:

```text
Students should be able to view hostels on a map, choose nearby hostels, and filter by team quality score, cost, availability, verification level, room type, amenities, and distance.

The map should help students discover similar nearby options, such as hostels close to the selected hostel, hostels with similar prices, and hostels with similar team quality scores.
```

## Ratings Policy

```text
MVP should not launch public student ratings or reviews.

Use an internal/admin-facing team quality score first. This score can consider room condition, photo accuracy, location accuracy, water reliability, security, amenities, price clarity, and owner responsiveness.

Public UI can show precise trust labels and quality cues, but it must not present the score as public student reviews.

Student ratings/reviews should be added later only after real students have enquired, visited, or stayed, and after moderation, abuse handling, owner disputes, and review authenticity rules are planned.
```

## Components and Libraries

Free components:

```text
shadcn/ui, Radix primitives, Tailwind CSS, Lucide icons, TanStack Query if needed
```

Paid components or assets:

```text
Tailwind Plus, Untitled UI, UI8 assets, premium photo/icon packs only if approved.
```

Custom components needed:

```text
1. HostelCard
2. HostelSearchBar
3. FilterPanel / FilterSheet
4. HostelGallery
5. RoomTypeCard
6. AmenityBadge
7. PriceBadge
8. RequestBookingForm
9. OwnerListingTable
10. EmptyState
```

Cost warning:

```text
Paid UI kits, map APIs, image storage, email/SMS notifications, and future payments may cost money. Ask before adding them.
```

Detailed tool and component decisions live in:

```text
docs/TOOLS_AND_COMPONENTS.md
```

## Roadmap

Phase 1:

```text
Planning docs, Next.js setup, design system foundation, responsive shell, sample data.
```

Phase 2:

```text
Public landing, listing/search, hostel detail, and responsive QA.
```

Phase 3:

```text
Auth, booking request flow, favorites, Supabase schema.
```

Phase 4:

```text
Owner/admin listing management and booking request management.
```

Phase 5:

```text
SEO, production hardening, security review, cost review, analytics, launch.
```

## Acceptance Criteria

The project is ready to plan when:

- Web-first direction is approved.
- Next.js + Supabase direction is approved.
- MVP scope is approved.
- Responsive desktop/tablet/mobile layout rule is accepted.
- Paid tools and setup needs are disclosed.
- Roadmap phases are approved.
