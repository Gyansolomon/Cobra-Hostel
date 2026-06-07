# MVP Page Plans

## Purpose

This document defines the exact MVP pages before implementation. Each page must be planned for desktop, tablet, and mobile so the product does not become a stretched mobile layout on desktop.

## MVP Page List

```text
1. Home / Landing
2. University Hub - UCC
3. Hostel Search / Listings
4. Map Search
5. Hostel Detail
6. Image Gallery
7. Booking / Request Enquiry
8. Auth / Sign In
9. Mobile Splash / Onboarding
10. Location / Area Setup
11. Student Profile
12. Favorites / Saved Hostels
13. Owner Dashboard
14. Add / Edit Hostel Listing
15. Manager Contact Settings
16. Booking Requests Management
17. Admin Dashboard
18. Listing Review / Verification
19. Static Trust / Safety / How It Works Pages
```

---

## 1. Home / Landing

User role:

```text
Public visitor, student, hostel owner
```

Goal:

```text
Explain the product quickly and move students into UCC hostel discovery.
```

Primary action:

```text
Search by university, area, or hostel name.
```

Secondary actions:

```text
Browse UCC hostels, view map, learn how requests work, owner call-to-action.
```

Main content:

```text
Hero search, UCC-first positioning, popular areas, trust labels, featured hostels, map teaser, owner advert/listing CTA.
```

Components:

```text
SiteHeader, HeroSearch, UniversityChips, TrustStats, FeaturedHostelCard, AreaCard, MapPreview, OwnerCTA, Footer
```

States:

```text
Loading: featured hostels skeleton.
Empty: no featured hostels yet, show "UCC listings coming soon" with notify CTA.
Error: safe message and retry for featured data.
Success: search routes to listings.
```

Reference:

```text
Amber Student home search model, adapted to UCC and Ghana student trust needs.
```

Desktop behavior:

```text
Full web hero with search + supporting visual/map/featured content. Use multi-column layout, not centered mobile stack.
```

Tablet behavior:

```text
Hero becomes two stacked zones, with search full-width and featured/map preview below.
```

Mobile behavior:

```text
Context-first mobile header, large search pill, compact featured panel, horizontal quick discovery shortcuts, horizontal area chips, single-column featured hostels, optional mobile bottom nav.
```

Acceptance criteria:

```text
Visitor understands UCC hostel search within 5 seconds.
Search is visible without scrolling on common desktop and mobile sizes.
Desktop does not look like stretched mobile.
```

---

## 2. University Hub - UCC

User role:

```text
Public visitor, student
```

Goal:

```text
Create an SEO-friendly UCC hostel hub and organize listings by area, price, and student needs.
```

Primary action:

```text
Browse UCC hostels or filter by area/budget.
```

Main content:

```text
UCC overview, areas near campus, hostel count, featured verified hostels, price guide, transport notes, safety/trust notes, FAQ.
```

Components:

```text
UniversityHeader, AreaGrid, HostelCard, PriceGuide, FAQAccordion, SEOContentBlock, MapPreview
```

Data needed:

```text
university, campus areas, hostels, price ranges, area descriptions, FAQs.
```

Reference:

```text
Amber city/university SEO page structure, localized for UCC/Cape Coast.
```

Desktop behavior:

```text
Editorial + marketplace layout: left content/area guide, right featured/search panel where useful.
```

Mobile behavior:

```text
Search first, then areas, featured hostels, guide content, FAQ.
```

Risk:

```text
Thin SEO page with generic text. Content must be UCC-specific.
```

---

## 3. Hostel Search / Listings

User role:

```text
Public visitor, student
```

Goal:

```text
Help students compare hostels quickly.
```

Primary action:

```text
Open a hostel teaser/detail gate, then full detail after sign-in.
```

Secondary actions:

```text
Filter, sort, save, switch to map view.
```

Main content:

```text
Search bar, filter sidebar/sheet, results count, sort, hostel cards, map/list toggle, selected area context.
For map search, visible results and result count must respond to current map bounds and zoom level.
```

Filters:

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

Components:

```text
SearchHeader, FilterSidebar, FilterSheet, HostelCard, TrustBadge, PriceBadge, AmenityBadge, EmptyState, SortMenu, MapToggle
```

States:

```text
Loading: skeleton cards and filter placeholders.
Empty: no hostels match filters, suggest clearing filters or changing area.
Error: safe retry state.
Success: cards with verified labels, price, area, room types, availability, and CTA.
```

Permissions:

```text
Public users see summary/teaser cards only.
Clicking "view details" or a featured hostel opens a sign-in gate before full detail unless the user is already authenticated.
```

