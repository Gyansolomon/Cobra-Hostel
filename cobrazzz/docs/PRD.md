# Product Requirements Document

## Product Name

```text
Hostel Premium
```

## One-Sentence Description

```text
A web-first hostel discovery platform that starts with UCC and helps students find, compare, save, and request trusted hostel rooms, with a structure that can expand across Ghanaian universities.
```

## Problem

UCC students need a reliable way to discover hostels online from Google and shared links. Hostel information is often scattered, outdated, incomplete, or not trustworthy enough to support a confident decision. The same problem exists across Ghanaian universities, so the MVP should be UCC-focused while the product structure supports future expansion.

## Target Users

Primary users:

```text
UCC students looking for hostel/accommodation options.
```

Secondary users:

```text
Hostel owners, admins, support users, and later students from other Ghanaian universities.
```

## Goals

Business goals:

- Build a discoverable web product before investing in native mobile.
- Create a trusted marketplace-like experience for student accommodation.
- Prove the model with UCC before expanding to other Ghanaian universities.
- Monetize the MVP through professional hostel manager/owner listing or advert fees.
- Prepare the backend/product structure for a future mobile app.

User goals:

- Find hostels quickly.
- Compare rooms, prices, amenities, location, and photos.
- Save options.
- Send booking/request enquiries with confidence, without paying hostel fees through the platform in MVP.

## Success Criteria

The product is successful when:

```text
1. A new visitor can understand the product and search/browse hostels from the first page.
2. A student can compare hostels and submit a request from desktop or mobile.
3. Desktop layout feels like a real desktop web app, not a stretched mobile view.
4. Owner/admin users can add and manage hostel listings.
5. The product can later support a mobile app without rethinking the entire backend.
```

## Constraints

```text
platform: web first
future platform: mobile app later
recommended stack: Next.js + Supabase
must avoid: stretched mobile layout on desktop
paid tools: require approval
student payments: excluded from MVP
revenue model: hostel manager/owner paid listings or adverts
```

## MVP Features

```text
1. Landing/home page
2. Hostel listing/search
3. Filters
4. Hostel detail page
5. Image gallery
6. Room types and prices
7. Amenities
8. Booking/request enquiry form
9. Favorites/saved hostels
10. Student/owner auth
11. Owner listing management
12. Booking request management
13. Admin-controlled listing approval/status for paid or approved adverts
14. Map/list discovery for hostel locations and nearby alternatives, if location data is reliable enough
```

## Future Features

```text
1. Native mobile app
2. Student payments/deposits after legal and operational planning
3. Chat
4. Student reviews and public ratings
5. Advanced map search
6. Verification badges
7. Notifications
8. AI recommendations
9. Lease contracts, payment invoices, receipts, and authority-supported compliance workflows
```

## Payment and Legal Scope

```text
MVP does not collect hostel fees, deposits, or room payments from students. The platform only collects booking/request enquiries.

The first business model is paid hostel manager/owner listing or advert placement. Listings must still feel professional, verified, and safe for students.

Future student payment features require a separate phase covering legal authority involvement, lease contracts, invoices, receipts, refund/dispute rules, owner verification, and support operations.
```

## Authentication Gate

```text
Visitors can reach the website without signing in.

Public users can view the home page, UCC hub, search/listing pages, map/list previews, and public hostel teaser pages.

Users must sign in before they can view full hostel details, full room details, full galleries, submit a booking/request enquiry, save favorites persistently, message/contact a hostel manager through the platform, or reveal manager-approved phone/WhatsApp options.
```

SEO rule:

```text
Do not hide every hostel page completely behind auth. Use public teaser pages with enough approved information for Google and user trust, then gate the deeper details/actions behind sign-in.
```

Web MVP auth:

```text
Use Google sign-in first.
Require phone/WhatsApp number in profile before booking/request enquiry or manager messaging.
Do not add SMS OTP unless approved later.
```

Future app auth:

```text
Add Facebook sign-in and Apple sign-in when building the mobile app.
```

## Communication Model

```text
Booking enquiries and student-manager messages should go through the platform first.

This gives the platform lead tracking, safety review, support context, and proof that a student contacted a manager through the app.

Hostel managers can decide in their manager setup whether to reveal direct contact options such as phone number, WhatsApp number, or a custom availability note.

Example manager note:
"If I do not reply within 2 hours, please call or WhatsApp this number."

Direct contact reveal is a manager-controlled setting, not the default replacement for platform enquiries.
```

## Ratings Policy

