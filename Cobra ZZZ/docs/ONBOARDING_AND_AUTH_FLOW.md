# Onboarding and Authentication Flow

## Purpose

This document defines the states users pass through before and during Hostel Premium usage. It also defines what public visitors can see, what requires sign-in, and how the web-first MVP differs from the future mobile app.

The goal is to keep the product discoverable from Google while still making sign-up compulsory before deeper hostel details, booking/request enquiries, messaging, saved hostels, or manager contact access.

## Core Recommendation

Use a progressive gate:

```text
Public users can discover the product.
Signed-in users can inspect full details and take serious actions.
```

This protects lead quality and student/manager safety without making the website invisible to Google.

## SEO Tradeoff

If every hostel detail page is fully blocked behind sign-in, Google will have less useful content to index.

Recommended web approach:

```text
Public detail teaser page:
- hostel name
- university/campus area
- broad location label
- starting price/range if approved
- 1-3 approved public images
- short summary
- trust label summary
- sign-in gate for full room details, full gallery, exact room availability, manager contact, enquiry, and messaging
```

This keeps the web useful from Google while still making sign-in compulsory for deeper value.

## Web MVP Access Rules

Public visitors can:

```text
view home page
search/list hostel summary cards
view UCC university hub
view public hostel teaser pages
use basic filters
open map/list previews
read trust/safety/how-it-works pages
start sign-in
```

Public visitors cannot:

```text
view full hostel detail
view full room details
view full image gallery
submit booking/request enquiry
message hostel manager
save persistent favorites
reveal manager phone/WhatsApp
access owner/admin dashboards
```

Authenticated students can:

```text
view full hostel detail
view room details and full gallery
save hostels
submit booking/request enquiry
message through the platform
see manager-approved contact reveal options after the correct gate
manage own profile
```

Before booking/request enquiry or messaging, authenticated students must have:

```text
name
phone or WhatsApp number
basic student/contact profile fields required by the request form
```

## Web Flow

```text
Google/shared link
-> Home, UCC hub, listing page, or public hostel teaser
-> Search/filter/map preview
-> Click featured hostel or "view details"
-> If signed out: show sign-in gate
-> If signed in: show full hostel detail
-> Booking/request enquiry or message
-> If profile phone/WhatsApp missing: complete profile step
-> Submit request through platform
-> Success state with next steps
```

## Future Mobile App First-Run Flow

Mobile app users should pass through richer first-run states because the app experience depends more on saved context, location/area, notifications, and account state.

Recommended order:

```text
1. Splash/logo state
2. Location/area value explainer
3. Location permission or manual area selection prompt
4. Map/manual location selection states
5. Sign-up/login prompt
6. Home
```

Authentication can be skipped at first-run, but protected actions still require sign-up/login.

## Mobile First-Run States

### 1. Splash / Logo

Goal:

```text
Introduce Hostel Premium brand quickly and cleanly.
```

Behavior:

```text
Show logo/wordmark briefly.
Transition into location/area setup without delaying the user.
Keep animation calm and short.
```

### 2. Location / Area Explainer

Goal:

```text
Explain why the app needs a university, campus area, or location context.
```

Hostel Premium copy direction:

```text
Find hostels around your campus.
Compare nearby rooms, prices, and verified details.
```

Important:

```text
For Ghana hostel search, selected university/campus area is more important than precise device GPS at first.
Do not imply exact location tracking unless the user grants location permission.
```

### 3. Permission or Manual Selection

Options:

```text
Use my current location
Choose university or area manually
Skip for now
```

Rules:

```text
Manual selection must be first-class, not a weak fallback.
For UCC MVP, default suggestions should include UCC, Cape Coast, and known hostel areas.
```

### 4. Map / Manual Location States

Required states:

```text
empty input
typing input
suggestions list
invalid/not found
selected address or selected area
map pin confirmation
updating/loading location
success/confirmed context
```

Mobile components:

```text
LocationSetupScreen
LocationPermissionCard
AreaSearchInput
AreaSuggestionList
MapPinPreview
LocationUpdatingOverlay
LocationErrorState
ConfirmAreaButton
```

### 5. Sign-Up / Login Prompt

Goal:

```text
Invite authentication without blocking initial exploration.
```

Options:

```text
Continue with Google
Future app: Continue with Apple
Future app: Continue with Facebook
View more methods if needed
Skip for now
```

Rules:

```text
Skip is allowed before home.
Sign-up becomes required when the user tries to view more/full detail, book/request, message, save persistently, or reveal contact options.
```

### 6. Home

Goal:

```text
Show selected context, search, featured hostels, quick filters, map entry, and protected-action gates.
```

Mobile header behavior:

```text
On first load, logo can transition into selected university/area context.
Right icon is menu for web.
Right icon can become saved/favorite for the native app.
```

## Protected Action Gate

When a signed-out user attempts a protected action, show a focused gate, not a generic full-page redirect unless the context requires it.

Protected actions:

```text
view full hostel detail
view full room details
view full gallery
submit booking/request enquiry
message manager
save hostel persistently
reveal manager phone/WhatsApp
open owner dashboard
```

Gate copy direction:

```text
Sign in to view full hostel details.
Create a free account to compare rooms, request availability, and contact managers safely through Hostel Premium.
```

Gate should preserve context:

```text
After successful sign-in, return the user to the exact hostel, room, map pin, or action they requested.
```

## Notification Prompt

Do not ask for notifications on first load of the web MVP.

Future mobile app:

```text
Ask for notifications only after the user sends a request, receives a reply, or starts tracking an enquiry.
Use a custom explanation modal before the native permission prompt.
```

## Visual Direction

Use the supplied mobile state references for:

```text
splash rhythm
location explainer layout
manual address/area selection
map pin confirmation
updating/loading overlay
auth bottom sheet/sign-up surface
permission explanation modal
```

Adapt to Hostel Premium:

```text
Food/location copy becomes hostel/university/area copy.
Pink/purple food brand treatment becomes Hostel Premium palette.
Food graphics become hostel, map, room, campus, verification, or 3D location assets.
```

Do not copy:

```text
brand colors
logos
food illustrations
restaurant copy
flash deal patterns
```

## Motion Reference Notes

The supplied video reference shows the exact level of motion quality expected:

```text
C:\Users\HP\Downloads\87be059c-1cd4-4d65-afc1-83550d1cb05f.mp4
```

Observed sequence:

```text
1. Splash/logo
2. Location value explainer
3. Manual-location fallback
4. Map picker with bottom sheet
5. Keyboard-aware address input
6. Suggestions and invalid/not-found state
7. Selected pin confirmation
8. Updating/loading overlay
9. Sign-up/login sheet with skip
10. Permission explanation modal
11. Home reveal
```

Rules to apply:

```text
Each state must transition from the correct direction.
Bottom sheets rise from the bottom.
Centered modals dim the current context.
Map/location screens keep the map visible behind the active control.
Keyboard states must not hide the input or main action.
Loading states should preserve context instead of hard-cutting to a blank page.
Home must become usable immediately after the transition.
```

Implementation details live in:

```text
docs/MOTION.md
```

## Acceptance Criteria

```text
1. Web users can reach useful public pages from Google.
2. Web users must sign in before full detail, booking, messaging, saving, or manager contact reveal.
3. Mobile users go through splash/location/auth prompt states before home.
4. Mobile users can skip authentication before home.
5. Skipped authentication never bypasses protected actions.
6. Sign-in returns users to the action they attempted.
7. Location/area setup supports manual selection without requiring GPS.
8. All states have loading, empty, error, and success handling where relevant.
```
