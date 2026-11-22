# Skill Registry

Use this file to help agents choose skills automatically.

This registry does not install skills. It maps task intent to preferred skills/tools and fallbacks.

For install commands and safe install order, read:

```text
global/INSTALLABLE_SKILLS_PACK.md
```

## Planning and Project Setup

Intent:

```text
start a new app, plan an app, create project docs, define goals, roadmap, phases, requirements
```

Preferred:

```text
premium-app-builder
GSD Core
Taste Skill
Matt Pocock Skills
Superpowers Brainstorming
Superpowers Writing Plans
```

Fallback:

```text
Use planning/PLANNING_WORKFLOW_CHECKLIST.md and project-templates/PROJECT_DISCOVERY_TEMPLATE.md manually.
```

## Design and UI

Intent:

```text
premium UI, landing page, mobile screen, dashboard, redesign, visual polish, layout audit
```

Preferred:

```text
Taste Skill
design-taste-frontend
impeccable
baseline-ui
emil-design-eng
minimalist-ui when the brief asks for minimalist style
fixing-accessibility
fixing-motion-performance
```

Fallback:

```text
Read DESIGN.md, design rules, page planning rules, component system, and design audit checklist.
```

## Backend and Architecture

Intent:

```text
backend, database, API, security, auth, roles, permissions, architecture, cost
```

Preferred:

```text
ECC if installed
Matt Pocock Skills if installed
systematic-debugging for bugs
test-driven-development for features/bugfixes
verification-before-completion before final answer
openai-docs for OpenAI API work
```

Fallback:

```text
Read engineering templates and create a plan before coding.
```

## Multi-Agent Work

Intent:

```text
multiple agents, squads, issue assignment, progress tracking, recurring audits
```

Preferred:

```text
Multica
Superpowers subagent-driven-development
```

Fallback:

```text
Use single-agent phased execution with checkpoints.
```

## GitHub Work

Intent:

```text
PR, issue, CI, review comments, publish changes
```

Preferred:

```text
GitHub plugin skills
gh-fix-ci
gh-address-comments
yeet
```

Fallback:

```text
Use git and gh CLI if available, otherwise summarize required steps.
```

## Documents, Slides, and Spreadsheets

Intent:

```text
docx, presentation, pptx, spreadsheet, xlsx, csv
```

Preferred:

```text
documents
presentations
spreadsheets
```

Fallback:

```text
Use bundled workspace dependencies if available.
```

## Skill Visibility Checklist

For any skill that should auto-trigger:

```text
Skill name:
Installed path:
Visible in active session? yes/no
Trigger description:
Preferred intents:
Fallback:
Requires permission before install/setup? yes/no
```
