# Expedia Mobile Detail Review

## Purpose

This document captures small mobile UI details from the Expedia mobile reference video so Hostel Premium can reuse the structure without copying Expedia's brand.

Source video:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\video references\IMG_2555.MP4
```

Detailed extracted frames:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\video references\IMG_2555_detail_frames
```

## Important Product Principle

Expedia mobile does not shrink the desktop page. It rebuilds the same workflow into mobile-first controls:

```text
desktop columns -> mobile sheets
desktop filter rail -> filter bottom/full-screen sheet
desktop search bar -> compact editable search summary
desktop result cards -> dense single-column cards
desktop map panel -> floating map CTA / map screen
desktop account nav -> slide-out menu drawer
```

This is exactly the rule Hostel Premium must follow.

## Mobile Home Details

Observed small details:

```text
top brand row stays compact
get-app CTA is small and secondary
hamburger/menu is on the right
category tabs are horizontal
active tab uses underline/accent
search fields are stacked, not squeezed
date fields sit side-by-side when space allows
primary search button is full-width
privacy/cookie card appears inline and blocks until handled
member/sign-in value card appears after search
destination cards are horizontal and image-led
loading skeletons appear below the search module
```

Hostel Premium adaptation:

```text
brand row: Hostel Premium + menu
future app CTA: only after app exists
tabs: Hostels, Areas, Map, Verified, Managers
search: UCC/area/hostel
date fields: move-in period / semester
member card: sign in to view full details, save, and enquire safely
destination cards: UCC areas
```

## Destination Search Details

Observed small details:

```text
opening destination search replaces the page with a focused search state
close button appears top-left
title asks a direct question
popular destinations are listed below input
keyboard stays visible
suggestions show icon + location label
selected destination returns to the main search/results context
```

Hostel Premium adaptation:

```text
title: Where around UCC?
popular suggestions: UCC, Apewosika, Amamoma, Kwaprow, Ayensu, Science, Old Site/New Site
suggestions: icon + area/hostel + campus/region label
keyboard must not cover suggestions or CTA
```

## Mobile Results Details

Observed small details:

```text
location/date/guest summary is compact at top
edit icon makes the summary feel changeable
category segmented control: Any / Hotels / Homes
horizontal filter chips sit below category control
sort/filter controls use small pill buttons
floating map button is centered near the bottom over cards
cards are compact but still contain image, title, location, amenities, rating, price
discount/availability label appears on card right side
price is visually strong and right-aligned
image thumbnails can stack vertically in cards
favorite/save action is visible on image/card
result cards maintain border/radius consistency
```

Hostel Premium adaptation:

```text
summary: UCC / selected area / move-in / occupants
category control: Any / Private / Shared or Any / Hostels / Rooms
chips: Price, Area, Room type, Amenities, Verified, Available, Map
floating map: opens map/list mode
card content: image, hostel name, area, trust, room type, amenities, availability, price/range
discount label: use availability/trust label, not pressure sales
```

## Mobile Result Card Hierarchy

Every mobile Hostel Premium result card should show:

```text
1. image or compact image grid
2. save/favorite action
3. hostel name
4. UCC area / distance context
5. trust/verification label
6. room type and occupants
7. 2-3 key amenities
8. availability status
9. price/range in GHS
10. protected full-detail CTA behavior
```

Do not hide all price/trust/availability behind the detail page.

## Mobile Filter Sheet Details

Observed small details:

```text
sheet has close button top-left
clear action top-right
sheet title changes based on context: Price filters / Sort & filter
price filter has min and max fields
histogram appears above/with slider
slider handles are large enough for touch
sections have clear labels
checkbox rows have counts
some sections have See more
sort dropdown appears inside the sheet
compare toggle exists inside the sheet
result count stays near bottom
Done button is sticky at bottom-right
sheet preserves context and returns to results
```

Hostel Premium filter sections:

```text
Sort by
Search by hostel name
Price range
Area
Room type
Occupants
Availability
Verification level
Team quality score
Amenities
Distance to campus
Water/security/study-space essentials
```

Mobile filter components:

```text
FilterSheet
FilterSheetHeader
ClearFiltersButton
SortSelect
HostelNameSearch
PriceMinMaxInputs
PriceHistogram
PriceRangeSlider
FilterCheckboxGroup
ShowMoreFiltersButton
ResultCountLabel
FilterDoneButton
```

## Mobile Search Summary Expansion

Observed small details:

```text
compact summary can expand into editable fields
destination/date/guests fields stack vertically
search button becomes full-width
close link returns to compact mode
expanded search sits above results, not in a separate disconnected page
```

Hostel Premium adaptation:

```text
summary collapsed: UCC, Apewosika / 2026 semester / 2 in a room
summary expanded: area field, move-in/semester field, room/occupants field, search button, close
```

## Mobile Detail Page Details

Observed small details:

```text
detail page starts with large image carousel
back button floats on top-left
carousel dots indicate image position
photo count/gallery icon appears on image
title follows image
trust/refund/review labels appear before CTA
primary CTA is a sticky or repeated select-room button
photo category chips appear: all photos, rooms, bathroom
photo grid is grouped by room/category labels
choose-room section includes date/guest summary fields
room cards show room image, room name, bed/feature summary, included benefits, price, CTA
reviews are summarized with score and category bars/cards
Q&A/search help box appears after reviews
nearby activity cards appear horizontally
accessibility section is informational and compact
similar properties carousel appears below
policies section appears in detail flow
amenities section appears before area/map context
explore area includes map, nearby places, getting around, restaurants/services
long page remains readable because sections are clearly separated
```

