# Motion Rules

Motion should make the app feel alive, not noisy.

## Motion Principles

- subtle
- fast
- purposeful
- touch-aware
- spring-like
- consistent
- accessible

## Standard Motion

```text
Button press:
scale down to 0.97
80-120ms
spring back on release

Card press:
scale down to 0.98
slight opacity change
optional light haptic

Screen entrance:
fade in + translateY 8px
220-320ms

Modal / bottom sheet:
slide from bottom
rounded corners
blur/dim background
spring motion

Tab switch:
icon state change
label fade/slide
light selection haptic

Success:
small confirmation
success haptic
no long animation

Error:
small shake/highlight
error haptic
```

## Motion Levels

| Level | Use | Timing |
|---|---|---|
| 1 | buttons, icons, tabs | 80-150ms |
| 2 | cards, filters, list items | 180-250ms |
| 3 | sheets, modals, screen transitions | 250-400ms |
| 4 | onboarding artwork | 600-1200ms subtle loop |

## Expo Stack

Use:

- React Native Reanimated for gestures and advanced motion.
- Moti for simple fade/slide/scale animations.
- Expo Haptics for meaningful feedback.
- Expo BlurView for premium sheets/modals/tab surfaces.
- Lottie/Rive only for special illustrated moments.

## Web Motion Stack

Use:

- Motion Primitives for reusable motion patterns.
- Framer Motion or equivalent only when project stack supports it.
- Magic UI or Aceternity UI only for marketing/hero sections where visual impact matters.

Avoid heavy animated effects inside core product workflows unless they improve clarity.

## Mobile Motion Stack

Use:

- React Native Reanimated for gestures, shared transitions, bottom sheets, and advanced motion.
- Moti for simple fade/slide/scale animations.
- Expo Haptics for meaningful touch feedback.
- Expo BlurView for premium sheets, modals, and tab surfaces.
- Lottie for ready-made loading, empty, success, or onboarding animations.
- Rive for later-stage interactive premium animation.

## Do Not Do

- no random bouncing
- no spinning everything
- no excessive scale
- no slow dramatic animations
- no motion that blocks user progress
- no animations without purpose
