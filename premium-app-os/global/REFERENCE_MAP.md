# Complete Skills, Tools, and Component Reference Map

This map explains the major skills, tools, component sources, and engineering support systems used by Premium App OS.

Some items are true Codex skills. Others are slash-command systems, component libraries, design references, backend services, or infrastructure tools.

## Categories

```text
Installed skill = visible to Codex in the active session
External skill/tool = useful but may need installation or setup
Component source = UI/design library or asset source
Engineering tool = test, security, docs, monitoring, or debugging support
Backend service = auth, database, storage, cache, payments, email, maps, analytics
```

Do not pretend an external tool is installed. If it is not visible, say so and use the closest fallback.

## Planning and Execution

### GSD Core

Main role: planning and execution system.

Use for:

- starting projects
- project discovery
- roadmaps
- phases
- milestones
- execution
- verification
- shipping

Install:

```text
npx @opengsd/gsd-core@latest
```

Ask before installing.

### Spec Kit

Main role: feature specifications and predictable implementation plans.

Use for:

- feature specs
- user scenarios
- implementation plans
- acceptance criteria
- task breakdowns

If not installed, use Premium App OS discovery, PRD, and planning templates manually.

### Superpowers

Main role: available Codex planning, debugging, TDD, execution, and verification skills.

Use for:

- brainstorming
- writing plans
- systematic debugging
- test-driven development
- executing plans
- verification before completion

Use as the fallback when GSD Core is not installed.

### Multica

Main role: managed multi-agent execution.

Use for:

- assigning work to agents
- squads
- progress tracking
- recurring audits
- autonomous issue execution
- local or cloud runtimes

Ask before installing or configuring.

### Karpathy Guidelines

Main role: agent behavior discipline.

Use for:

- thinking before coding
- simplicity
- surgical changes
- goal-driven execution
- success criteria
- verification before completion

## Engineering Skills and Review

### ECC

Main role: serious engineering review and architecture discipline.

Use for:

- architecture review
- backend review
- database review
- security review
- testing
- code review
- debugging

If ECC is not installed, use engineering templates plus Superpowers debugging, TDD, and verification.

### Matt Pocock Skills

Main role: stronger TypeScript/engineering habits.

Use for:

- TDD
- diagnosis
- architecture cleanup
- converting rough ideas to PRDs
- clarifying requirements

If unavailable, use Superpowers TDD/debugging and project engineering templates.

### Context7

Main role: current library documentation.

Use for:

- up-to-date package docs
- current API usage
- avoiding fake APIs
- avoiding deprecated syntax

If unavailable, browse official docs or use installed documentation tools.

## Design and UI Skills

### UI UX Pro Max

Main role: design-system intelligence.

Use for:

- color palettes
- typography systems
- product UI direction
- mobile app structure
- dashboards
- industry-specific UI decisions

### Taste Skill

Main role: premium frontend polish and anti-slop UI.

Use for:

- improving weak AI layouts
- landing pages
- mobile/web visual polish
- redesigning poor screens
- spacing and hierarchy improvements

### Impeccable

Main role: final design audit and polish.

Use for:

- layout audit
- spacing audit
- typography audit
- color/contrast audit
- motion polish
- final premium cleanup

### UI Skills

Main role: design-engineering and component-level refinement.

Use for:

- reusable component quality
- interface polish
- frontend craft
- component behavior

## Component and Design Sources

### shadcn/ui

Use for:

- accessible React components
- buttons
- forms
- dialogs
- tables
- dropdowns
- tabs
- modals

### Storybook

Use for:

- building components in isolation
- loading states
- empty states
- error states
- mobile states
- long-text states
- component documentation

### Iconsax

Use for:

- premium icon direction
- consistent icon styling
- mobile tab icons
- feature icons

Check license and package availability before using.

### Awesome Design MD

Use for:

- DESIGN.md inspiration
- project-specific design docs
- design language examples

Use as inspiration, not copy/paste.

### Tailwind Plus

Use for:

- dashboards
- app shells
- marketing sections
- tables
- forms
- settings pages

Paid product. Warn the user before relying on it.

### Untitled UI

Use for:

- SaaS dashboards
- admin panels
- tables
- forms
- data-heavy screens

Paid product/assets. Warn the user before relying on it.

### Magic UI

Use for:

- animated marketing sections
- hero sections
- bento grids
- text animations

Use carefully. Avoid decorative overload.

### Aceternity UI

Use for:

- high-impact web sections
- hero effects
- visual landing pages
- bento grids

Use only when performance and clarity are acceptable.

### Motion Primitives

Use for:

- reusable motion patterns
- entrance/exit transitions
- controlled animated components

Prefer reusable motion patterns over random one-off animation.

## Mobile Motion and Visual Tools

### React Native Reanimated

Use for:

- gestures
- advanced animations
- bottom sheets
- shared transitions
- scroll-linked motion

### Moti

Use for:

- simple fade/slide/scale animations
- lightweight entrance animations

### Expo Haptics

Use for:

- tab selection
- confirmations
- errors
- success feedback

### Expo BlurView

Use for:

- premium sheets
- modal surfaces
- tab bars
- overlays

Watch performance on low-end devices.

### Lottie

Use for:

- loading states
- success animations
- empty states
- onboarding moments

### Rive

Use for:

- interactive animation
- premium onboarding art
- state-based visual moments

Best for later phases unless central to the product.

## Frontend Engineering

### TanStack Query

Use for:

- server-state fetching
- caching
- loading/error states
- controlled refetching
- cost reduction

### Zod

Use for:

- API validation
- form validation
- environment validation
- schema-safe data

### React Hook Form

Use for:

- login forms
- signup forms
- booking forms
- admin create/edit forms
- profile forms

Combine with schema validation.

## Backend, Database, and Infrastructure

### Supabase

Use for:

- Postgres database
- auth
- storage
- row-level security
- structured business data
- reports

Never expose service role keys to the client.

### Firebase

Use for:

- auth
- mobile ecosystems
- push notifications
- simple realtime use cases
- NoSQL projects where Firestore fits

Do not use high-frequency Firestore writes without a cost plan.

### Redis

Use for:

- temporary cache
- live state
- API response caching
- rate limiting
- active viewers
- reducing database writes

Database is permanent. Redis is temporary/live data.

### phpMyAdmin

Use only as a MySQL/MariaDB administration tool.

It is not a backend platform.

## Security and Monitoring

### Gitleaks

Use for:

- secret scanning
- API key detection
- token detection
- pre-push safety

### Sentry

Use for:

- frontend errors
- backend errors
- crashes
- slow pages
- broken user flows
- production monitoring

## Rule

Before using any tool:

```text
Is it installed?
Is it free or paid?
Does it need login/setup?
Does it need credentials?
What is the fallback?
```