Reference:

```text
Expedia post-search results layout for serious marketplace comparison; see docs/EXPEDIA_REFERENCE_AUDIT.md.
Airbnb list/map interaction where panning or zooming the map changes the visible homes and count; see docs/SEARCH_MAP_LAYOUT_RULES.md.
Amber listing filters and cards; Ghana-specific filters from UCC hostel needs.
```

Desktop behavior:

```text
After search, the page should become more serious and task-focused.

Use a desktop-native results layout:
- top horizontal search summary bar: UCC/area, move-in period, room type/occupants, search button
- filter chip row and optional filter rail/modal depending on density
- results column: map-aware result count, sort dropdown, trust/sign-in/value banner, hostel result cards
- right sticky map panel on large screens where possible
- selected map pin and selected card should be linked

Avoid full-width card rows that feel empty.
Avoid a mobile card stretched across desktop.
Avoid showing all hostels when the map is zoomed into one smaller area.
```

Tablet behavior:

```text
Search summary stays at top.
Filters become a slide-over or collapsible panel.
Cards can use 2-column image/content composition if there is room.
Do not force the full desktop left rail if it makes the content cramped.
```

Mobile behavior:

```text
Use a mobile-native results layout:
- sticky compact search summary at top
- filter, sort, and map buttons as a compact action row
- filters open as bottom sheet or full-screen sheet
- single-column hostel cards
- image carousel or image stack at top of card
- price/range, trust label, area, and availability visible without opening the card
- map/list toggle stays reachable without covering card content
- map mode uses a full-screen map with bottom sheet hostel preview
- zooming or panning the map updates the copy, for example "1 hostel within map area"
- loading skeletons match the final mobile result card shape
- no full-page spinner unless paired with structured skeletons
```

Acceptance criteria:

```text
A student can narrow UCC hostels by area, price, room type, occupants, amenities, availability, and verification level.
Desktop feels like a serious comparison page, not a stretched mobile view.
Mobile keeps the same information hierarchy but uses sheets and stacked cards instead of desktop columns.
Map bounds, filters, and list results stay connected.
```

---

## 4. Map Search

User role:

```text
Public visitor, student
```

Goal:

```text
Help students visually compare hostel locations and discover nearby/similar options.
```

Primary action:

```text
Select a hostel pin and open detail.
```

Secondary actions:

```text
Filter map, compare nearby hostels, switch to list.
```

Main content:

```text
Map, hostel pins, selected hostel preview card, filters, similar nearby suggestions.
```

Components:

```text
MapView, HostelPin, MapFilterBar, HostelPreviewCard, SimilarHostelsPanel, BottomSheetPreview
```

Data needed:

```text
hostel coordinates, area, verified/approximate location status, price range, availability, room types, quality score, verification level.
```

Reference:

```text
Amber map/list accommodation discovery, adapted with lower-cost map strategy and UCC location accuracy rules.
```

Desktop behavior:

```text
Split screen: filters/results on one side, map on the other. Selected hostel preview stays visible.
```

Mobile behavior:

```text
Map/list toggle. Pins open bottom sheet previews. Filters open as sheet.
```

Cost note:

```text
Start with stored coordinates. Avoid paid geocoding on every load.
```

Risk:

```text
Wrong hostel coordinates damage trust. Show approximate labels unless location is verified.
```

---

## 5. Hostel Detail

User role:

```text
Public visitor for teaser, signed-in student for full detail
```

Goal:

```text
Help a student decide whether to sign in for full details and then submit an enquiry.
```

Primary action:

```text
Submit booking/request enquiry.
```

Secondary actions:

```text
Save hostel, view gallery, view map, compare nearby hostels, message manager if enabled.
```

Main content:

```text
Public teaser: hostel name, area, teaser images, broad price/range, trust summary, basic amenities, sign-in gate.

Full signed-in detail: gallery, hostel name, area, distance/location, trust labels, team quality cues, room types, prices, amenities, availability, house rules, map, manager contact reveal rules, FAQs, similar hostels.
```

Components:

```text
HostelGallery, TrustBadge, QualitySummary, RoomTypeCard, AmenityGrid, PricePanel, StickyEnquiryPanel, MapPreview, SimilarHostels, FAQAccordion
```

States:

```text
Loading: detail skeleton.
Empty: listing unavailable or unpublished.
Error: safe retry.
Success: enquiry CTA routes signed-out users to auth, signed-in users to enquiry form.
```

Permissions:

```text
Public users cannot view full room details, full gallery, deeper availability, manager contact reveal, or enquiry/messaging.
Authenticated students can view full detail for published hostels.
```

Reference:

```text
Amber detail page structure; UCC hostel site references for room/photo/amenity emphasis.
```

Desktop behavior:

```text
Gallery and details in main column, sticky enquiry/action panel on side, nearby/map content below or beside.
```

Mobile behavior:

```text
Gallery first, trust/title summary, room options, amenities, map/area context, similar hostels, FAQ/support sections.
Sticky bottom enquiry CTA can be used, but it must not cover room cards or key price/trust information.
Long mobile detail pages are acceptable only when every section has a clear job and a clean anchor/section order.
```

Risk:

```text
Overclaiming verification. Trust labels must match documented status.
```

---

## 6. Image Gallery

User role:

```text
Public visitor, student, admin/owner in management mode
```

Goal:

```text
Let students inspect hostel rooms clearly.
```

Primary action:

```text
View room and hostel photos.
```

Components:

```text
GalleryGrid, Lightbox, RoomImageGroup, ImageCaption, VerificationNote
```

Desktop behavior:

```text
Large masonry/grid preview with lightbox.
```

Mobile behavior:

```text
Swipeable gallery with captions and room labels.
```

Risk:

```text
Images may not match real rooms. Admin verification must track photo accuracy.
```

---

## 7. Booking / Request Enquiry

User role:

```text
Signed-in student
```

Goal:

```text
Collect a serious enquiry without processing payment.
```

Primary action:

```text
Submit enquiry.
```

Main content:

```text
Selected hostel summary, room type, preferred move-in period, student phone/WhatsApp, message, consent/safety note.
```

Components:

```text
RequestForm, HostelSummaryCard, PhoneRequiredNotice, ConsentCheckbox, SuccessConfirmation
```

States:

```text
Loading: submit disabled.
Empty: missing profile phone prompts user to update profile.
Error: validation errors and safe server error.
Success: enquiry sent, show next steps and any manager-approved contact options.
```

Permissions:

```text
Requires signed-in student.
```

Reference:

```text
Amber enquiry/booking CTA pattern, but no student payment in MVP.
```

---

## 8. Auth / Sign In

User role:

```text
Student, owner, admin
```

Goal:

```text
Let users authenticate before protected actions.
```

Primary action:

```text
Continue with Google.
```

Future:

```text
Facebook and Apple sign-in for mobile app phase.
```

Components:

```text
AuthCard, GoogleButton, RoleIntentNotice, PhoneProfileStep
```

Risk:

```text
Collect phone/WhatsApp only when needed; do not add SMS OTP without cost approval.
```

---

## 9. Mobile Splash / Onboarding

User role:

```text
Future mobile app user
```

Goal:

```text
Create a premium first-run flow before home without blocking exploration unnecessarily.
```

Primary action:

```text
Continue into location/area setup.
```

Main content:

```text
Logo/brand state, short transition, location/area value explainer, optional auth prompt later.
```

Components:

```text
SplashLogo
LogoToContextTransition
OnboardingVisual
OnboardingCTA
SkipLink
```

States:

```text
Loading: brief logo/splash.
Success: transition to location/area setup.
Reduced motion: show final state without animation.
```

Reference:

```text
Foodpanda/Mobbin splash and auth rhythm, adapted to Hostel Premium.
```

Mobile behavior:

```text
Full-screen mobile-only flow. No desktop equivalent required for web MVP.
```

---

## 10. Location / Area Setup

User role:

```text
Future mobile app user, optional web user when map/location features require it
```

Goal:

```text
Let users choose UCC, campus area, or location context before browsing hostels.
```

Primary action:

```text
Choose current location or select university/area manually.
```

Secondary actions:

```text
Search area, use map pin, skip for now.
```

Main content:

```text
Location explainer, manual area search, suggestions, map preview, confirm button.
```

Components:

```text
LocationPermissionCard
AreaSearchInput
AreaSuggestionList
MapPinPreview
LocationUpdatingOverlay
LocationErrorState
ConfirmAreaButton
```

States:

```text
Empty: no selected area yet.
Typing: suggestions appear.
Error: address/area not found.
Loading: updating selected context.
Success: selected university/area confirmed.
```

Reference:

```text
Foodpanda/Mobbin location permission, map, address entry, invalid address, selected pin, and updating states adapted to hostel discovery.
```

Mobile behavior:

```text
Manual area selection must work without GPS. UCC and Cape Coast area suggestions should be prominent in MVP.
```

Risk:

```text
Wrong GPS/location assumptions. Use selected area context unless precise location permission and reliable data exist.
```

---

## 11. Student Profile

User role:

```text
Signed-in student
```

Goal:

```text
Store contact/profile details needed for enquiries.
```

