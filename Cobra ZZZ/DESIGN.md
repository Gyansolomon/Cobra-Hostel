# Hostel Premium Design System

## Design Goal

Hostel Premium must feel like a serious, trusted student accommodation product, not a casual classified site and not a generic real-estate template.

The first impression should communicate:

```text
1. This is built for students.
2. This starts with UCC and can expand across Ghana.
3. Listings are organized, reviewed, and safer than random social media posts.
4. Students can compare hostels clearly before making an enquiry.
5. Hostel managers can advertise professionally.
```

## Brand Mood

The app should feel:

```text
premium
warm
trustworthy
student-friendly
organized
modern
calm
clear
local to Ghana/UCC
serious enough for parents, students, hostel managers, and authorities
```

The app should not feel:

```text
cheap
childish
overly playful
generic blue SaaS
like a random real-estate marketplace
like a copied Amber Student clone
like a stretched mobile app on desktop
like an AI-generated landing page
```

## Positioning

Core message:

```text
Find trusted student hostels around UCC.
```

Supporting message:

```text
Compare rooms, prices, locations, amenities, verification status, and availability before sending a booking enquiry.
```

Owner message:

```text
List your hostel professionally and receive serious student enquiries through the platform.
```

Trust message:

```text
We separate owner-submitted listings from admin-reviewed, photo-confirmed, and physically verified hostels.
```

## Visual References

Use references for structure only, not copying.

### Amber Student

Learn:

```text
search prominence
student accommodation marketplace structure
listing filters
room/detail hierarchy
trust signals
SEO content depth
```

Do not copy:

```text
brand, exact layout, copywriting, illustrations, global claims, payment flow.
```

### Airbnb / Booking-Style Marketplace Patterns

Learn:

```text
gallery treatment
sticky detail CTA
filters
map/list search behavior
clear price presentation
```

Do not copy:

```text
branding, exact card structure, review system, or booking/payment assumptions.
```

### Ghana/UCC Hostel Sites

Learn:

```text
what students care about locally: water, security, Wi-Fi, study space, room sharing, price per semester/year, distance, transport, owner contact.
```

Do not copy:

```text
weak layouts, low-quality image treatment, unstructured information, or unsupported trust claims.
```

### Reales Real Estate App UI Kit

Learn:

```text
polished property-browsing UI rhythm
onboarding and login/register flow polish
card hierarchy
feed/filter structure
property detail structure
saved/compare flow thinking
component/variant organization
```

Do not copy:

```text
unchanged real-estate screens, real-estate copy, mortgage/payment flows, or brand identity without Hostel Premium adaptation.
```

License status:

```text
The owner says Reales has been purchased. It can be used as an approved design source if the purchased license covers this project.
```

Detailed notes:

```text
docs/VISUAL_REFERENCES_HOME.md
```

## Visual Personality

The product should feel like:

```text
warm editorial marketplace + operational dashboard
```

Student-facing pages:

```text
more visual, warm, guided, searchable, trust-heavy.
```

Owner/admin pages:

```text
denser, calmer, operational, table/panel driven.
```

## Color System

### Core Palette

Primary text:

```text
Ink Black - #222222
```

Main background:

```text
Clean White - #FFFFFF
```

Soft warm surface:

```text
Soft Gray - #F7F7F7
```

Soft surface:

```text
Clean White - #FFFFFF
```

Border:

```text
Line Gray - #DDDDDD
```

Muted text:

```text
Text Gray - #6A6A6A
```

Primary accent:

```text
Hostel Rose - #FF385C
```

Accent hover:

```text
Rose Hover - #E31C5F
```

Trust green:

```text
Verified Green - #2F7D4F
```

### Status Colors

```text
success: #2F7D4F
warning: #B7791F
error: #B42318
info: #2563EB
pending: #8A6A2A
neutral: #746B62
```

### Trust Badge Colors

```text
Owner Submitted: neutral stone
Admin Reviewed: blue/info
Photos Confirmed: rose
Physically Verified: green
```

Rules:

```text
Use white as the foundation.
Use soft gray only for depth, section contrast, and secondary surfaces.
Use rose for primary calls to action and active states only.
Use green only for real trust/verification/success.
Do not use many bright accent colors.
Do not make every card colorful.
Do not use purple gradient AI-style decoration.
Do not use low-contrast gray text.
Do not make the whole website beige or cream.
Do not use gold as the brand/action color.
```

## Typography

Recommended web font direction:

```text
Primary: Geist Sans
Fallback: system sans-serif
Optional support font: Plus Jakarta Sans only if Geist is unavailable or the brand needs a slightly warmer student-marketplace feel
Optional accent: no decorative accent font for MVP
```

Decision:

```text
Use Geist Sans for the first web build.
Do not use Inter as the primary brand font for this project.
The typography should feel modern, precise, and premium, but still readable for students and parents.
```

