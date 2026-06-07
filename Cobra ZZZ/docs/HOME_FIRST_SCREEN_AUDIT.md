# Home First Screen Audit

Last updated: 2026-06-03

## Scope

Audited and adjusted the first homepage screen only:

```text
Header
Hero search
Hero copy
Trust chips
Primary CTAs
Hero preview grid
Mobile first viewport
```

No new homepage section was planned or built in this pass.

## Audit Findings

Desktop before adjustment:

```text
The search module was visible, but the headline and CTAs were pushed too low because the left hero copy was vertically centered against a tall preview grid.
The first viewport felt less like a tight marketplace home screen and more like separated blocks.
```

Mobile before adjustment:

```text
The content order was correct: header, search, category row, UCC message, trust chips, CTAs.
Mobile needed stronger viewport containment around the header/search shell to protect against horizontal overflow.
```

## Changes Made

```text
Reduced desktop header height from 96px to 80px.
Reduced desktop hero top spacing.
Changed desktop hero grid alignment from centered to top-aligned.
Reduced the primary preview image height on desktop.
Added explicit mobile viewport width constraints with 100dvw.
Added min-width/shrink safeguards to mobile header and category controls.
Added explicit global border-box sizing.
Kept the manager path secondary.
Kept the approved white/ink/rose palette.
```

## Simplification Pass

After visual review, the first screen still carried too much text, too many trust chips, and duplicate action buttons.

Additional changes:

```text
Removed the hero trust-chip cluster from the first viewport.
Removed duplicate hero CTA buttons because the search module is already the primary action.
Shortened the headline to focus on UCC hostels.
Shortened the supporting copy to one compact sentence.
Reduced first-screen discovery tabs to Hostels, Areas, and Map.
Kept verification and manager education for later/lower sections.
```

## Airbnb Reference Check

Airbnb reference images and current public structure reinforce this direction:

```text
Header utilities stay quiet.
Product tabs are compact.
Search is the dominant control.
The home screen relies on browsable image cards rather than heavy hero text.
Host/manager entry exists but does not dominate the student browsing task.
```

Adapted for Hostel Premium:

```text
Converted the large marketing hero into a compact context row.
Moved the visual weight to listing-like hostel preview cards.
Kept Hostel Premium copy, UCC context, Iconsax direction, and the approved color system.
Did not copy Airbnb branding, wording, assets, or exact layout.
```

## Skill-Guided Correction

After user review, the first screen was rechecked with:

```text
baseline-ui
design-taste-frontend
impeccable
```

Skill findings:

```text
Keep search as the only primary action above the fold.
Avoid reintroducing extra CTA buttons after simplifying the screen.
Use image-led cards, but keep their proportions tight enough that listing details remain visible.
Keep the design calm, marketplace-like, and specific to UCC hostels.
```

Corrections:

```text
Removed the above-fold "View all areas" button.
Changed preview card media from tall 4:3 images to tighter 16:10 mobile/tablet and 16:9 desktop images.
Added .impeccable.md so future design work has explicit project context.
```

## Airbnb Hostels Row Direction

The user clarified that the goal is to show more hostel supply on the homepage like Airbnb shows many homes.

Implemented direction:

```text
Use search header first.
Then show homepage rows of many compact hostel cards.
Use horizontal card rows so more hostels are visible without heavy hero text.
Use UCC-specific row titles instead of Airbnb copy.
Keep manager and verification education lower priority.
Do not copy Airbnb branding, exact layout, labels, protected images, or review/payment assumptions.
```

Current homepage rows:

```text
Popular hostels around UCC
Available near UCC this semester
```

## Search Size Correction

User review found the desktop search module too large.

Correction:

```text
Reduced desktop search max-width.
Reduced search container padding.
Reduced each field from a tall 64px control to a compact 48px control.
Reduced the search button from 56px to 48px.
Kept the mobile search pill unchanged because it needs to remain easy to tap.
```

## Airbnb Detail Correction

