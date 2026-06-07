# Hostel Premium Color System

## Decision

Use a clean white accommodation-marketplace palette with one restrained rose accent.

The product should feel:

```text
premium
student-friendly
trustworthy
local to UCC/Ghana
professional enough for parents, managers, and authorities
```

The product should not feel:

```text
generic blue SaaS
food delivery app
luxury hotel brand
random real-estate clone
purple AI gradient website
childish student app
gold luxury/hotel website
```

## Core Palette

| Token | Hex | Role |
| --- | --- | --- |
| Ink Black | `#222222` | Main text, strong headings, serious UI contrast. |
| Clean White | `#FFFFFF` | Main page background and primary product canvas. |
| Soft Gray | `#F7F7F7` | Soft panels, subtle section contrast, secondary buttons. |
| Line Gray | `#DDDDDD` | Borders, dividers, input outlines. |
| Text Gray | `#6A6A6A` | Secondary text and helper labels. |
| Hostel Rose | `#FF385C` | Primary action, search button, active state, rare emphasis. |
| Rose Hover | `#E31C5F` | Primary action hover/pressed state. |
| Rose Mist | `#FFF0F5` | Soft rose badge or protected-action prompt background. |
| Verified Green | `#2F7D4F` | Real verification, success, trusted status. |
| Verified Mist | `#EAF5EE` | Soft verified badge background. |
| Info Blue | `#2563EB` | Informational notices only. |
| Info Mist | `#EAF1FF` | Soft information background. |
| Error Red | `#B42318` | Errors, danger actions, failed states. |
| Error Mist | `#FDECE9` | Soft error background. |

Note:

```text
Hostel Rose follows the Airbnb-style marketplace pattern of using one pink-red accent.
Do not copy Airbnb branding, logo, copy, exact component layouts, or proprietary design language.
Use the accent only once or twice per screen for the most important action.
```

## Usage Rules

### Backgrounds

```text
Main page: Clean White
Main cards: Clean White
Grouped quiet sections: Soft Gray
Modal/sheet surface: Clean White
Footer: Soft Gray or Ink Black depending on page density
```

### Text

```text
Headings: Ink Black
Body: Ink Black at normal opacity
Secondary/helper: Text Gray
Disabled: Text Gray at reduced opacity
Links: Ink Black by default; Hostel Rose only for strong emphasis
```

### Buttons

Primary:

```text
background: Hostel Rose
text: white
hover: Rose Hover
pressed: Rose Hover with slight scale
```

Secondary:

```text
background: Soft Gray
text: Ink Black
border: Line Gray
```

Ghost:

```text
background: transparent
text: Ink Black
hover: Soft Gray
```

Danger:

```text
background: Error Red
text: white
```

## Trust Badge Colors

| Trust Level | Text | Background | Border |
| --- | --- | --- | --- |
| Owner Submitted | `#6A6A6A` | `#F7F7F7` | `#DDDDDD` |
| Admin Reviewed | `#2563EB` | `#EAF1FF` | `#BDD3FF` |
| Photos Confirmed | `#FF385C` | `#FFF0F5` | `#F7B3CA` |
| Physically Verified | `#2F7D4F` | `#EAF5EE` | `#B9DEC6` |

Rule:

```text
Only use Verified Green for real verification/success.
Do not use green for generic decoration.
```

## Search And Listing Rules

Search module:

```text
Surface: Clean White
Border: Line Gray
Active ring: Hostel Rose
Field icon: Text Gray
Search button: Hostel Rose
```

Hostel cards:

```text
Card surface: Clean White
Card border: Line Gray
Price: Ink Black
Availability: Text Gray or Verified Green depending on truth
Trust badges: exact trust badge system
```

Map/list:

```text
Map controls: Clean White
Selected pin: Hostel Rose
Verified pin: Verified Green only if physically/admin verified
Unavailable/disabled pin: Text Gray
```

## Image Treatment

Temporary and production images should sit inside clean, controlled UI.

Use:

```text
slight warm overlay only when text needs contrast
soft rounded clipping
thin gray border or no border
natural daylight images where possible
```

Avoid:

```text
heavy dark overlays
random saturated filters
purple/pink gradients
hotel-luxury gold-on-black styling
large pink backgrounds
```

## Dark Mode

Dark mode is not a Phase 1 requirement.

Decision:

```text
Build the MVP in light mode first.
Keep dark tokens in code only as a future fallback.
Do not design dark mode until the main marketplace flow is stable.
```

## Accessibility Guardrails

```text
Primary text must use Ink Black on light surfaces.
Muted text must not be used for important content.
Rose text alone should not be used for small body copy.
Buttons need visible hover/focus states.
Status must not rely on color alone; use labels and icons.
```

## CSS Token Mapping

In the web app:

```text
--background = Clean White
--foreground = Ink Black
--card = Clean White
--secondary / --muted / --accent = Soft Gray
--border / --input = Line Gray
--primary = Hostel Rose
--ring = Hostel Rose
--destructive = Error Red
```
