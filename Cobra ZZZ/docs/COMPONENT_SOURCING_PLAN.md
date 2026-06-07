# Component Sourcing Plan

## Purpose

This document explains how Hostel Premium will get components from the approved sources without creating random, inconsistent UI.

Rule:

```text
Every imported, copied, or inspired component must become part of the Hostel Premium component system. Do not paste unrelated components into pages without adapting them.
```

## Source Priority

### 1. Licensed Figma Source: Reales

Use for:

```text
home page layout inspiration
feed/listing layout inspiration
filter page layout inspiration
property card rhythm
auth/login/register polish
spacing and component grouping
visual reference for real-estate-style browsing adapted to hostel search
```

How we get it:

```text
Use Figma MCP screenshot/context tools when available.
If MCP is rate-limited, use the exact node IDs saved in docs/VISUAL_REFERENCES_HOME.md and inspect manually/browser-side.
Rebuild the components in code using Hostel Premium tokens and rules.
```

Rules:

```text
Use the licensed UI kit as a source, but adapt it to UCC hostel search.
Do not ship unchanged real-estate language, mortgage/payment flows, or reservation assumptions.
```

### 2. shadcn/ui + Radix

Use for:

```text
Button
Input
Textarea
Select
Checkbox
Switch
Dialog
Sheet
Tabs
Dropdown
Table
Badge
Toast
Tooltip
Accordion
Skeleton
```

How we get it:

```text
Use shadcn CLI or copy from official shadcn component source during implementation.
Install only the components needed for the current phase.
Customize tokens, radius, color, spacing, and typography to match DESIGN.md.
```

Rules:

```text
Do not leave default shadcn styling untouched.
Do not install unnecessary components.
Use Radix accessibility behavior, then apply Hostel Premium visual styling.
```

### 3. Iconsax Free Icons

Use for:

```text
navigation
search/filter icons
map/location icons
hostel amenity icons
trust/status icons where appropriate
owner/admin dashboard icons
animated premium feedback moments
```

How we get it:

```text
Use free Iconsax package/assets if available for the target framework.
Choose one consistent style, such as linear or outline, for MVP.
Use animated Iconsax icons only where they add premium feedback or explain state.
Use Lucide only as fallback where Iconsax does not provide a clean utility icon.
```

Rules:

```text
Do not mix icon families randomly.
Do not mix Iconsax styles randomly.
Do not use premium Iconsax assets unless the license is confirmed.
Do not use animated icons as decoration everywhere.
```

### 4. Motion Primitives

Source:

```text
https://github.com/ibelick/motion-primitives
```

Use for:

```text
accordion motion
filter/sheet transitions
tabs and segmented controls
animated number/text moments if needed
card reveal/preview transitions
map/list view transitions
success or subtle feedback states
```

How we get it:

```text
Install/copy only the needed Motion Primitives components during the relevant phase.
Adapt timing and easing to DESIGN.md.
Keep components project-owned after adaptation.
```

Rules:

```text
Motion must be subtle and useful.
Respect reduced motion.
Avoid decorative animation in core browsing, request, owner, and admin flows.
```

### 5. Free Map Stack

Use for:

```text
map/list hostel search
hostel detail location preview
nearby hostel suggestions
admin location review
```

Recommended first approach:

```text
Leaflet-style implementation with stored hostel coordinates.
Free/open map approach first.
Avoid paid geocoding.
Avoid repeated address-to-coordinate calls.
```

Rules:

```text
Respect OpenStreetMap tile usage policy.
Show attribution.
Do not rely on public OSM tile servers for heavy commercial traffic.
Store approved coordinates in Supabase.
Use approximate labels unless location is verified.
```

### 6. Tailwind Plus / Untitled UI / UI8

Use for:

```text
layout inspiration
admin/dashboard structure
tables/forms/settings-page references
premium marketing sections if licensed
3D components/assets from UI8 when the user owns the pack or approves purchase
```

How we get it:

```text
Only after user confirms access/approval.
Use as inspiration or licensed source depending on license.
Adapt to Hostel Premium components.
```

Rules:

```text
Do not require paid sources for MVP unless approved.
Do not copy protected assets without license.
```

### 7. Free / Licensed 3D Assets

Use for:

```text
permission screens
empty states
failed/error states
location/map states
verification explanations
onboarding moments
```

Possible sources:

```text
Khagwal 3D - CC0 Public Domain per public source
3dicons - CC0/open-source set available, check current license before production
Flowbite Illustrations - MIT/open-source with credit/license rules
IconScout free 3D - check per-asset license and account rules
Figma Community 3D packs - check each file's license
UI8 - paid/licensed packs if owned/approved
```

Rules:

```text
Keep one consistent 3D style.
Use Hostel Premium colors where possible.
Do not use 3D assets for real hostel listing photos.
Do not make failed/error states childish.
Optimize assets for web performance.
```

### 8. Magic UI / Aceternity UI

Use for:

```text
landing page visual moments
hero presentation
subtle bento/product sections
```

Rules:

```text
Use sparingly.
Avoid heavy effects inside search, listing, detail, request, owner, or admin workflows.
Performance and clarity come first.
```

## How Components Become Project Components

Every sourced component goes through this process:

```text
1. Identify need from PAGE_PLANS.md.
2. Choose source from this document.
3. Check license/cost/setup.
4. Import/copy/install only what is needed.
5. Rename/adapt to Hostel Premium naming.
6. Apply DESIGN.md tokens: color, spacing, radius, typography, motion.
7. Add loading/empty/error/disabled/mobile states where relevant.
8. Test desktop/tablet/mobile.
9. Add to docs/COMPONENTS.md.
```

## MVP Component Build Order

Home:

```text
SiteHeader
HeroSearch
UniversityAreaChips
TrustExplainer
FeaturedHostelCard
PopularAreaCard
MapPreview
OwnerCTA
FAQAccordion
Footer
```

Listing/search:

```text
SearchHeader
FilterSidebar
FilterSheet
HostelCard
TrustBadge
PriceBadge
AmenityBadge
SortMenu
MapToggle
```

Map:

```text
MapView
HostelPin
HostelPreviewCard
MapFilterBar
BottomSheetPreview
```

Detail:

```text
HostelGallery
RoomTypeCard
QualitySummary
AmenityGrid
StickyEnquiryPanel
SimilarHostels
```

Auth/request:

```text
AuthCard
GoogleButton
PhoneProfileStep
RequestForm
SuccessConfirmation
```

Owner/admin:

```text
DashboardShell
OwnerListingTable
AddHostelForm
ImageManager
ContactSettingsForm
RequestInbox
AdminShell
VerificationQueue
QualityAssessmentPanel
```

## Do Not Do

```text
Do not paste a full UI kit screen and call it done.
Do not mix component systems randomly.
Do not install large libraries for one small effect.
Do not use paid tools/assets without approval.
Do not use map tiles in a way that violates usage policies.
Do not create components without mobile, desktop, loading, empty, and error states where relevant.
```
