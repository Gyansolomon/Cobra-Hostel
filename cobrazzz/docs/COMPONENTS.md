# Hostel Premium Component Inventory

## Purpose

This document lists the components needed for the Hostel Premium MVP and future mobile app direction.

Rule:

```text
Do not build random page-specific UI.
Every repeated UI pattern becomes a named Hostel Premium component.
Every component must support responsive behavior and relevant loading, empty, error, disabled, and protected-action states.
```

## Source Legend

```text
Reales = licensed Figma UI kit inspiration, adapted to Hostel Premium.
Expedia = search/listing/detail behavior reference, not copied visually.
shadcn/Radix = accessible base primitives.
Iconsax = icon source, free style first.
Motion Primitives = motion helpers.
Custom = build specifically for Hostel Premium.
Map stack = Leaflet/free map approach first.
```

## MVP Priority Legend

```text
P0 = required for first usable web MVP.
P1 = important for launch-quality MVP.
P2 = future/mobile/admin enhancement.
```

---

## 1. Foundation Components

| Component | Priority | Source | Notes |
| --- | --- | --- | --- |
| `Button` | P0 | shadcn/Radix + custom tokens | Primary, secondary, ghost, destructive, icon+text, loading. |
| `IconButton` | P0 | shadcn/Radix + Iconsax | Menu, search, save, back, close, map, filter. |
| `Input` | P0 | shadcn/Radix | Text, phone, number, search, disabled, error. |
| `SearchInput` | P0 | shadcn/Radix + Iconsax | Large search pill and compact search field. |
| `Textarea` | P0 | shadcn/Radix | Booking/request message. |
| `Select` | P0 | shadcn/Radix | Sort, room type, area, status. |
| `Checkbox` | P0 | shadcn/Radix | Filter rows, consent. |
| `Switch` | P1 | shadcn/Radix | Manager contact reveal settings. |
| `Tabs` | P0 | shadcn/Radix + Motion Primitives | Home discovery tabs, detail photo tabs, category tabs. |
| `SegmentedControl` | P0 | Custom + Radix | Any/Private/Shared, Hostels/Rooms, mobile category toggle. |
| `Badge` | P0 | shadcn/Radix | Trust, availability, status. |
| `Card` | P0 | shadcn/Radix + custom | Use carefully; avoid nested card clutter. |
| `Sheet` | P0 | shadcn/Radix + Motion | Mobile filter/search sheets. |
| `Dialog` | P1 | shadcn/Radix | Confirmations, protected action gate. |
| `Popover` | P1 | shadcn/Radix | Account popover, desktop dropdowns. |
| `Tooltip` | P1 | shadcn/Radix | Icon-only controls. |
| `Accordion` | P1 | shadcn/Radix | FAQ and filter groups. |
| `Skeleton` | P0 | shadcn/Radix + custom shapes | Must match final card layout. |
| `Toast` | P1 | shadcn/Radix/Sonner-style | Save/request success and errors. |
| `EmptyState` | P0 | Custom + 3D/visual assets later | No results, no saved hostels, no requests. |
| `ErrorState` | P0 | Custom | Safe retry state. |
| `LoadingState` | P0 | Custom skeleton-first | Avoid spinner-only results. |

---

## 2. Navigation Components

| Component | Priority | Source | Notes |
| --- | --- | --- | --- |
| `DesktopHeader` | P0 | Expedia/Reales inspiration + custom | Logo, Browse UCC Hostels, Map, How It Works, For Managers, Sign In. |
| `MobileHeader` | P0 | Expedia/Foodpanda inspiration + custom | Compact logo/context, get-app future, menu. |
| `MobileDiscoveryHeader` | P0 | Foodpanda-style inspiration + custom | UCC/context row + search pill. |
| `MobileMenuButton` | P0 | Iconsax | Opens drawer. |
| `MobileMenuDrawer` | P0 | shadcn Sheet + custom | Account value card, grouped nav items. |
| `MobileMenuValueCard` | P0 | Expedia inspiration + custom | Sign-in value and CTA. |
| `MobileMenuItem` | P0 | Custom | Browse, saved, requests, messages, support, managers. |
| `AccountMenuPopover` | P1 | Expedia + shadcn Popover | Low-pressure sign-in menu on desktop. |
| `Footer` | P0 | Expedia/Amber inspiration + custom | SEO and policy links. |
| `FloatingHelpButton` | P2 | Expedia inspiration + custom | Future support/chat entry. |

