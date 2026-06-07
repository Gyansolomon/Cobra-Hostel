# Home Page Design Brief

## Purpose

The home page is the first impression for Hostel Premium. It must feel premium, useful, local, and trustworthy before the user scrolls.

This page must not look like a generic AI-generated landing page. It must use the approved premium references, component sources, spacing rules, typography, color system, motion rules, and responsive layout rules.

## Page Goal

```text
Help UCC students find trusted hostels quickly and understand that the platform is safer, more organized, and more professional than random social media posts.
```

## Primary User Action

```text
Search or browse UCC hostels.
```

## Secondary Actions

```text
View map search.
Explore popular UCC areas.
Open featured hostel teaser/sign-in gate, then full detail after authentication.
Learn how booking/request enquiry works.
Understand trust labels.
For managers: learn how to list/advertise a hostel.
Sign in only when protected actions are needed.
```

## Approved References

### Reales Real Estate App UI Kit

Use for:

```text
spacing rhythm
property-browsing component polish
card hierarchy
search/feed/filter visual logic
premium app-like interface feeling
```

Home frame:

```text
fileKey: PQvVeqZzWt3Bc9A9RLOGUu
nodeId: 6319:19633
```

Rules:

```text
Reales is purchased/approved, but still adapt it to Hostel Premium.
Do not ship unchanged real-estate UI.
No mortgage/sales/payment assumptions.
Property cards become hostel cards.
Real-estate search becomes UCC hostel search.
```

### Amber Student

Use for:

```text
student accommodation search hierarchy
university/city/property search model
trust and support signals
SEO-aware home structure
```

Rules:

```text
Do not copy Amber branding, exact layout, copywriting, or global claims.
Adapt to UCC, Ghana, hostel verification, and enquiry-first flow.
```

### Expedia Search Marketplace Reference

Use for:

```text
search-first marketplace structure
category/tabbed discovery modes
traveller/room selector logic adapted to room type and occupants
member/sign-in value banner
destination/area card browsing
owner/property listing CTA
support/account utility navigation
SEO footer link structure
```

Adapt to Hostel Premium:

```text
Expedia travel categories become hostel discovery modes:
- Hostels
- Areas
- Map
- Verified
- For Managers

Destination search becomes UCC / area / hostel search.
Date fields become move-in period, semester, or academic year.
Travellers/rooms becomes room type, occupants, and student preferences.
"List your property" becomes "List your hostel".
Member sign-in value becomes "Sign in to view full hostel details, save options, and send safe enquiries."
```

Do not copy:

```text
Expedia branding, colors, exact layout, copy, icons, hotel payment assumptions, flight/package categories, or member discount claims.
```

### Mobile Header Reference: Foodpanda-Style Discovery Header

Use for:

```text
mobile context-first header
large search pill
location/university context row
favorite/save shortcut
featured promotional/announcement panel
premium carousel microinteractions
horizontal quick categories
sticky bottom navigation pattern
temporary bottom promo/notice sheet
```

Adapt to Hostel Premium:

```text
Food delivery location becomes UCC / selected campus area context.
Restaurant search becomes hostel, area, room type, or amenity search.
Offer categories become hostel discovery shortcuts.
Promo banner becomes useful student/hostel content, not sales noise.
Bottom nav becomes hostel app navigation: Home, Search, Map, Saved, Account.
```

Do not copy:

```text
Foodpanda purple/pink brand palette.
Restaurant/food content.
Mascot/food artwork.
Flash deal pressure.
Overly noisy promotional cards.
```

Important micro-details to adapt:

```text
The featured top panel can be a premium carousel/slideshow, but it must remain useful and calm.

Use a small animated progress indicator:
- active slide shows as a rounded bar
- the bar fills over time like a timer
- when complete, it collapses back to a dot
- next dot expands into the active rounded bar
- transition between slides is smooth

Include a small pause button on the hero carousel so users can stop movement.

Include a small contextual CTA, similar to "Get free trial" or "Pick-up now", adapted to Hostel Premium:
- "Browse verified rooms"
- "View nearby hostels"
- "See available rooms"
- "How verification works"

These details should make the screen feel premium without interrupting search, reading, or browsing.
```

