# DESIGN.md

## App Name

`[APP_NAME]`

## Brand Mood

The app should feel:

- `[premium]`
- `[modern]`
- `[trustworthy]`
- `[warm/calm/energetic depending on project]`
- `[alive with subtle motion]`

The app should not feel:

- generic
- childish
- cluttered
- cheap
- overly animated
- like a basic AI-generated template

## Visual References

Use these only for inspiration, not copying:

- `[Reference 1]`
- `[Reference 2]`
- `[Reference 3]`

Extract:

- layout logic
- spacing rhythm
- hierarchy
- component grouping
- image treatment
- motion behavior

Do not copy branding, exact layouts, or protected designs.

## Color System

Primary:

```text
[primary color name] - [hex]
```

Secondary:

```text
[secondary color name] - [hex]
```

Accent:

```text
[accent color name] - [hex]
```

Neutrals:

```text
background: [hex]
surface: [hex]
border: [hex]
muted text: [hex]
main text: [hex]
```

Status colors:

```text
success: [hex]
warning: [hex]
error: [hex]
info: [hex]
```

Color rules:

- Use color with purpose.
- Do not use too many accents.
- Avoid oversaturated childish colors.
- Use neutral surfaces to keep premium feel.
- Use gradients only where they support the brand.

## Typography

Font direction:

```text
Primary font: [font]
Secondary/accent font: [font if needed]
```

Hierarchy:

```text
Display: large marketing/onboarding headings
H1: screen title
H2: section title
Body: normal reading text
Caption: metadata/helper text
Button: action labels
```

Typography rules:

- Use strong hierarchy.
- Avoid too many font sizes.
- Use intentional line heights.
- Avoid cramped text.
- Do not use weak gray text on low-contrast backgrounds.

## Spacing System

Use an 8px spacing system.

```text
4px  = tiny gap
8px  = small gap
12px = compact component gap
16px = default Android screen padding
20px = default iOS screen padding
24px = card padding / section gap
32px = major section gap
48px = hero or large layout gap
64px = major visual separation
```

Mobile spacing:

```text
iOS horizontal padding: 20
Android horizontal padding: 16
Card padding: 16-24
Section gap: 24-32
```

## Layout Rules

Every screen should have:

1. clear screen goal
2. primary user action
3. content priority
4. dominant content area
5. supporting secondary content
6. loading/empty/error states

Do not build screens as a boring vertical stack.

Use:

```text
Shell + Header + Primary Zone + Secondary Zone + Detail Zone + Action Zone
```

## Components

Base component rules:

- Buttons should have clear hierarchy.
- Cards should not be overused.
- Forms should be simple and well-spaced.
- Lists should support loading, empty, and error states.
- Dialogs and sheets should have clear actions.
- Icons should come from one consistent icon family.

## Motion

Motion should be Apple-inspired:

- subtle
- fast
- purposeful
- touch-aware
- spring-like where appropriate

Rules:

- Buttons scale to 0.97 on press.
- Cards scale to 0.98 on press.
- Sheets slide from bottom with dim/blur background.
- Success actions use subtle confirmation.
- Error actions use subtle shake/highlight.
- Most UI motion should be 120ms-350ms.
- Avoid random decorative motion.

## Visual Assets

For custom images/onboarding:

- Use consistent art direction.
- Use branded backgrounds.
- Use controlled colors.
- Use negative space.
- Use mobile-friendly composition.
- Do not generate unrelated random images.

## Accessibility

- Maintain readable contrast.
- Use large enough tap targets.
- Do not rely on color alone.
- Support reduced motion where possible.
- Use semantic labels where needed.

## Do Not Do

- Do not copy references exactly.
- Do not use random gradients.
- Do not use too many colors.
- Do not over-animate.
- Do not create crowded pages.
- Do not use inconsistent spacing.
- Do not use different icon styles together.
- Do not create UI without loading/empty/error states.