---

## 3. Home / Landing Components

| Component | Priority | Source | Notes |
| --- | --- | --- | --- |
| `HeroSearchModule` | P0 | Expedia + Reales + custom | Desktop horizontal search with UCC-first fields. |
| `SearchTabs` | P0 | Expedia + shadcn Tabs | Hostels, Areas, Map, Verified, For Managers. |
| `DestinationSearchField` | P0 | Expedia + Iconsax | UCC/area/hostel search. |
| `MoveInPeriodField` | P0 | Expedia date field adapted | Semester/move-in period. |
| `RoomOccupantsField` | P0 | Expedia travellers field adapted | Room type and occupants. |
| `RoomOccupantsSelector` | P1 | shadcn/Radix + custom | Steppers/segmented controls. |
| `MobileSearchModule` | P0 | Expedia mobile + custom | Stacked mobile search fields. |
| `MobileSearchTabs` | P0 | Expedia mobile + custom | Horizontal category tabs. |
| `MobileSearchButton` | P0 | Button | Full-width mobile search CTA. |
| `SignInValueCard` | P0 | Expedia inspiration + custom | Explains account value. |
| `PopularAreaCard` | P0 | Expedia destination cards + custom | UCC areas with image/count/price range. |
| `AreaChips` | P0 | Reales/Foodpanda + custom | UCC area chips. |
| `QuickDiscoveryShortcuts` | P1 | Foodpanda pattern + Iconsax | Near Campus, Available, Private, Verified. |
| `MobileHeroCarousel` | P1 | Foodpanda-style motion + custom | Calm top mobile carousel. |
| `CarouselProgressTimer` | P1 | Custom + Motion | Animated bar/dot timer. |
| `CarouselPauseButton` | P1 | Iconsax + custom | Pause auto carousel. |
| `TrustExplainer` | P0 | Custom | Explains precise verification labels. |
| `OwnerCTA` | P0 | Expedia list property pattern + custom | List your hostel / For Managers. |
| `FAQAccordion` | P1 | shadcn Accordion | SEO and trust questions. |
| `SEOContentBlock` | P1 | Custom | UCC area guide content. |

---

## 4. Search / Results Components

| Component | Priority | Source | Notes |
| --- | --- | --- | --- |
| `CompactSearchSummary` | P0 | Expedia mobile/desktop + custom | Shows current search and edit action. |
| `ExpandedSearchPanel` | P0 | Expedia mobile + custom | Editable search fields above results. |
| `SearchEditButton` | P0 | Iconsax | Opens expanded search. |
| `ResultsCountLabel` | P0 | Expedia + custom | Count + current area context. |
| `SortSelect` | P0 | shadcn Select | Recommended, price, availability, trust. |
| `FilterChipRow` | P0 | Expedia mobile + custom | Horizontal chips. |
| `FilterChip` | P0 | Custom | Price, area, room, amenities, verified. |
| `SortChip` | P0 | Custom | Opens sort/filter sheet on mobile. |
| `CategorySegmentedControl` | P0 | Custom | Any / Private / Shared or Hostels / Rooms. |
| `FilterRail` | P0 | Expedia desktop + custom | Desktop left rail. |
| `FilterSheet` | P0 | shadcn Sheet + Expedia | Mobile filter sheet. |
| `FilterSheetHeader` | P0 | Custom | Close, title, clear. |
| `FilterCloseButton` | P0 | IconButton | Close sheet. |
| `ClearFiltersButton` | P0 | Button | Clears filters. |
| `HostelNameSearchInput` | P0 | Input | Search by hostel name. |
| `PriceMinMaxInputs` | P0 | Input | GHS min/max. |
| `PriceRangeSlider` | P0 | shadcn/Radix Slider if added | Touch-friendly range. |
| `PriceHistogram` | P2 | Custom | Nice-to-have; can skip MVP if costly. |
| `FilterSection` | P0 | Custom/Accordion | Grouped filter fields. |
| `FilterCheckboxRow` | P0 | Checkbox | Label + count. |
| `FilterCountLabel` | P0 | Custom | Shows remaining results. |
| `ShowMoreFiltersButton` | P1 | Button | Expands long groups. |
| `FilterDoneButton` | P0 | Button | Sticky done action. |
| `MapFloatingButton` | P0 | Expedia mobile + custom | Opens map/list. |
| `MapToggle` | P0 | Custom | Switch list/map. |
| `MobileResultsHeader` | P0 | Expedia mobile + custom | Summary, chips, filters. |
| `SearchResultsSkeleton` | P0 | Custom | Matches result-card layout. |