```text
MVP should use admin/team quality scoring, not public student ratings.

Team quality score can support filters and internal ranking based on room condition, photo accuracy, location accuracy, water reliability, security, amenities, price clarity, and owner responsiveness.

Public student reviews and ratings are future scope because they need moderation, authenticity checks, owner dispute handling, and abuse prevention.
```

## Listing Operations

```text
MVP uses a hybrid listing model.

First, admin/team users manually add UCC hostel listings to seed the marketplace and make the website useful for students.

Later, hostel owners/managers can submit and manage their own listings. Owner-submitted listings must go through admin review before public publishing.

The team should visit or verify hostels before showing strong verified/trusted badges. Verification must confirm that rooms, photos, prices, amenities, and location claims match the real hostel.
```

## User Flows

### Flow 1: Student Discovery

```text
Google/shared link
-> Landing, UCC hub, listing page, or public hostel teaser
-> Search/filter
-> Optional map view
-> Click featured hostel or "view details"
-> Prompt sign in if not authenticated
-> Full hostel detail
-> Room type/full gallery
-> Booking/request enquiry
-> Message goes through platform first
-> Direct contact options appear only if manager allows them
-> Success state
```

### Flow 1B: Future Mobile First Run

```text
Splash/logo
-> Location/area explainer
-> Choose current location or manual university/area selection
-> Map/manual location confirmation
-> Sign-up/login prompt with skip option
-> Home
-> Protected action attempted
-> Sign-up/login required
-> Return to requested hostel/action
```

### Flow 2: Student Saves Hostel

```text
Browse hostels
-> Save favorite
-> Sign in if required
-> Favorites page
-> Return to detail/request
```

### Flow 2B: Student Uses Map Discovery

```text
Browse/search hostels
-> Open map view
-> Filter by area, price, rating, availability, verification level, room type, occupants, amenities, or distance
-> Select hostel pin
-> View quick preview
-> Compare nearby/similar hostels
-> Open hostel detail
```

### Flow 3: Owner Adds Listing

```text
Owner signs in
-> Owner dashboard
-> Add hostel
-> Add room types/prices/images
-> Submit listing for review
-> Admin reviews listing
-> Admin requests changes or approves
-> Listing is published
-> Manage requests
-> Configure contact reveal options
```

### Flow 4: Admin Seeds and Verifies Hostel

```text
Admin signs in
-> Add hostel manually
-> Add room types/prices/images
-> Mark source as admin_seeded
-> Review data quality
-> Visit/verify hostel when possible
-> Set verification level
-> Publish listing
```

## Screens

```text
1. Landing / Home
2. Hostel listing / Search
3. Filter panel / Filter sheet
4. Map search / Map-list split view
5. Hostel detail
6. Image gallery
7. Room type detail
8. Booking request
9. Booking success
10. Favorites
11. Sign in
12. Sign up
13. Mobile splash/onboarding
14. Mobile location/area setup
15. Mobile auth gate
16. Profile
17. Owner dashboard
18. My hostels
19. Add/Edit hostel
20. Add/Edit room type
21. Manage images
22. Booking requests
23. Request detail
```

## Page Planning

Every major page must include separate desktop, tablet, and mobile layout notes before implementation.

```text
Desktop: use desktop composition, max-widths, grid/columns, side panels, and desktop navigation where appropriate.
Tablet: use intermediate layout, usually 2-column or adaptive panels.
Mobile: use focused single-column flow, sheets, sticky CTAs, and touch-friendly controls.
```

Detailed page plans live in:

```text
docs/PAGE_PLANS.md
```

## Roles

```text
student:
- browse hostels
- save favorites
- submit booking requests
- manage profile

hostel_owner:
- create/edit hostels
- create/edit room types
- manage images/prices/availability
- view and respond to booking requests

admin:
- manage users/listings
- moderate content
- approve or reject owner-submitted listings
- set verification level after review or physical visit
- support owners/students
```

## Success Metrics

```text
1. Search/listing page visits from Google.
2. Hostel detail views.
3. Booking request submissions.
4. Favorite saves.
5. Owner listings created.
6. Mobile and desktop visual QA pass.
```

## Risks

```text
1. Desktop layout becomes stretched mobile UI.
2. Hostel data quality is weak.
3. Image quality feels cheap.
4. Booking requests lack trust signals.
5. Owner/admin scope grows too large for MVP.
```

## Build Phases

```text
Phase 1: docs, setup, design system, responsive shell, sample data
Phase 2: landing, listing/search, hostel detail
Phase 3: auth, favorites, booking request
Phase 4: owner/admin management
Phase 5: SEO, audits, launch hardening
```
