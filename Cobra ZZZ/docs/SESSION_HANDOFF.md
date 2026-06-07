# Session Handoff

Last updated: 2026-06-06

This handoff is for the next Codex agent continuing the Cobra / Hostel Premium project.

## Read First

Before planning or implementing, read these files in order:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\AGENTS.md
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\web\AGENTS.md
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\docs\HOME_SCREEN_LAYOUT_PLAN.md
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\docs\COLOR_SYSTEM.md
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\docs\SESSION_HANDOFF.md
C:\Users\HP\Desktop\Cobra master\premium-app-os\global\SKILL_ROUTER.md
C:\Users\HP\Desktop\Cobra master\premium-app-os\planning\PAGE_PLANNING_RULES.md
C:\Users\HP\Desktop\Cobra master\premium-app-os\planning\COMPONENT_AND_TOOL_SELECTION.md
C:\Users\HP\Desktop\Cobra master\premium-app-os\planning\REFERENCE_GATHERING_RULES.md
```

User rule:

```text
Do not guess the next step.
Use the skills.
Use references.
Plan before building.
Do not create random components.
Do not copy protected brand assets or exact proprietary UI.
```

## Active Paths

Project:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ
```

Web app:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\web
```

Premium planning system:

```text
C:\Users\HP\Desktop\Cobra master\premium-app-os
```

Important: ignore the older OneDrive folder unless the user explicitly redirects there.

## Product Direction

Current brand/product name in the UI is:

```text
cobra
```

Product:

```text
Student hostel discovery marketplace for Ghana, starting with UCC / Cape Coast.
```

Primary user:

```text
Students looking for hostels/rooms near universities.
```

MVP behavior:

```text
Browse first.
Compare rooms, areas, prices, ratings, and manager/verification status.
Booking/payment is not the focus yet.
```

Visual direction:

```text
Premium marketplace.
White / rose / soft gray.
Airbnb compact card discipline.
Amber Student student-housing listing depth.
No cream/gold/purple-gradient/generic SaaS.
```

## Reference Folders

Homepage references:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\images reference
```

Listing/search references:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\images reference\listing list
```

Listing reference sources are Amber and Airbnb. Analyze the screenshots before implementation. The key shared patterns are:

```text
Sticky search header.
Horizontal filter pill row.
Result count/title.
Detailed listing cards.
Desktop list + sticky map/right rail.
Mobile single-column list + horizontal filters + map action.
Serious filter modal/sheet.
Trust/support layer.
```

## Current Homepage State

Main edited files:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\web\src\app\page.tsx
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\web\src\components\home-header.tsx
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\web\src\components\area-map-client.tsx
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\web\src\components\premium-asset-icon.tsx
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\web\src\app\globals.css
```

Static assets added:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\web\public\hero\student-with-luggage.png
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\web\public\premium-assets\3dicons\...
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\web\public\university-logos\...
```

Homepage implemented:

```text
Mobile pink hero with cobra wordmark, menu, search pill, promo text, and student-with-luggage hero image.
Curved hero bottom is required. Do not remove it.
Metrics row below hero uses 3D icons and must stay 3D.
Popular universities/campuses gallery near Cape Coast.
Continue your search section.
Continue where you left off section.
Popular hostels around UCC row.
LocationFilterBar below popular hostel title.
Available near UCC this semester row.
OpenStreetMap area map section.
Mobile bottom nav: Explore, Wishlist, Profile.
```

Important user preferences from the latest homepage work:

```text
Keep 3D icons only for the metrics row and hostel-card rating stars.
Do not use 3D icons for nav or normal UI icons.
Keep the mobile hero curve.
The hero image must show the bag; current class is in home-header.tsx.
Use arrowheads/chevrons in circular view-more buttons, not full arrows.
Homepage hostel cards should stay compact: two text lines only.
Room labels use "1 in a room", "2 in a room", "3 in a room".
LocationFilterBar pattern is: first pill is city dropdown, then university/area chips.
```

Current `LocationFilterBar` is in:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\web\src\app\page.tsx
```

Current structure:

```text
CityDropdownChip: Cape Coast
University/area chips: UCC, CCTU, NDU, Science, Ayensu, Kwaprow
```

## Current Search Page State

The current `/search` page is still a placeholder/simple search discovery page:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\web\src\app\search\page.tsx
```

It currently has:

```text
Back button.
Search input.
Simple category tabs.
Recently searched chips.
Top cities and top universities.
Mobile bottom nav.
```

This is not yet the premium listing/explore page.

## Next Implementation Target

The next agent should start implementing the premium listing/explore page for `/search`, but should keep the implementation incremental and reference-driven.

Recommended first implementation slice:

```text
Replace /search placeholder with premium listing shell.
Do not build advanced filter modal first.
Do not overbuild.
```

Build Phase 1:

```text
Sticky search header.
Horizontal filter pill row.
Result heading:
  "Hostels near UCC"
  "Showing 42 verified rooms around Cape Coast"
Mobile listing cards.
Desktop listing column + sticky map/right rail.
Floating map button on mobile.
```

Build Phase 2:

```text
Premium listing cards:
image
save heart
verified/reviewed label
"2 in a room · Science / New Site"
distance from UCC
price per semester
3D rating star + rating
small tags: Bills included, Manager confirmed, Private washroom
```

Build Phase 3:

```text
Filter system:
mobile Sheet
desktop Dialog
Tabs / Checkbox / Slider / Select from existing UI primitives
filters: university, area, price, room type, amenities, bills, availability
```

Build Phase 4:

```text
Trust/support rail:
map preview
verified properties
manager confirmation
student support
review count
```

## Listing Page Verdict From Reference Audit

Use a hybrid of Airbnb and Amber:

```text
Airbnb gives list/map clarity and compact cards.
Amber gives student-accommodation filters, right rail trust, detailed cards, and FAQ/support structure.
Cobra should be Ghana/UCC-specific, not global.
```

Mobile listing:

```text
Sticky search header.
Horizontal filters.
Result count/title.
Single-column cards.
Floating map button.
Bottom nav stays.
```

Desktop listing:

```text
Header/search.
Filter pill row.
Left results column.
Right sticky map panel or map + trust rail.
```

## Verification Status

Recent checks passed after latest homepage changes:

```text
npm run lint
npm run build
```

Run both again after any implementation.

## Cautions For Next Agent

```text
Do not remove the mobile hero curve.
Do not convert the homepage into desktop-stretched mobile.
Do not use white card slabs around every filter.
Do not add 3D icons everywhere.
Do not scrape unDraw assets automatically.
Do not use expensive paid map APIs without discussing cost.
Do not start from the OneDrive folder.
Do not ignore the user's browser comments; they are the current visual source of truth.
```

## Suggested First Message From New Agent

```text
I read SESSION_HANDOFF.md and the required project docs. I will start the /search listing implementation with the base listing shell only: sticky search, filter row, result title, listing cards, and desktop map/right rail. I will keep modals and advanced filters for the next pass.
```
