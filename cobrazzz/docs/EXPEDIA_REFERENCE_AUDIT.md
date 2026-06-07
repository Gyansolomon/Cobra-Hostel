# Expedia Reference Audit

## Purpose

This audit captures the useful product, layout, component, typography, and responsive patterns from Expedia for Hostel Premium.

Use Expedia as a search-marketplace reference. Do not copy Expedia's brand, colors, logo, copy, iconography, exact layouts, proprietary assets, rewards program, hotel payment model, or travel categories.

## Sources Checked

Public URLs:

```text
https://euro.expedia.net/
https://euro.expedia.net/Hotels
https://euro.expedia.net/Flights
```

Local visual references:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\video references
```

Local files inspected:

```text
Expedia Web Onboarding 0.png
Expedia Web Onboarding 1.png
Expedia Web Onboarding 2.png
Expedia Web Onboarding 3.png
Expedia Web Onboarding 4.png
Expedia Web Onboarding 5.png
Expedia Web Onboarding 6.png
Expedia Web Onboarding 7.png
Expedia Web Onboarding 8.png
Expedia Web Onboarding 9.png
Expedia Web Onboarding 10.png
Expedia Web Onboarding 11.png
Expedia Web Onboarding 12.png
Expedia Web Onboarding 13.png
Expedia Web Onboarding 14.png
Expedia Web Onboarding 15.png
Expedia Web Onboarding 16.png
IMG_2555.MP4
```

Constraint:

```text
Direct PowerShell HTTP crawling returned 403 from Expedia. Browser/web inspection and local Mobbin screenshots were used instead.
IMG_2555.MP4 contains audio, but this audit is based on extracted visual frames. Audio transcription was not available in the local toolchain.
```

## High-Level Product Lessons

Expedia separates the experience into two moods:

```text
Before search: exploratory, welcoming, visual, broad.
After search: serious, dense, task-focused, comparison-oriented.
```

Hostel Premium should follow the same shift:

```text
Home: help students discover UCC hostel search.
Results: help students compare actual hostel options with filters, map, trust, price, and availability.
```

## Pages / States Observed

### 1. Desktop Home / Search

Observed in:

```text
Expedia Web Onboarding 0.png
Expedia Web Onboarding 16.png
```

Components:

```text
desktop header
logo
shop travel dropdown
get app pill button
language selector
list your property link
support link
trips link
message icon
sign-in link
large centered search module
category tabs
destination input
date input
travellers/rooms input
search button
add flight / add car checkboxes
membership value banner
destination/category image cards
floating help button
footer/brand strip in Mobbin capture
```

Useful for Hostel Premium:

```text
Use a calm desktop header with student actions and manager action separated.
Use a large search module as the first serious control.
Use category/discovery tabs only if they clarify the product.
Use destination cards as area cards.
Use a sign-in value banner that explains why account creation matters.
```

Adaptation:

```text
Shop travel -> Browse
Get the app -> future app CTA, hidden or secondary in web MVP
List your property -> List your hostel
Support -> Support
Trips -> My Requests
Message icon -> Messages
Sign in -> Sign in
Stays/Flights/Cars/Packages -> Hostels/Areas/Map/Verified/For Managers
Where to -> Search UCC, area, or hostel
Dates -> Move-in period / semester / academic year
Travellers/rooms -> Room type / occupants
```

### 2. Sign-In Popover From Header

Observed in:

```text
Expedia Web Onboarding 1.png
```

Components:

```text
anchored popover from sign-in area
strong heading
short value proposition
brand/reward marks
primary sign-in button
secondary learn-more link
feedback row
```

Useful for Hostel Premium:

```text
Use account popovers for low-commitment sign-in prompts.
Do not force a full-page auth screen when the user only opens the account menu.
Use stronger gates only when the user attempts protected actions.
```

Adaptation:

```text
Heading: Sign in to use Hostel Premium
Value: View full hostel details, save options, and send safe enquiries.
Primary CTA: Sign in with Google
Secondary: How accounts protect students
Feedback row: Support / Report issue
```

### 3. Account Creation / Onboarding

Observed in:

```text
Expedia Web Onboarding 2.png through Expedia Web Onboarding 14.png
```

Components:

```text
small centered auth layout
logo top
single-purpose page title
Google sign-in button
email input
continue button
divider
terms/privacy copy
brand-family row
loading state
email confirmation step
password creation step
disabled button states
validation/help text
welcome/membership success state
```

Useful for Hostel Premium:

```text
Keep auth pages visually quiet and focused.
Use one major action per step.
Show disabled states clearly.
Show loading state after submit.
Use email/profile confirmation and success state instead of dumping users back without context.
```

Adaptation:

```text
Google sign-in first for web MVP.
Future mobile can add Apple and Facebook.
After auth, return user to protected action.
If phone/WhatsApp is missing, show a profile-completion step before booking/messaging.
```

### 4. App Download / Benefit Overlay

Observed in:

```text
Expedia Web Onboarding 15.png
```

Components:

```text
small benefit card
QR code
app/value message
dismiss action
home page remains visible behind
```

Useful for Hostel Premium:

```text
Use this later when the mobile app exists.
Do not add app-download prompts before the web MVP proves value.
```

Adaptation:

```text
Future copy: Use the Hostel Premium app to track requests, save hostels, and message managers faster.
```

### 5. Post-Search Results Page

Observed in user-provided Expedia screenshot.

Components:

```text
desktop header
compact top search summary
destination field
dates field
travellers/rooms field
icon search button
left map preview
view in map CTA
search-by-property-name field
filter rail
checkbox filters
price min/max
price slider
rating filter
result count
sort dropdown
benefit/reward banner
large listing cards
image carousel controls
save/favorite button
listing title
location
amenity icons
short description
availability/deal label
price block
date block
review score
```

Useful for Hostel Premium:

```text
This is the strongest reference for our search/listing page.
The page becomes denser after search but still stays readable.
The left rail is functional, not decorative.
The card gives enough information to compare without opening detail.
Price, availability, location, trust, and amenities must be visible.
```

Hostel Premium adaptation:

```text
Destination field -> UCC / area / hostel
Dates field -> move-in period / semester / academic year
Travellers field -> room type / occupants
Map preview -> UCC area map preview
Search by property name -> Search by hostel name
Popular filters -> near campus, available rooms, private room, shared room, water reliable, security, study area, physically verified
Price -> semester/year range in GHS
Guest rating -> team quality score / verification level for MVP
Deal banner -> trust/sign-in/helpful notice, not discount pressure
Listing card -> HostelCard with room, area, price, trust, availability, image, and protected full-detail CTA
```

### 6. Mobile Home / Search

Observed in:

```text
IMG_2555.MP4
Extracted frames folder:
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\video references\IMG_2555_frames
```

Detailed mobile review:

```text
docs/EXPEDIA_MOBILE_DETAIL_REVIEW.md
```

Components:

```text
mobile browser/header context
Expedia logo row
Get the app button
menu icon
product tabs
destination input
check-in/check-out inputs
large search button
privacy/cookie consent card
member/sign-in value card
destination/category cards
footer/company block
mobile loading skeleton
```

Useful for Hostel Premium:

```text
Mobile home should not be a compressed desktop hero.
It should use a simple stacked flow:
1. compact brand/header row
2. product/discovery tabs
3. destination/area input
4. move-in/semester fields
5. room/occupants selector
6. strong search button
7. sign-in value card
8. discovery/area cards
```

Hostel Premium adaptation:

```text
Logo row -> Hostel Premium + menu
Get the app -> future app CTA only after mobile app exists
Tabs -> Hostels / Areas / Map / Verified / Managers
Destination -> UCC / area / hostel
Check-in/out -> move-in period / semester
Member card -> sign in to view full details, save hostels, and send safe enquiries
Destination cards -> UCC area cards
```

### 7. Mobile Results Page

Observed in:

```text
IMG_2555.MP4 frames around 80s-240s and 460s-480s
```

Components:

```text
compact top header
location/search summary with edit action
filter chips
category chips
sort chip
map floating button
result cards
card image thumbnail
favorite/save action
hostel/property title
area/location
amenity snippets
review/trust labels
availability/discount label
price block
loading skeleton cards
```

Useful for Hostel Premium:

```text
Mobile results should keep comparison information visible without forcing a detail click.
The search summary should stay compact and editable.
Filter/sort/map controls should be reachable quickly.
Cards should be dense, readable, and single-column.
The map button should float, but it must not cover key card content.
```

Hostel Premium adaptation:

```text
Location/search summary -> UCC / area / move-in / occupants
Category chips -> Any, Private room, Shared room, Verified, Available
Filter chips -> Price, Area, Room type, Amenities, Verification
Map button -> UCC map/list toggle
Result card -> HostelCardMobile
Review label -> team quality/verification status for MVP
Discount label -> availability/trust label, not sales pressure
Price block -> GHS semester/year range
```

Mobile card content priority:

```text
1. image
2. hostel name
3. area / distance to campus
4. trust label
5. room type / occupants
6. key amenities
7. availability
8. price/range
9. protected full-detail CTA
```

### 8. Mobile Sort / Filter Sheet

Observed in:

```text
IMG_2555.MP4 frames around 120s-160s
```

Components:

```text
full-screen or near-full-screen sheet
close button
clear action
section labels
price min/max fields
histogram price slider
checkbox groups
amenity groups
star/rating group
sticky done button
result count
```

Useful for Hostel Premium:

```text
Filters should become a focused task on mobile.
The sheet should feel serious and structured, not like random chips.
The user should know how many results remain before applying filters.
```

Hostel Premium adaptation:

```text
Total price -> GHS semester/year price range
Star rating -> team quality / verification level
Property amenities -> hostel amenities
Payment type -> not used in MVP
Popular filters -> near campus, water reliable, security, available rooms, private room, shared room, physically verified
Done -> show result count and return to results
```

### 9. Mobile Detail Page

Observed in:

```text
IMG_2555.MP4 frames around 260s-440s
```

Components:

```text
back navigation
property title context
image carousel
photo category chips
all photos grid
property header
trust/payment labels
review summary
select room CTA
reviews section
question/help search box
nearby things to do
accessibility section
rooms section
similar properties carousel
amenities section
map/explore area section
about section
what's nearby
getting around
restaurants/nearby list
```

Useful for Hostel Premium:

```text
Detail page should be inspectable on mobile.
Images, rooms, reviews/trust, nearby/map, amenities, and similar hostels need strong section order.
The CTA should stay reachable but not cover content.
The detail page can be long, but each section needs a clear job.
```

Hostel Premium adaptation:

```text
Property title -> hostel name
Photo categories -> Exterior, Rooms, Washroom, Kitchen, Study area, Security, Water, Compound
Review summary -> team quality/trust summary in MVP
Question box -> support/help question or FAQ search
Things nearby -> campus gates, lecture halls, transport, food, bank/ATM, clinic
Accessibility -> hostel access notes if available
Rooms -> room types and occupants
Similar properties -> similar hostels near UCC / same price / same rating
Explore area -> map and area guide
What's nearby -> UCC-specific area context
Getting around -> taxi/shuttle/walking distance notes
Restaurants -> useful nearby student services, not a restaurant product
```

### 10. Mobile Loading / Skeleton

Observed in:

```text
IMG_2555.MP4 frames around 480s
```

Components:

```text
search summary remains visible
filter chips remain visible
skeleton result cards
gray placeholders matching final card shape
```

Useful for Hostel Premium:

```text
Loading states should preserve page structure.
Do not use a random spinner as the only loading state.
Skeletons should match the final layout, especially result cards.
```

## Typography Notes

Observed visual typography:

```text
rounded modern sans-serif
large but controlled headings
clear medium-weight labels
body text with generous line height
buttons use strong weight and short labels
form field labels are compact and readable
```

Hostel Premium rules:

```text
Use a modern rounded/geometric sans-serif direction.
Do not overuse huge hero text.
Use dense but readable result cards after search.
Keep form labels and helper text quiet but legible.
```

Possible font direction:

```text
Satoshi
Geist
Outfit
Plus Jakarta Sans
Manrope
```

Do not use:

```text
Expedia's exact brand type treatment.
Generic default system font styling without a design decision.
Tiny low-contrast helper text.
```

## Component Inventory To Adapt

### Navigation

```text
DesktopHeader
MobileHeader
AccountMenuPopover
SupportLink
MessagesLink
ManagerListingCTA
Language/region selector later if needed
```

### Search

```text
SearchTabs
HeroSearchModule
SearchField
MoveInPeriodField
RoomOccupantsSelector
SearchSubmitButton
CompactSearchSummary
```

### Listings

```text
MapPreviewCard
FilterRail
FilterSheet
FilterCheckboxGroup
PriceRangeInputs
PriceSlider
SortSelect
ResultsCount
HostelResultCard
ImageCarouselControls
SaveHostelButton
TrustBanner
MobileResultsHeader
MobileFilterActionRow
MobileMapButton
MobileHostelResultCard
MobileResultSkeleton
```

### Auth

```text
SignInPopover
AuthPage
GoogleSignInButton
EmailInput
ContinueButton
LoadingState
ProfileCompletionStep
AuthSuccessState
ProtectedActionGate
```

### Support / Utility

```text
FloatingHelpButton
SupportCenterLink
MyRequestsLink
MessagesLink
FooterLinkGroups
```

## Responsive Rules From Expedia

Desktop:

```text
Use wider containers and real columns.
Search module can be broad and horizontal.
Listing page should have left filters and main result cards.
Cards can use image-left, content-middle, price/action-right composition.
```

Tablet:

```text
Collapse dense left rail into a slide-over when space becomes tight.
Keep the search summary visible.
Cards can move to image-top or image-left depending on width.
```

Mobile:

```text
Do not squeeze desktop columns.
Use sticky search summary.
Use filter/sort/map action row.
Use bottom sheets for filters and selectors.
Use single-column cards.
Keep price, trust, and availability visible without opening detail.
Use touch-friendly controls.
Use skeletons that match final card structure.
Use long detail pages with clear section hierarchy.
```

## What Hostel Premium Must Not Copy

```text
Expedia logo
Expedia colors
Expedia exact typography/brand treatment
Expedia icons
One Key rewards program
hotel discount language
flight/car/package/cruise categories
payment/reservation assumptions
exact card layout
exact copy
proprietary photos/assets
```

## Implementation Rules For Future Build

Before implementing home/search/listing/auth:

```text
1. Check this audit.
2. Check docs/HOME_PAGE_DESIGN_BRIEF.md.
3. Check docs/PAGE_PLANS.md.
4. Check docs/COMPONENTS.md.
5. Create desktop and mobile layout plans separately.
6. Build the desktop layout as desktop-native.
7. Build mobile as mobile-native with sheets and stacked cards.
8. Verify at 375, 430, 768, 1024, 1366, and 1440 widths.
```

Acceptance criteria:

```text
Home feels welcoming and searchable.
Post-search results feel serious and comparable.
Desktop never looks like stretched mobile.
Mobile never looks like squeezed desktop.
Search, filters, sort, map, price, trust, and availability remain easy to use.
```