Type scale:

```text
Display desktop: 56-72px / 0.95-1.02 line-height
Display mobile: 34-42px / 1.0-1.08 line-height
H1: 40-56px desktop, 30-36px mobile
H2: 28-40px desktop, 24-30px mobile
H3: 20-24px
Body: 16-18px
Small: 14px
Caption: 12-13px
Button: 14-16px, 700-800 weight
```

Rules:

```text
Desktop text must not look like enlarged mobile text.
Never scale text directly with viewport width.
Use strong hierarchy but avoid oversized paragraphs.
Use clear line height for reading.
Use bold labels sparingly for filters, badges, and metadata.
Use one primary type family across the MVP.
Do not mix many typefaces.
```

## Spacing System

Use an 8px-based spacing system.

```text
4px  = tiny internal gap
8px  = small gap
12px = compact component gap
16px = compact padding
20px = mobile screen padding
24px = card padding / normal section gap
32px = large section gap
48px = hero/detail gap
64px = major section separation
80px = desktop hero/SEO section spacing when needed
```

Page containers:

```text
Desktop max-width: 1180-1280px depending on page
Listing max-width: can expand to 1360-1440px with map/results split
Tablet padding: 24px
Mobile padding: 16-20px
```

Rules:

```text
Cards should not float randomly in huge empty desktop space.
Repeated cards need consistent internal spacing.
Desktop pages need real columns and side panels.
Mobile pages need focused stacking and sticky actions where useful.
```

## Layout Language

Use:

```text
Shell + Header + Primary Zone + Secondary Zone + Detail Zone + Action Zone
```

### Home Layout

Desktop:

```text
Header
Hero search and message
Featured UCC visual/map/hostel preview
Trust strip
Popular UCC areas
Featured hostels
How it works
Owner CTA
SEO content
Footer
```

Mobile:

```text
Context-first mobile header
Large search pill
Compact featured panel
Quick discovery shortcuts
Popular areas/categories
Featured hostel cards
Map/list entry
Trust/how it works
Owner CTA
Footer
```

Mobile header rule:

```text
Use a unique app-like discovery header, not a plain website header.
Top context row should show UCC / selected campus area.
For the web MVP, use a menu icon on the right.
For the future mobile app, use a saved/favorite shortcut on the right.
Search should be a large rounded pill near the top.
Quick shortcuts should help students browse by useful hostel needs.
Bottom nav can be used for mobile app-like browsing: Home, Search, Map, Saved, Account.
Do not copy food delivery colors, mascot, or noisy promotion style.
```

Mobile context transition:

```text
On first load, mobile may show the Hostel Premium logo/mark briefly, then transition into the selected university/area context.
Use a subtle spin-down or roll-down motion.
The final state should show context such as "UCC, Cape Coast" and "Find hostels around campus".
Do not block search from appearing.
Do not imply GPS accuracy unless real location permission is used.
Respect reduced motion by showing the final context immediately.
```

Mobile premium carousel rule:

```text
The mobile home can use a compact featured carousel below the search pill.
The carousel should have a small animated progress timer: active slide as a rounded bar that fills, then collapses to a dot as the next slide expands.
Include a small pause control.
Include a short contextual CTA per slide.
Use smooth, quiet transitions.
Do not let the animation interrupt search, reading, or browsing.
Respect reduced motion.
```

### Listing Layout

Desktop:

```text
Header/search bar
Left filter sidebar
Main results list/grid
Right map/area panel when enabled
```

Mobile:

```text
Search header
Filter sheet
Sort row
List cards
Map/list toggle
```

### Map Layout

Desktop:

```text
Left results/filter panel
Right interactive map
Selected hostel preview
```

Mobile:

```text
Map/list toggle
Full map
Bottom sheet hostel preview
Filter sheet
```

### Detail Layout

Desktop:

```text
Gallery top
Main detail column
Sticky enquiry panel
Map/nearby section
Rules/FAQ/SEO content
```

Mobile:

```text
Gallery
Title/trust/price
Room types
Amenities
Location
Manager/contact rules
Sticky bottom enquiry CTA
```

### Dashboard Layout

Desktop:

```text
Sidebar
Header
Status cards
Tables/lists
Right action/detail panel
```

Mobile:

```text
Task list
Listing cards
Request inbox
Simplified actions
```

## Component Style Rules

Buttons:

```text
Primary: warm amber background, high-contrast white/dark text depending on state.
Secondary: white/sand surface with border.
Destructive: red only for dangerous actions.
Disabled: visible but clearly inactive.
```

Cards:

```text
Use cards for listings, room types, map previews, dashboard rows, and modals.
Do not wrap every section in a card.
Border radius: 14-20px for product cards, 8-12px for dense dashboard/table elements.
Avoid heavy shadows. Use soft shadow only for elevated action panels or overlays.
```