---

## 5. Hostel Card Components

| Component | Priority | Source | Notes |
| --- | --- | --- | --- |
| `HostelResultCard` | P0 | Expedia/Reales + custom | Desktop card with image/content/price. |
| `MobileHostelResultCard` | P0 | Expedia mobile + custom | Dense single-column card. |
| `ResultCardImage` | P0 | Custom | Image with fallback. |
| `ResultCardImageStack` | P1 | Expedia mobile + custom | Multi-image preview. |
| `ImageCarouselControls` | P1 | Custom + Motion | Card image arrows/dots. |
| `FavoriteButton` | P0 | Iconsax + custom | Protected/save gate. |
| `TrustBadge` | P0 | Custom | Owner Submitted, Admin Reviewed, Photos Confirmed, Physically Verified. |
| `VerificationStatus` | P0 | Custom | Admin/internal status. |
| `AmenityBadge` | P0 | Iconsax + Badge | Water, Wi-Fi, security, kitchen, study area. |
| `AmenityRow` | P0 | Custom | 2-4 compact amenities. |
| `PriceBadge` | P0 | Custom | GHS semester/year range. |
| `AvailabilityLabel` | P0 | Custom | Available, limited, checking, unavailable. |
| `ProtectedDetailCTA` | P0 | Custom | Sign-in gate for full detail. |
| `MobileResultSkeleton` | P0 | Skeleton | Image + text + price skeleton. |

---

## 6. Map Components

| Component | Priority | Source | Notes |
| --- | --- | --- | --- |
| `MapPreviewCard` | P0 | Expedia + Map stack | Small map preview on results/detail. |
| `MapView` | P1 | Leaflet/free map | Full map search. |
| `MapBoundsController` | P1 | Custom + Map stack | Tracks bounds/zoom and updates visible results. |
| `MapAwareResultsCount` | P1 | Airbnb/Expedia behavior + custom | Shows count based on search, filters, and map bounds. |
| `SearchMapSplitLayout` | P1 | Airbnb/Expedia + custom | Desktop list/map split layout. |
| `StickyMapPanel` | P1 | Airbnb/Expedia + custom | Keeps map visible beside results on desktop. |
| `HostelPin` | P1 | Custom + Iconsax | Trust/price pin. |
| `MapPinPrice` | P1 | Airbnb-style behavior + custom | Price label pin for visible hostels. |
| `MapPinCluster` | P2 | Map stack | Cluster/group pins when zoomed out. |
| `HostelPreviewCard` | P1 | Custom | Pin preview card. |
| `MapSelectedHostelPreview` | P1 | Custom | Selected pin/card preview state. |
| `MapFilterBar` | P1 | Custom | Map filters. |
| `MobileMapMode` | P1 | Airbnb/Expedia + custom | Full-screen mobile map mode. |
| `MobileListMode` | P1 | Airbnb/Expedia + custom | Mobile list mode with map toggle. |
| `MapListToggle` | P1 | Custom | Switch list/map. |
| `MapAreaEmptyState` | P1 | Custom | No hostels in current map area. |
| `BottomSheetPreview` | P1 | shadcn Sheet + custom | Mobile pin preview. |
| `ExploreAreaMap` | P1 | Expedia detail + map stack | Area/context map. |
| `GettingAroundList` | P1 | Custom | Walking/taxi/shuttle notes. |

---

## 7. Hostel Detail Components

