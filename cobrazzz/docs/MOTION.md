# Motion Plan

Motion should support clarity, not decoration.

## Motion Reference: Mobile First-Run Video

Source:

```text
C:\Users\HP\Downloads\87be059c-1cd4-4d65-afc1-83550d1cb05f.mp4
```

Additional mobile web reference:

```text
C:\Users\HP\Desktop\Cobra master\Cobra ZZZ\video references\IMG_2555.MP4
```

Use this as a motion-quality reference for:

```text
splash-to-onboarding rhythm
location explainer flow
map/location picker transitions
bottom sheet movement
keyboard-aware layout behavior
auth sheet entrance
permission modal dimming
home page first reveal
```

What to learn:

```text
The app feels professional because motion is tied to state changes, not decoration.
Every movement explains where the user is going: splash -> setup -> map -> search -> confirm -> auth -> home.
Surfaces move from the direction users expect: bottom sheets rise from bottom, modals center over a dimmed page, map context stays behind location controls.
```

What not to copy:

```text
brand colors
logos
food/restaurant content
mascot or proprietary graphics
flash deal pressure
exact screen layout
```

## Web Motion

- hover/focus states for desktop controls
- subtle card hover lift only where useful
- filter sheet/drawer transition
- success confirmation after request submission
- error highlight for invalid form fields

## Timing

```text
micro interactions: 100-180ms
page/section entrances: 180-280ms
sheets/modals: 220-320ms
```

Respect reduced motion.

## Hostel Premium Motion System

### 1. Splash to Context

Use for:

```text
future mobile app splash
mobile web first-load logo-to-context transition
```

Behavior:

```text
Logo appears briefly, then transitions into selected context.
The transition should feel like a state handoff, not a loading delay.
```

Timing:

```text
logo hold: 500-900ms
transition: 300-500ms
```

Implementation notes:

```text
Use transform and opacity.
Respect reduced motion by showing the final context immediately.
Do not block search availability.
```

### 2. Location and Area Setup

Use for:

```text
UCC / campus area selection
manual location setup
future map location picker
```

Behavior:

```text
Explainer screen enters calmly.
Primary CTA is fixed near the bottom.
Manual selection and GPS/location options are equally clear.
```

Motion:

```text
3D/visual asset: subtle entrance, no endless bouncing.
CTA: press scale 0.97.
State switch: fade + translateY 8px.
```

### 3. Map and Bottom Sheet

Use for:

```text
map search
location confirmation
hostel pin preview
manual area selection
```

Behavior:

```text
Map stays spatially stable while the sheet changes.
The sheet rises from the bottom with rounded top corners.
Keyboard pushes or resizes the sheet without covering the active input.
```

Motion:

```text
sheet enter: translateY(100%) -> translateY(0)
duration: 260-360ms
easing: cubic-bezier(0.32, 0.72, 0, 1)
```

Performance:

```text
Animate transform and opacity only.
Do not animate sheet height continuously.
Measure once if dynamic layout is needed, then animate via transform.
```

### 4. Search Suggestions

Use for:

```text
area search
hostel search
address/location suggestions
```

Behavior:

```text
Suggestions appear directly below the input.
Keyboard remains visible on mobile.
Invalid searches show a calm inline error and a recovery option.
```

Motion:

```text
suggestion list enter: opacity + translateY 4-8px
duration: 140-220ms
stagger: 30-50ms maximum for first 4 visible results
```

Do not:

```text
animate every typed character
delay search results for decoration
move the input away from the user's focus point
```

### 5. Updating / Loading Overlay

Use for:

```text
confirming location
submitting enquiry
saving hostel
updating profile
```

Behavior:

```text
Dim the current context instead of replacing the screen abruptly.
Show a compact progress indicator and short status text.
Keep the user oriented by leaving the previous screen faintly visible.
```

Motion:

```text
overlay fade: 120-180ms
progress indicator: small, fast, and non-blocking visually
```

Performance:

```text
Avoid heavy blur on large surfaces.
Use opacity scrim first.
If blur is used, keep it subtle and short.
```

### 6. Auth Sheet

Use for:

```text
sign-up/login gate
protected action gate
future mobile app first-run auth prompt
```

Behavior:

```text
Auth surface rises from bottom on mobile.
It can be skipped during first-run mobile onboarding.
It cannot be skipped when the user is trying to view full details, book, message, save, or reveal contact.
```

Motion:

```text
sheet enter: 260-340ms
buttons press: scale 0.97
skip link: no heavy animation
```

### 7. Permission Modal

Use for:

```text
future notifications
future location permission explanation
```

Behavior:

```text
Use a custom explanation modal before native permission prompts.
Dim the page behind it.
Keep actions clear and balanced.
```

Timing:

```text
modal enter: 180-260ms
scrim fade: 120-180ms
```

### 8. Home First Reveal

Use for:

```text
after onboarding
after location confirmation
after auth skip/sign-in
```

Behavior:

```text
Home should feel immediately usable.
Header and search appear first.
Carousel/shortcuts/cards can follow with subtle stagger.
```

Motion:

```text
header/search: immediate or 120-180ms fade
carousel: 180-260ms
shortcut tiles: 30-50ms stagger, max 4-6 items
cards: no long entrance delays
```

## Motion Rules From the Reference

| Pattern | Hostel Premium Rule | Why |
| --- | --- | --- |
| Splash screen | Short brand moment only | Long splash screens make the product feel slow |
| Bottom sheets | Use direction-aware bottom entrance | The surface appears from where users expect it |
| Map picker | Keep map stable while controls change | Preserves spatial context |
| Keyboard state | Active input must remain visible | Prevents mobile frustration |
| Loading overlay | Dim current context instead of hard replacing | Keeps users oriented |
| Auth gate | Preserve attempted action after sign-in | Avoids dead-end login flow |
| Permission modal | Ask only when timing is justified | Permission prompts are easier to accept after value is clear |
| Home reveal | Search must be available immediately | Motion should never delay the primary action |

## Performance Rules

Use:

```text
transform
opacity
short CSS transitions
Motion Primitives for reusable component transitions
spring motion only for gestures/sheets where interruption matters
```

Avoid:

```text
transition: all
animating height/width/margin/padding continuously
scroll event driven animation
large animated blur
looping decorative motion
animation that blocks search, booking, or messaging
```

## Mobile Results Motion

Use for:

```text
mobile search results
filter/sort sheets
map/list toggle
mobile detail page
loading skeletons
```

Rules:

```text
Filter and sort sheets should slide from the bottom or cover the page with clear close/done actions.
Map buttons can float, but should not animate continuously.
Result cards should not stagger slowly; search results need to feel fast.
Skeletons should match the final card shape and appear immediately.
Image carousel controls should respond instantly with no heavy transition.
Detail-page section transitions should be subtle; scrolling is the main movement.
```

Timing:

```text
filter/sort sheet: 240-340ms
chip press: 100-160ms
map toggle: 180-260ms
skeleton fade: 120-180ms
image carousel: 180-260ms
```