Hostel Premium detail adaptation:

```text
image carousel: exterior/room/washroom/kitchen/security/water/study area
title: hostel name
trust labels: Admin Reviewed, Photos Confirmed, Physically Verified
CTA: Sign in to view full details / Request availability
photo category chips: All, Rooms, Washroom, Kitchen, Compound, Security, Water
room cards: room type, occupants, price, availability, amenities, CTA
reviews: team quality/trust summary for MVP, public student reviews later
Q&A: hostel FAQ / support question
nearby: campus gates, shuttle/taxi, food, bank/ATM, clinic, lecture halls
accessibility: access notes, stairs/elevator, wheelchair notes if known
similar: same area, similar price, similar quality, nearby
policies: house rules, visitor rules, payment note, no platform hostel-fee payment in MVP
amenities: water, security, Wi-Fi, study area, kitchen, washroom, electricity
explore area: map, distance, transport notes, area guide
```

## Mobile Loading Details

Observed small details:

```text
loading state keeps the top search summary visible
filter/category chips remain visible
result card skeletons match final card size
skeleton uses image block + text lines
page does not jump while loading
```

Hostel Premium rule:

```text
Every list page must use layout-matched skeletons.
Do not use only a spinner for search results.
```

## Mobile Menu Drawer Details

Observed small details:

```text
drawer slides from right/over page
top has member value graphic and sign-in actions
primary sign-in button and secondary free sign-up link
menu items are grouped
shop/search item
support item
language/currency row
list property item
trips item
```

Hostel Premium adaptation:

```text
top value: Sign in to view full details and send safe enquiries
primary: Continue with Google
secondary: Create account
items: Browse Hostels, Saved Hostels, My Requests, Messages, Support, For Managers, How Verification Works
language/currency optional later
```

## Mobile Destination / Guide Page Details

Observed small details:

```text
destination guide embeds search controls inside editorial content
hero image at top
breadcrumb-like context
date/guest fields below image
search button remains prominent
map preview appears below search
guide video/content follows
area recommendation tabs appear later
```

Hostel Premium adaptation:

```text
UCC area guide pages can embed search:
- UCC / Apewosika guide hero
- move-in/semester fields
- room/occupants fields
- search button
- area map preview
- area guide content
- recommended hostels
```

## Full Draft Component List From Mobile Review

Navigation:

```text
MobileHeader
MobileLogo
GetAppButtonFuture
MobileMenuButton
MobileMenuDrawer
MobileMenuValueCard
MobileMenuItem
MobileHelpButton
```

Search:

```text
MobileSearchTabs
MobileSearchModule
DestinationSearchField
DestinationSearchScreen
PopularDestinationList
DestinationSuggestionRow
MoveInDateField
SemesterField
RoomOccupantsField
RoomOccupantsSelector
MobileSearchButton
CompactSearchSummary
ExpandedSearchPanel
SearchEditButton
```

Results:

```text
MobileResultsHeader
CategorySegmentedControl
FilterChipRow
FilterChip
SortChip
MapFloatingButton
MobileHostelResultCard
ResultCardImage
ResultCardImageStack
ResultCardFavoriteButton
ResultCardTrustLabel
ResultCardAmenityRow
ResultCardAvailabilityLabel
ResultCardPriceBlock
MobileResultSkeleton
ResultsCountLabel
```

Filters:

```text
FilterSheet
FilterSheetHeader
FilterCloseButton
ClearFiltersButton
SortSelect
CompareToggleFuture
HostelNameSearchInput
PriceMinMaxInputs
PriceHistogram
PriceRangeSlider
FilterSection
FilterCheckboxRow
FilterCountLabel
ShowMoreFiltersButton
FilterDoneButton
```

Detail:

```text
MobileDetailPage
DetailBackButton
DetailImageCarousel
ImageCarouselDots
GalleryCountButton
PhotoCategoryChips
PhotoGrid
PhotoGroupLabel
HostelDetailHeader
TrustSummaryRow
ReviewOrQualitySummary
StickyEnquiryCTA
RoomSearchSummary
RoomCard
RoomCardImage
RoomBenefitsList
RoomPriceBlock
RoomSelectCTA
AmenitiesSection
PoliciesSection
FAQQuestionBox
NearbyPlacesSection
SimilarHostelsCarousel
ExploreAreaMap
GettingAroundList
AreaGuideSection
```

States:

```text
CookieConsentCard
SignInValueCard
LoadingSkeletonList
SearchResultsSkeleton
DetailSkeleton
EmptyResultsState
FilterNoResultsState
UnavailableListingState
ProtectedActionGate
```

## Review Status

This is a detailed first component inventory from the Expedia mobile reference.

Next step:

```text
Review this list with the user.
Remove anything not needed for MVP.
Group remaining components by page.
Then find component sources from Reales, shadcn/ui, Tailwind Plus, Motion Primitives, Iconsax, and custom-built components.
```