User review compared the live Airbnb page to the Hostel Premium home page and identified missing details.

Corrections:

```text
Removed the visible horizontal slider/scrollbar by changing hostel rows into responsive grids.
Changed "For managers" to "List your hostel".
Moved the desktop divider from the header to below the search component.
Moved desktop header content closer to the screen edges.
Made row titles smaller and added an arrow after the title.
Added previous/next arrow controls at the top right of each row as visual affordances.
Removed the white circular background from the favorite button; the heart now sits directly over the image.
Changed card titles to room occupancy labels such as "2 in 1 room", "3 in 1 room", and "1 person room".
Changed card metadata to show area, price, semester duration, and rating-style score.
Kept all images as temporary placeholders.
```

## Compact Header Continuation

Continued with the remaining desktop detail:

```text
Added a scroll-aware desktop header using a tiny server-rendered scroll script and CSS data attribute.
When the document scroll passes the first-screen threshold, the center discovery tabs hide and a compact search summary fades in.
The compact search summary shows UCC, Anytime, Any room, and a small rose search button.
The desktop header gains a subtle divider/shadow only in compact state.
Mobile header remains unchanged.
```

Skill guardrails:

```text
Avoided turning the page into a client component.
Avoided React state for the sticky header after browser verification showed the stateful approach was not reliable in rendered checks.
Kept motion to opacity and transform transitions.
Did not animate large images or layout-heavy surfaces.
```

Rendered correction:

```text
Desktop scroll verification first showed the header state changing without visually sticking because the page wrapper used overflow-x-hidden.
Removed that page-level overflow clipping and changed the header/first section width containment to w-full/max-w-full.
Second verification showed sticky working but the nav layer still visible, so the compact behavior moved to CSS driven by html[data-home-header-compact="true"].
Final desktop probe: compact flag true, nav hidden, compact search visible at opacity 1.
```

## Verification

Checked rendered screenshots at:

```text
500px mobile capture
768px tablet capture
1366px desktop capture
1440px desktop capture
```

Notes:

```text
Chrome command-line screenshots on this machine clamp sub-500px mobile layouts, so 375px and 430px captures showed a clipped slice of a wider headless layout. The implementation now uses 100dvw containment for real mobile widths.
```

Passed:

```text
npm run lint
npm run build
```

## Result

The first viewport now better matches the approved home-screen plan:

```text
Desktop reads as a real two-zone accommodation marketplace.
Search remains prominent.
The UCC hostel discovery message and CTAs are visible sooner.
Mobile keeps search visible immediately.
Area/category browsing remains horizontal on mobile.
Manager content remains present but secondary.
The first screen is intentionally quieter: search first, then supporting proof later.
```

## Mobile Header Reference Correction

User selected the mobile header and clarified that mobile should not show the full brand wordmark/text or the old Hostels/Areas/Map boxes.

Applied mobile-only correction:

```text
Mobile header now uses a location-first app pattern.
Top row shows UCC campus area and Cape Coast, Ghana.
The Hostel Premium brand is reduced to the logo mark on the right.
The hamburger menu is removed on mobile.
A saved/favorite heart sits beside the logo mark.
Search sits directly beneath the location row.
The old Hostels, Areas, and Map boxes are removed from the mobile first viewport.
Added a compact mobile banner for verified UCC rooms.
Added a curved cream/pink transition where the purple mobile header meets the main content.
Added a fixed mobile bottom navbar for Hostels, Areas, Search, and Account.
Desktop header/search behavior remains unchanged.
```

Verification:

```text
npm run lint
npm run build
In-app browser mobile render confirmed:
- No hamburger button.
- No old Hostels/Areas/Map hero boxes.
- Mobile visible text starts with location, search, banner, then hostel rows.
```

## Next Gate

Before building more homepage UI, plan the next section from the approved sequence:

```text
Verified hostels near UCC
Browse by area
How verification works
Search/list/map preview
Manager notice/banner as secondary
Footer/support/legal links
```