Mobile context-header microinteraction:

```text
On first load, the mobile header may briefly show the Hostel Premium logo/mark.
Then use a subtle spin-down or roll-down transition that replaces the logo state with the selected location/university context.

Example final context:
UCC, Cape Coast
Find hostels around campus

If the user has selected an area:
Apewosika, UCC
Hostels near your selected area
```

Rules:

```text
Animation must be fast and calm, around 300-500ms.
Do not block the search bar from appearing.
Do not imply GPS/current-location accuracy unless location is actually known.
Use selected university/area context, not device location, unless explicit location permission is implemented later.
Respect reduced motion: show final context immediately.
```

## Anti Generic AI Design Rules

Do not use:

```text
generic blue SaaS palette
random purple gradients
floating abstract blobs
oversized centered hero with no product context
same-sized card grid everywhere
stock-like imagery that does not show hostel/student accommodation
decorative animations with no purpose
mobile layout stretched across desktop
default shadcn styling without adaptation
generic "Find your dream home" real-estate copy
```

Must use:

```text
real or semantically correct hostel/accommodation imagery
UCC-first copy
clear search module
strong desktop composition
mobile-first usability without sacrificing desktop design
precise trust labels
controlled color palette
consistent spacing and typography
licensed Reales component rhythm adapted to Hostel Premium
Iconsax free icons where available
Motion Primitives/animated Iconsax only for useful feedback
```

## Home Page Content Order

Desktop order:

```text
1. Header
2. Hero: UCC-first headline + search module + product visual
3. Trust strip
4. Popular UCC areas
5. Featured hostels
6. Map preview / nearby discovery
7. How booking/request enquiry works
8. Trust and verification explanation
9. Owner/manager listing CTA
10. SEO content and FAQ
11. Footer
```

Mobile order:

```text
1. Mobile context header
2. Large search pill
3. Featured announcement/hero carousel
4. Quick discovery shortcuts
5. Popular area chips/categories
6. Featured hostel cards
7. Map/list entry
8. How it works
9. Trust explanation
10. Owner CTA
11. FAQ/footer
```

## Header

Goal:

```text
Give clear navigation without making the home page feel crowded.
```

Desktop:

```text
Left: Hostel Premium logo/wordmark.
Center/right nav: Browse UCC Hostels, Map, How It Works, For Managers.
Right action: Sign In.
Optional primary CTA: Browse Hostels.
```

Mobile:

```text
Top context row:
- location/university icon
- selected context: UCC / Cape Coast / chosen area
- small supporting line: "Find hostels around campus"
- web MVP: menu icon on right
- future mobile app: favorite/saved shortcut on right
- optional first-load logo-to-context transition

Search row:
- large rounded search pill
- placeholder: "Search hostels, areas, rooms"
- optional filter icon or map icon

Navigation:
- bottom nav for app-like mobile browsing after home/search is implemented
- Home, Search, Map, Saved, Account

No desktop nav squeezed into mobile.
```

Auth gate rule:

```text
Home, search, UCC hub, map/list previews, and featured hostel teaser cards can be public.
Clicking a featured hostel to view full detail must require sign-in unless the user is already authenticated.
The sign-in gate must return the user to the same hostel/action after authentication.
```

Components:

```text
SiteHeader
MobileNavSheet
MobileDiscoveryHeader
MobileSearchPill
MobileBottomNav
LogoToContextTransition
Button
IconButton
```

Icons:

```text
Iconsax location, search, menu, heart, map, home, profile icons where available.
Animated Iconsax can be used for search/location feedback only when subtle.
```

## Hero

Goal:

```text
Make a visitor immediately understand this is a UCC hostel search platform.
```

Recommended copy direction:

```text
Headline: Find trusted student hostels around UCC.
Supporting copy: Compare rooms, prices, locations, amenities, and verification status before sending an enquiry.
```

Primary CTA:

```text
Search Hostels
```

Secondary CTA:

```text
View Map
```

Hero search fields:

```text
University: default UCC
Area or hostel name
Budget range
Move-in period / semester
Room type / occupants
```

Search module interaction inspired by Expedia:

```text
Use compact segmented discovery tabs on desktop where useful:
Hostels, Areas, Map, Verified, For Managers.

Use a Room/Occupants selector with steppers or clear segmented controls:
- 1 in a room
- 2 in a room
- 3-4 shared
- private room

Keep the search CTA visually dominant.
Do not overload the first search module with every filter; advanced filters belong on the listing page/filter sheet.
```

Desktop layout:

```text
Two-zone composition:
- Left primary zone: headline, copy, search module, quick area chips.
- Right visual zone: hostel room/exterior image with layered map/search/featured hostel preview.

The right visual must show real hostel/student accommodation context, not abstract decoration.
```

Tablet layout:

```text
Hero copy/search full-width at top.
Visual zone below in a wide card.
Area chips remain visible.
```

Mobile layout:

```text
Context row immediately visible.
Large search pill immediately visible.
Short featured carousel instead of a desktop-style hero.
Quick discovery shortcuts horizontally scroll.
Area chips horizontally scroll.
Hero visual becomes useful product context, not a tall decorative image.
No clipping, no oversized text, no horizontal scroll.
```

Components:

```text
HeroSearch
MobileDiscoveryHeader
MobileSearchPill
LogoToContextTransition
QuickDiscoveryShortcuts
AreaChips
HeroVisualPanel
FeaturedHostelPreview
MapMiniPreview
```

## Mobile Featured Carousel

Goal:

```text
Create a distinctive mobile-first premium moment without making the page feel like an ad feed.
```

Content ideas:

```text
Slide 1: Find trusted UCC hostels
CTA: Browse verified rooms

Slide 2: Compare prices before you visit
CTA: View available rooms

Slide 3: Search by area or map
CTA: View nearby hostels

Slide 4: Know what verified means
CTA: How verification works
```

Behavior:

```text
Auto-advance slowly enough to read.
Use a pause button.
Use animated progress indicator as timer.
Swipe should change slide manually.
Progress should reset when user changes slide.
Carousel should not block search.
```

Progress indicator:

```text
Inactive slides: small dots.
Active slide: rounded horizontal bar.
Active bar fills from left to right.
When complete, bar returns to dot and next dot expands.
Keep animation subtle and smooth.
Respect reduced motion by disabling auto-animation or using static dots.
```

Visual style:

```text
Use Hostel Premium colors, not Foodpanda purple/pink.
Use real hostel/room/map/trust imagery or clean product visuals.
Avoid mascot-style graphics unless a future brand direction approves them.
```

Components:

```text
MobileHeroCarousel
CarouselProgressTimer
CarouselPauseButton
CarouselSlideCTA
LogoToContextTransition
```

Motion:

```text
Subtle input focus.
Button press feedback.
Optional animated Iconsax location/search icon only when useful.
No looping decorative hero animation.
```

## Trust Strip

Goal:

```text
Explain why students can trust the platform without overclaiming.
```

Items:

```text
UCC-first listings
Admin Reviewed
Photos Confirmed
Physically Verified
No student payment in MVP
Platform-first enquiries
```

Important copy:

```text
Trust labels have specific meanings.
Not every hostel will be physically verified at first.
```

Component:

```text
TrustExplainer
TrustBadge
```

Style:

```text
Small, precise, premium. Do not make it loud or salesy.
```

## Popular UCC Areas

Goal:

```text
Help students browse by familiar areas around UCC.
```

Content examples:

```text
Apewosika
Amamoma
Kwaprow
Ayensu
Science
Old Site / New Site if relevant
```

Desktop:

```text
Asymmetric area cards or compact horizontal area modules, not same-sized generic cards only.
```

Mobile:

```text
Scrollable chips or 1-column/2-column compact cards.
```

Components:

```text
AreaCard
AreaChips
```

Expedia adaptation:

```text
Treat UCC areas like destination cards, but make them practical:
- area name
- distance/context near campus
- starting price/range if data is reliable
- available hostel count
- one strong hostel/area image
```

## Mobile Quick Discovery Shortcuts

Goal:

```text
Give mobile users fast, visual entry points like the reference header/category pattern, but adapted to hostel discovery.
```

Possible shortcuts:

```text
Near Campus
Under GHS 2,000
Physically Verified
Available Rooms
Private Room
Shared Room
Water Reliable
Security
Study Space
Map View
```

Visual treatment:

```text
Rounded icon tiles or compact horizontal cards.
Use Iconsax icons or approved Reales-style assets.
Keep labels short.
Use 2 rows only if the section stays compact.
```

Rules:

```text
Do not make mobile home feel like an advertisement feed.
Do not use noisy discount cards.
Shortcuts must lead to useful filtered hostel searches.
```

## Featured Hostels

Goal:

```text
Show useful supply immediately and demonstrate what a professional listing looks like.
```

Card content:

```text
hostel image
hostel name
area
distance label
starting price
room type/occupants
availability status
amenity mini row
trust badge
save icon
view details CTA that opens sign-in gate for full detail when signed out
```

Desktop:

```text
Use strong card rhythm from Reales but adapt to hostel content.
Cards should not become huge empty rectangles.
Use 2-3 columns or a featured-large + supporting-list pattern.
```

Mobile:

```text
Single-column cards with image, price, trust badge, and key facts visible.
```

Components:

```text
HostelCard
TrustBadge
PriceBadge
AmenityBadge
FavoriteButton
```

States:

```text
Loading: skeleton cards.
Empty: "UCC hostel listings are being verified" with notify or browse areas CTA.
Error: retry state.
```

## Map Preview

Goal:

```text
Introduce map search as a practical way to compare nearby hostels.
```

Desktop:

```text
Map preview panel with nearby hostel pins and side preview card.
```

Mobile:

```text
Compact map entry card leading to full map/list toggle.
```

Rules:

```text
Use free/low-cost map approach first.
Show attribution.
Do not make strong location claims unless verified.
Use stored coordinates.
```

Components:

```text
MapPreview
HostelPin
MapToggle
HostelPreviewCard
```

Motion:

```text
Subtle hover/select transition.
Animated Iconsax location icon may be used once, not repeatedly.
```

## How It Works

Goal:

```text
Explain the enquiry-first flow clearly.
```

Steps:

```text
1. Search UCC hostels.
2. Compare rooms, prices, amenities, and location.
3. Sign in when ready to send an enquiry.
4. Message through the platform first.
5. Manager may reveal phone/WhatsApp if enabled.
```

Important note:

```text
Students do not pay hostel fees through the platform in MVP.
```

Components:

```text
HowItWorksSteps
AnimatedIconStep
```

## Owner / Manager CTA

Goal:

```text
Invite hostel managers to list professionally without distracting students.
```

Copy direction:

```text
Own or manage a hostel around UCC?
List it professionally and receive serious student enquiries through Hostel Premium.
```

CTA:

```text
List Your Hostel
```

Expedia adaptation:

```text
The owner CTA should be as easy to find as "List your property" on travel marketplaces, but it should not compete with student search.
Place it in desktop navigation and repeat it as a calm section lower on the home page.
```

Desktop:

```text
Full-width band or split section with dashboard/listing preview.
```

Mobile:

```text
Simple CTA card after student value sections.
```

## SEO / FAQ Section

Goal:

```text
Support Google discovery and answer student/parent questions.
```

Topics:

```text
Best areas near UCC for hostels.
How hostel enquiries work.
What verification labels mean.
Whether students pay through the platform.
How managers list hostels.
How map/distance information is handled.
```

Component:

```text
FAQAccordion
SEOContentBlock
```

## Component List

Required home components:

```text
SiteHeader
MobileNavSheet
MobileDiscoveryHeader
MobileSearchPill
MobileBottomNav
HeroSearch
QuickDiscoveryShortcuts
AreaChips
HeroVisualPanel
FeaturedHostelPreview
TrustExplainer
TrustBadge
AreaCard
HostelCard
PriceBadge
AmenityBadge
FavoriteButton
MapPreview
HostelPin
HowItWorksSteps
OwnerCTA
FAQAccordion
Footer
```