Hostel cards:

```text
Image left/top depending on breakpoint.
Name, area, distance, price, room types, amenities, verification label, availability.
Desktop cards can be denser.
Mobile cards should be readable and thumb-friendly.
```

Forms:

```text
Clear labels.
Helpful validation.
No tiny inputs.
Group related fields.
Show summary panel on desktop where useful.
```

Trust badges:

```text
Use precise labels only:
Owner Submitted
Admin Reviewed
Photos Confirmed
Physically Verified
```

Do not show:

```text
Verified Hostel
```

unless the documented process supports that stronger wording.

## Visual Assets

Required asset types:

```text
real hostel exterior photos
room photos
area/campus context images
student lifestyle images used sparingly
map previews
empty-state visuals
owner dashboard illustrations only if needed
```

Image rules:

```text
Use clear, bright, inspectable hostel images.
Avoid dark, blurry, heavily cropped photos.
Avoid unrelated stock lifestyle imagery.
Do not use random AI art for actual hostel rooms.
If generated visuals are used for placeholders, label internally and replace with real/approved photos before production.
```

Hero imagery:

```text
Should show hostel/student accommodation context clearly.
Can combine a real room/hostel visual with map/search UI overlay.
Must not be abstract-only.
```

Empty states:

```text
Use calm text, helpful next action, and minimal illustration/icon.
```

## Motion System

Motion should be:

```text
subtle
fast
purposeful
touch-aware
accessible
```

Timing:

```text
button hover/press: 80-150ms
card hover/press: 150-220ms
sheet/modal: 220-320ms
map/list transition: 180-260ms
success confirmation: 200-350ms
```

Use motion for:

```text
filter sheet open/close
map preview bottom sheet
button/interactive feedback
save favorite feedback
form success
dashboard panel transitions
animated Iconsax icons for focused premium feedback
mobile carousel progress timer
```

Animated icon rules:

```text
Use animated Iconsax icons for meaningful moments: successful enquiry, saved hostel, filter applied, map/location discovery, verification explanation, or dashboard status.
Do not animate every navigation icon or every card.
Animated icons must not distract from search, comparison, or enquiry actions.
Respect reduced motion.
```

Avoid:

```text
decorative bouncing
slow dramatic animation
moving backgrounds in core search/detail workflows
animations that block booking enquiry
```

Accessibility:

```text
Respect reduced motion.
Do not rely on animation to explain critical state.
```

## Responsive Rules

Critical rule:

```text
Do not build a mobile layout and stretch it across desktop.
```

Desktop must have:

```text
real navigation
multi-column layouts
meaningful side panels
appropriate information density
max-width content containers
no oversized mobile cards
```

Tablet must have:

```text
adaptive 2-column or compact layouts
no cramped desktop grids
no accidental mobile-only behavior unless width requires it
```

Mobile must have:

```text
single-column focus
filter sheets
sticky bottom CTAs where useful
map/list toggle
touch targets at least 44px
```

QA breakpoints:

```text
375px mobile
430px large mobile
768px tablet
1024px small laptop/tablet landscape
1366px laptop
1440px+ desktop
```

Fail a page if:

```text
desktop looks like stretched mobile
cards become too wide
content clips horizontally
filters are hard to use
map covers important controls
sticky CTA covers content
text overflows its parent
touch targets are too small
trust badges are misleading
```

## Accessibility

Rules:

```text
Use semantic HTML.
Use visible focus states.
Use accessible form labels and errors.
Maintain readable contrast.
Do not rely on color alone for status.
Use alt text for hostel photos.
Make map information available through cards/list too.
Support keyboard navigation for filters, dialogs, sheets, and menus.
```

## Page-Specific First Impression Priorities

Home:

```text
Must immediately say UCC hostel search, not generic accommodation.
Search must be obvious.
Trust system must be understandable.
```

Listing:

```text
Must make comparison easy.
Filters must feel professional.
Desktop must use space properly.
```

Detail:

```text
Must help the student decide with photos, price, location, amenities, trust labels, and enquiry CTA.
```

Map:

```text
Must feel useful, not decorative.
Location accuracy must be honest.
```

Owner:

```text
Must feel like a professional advert/listing management tool.
```

Admin:

```text
Must prioritize review, verification, and safety over visual decoration.
```

## Design Audit Checklist

Before any UI is accepted:

```text
1. Does the page have one dominant focus?
2. Is the primary action obvious?
3. Does desktop have a real desktop layout?
4. Does mobile have a focused flow?
5. Are filters and forms usable?
6. Are loading, empty, error, and success states designed?
7. Are trust labels precise and honest?
8. Are colors controlled?
9. Is typography readable and not oversized?
10. Are real/appropriate images used?
11. Does the page avoid generic AI visuals?
12. Is the layout checked at 375, 430, 768, 1024, 1366, and 1440px?
```
