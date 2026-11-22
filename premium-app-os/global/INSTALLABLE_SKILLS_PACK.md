# Installable Skills Pack for Codex

This file explains which items should be installed as Codex skills and which items are project libraries, tools, services, or references.

Do not install everything blindly.

## Important Distinction

Codex skills are folders that contain a required `SKILL.md`.

Depending on the agent runtime, skills may live in paths such as:

```text
C:\Users\HP\.codex\skills\
~/.codex/skills/
~/.agents/skills/
project/.agents/skills/
project/.codex/skills/
```

Use the active runtime's documented skill folder. In this Codex desktop session, installed local skills are visible under:

```text
C:\Users\HP\.codex\skills\
```

## Install First

Prioritize these:

1. GSD Core
2. Taste Skill
3. Matt Pocock Skills
4. Premium App Builder
5. Context7 later for documentation support

## 1. GSD Core

Use for:

- planning
- phases
- milestones
- execution
- verification
- shipping

Install command:

```text
npx @opengsd/gsd-core@latest
```

Ask before installing. GSD Core may change agent/runtime configuration.

## 2. Taste Skill

Use for:

- premium frontend design
- anti-slop UI
- redesigning weak layouts
- image-to-code
- mobile UI
- brand kits

Install all:

```text
npx skills add https://github.com/Leonxlnx/taste-skill
```

Install only the main skill:

```text
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

Useful individual skills:

```text
npx skills add https://github.com/Leonxlnx/taste-skill --skill "gpt-taste"
npx skills add https://github.com/Leonxlnx/taste-skill --skill "redesign-existing-projects"
npx skills add https://github.com/Leonxlnx/taste-skill --skill "image-to-code"
npx skills add https://github.com/Leonxlnx/taste-skill --skill "high-end-visual-design"
npx skills add https://github.com/Leonxlnx/taste-skill --skill "imagegen-frontend-mobile"
npx skills add https://github.com/Leonxlnx/taste-skill --skill "brandkit"
```

Before installing, check what is already installed. Do not duplicate skills.

## 3. Matt Pocock Skills

Use for:

- TDD
- debugging
- architecture cleanup
- PRDs
- clarifying requirements
- codebase triage

Install:

```text
npx skills@latest add mattpocock/skills
```

Select:

```text
setup-matt-pocock-skills
grill-with-docs
tdd
diagnose
to-prd
zoom-out
improve-codebase-architecture
triage
```

After installing, run inside the agent if available:

```text
/setup-matt-pocock-skills
```

## 4. Premium App Builder

This is the custom skill for Premium App OS.

Source:

```text
premium-app-os/skills/premium-app-builder/SKILL.md
```

Install by copying the skill folder into the active runtime's skill folder, for example:

```text
C:\Users\HP\.codex\skills\premium-app-builder\SKILL.md
```

Or for agent runtimes that use `.agents`:

```text
~/.agents/skills/premium-app-builder/SKILL.md
project/.agents/skills/premium-app-builder/SKILL.md
```

The skill should connect:

- project discovery
- GSD workflow
- auto skill routing
- references
- page planning
- components
- design
- backend
- database
- security
- cost
- verification

## 5. ECC

Use for:

- architecture review
- backend review
- database review
- security review
- testing
- code review
- debugging

ECC can be large. Do not stack install methods.

Safe prompt:

```text
Check ECC install options for Codex and preview the install plan before applying anything. Do not install duplicate hooks, full profiles, or global runtime changes without my approval.
```

Ask before installing.

## Install Later After README Review

These are useful, but first inspect their current README and install shape:

- UI UX Pro Max
- Impeccable
- UI Skills
- Ruflo
- Awesome Design MD
- Context7

Safe prompt:

```text
Find the repo for [SKILL NAME]. Read its README. Tell me whether it supports Codex skills directly. If yes, install it safely. If not, copy its useful SKILL.md or reference docs into my Premium App OS references. Do not install duplicate or heavy global tools without approval.
```

## Not Codex Skills

These are project dependencies, tools, services, or component sources. Install them per project only:

```text
shadcn/ui
Storybook
Gitleaks
Sentry
TanStack Query
Zod
React Hook Form
React Native Reanimated
Moti
Expo Haptics
Expo BlurView
Lottie
Rive
Iconsax
Supabase
Firebase
Redis
phpMyAdmin
```

They should be selected in project docs and installed only when the project needs them.

## Safe Install Prompt

Use this prompt before installing the skill stack:

```text
I want to install my Premium App OS skill stack safely.

Do not install everything blindly.

First:
1. Check which skills are already installed.
2. Check Codex skill folders:
   - user-level skills
   - repo-level skills
3. Check whether these are available and installable:
   - GSD Core
   - Taste Skill
   - Matt Pocock Skills
   - ECC
   - UI UX Pro Max
   - Impeccable
   - UI Skills
   - Ruflo
4. Prioritize installing:
   - GSD Core
   - Taste Skill
   - Matt Pocock Skills
   - my custom Premium App Builder skill
5. Do not stack duplicate install methods.
6. Do not install heavy orchestration tools until I approve.
7. Do not expose or create secrets.
8. After installation, list installed skills and explain when Codex should use each one.
```

## First Real Install Batch

Recommended first batch:

```text
npx @opengsd/gsd-core@latest
npx skills add https://github.com/Leonxlnx/taste-skill
npx skills@latest add mattpocock/skills
```

Then install the custom Premium App Builder skill into the active skill folder.

Ask before running these commands.