| Component | Priority | Source | Notes |
| --- | --- | --- | --- |
| `HostelDetailPage` | P0 | Expedia/Amber/Reales + custom | Full signed-in detail. |
| `PublicHostelTeaserPage` | P0 | Custom | SEO-friendly auth-gated teaser. |
| `MobileDetailPage` | P0 | Expedia mobile + custom | Long structured mobile detail. |
| `DetailBackButton` | P0 | IconButton | Back/nav. |
| `HostelGallery` | P0 | Reales/Expedia + custom | Gallery preview. |
| `DetailImageCarousel` | P0 | Expedia mobile + custom | Large mobile carousel. |
| `ImageCarouselDots` | P1 | Custom | Mobile image position. |
| `GalleryCountButton` | P1 | Custom | Opens all photos. |
| `PhotoCategoryChips` | P1 | Expedia detail + custom | All, Rooms, Washroom, Kitchen, Security. |
| `PhotoGrid` | P1 | Custom | All photos. |
| `PhotoGroupLabel` | P1 | Custom | Room/category label. |
| `HostelDetailHeader` | P0 | Custom | Name, area, trust, summary. |
| `TrustSummaryRow` | P0 | Custom | Trust labels in detail. |
| `QualitySummary` | P0 | Custom | Team quality score summary. |
| `RoomSearchSummary` | P0 | Expedia room chooser + custom | Move-in/occupants summary. |
| `RoomTypeCard` | P0 | Reales/Expedia + custom | Room type, occupants, price, availability. |
| `RoomCardImage` | P0 | Custom | Room photo. |
| `RoomBenefitsList` | P0 | Custom | Included amenities. |
| `RoomPriceBlock` | P0 | Custom | GHS range. |
| `RoomSelectCTA` | P0 | Button | Request/view full details. |
| `AmenitiesSection` | P0 | Custom | Amenities grid/list. |
| `AmenityGrid` | P0 | Custom | Visual amenity grid. |
| `PoliciesSection` | P1 | Custom | House rules, payment note. |
| `FAQQuestionBox` | P1 | Custom | Ask/search FAQ. |
| `NearbyPlacesSection` | P1 | Expedia detail + custom | UCC gates, food, bank, clinic. |
| `SimilarHostelsCarousel` | P1 | Custom | Similar price/area/trust. |
| `StickyEnquiryCTA` | P0 | Custom | Does not cover content. |
| `DetailSkeleton` | P0 | Skeleton | Detail loading. |

---

## 8. Auth / Protected Gate Components

| Component | Priority | Source | Notes |
| --- | --- | --- | --- |
| `AuthCard` | P0 | Expedia/Reales + custom | Focused auth card. |
| `GoogleButton` | P0 | shadcn Button + Google mark | Web MVP auth. |
| `FutureAppleButton` | P2 | Custom | Mobile later. |
| `FutureFacebookButton` | P2 | Custom | Mobile later. |
| `ProtectedActionGate` | P0 | Expedia sign-in value + custom | Full detail/request/message gate. |
| `SignInPopover` | P1 | Expedia + Popover | Header account prompt. |
| `PhoneProfileStep` | P0 | Custom + form | Required before enquiry/message. |
| `AuthSuccessState` | P1 | Custom | Return to attempted action. |
| `CookieConsentCard` | P2 | Custom/legal if needed | Only if cookies/analytics require it. |

---

## 9. Booking / Request Components

| Component | Priority | Source | Notes |
| --- | --- | --- | --- |
| `RequestBookingForm` | P0 | shadcn form components + custom | No student payment. |
| `HostelSummaryCard` | P0 | Custom | Summary above form. |
| `PhoneRequiredNotice` | P0 | Custom | Prompt profile completion. |
| `ConsentCheckbox` | P0 | Checkbox | Safety/terms consent. |
| `SuccessConfirmation` | P0 | Custom + Motion | Enquiry sent next steps. |
| `RequestStatusBadge` | P1 | Badge | New, viewed, replied, closed. |

---

## 10. Owner / Manager Components

| Component | Priority | Source | Notes |
| --- | --- | --- | --- |
| `OwnerDashboardShell` | P1 | Tailwind Plus/Untitled inspiration + custom | Owner area. |
| `ListingStatusCard` | P1 | Custom | Draft/submitted/published/needs changes. |
| `OwnerListingTable` | P1 | shadcn Table | Listing management. |
| `AddHostelForm` | P1 | shadcn form + custom | Owner/admin listing input. |
| `EditHostelForm` | P1 | shadcn form + custom | Listing edits. |
| `ImageManager` | P1 | Custom | Upload/manage listing images. |
| `ContactSettingsForm` | P1 | Custom | Reveal phone/WhatsApp settings. |
| `ContactRevealToggle` | P1 | Switch | Phone/WhatsApp reveal. |
| `RequestInbox` | P1 | Custom/Table | Enquiry inbox. |
| `RequestDetailPanel` | P1 | Custom | Message/status detail. |
| `MessageThread` | P2 | Custom | Future richer messaging. |

