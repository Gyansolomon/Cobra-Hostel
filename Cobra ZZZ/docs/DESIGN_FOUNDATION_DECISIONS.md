# Design Foundation Decisions

## Purpose

This document locks the foundation for the first Hostel Premium web build before code starts.

It covers:

```text
component sourcing
typography
color direction
3D/visual assets
code analysis expectations
responsive verification
```

## Build Readiness Position

The project is not missing planning discipline anymore. It is now entering build preparation.

Current status:

```text
Ready to scaffold the web app.
Ready to source the first component set.
Ready to create the first homepage layout plan.
Not ready to improvise UI or code randomly.
```

## Component Sourcing Plan

Yes, Codex can get and assemble most of the components, but there are rules.

### Components Codex Can Source Directly

```text
shadcn/Radix components
open-source primitives
free icon packages
free map libraries
open-source motion helpers
temporary placeholder images from license-safe sources
```

Examples:

```text
buttons
inputs
tabs
dialogs
sheets
popovers
accordions
sliders
skeletons
toasts
filter controls
menus
cards
```

### Components Codex Can Build Custom

```text
HeroSearchModule
MobileDiscoveryHeader
DesktopHeader
PopularAreaCard
TrustExplainer
OwnerCTA
HostelResultCard
ProtectedActionGate
MapPreviewCard
VerificationBadge
```

These should be built specifically for Hostel Premium because they define the product identity.

### Components That Need User Permission Or License Check

```text
Reales Figma components/assets
UI8 3D packs
paid Iconsax animated packs
paid Tailwind Plus examples
paid Untitled UI files
Mobbin screenshots beyond inspiration
any downloaded premium image or illustration pack
```

Rule:

```text
Codex can inspect and adapt approved paid sources if access exists, but should not assume licensing or redistribute assets.
```

## Component Acquisition Workflow

Use this workflow for every component:

```text
1. Check if the component is already in the project.
2. If missing, choose source:
   - shadcn/Radix for accessible primitives
   - Iconsax for icon style
   - Motion Primitives/custom CSS for motion
   - Reales/Expedia/Foodpanda only as visual/behavior reference
   - custom build for Hostel Premium-specific patterns
3. Check package/license/cost.
4. Ask before paid tools or major dependencies.
5. Install or create only what is needed for the current phase.
6. Test desktop, tablet, and mobile behavior.
7. Audit the code and UI before claiming completion.
```

## Typography Decision

Primary font:

```text
Geist Sans
```

Fallback:

```text
system sans-serif
```

Optional later alternative:

```text
Plus Jakarta Sans
```

Do not use:

```text
Inter as the primary visual identity
Roboto
Arial
Open Sans
random decorative fonts
many mixed font families
```

Why:

```text
Geist gives the site a modern, precise, premium product feel.
It is clean enough for marketplace UI and serious enough for trust, safety, manager, and admin pages.
```

Typography rules:

```text
Use one type family for MVP.
Use scale, weight, spacing, and layout for personality.
Desktop text must not look like enlarged mobile text.
Mobile headings must stay compact and readable.
Do not use viewport-width text scaling.
```

## Color Decision

Use the approved clean white marketplace palette from `DESIGN.md` and the exact role mapping in `docs/COLOR_SYSTEM.md`.

Primary direction:

```text
Ink Black - #222222
Clean White - #FFFFFF
Soft Gray - #F7F7F7
Line Gray - #DDDDDD
Text Gray - #6A6A6A
Hostel Rose - #FF385C
Rose Hover - #E31C5F
Verified Green - #2F7D4F
```

Why:

```text
The palette follows the restraint of top accommodation marketplaces: white canvas, black text, soft gray structure, and one rose accent for critical actions.
It fits UCC/Ghana student housing while avoiding generic blue SaaS, beige themes, and luxury gold styling.
```

Rules:

```text
Use white as the base.
Use soft gray only for soft contrast and supporting sections.
Use Hostel Rose only for primary actions and active states.
Use green only for real verification/success.
Use blue only for information states.
Do not use purple AI gradients.
Do not use too many bright accent colors.
Do not make the website look like a food delivery app.
Do not use cream as the full-page background.
Do not use gold as the active brand/action color.
```

## 3D And Visual Asset Decision

3D assets are allowed, but only as supporting state visuals.

Use 3D for:

```text
empty search results
failed/error states
location/area setup
no saved hostels
no booking requests
verification explanations
onboarding moments
```

Do not use 3D for:

```text
real hostel listing photos
room photos
hostel exterior photos
pricing proof
verification proof
```

Reason:

```text
A listing needs real evidence.
3D assets are good for states and guidance, not for pretending to show real hostels.
```

Temporary asset sources:

```text
UI8 if owned and licensed
Khagwal 3D
3dicons
Flowbite Illustrations
IconScout free 3D if license allows commercial use
Figma Community packs only after license check
```

## Image Direction

For the first web build, use temporary license-safe images.

Use:

```text
student accommodation rooms
simple hostel exteriors
campus/location visuals
room-detail closeups
student-friendly shared spaces
map/search previews
```

Avoid:

```text
luxury hotel rooms that misrepresent the product
random real hostel photos without permission
identifiable people without clear license/model release
images that look unrelated to Ghana/UCC/student housing
```

Production rule:

```text
Replace placeholders with manager-submitted, admin-reviewed, or field-verified hostel photos.
```

## Code Analysis Rule

After scaffold and after every serious UI implementation, inspect the code before continuing.

Minimum checks:

```text
project structure
package.json dependencies
component boundaries
responsive classes/layout rules
accessibility attributes
image usage
state handling
motion performance
desktop/tablet/mobile screenshots
```

Do not claim a page is complete until:

```text
the code has been inspected
the browser view has been checked
desktop and mobile layouts are verified
obvious responsive failures are fixed
```

## Responsive Rule

The first page must be designed as three related layouts:

```text
desktop layout
tablet layout
mobile layout
```

It must not be:

```text
a mobile layout stretched across desktop
a desktop layout squeezed into mobile
a stack of equal cards with no hierarchy
```

## Next Required Step

Before writing homepage UI code:

```text
1. Scaffold the Next.js project.
2. Install only the Phase 1 foundation dependencies.
3. Create the homepage layout plan.
4. Build the homepage section by section.
5. Verify desktop, tablet, and mobile in browser.
```