Primary action:

```text
Update phone/WhatsApp and basic student details.
```

Components:

```text
ProfileForm, PhoneField, SchoolField, EnquiryHistory, SavedHostelsSummary
```

Permissions:

```text
User can only manage own profile.
```

---

## 12. Favorites / Saved Hostels

User role:

```text
Signed-in student
```

Goal:

```text
Let students compare and return to saved hostels.
```

Primary action:

```text
Open saved hostel detail.
```

States:

```text
Empty: show suggested UCC areas and popular hostels.
```

---

## 13. Owner Dashboard

User role:

```text
Hostel owner/manager
```

Goal:

```text
Manage hostel listings, listing status, enquiries, and contact reveal options.
```

Primary action:

```text
Add or manage hostel listing.
```

Main content:

```text
Listing status cards, enquiries, required actions, contact settings, advert/listing status.
```

Components:

```text
DashboardShell, ListingStatusCard, RequestInbox, ContactSettingsSummary, OwnerActionList
```

Desktop behavior:

```text
Dashboard layout with sidebar, metrics/status row, listing table, request panel.
```

Mobile behavior:

```text
Simplified list of tasks and listings.
```

---

## 14. Add / Edit Hostel Listing

User role:

```text
Owner/manager, admin
```

Goal:

```text
Create accurate hostel data for review and publishing.
```

Primary action:

```text
Submit listing for review or save draft.
```

Fields:

```text
hostel name, university, area, address, landmark, coordinates if known, room types, prices, amenities, availability, images, owner contact, rules, notes.
```

States:

```text
Draft, submitted, needs changes, approved, published.
```

Risk:

```text
Bad image/location data. Use validation and admin review.
```

---

## 15. Manager Contact Settings

User role:

```text
Hostel owner/manager
```

Goal:

```text
Let managers control whether direct phone/WhatsApp is revealed.
```

Primary action:

```text
Enable or disable phone/WhatsApp reveal and add contact note.
```

Components:

```text
ContactRevealToggle, PhoneInput, WhatsAppInput, AvailabilityNote, PreviewCard
```

Rule:

```text
Platform enquiry remains the primary path. Direct contact reveal is optional.
```

---

## 16. Booking Requests Management

User role:

```text
Owner/manager, admin/support
```

Goal:

```text
Manage student enquiries safely.
```

Primary action:

```text
Respond to enquiry or update status.
```

Statuses:

```text
new, viewed, replied, unavailable, follow_up_needed, closed
```

Components:

```text
RequestInbox, RequestDetailPanel, StudentContactCard, MessageThread, StatusSelect
```

Security:

```text
Owners only see requests for their own hostels. Admin/support can review for support and abuse handling.
```

---

## 17. Admin Dashboard

User role:

```text
Admin/support
```

Goal:

```text
Control listings, approvals, verification, users, and platform quality.
```

Primary action:

```text
Review pending listings and verification tasks.
```

Components:

```text
AdminShell, PendingListingsTable, VerificationQueue, UserTable, AuditLogTable, QualityAssessmentPanel
```

Desktop behavior:

```text
Dense operational dashboard. Tables and side panels are appropriate.
```

Mobile behavior:

```text
Basic review support only; full admin work optimized for desktop.
```

---

## 18. Listing Review / Verification

User role:

```text
Admin
```

Goal:

```text
Approve, reject, request changes, or verify hostel listings.
```

Primary action:

```text
Set listing status and verification level.
```

Main content:

```text
Listing data, images, owner info, location, room types, price claims, verification checklist, quality score fields, audit notes.
```

Trust outputs:

```text
Owner Submitted, Admin Reviewed, Photos Confirmed, Physically Verified.
```

Risk:

```text
Admin accidentally overclaims verification. UI must separate review status from physical verification.
```

---

## 19. Static Trust / Safety / How It Works Pages

User role:

```text
Public visitor, student, owner
```

Goal:

```text
Explain how the platform works, what verification means, and what payments are not handled in MVP.
```

Pages:

```text
How It Works
For Hostel Managers
Trust and Verification
Safety
Contact/Support
```

Important copy:

```text
Students do not pay hostel fees through the platform in MVP.
Booking enquiries go through the platform first.
Verification labels have specific meanings.
```

---

## Approval Gate

These page plans are ready for implementation planning only after:

```text
1. MVP page list is approved.
2. Map scope is approved.
3. Admin/owner workflows are approved.
4. Auth and enquiry gates are approved.
5. Onboarding and location/auth states are approved in `docs/ONBOARDING_AND_AUTH_FLOW.md`.
6. Component/tool choices are documented.
```