---

## 11. Admin Components

| Component | Priority | Source | Notes |
| --- | --- | --- | --- |
| `AdminShell` | P1 | Tailwind Plus/Untitled inspiration + custom | Admin dashboard. |
| `PendingListingsTable` | P1 | shadcn Table | Review queue. |
| `VerificationQueue` | P1 | Custom | Physical/photo/admin review. |
| `ListingReviewPanel` | P1 | Custom | Approve/reject/request changes. |
| `VerificationChecklist` | P1 | Custom | Room/photos/location/prices/amenities. |
| `QualityAssessmentPanel` | P1 | Custom | Team quality scoring. |
| `AuditLogTable` | P2 | shadcn Table | Sensitive action logs. |

---

## 12. State Components

| Component | Priority | Source | Notes |
| --- | --- | --- | --- |
| `LoadingSkeletonList` | P0 | Skeleton + custom | Results/list loading. |
| `SearchResultsSkeleton` | P0 | Custom | Mobile/desktop results. |
| `EmptyResultsState` | P0 | Custom + visual asset | No hostels match filters. |
| `FilterNoResultsState` | P1 | Custom | Filter produces zero results. |
| `UnavailableListingState` | P0 | Custom | Listing unavailable/unpublished. |
| `NoSavedHostelsState` | P1 | Custom + visual asset | Favorites empty. |
| `NoRequestsState` | P1 | Custom + visual asset | Requests empty. |
| `ErrorRetryState` | P0 | Custom | Safe retry. |
| `PermissionDeniedState` | P0 | Custom | Auth/role restriction. |

---

## MVP Component Build Order

### Phase 1: Home + Search Foundation

```text
DesktopHeader
MobileHeader
MobileMenuDrawer
Button
IconButton
Input
SearchInput
Tabs
HeroSearchModule
MobileSearchModule
SearchTabs
DestinationSearchField
MoveInPeriodField
RoomOccupantsField
SignInValueCard
PopularAreaCard
TrustExplainer
OwnerCTA
Footer
```

### Phase 2: Results / Listing

```text
CompactSearchSummary
ExpandedSearchPanel
ResultsCountLabel
SortSelect
FilterChipRow
FilterChip
CategorySegmentedControl
FilterRail
FilterSheet
PriceMinMaxInputs
PriceRangeSlider
FilterCheckboxRow
FilterDoneButton
MapPreviewCard
MapFloatingButton
HostelResultCard
MobileHostelResultCard
FavoriteButton
TrustBadge
AmenityRow
PriceBadge
AvailabilityLabel
SearchResultsSkeleton
EmptyResultsState
```

### Phase 3: Detail + Protected Gate

```text
PublicHostelTeaserPage
ProtectedActionGate
HostelDetailPage
MobileDetailPage
HostelGallery
DetailImageCarousel
HostelDetailHeader
TrustSummaryRow
QualitySummary
RoomTypeCard
AmenitiesSection
StickyEnquiryCTA
SimilarHostelsCarousel
ExploreAreaMap
DetailSkeleton
```

### Phase 4: Auth + Request

```text
AuthCard
GoogleButton
PhoneProfileStep
RequestBookingForm
HostelSummaryCard
ConsentCheckbox
SuccessConfirmation
RequestStatusBadge
```

### Phase 5: Owner/Admin

```text
OwnerDashboardShell
OwnerListingTable
AddHostelForm
ImageManager
ContactSettingsForm
RequestInbox
AdminShell
PendingListingsTable
VerificationQueue
ListingReviewPanel
VerificationChecklist
QualityAssessmentPanel
```

## Components To Defer

```text
GetAppButtonFuture
FutureAppleButton
FutureFacebookButton
CompareToggleFuture
PriceHistogram
FloatingHelpButton
MessageThread
AuditLogTable
CookieConsentCard unless legal/analytics requires it
```

## Next Review Step

Use this document as the working list when finding component sources.

For each component we must decide:

```text
Keep for MVP?
Source?
Free or paid?
Needs MCP/Figma?
Needs package install?
Needs custom build?
Mobile behavior?
Desktop behavior?
States needed?
```