Base components:

```text
Button
IconButton
Input
Select
Badge
Card
Sheet
Accordion
Skeleton
EmptyState
ErrorState
```

## Color, Typography, Spacing Rules

Colors:

```text
Use DESIGN.md palette:
Ink Charcoal
Campus Cream
Clean White
Sand Wash
Soft Clay Border
Warm Stone
UCC Gold
Verified Green
```

Typography:

```text
Use strong but controlled hierarchy.
Desktop headline can be large but must not feel like mobile text stretched up.
Mobile headline must wrap cleanly and avoid clipping.
Body copy should be readable and concise.
```

Spacing:

```text
Use 8px scale.
Desktop sections: 64-80px separation where needed.
Card padding: 16-24px.
Mobile padding: 16-20px.
Avoid random margins and inconsistent gaps.
```

## Responsive Acceptance Criteria

Check these breakpoints:

```text
375px mobile
430px large mobile
768px tablet
1024px small laptop/tablet landscape
1366px laptop
1440px desktop
```

Desktop must pass:

```text
Header is desktop-native.
Hero has real two-zone composition.
Search does not look like a mobile card stretched across the screen.
Featured hostels use appropriate density.
Map preview does not dominate the page.
No huge empty dead space.
```

Mobile must pass:

```text
No horizontal clipping.
Search appears early.
Text wraps cleanly.
Cards are readable.
Filter/map entry is touch-friendly.
Sticky elements do not cover content.
```

Tablet must pass:

```text
Layout is intentionally adapted.
No cramped desktop sidebar.
No accidental overly-wide mobile card.
```

## Loading / Empty / Error States

Loading:

```text
Skeleton search-supported content, featured hostel skeletons, area skeletons.
```

Empty:

```text
If no featured listings: show "UCC hostel listings are being verified" with browse areas or notify CTA.
```

Error:

```text
Safe retry state. Do not expose internal errors.
```

Success:

```text
Search routes to listing/search page.
Save favorite gives subtle feedback if signed in; otherwise sign-in prompt.
View details opens public teaser/sign-in gate when signed out and full detail when signed in.
```

## Motion and Animation Rules

Use:

```text
Motion Primitives for reusable transitions.
Iconsax animated icons for focused premium feedback.
Subtle hover/press states.
Filter/map preview transitions.
```

Avoid:

```text
looping decorative animation
animated icons everywhere
slow dramatic effects
motion that hides or delays search/enquiry actions
```

Home transition requirement:

```text
When the user arrives from onboarding, location confirmation, sign-in, or auth skip, the home page should reveal in this order:
1. context header
2. search pill
3. featured carousel
4. quick discovery shortcuts
5. featured hostel cards

The header/search must be usable immediately. Later sections can enter with subtle 30-50ms stagger, but no animation should delay search or protected-action gates.
```

## Implementation Approval Gate

Do not build the home page until:

```text
1. This brief is approved.
2. Reales home frame is inspected directly or manually enough to extract spacing/layout direction.
3. Home components are listed in docs/COMPONENTS.md.
4. The implementation plan includes responsive QA at all required breakpoints.
5. Any paid component/source usage is confirmed as licensed or avoided.
```

## Post-Search Transition Rule

The home page can feel welcoming and exploratory, but after the user searches the product must become serious and comparison-focused.

Use the Expedia reference for this transition:

```text
Before search:
- inviting discovery
- large search module
- area/category cards
- sign-in value prompt
- visual browsing

After search:
- compact search summary
- result count
- sort
- map preview
- filter rail or filter sheet
- structured hostel result cards
- clear availability/price/trust information
```

Responsive rule:

```text
Desktop uses a real comparison layout with columns and density.
Mobile uses sticky summaries, sheets, and single-column cards.
Never stretch mobile cards across desktop.
Never squeeze desktop filter columns into mobile.
```
