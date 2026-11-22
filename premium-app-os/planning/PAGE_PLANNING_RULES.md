# Page Planning Rules

Every serious page or screen needs a plan before coding.

## Page Plan Template

```text
Page name:
User role:
Goal:
Primary action:
Secondary actions:
Entry point:
Exit point:
Main content:
Supporting content:
Components:
Data needed:
API/backend needed:
Loading state:
Empty state:
Error state:
Success state:
Permissions:
Analytics event:
Reference:
Mobile behavior:
Desktop behavior:
Motion:
Accessibility:
Risks:
Acceptance criteria:
```

## Layout Rule

Do not create pages as a plain vertical stack.

Use a strong layout structure:

```text
Shell
Header
Primary zone
Secondary zone
Detail zone
Action zone
Feedback states
```

## Page Reference Rule

Each important page should have a reference or a deliberate reason for not using one.

Examples:

```text
Onboarding - reference for visual storytelling and CTA rhythm
Search/listing - reference for filters, sort, cards, empty states
Detail page - reference for trust, gallery, pricing, CTA
Dashboard - reference for metrics, actions, dense scanning
Form - reference for validation and progress
```

## State Rule

Each interactive page needs:

- loading state
- empty state
- error state
- success/confirmation state when relevant
- disabled state for blocked actions
- permission denied state when relevant

## Acceptance Criteria

A page is ready to build when:

- goal is clear
- primary action is clear
- components are listed
- data dependencies are known
- states are defined
- reference direction is captured
- mobile behavior is planned
- accessibility risks are known
