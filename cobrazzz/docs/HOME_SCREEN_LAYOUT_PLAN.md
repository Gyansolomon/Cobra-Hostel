# Home Screen Layout Plan

## Purpose

This plan defines the first screen before UI implementation.

Scope:

```text
Home page top experience only.
Header
Search module
Discovery tabs
Popular UCC area cards
Trust/preview content
```

Out of scope for this first build:

```text
mobile carousel
full search results
full map search
auth gates
owner dashboard
payments
real backend data
```

## Design Read

```text
Accommodation marketplace for UCC students, using Airbnb/Expedia search clarity, Reales property-card rhythm, white canvas, black text, soft gray structure, and a restrained rose action accent.
```

## Screen Goal

```text
Make a first-time visitor immediately understand that Hostel Premium helps students find trusted hostels around UCC.
```

## Primary Action

```text
Search UCC, an area, or a hostel name.
```

## Secondary Actions

```text
Browse UCC areas.
View map search.
Understand verification.
Open manager information without making it the main focus.
```

## Desktop Layout

Structure:

```text
Top header:
  logo left
  centered discovery categories
  manager/support/menu actions right

Hero search:
  centered Airbnb/Expedia-style pill search module
  fields: Where, Move-in, Room type
  rose search button

Primary content:
  left: UCC-first title, supporting copy, trust cues
  right: property/area preview grid with real accommodation imagery

Discovery rail:
  horizontal UCC area cards/chips
```

Rules:

```text
White background.
Rose appears mainly in the primary search button and small selected states.
No gold.
No cream full-page background.
Do not stretch mobile layout across desktop.
```

## Tablet Layout

Structure:

```text
Header remains horizontal but simplified.
Search module becomes two-row if needed.
Hero content stacks into search then preview grid.
Area cards use two-column grid or horizontal scroll.
```

## Mobile Layout

Structure:

```text
Mobile header:
  compact Hostel Premium mark
  UCC context text
  menu button

Search:
  large pill search bar near top
  discovery category row below

Content:
  concise UCC-first copy
  horizontal area cards
  compact trust strip
```

Mobile rules:

```text
No desktop columns squeezed into mobile.
No forced full-screen hero.
Search must be visible without scrolling.
Cards can horizontally scroll.
```

## Components

```text
HomeHeader
CategoryTabs
HeroSearchModule
HeroPreviewGrid
AreaCard
TrustMiniStrip
ManagerSecondaryLink
```

## Image Direction

Use temporary web-sourced accommodation images for layout only.

Rules:

```text
Do not imply temporary images are real UCC hostels.
Use room/exterior/student-accommodation imagery.
Replace with verified hostel photos later.
```

## Initial Content

Search tabs:

```text
Hostels
Areas
Map
Verified
For Managers
```

First areas:

```text
Science / New Site
Ayensu
Kwaprow
Amamoma
Apewosika / Old Site
Kokoado / Old Site
```

Trust cues:

```text
Owner submitted
Admin reviewed
Photos confirmed
Physically verified
```

## Acceptance Criteria

```text
Desktop looks like a real web marketplace, not a stretched mobile app.
Mobile search is visible and usable immediately.
Primary color usage is restrained.
The first viewport makes UCC hostel discovery obvious.
Manager content is present but secondary.
The design can later connect to search/list/map behavior.
```
