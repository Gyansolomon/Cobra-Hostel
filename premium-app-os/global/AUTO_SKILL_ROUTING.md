# Auto Skill Routing

The user should not need to remember or type skill names.

Agents must inspect available skills and choose the best one based on task intent.

## Core Rule

Before starting a serious task:

1. Read project `AGENTS.md`.
2. Read `global/SKILL_ROUTER.md`.
3. Read `global/SKILL_REGISTRY_TEMPLATE.md` or project `docs/SKILL_REGISTRY.md` if available.
4. Read `global/INSTALLABLE_SKILLS_PACK.md` if installation or missing skills are involved.
5. Inspect the active session's available skills/tools.
6. Choose the most relevant installed skill/tool.
7. State the chosen skill/tool and why.
8. If a recommended skill is not installed or not visible, say so and use the best fallback.

Do not ask the user to remember commands unless the tool is a slash-command system that cannot be invoked automatically.

## Why Some Skills Auto-Trigger

A skill can be used automatically only when the agent can see it in the active session's available skill list or tool list.

For reliable auto-use, a skill needs:

- valid `SKILL.md`
- clear `name`
- clear `description`
- trigger words in the description
- installation in the expected Codex skills/plugin location
- active session registration

## Local Skill Shape

A local skill should live in a folder like:

```text
C:\Users\HP\.codex\skills\[skill-name]\SKILL.md
```

The top of `SKILL.md` should include frontmatter:

```md
---
name: premium-app-builder
description: Use when starting, planning, designing, building, auditing, or improving a premium app; creates discovery, PRD, design, architecture, backend, database, security, API, motion, visual asset, component, cost, roadmap, and verification plans.
---
```

Make descriptions specific. Vague descriptions are hard to auto-route.

## Trigger Description Pattern

Good skill descriptions include:

```text
Use when the user asks to...
Use when the task involves...
Triggers: "start an app", "plan a project", "build premium UI", "audit design", "choose components"
Outputs: AGENTS.md, DESIGN.md, docs/PROJECT_DISCOVERY.md, docs/PRD.md
```

Avoid descriptions like:

```text
Helps with apps.
Useful for coding.
```

## Skill Registry

Use a skill registry to map intent to skills.

The registry does not install skills by itself. It tells agents what to look for and what fallback to use.

Recommended project file:

```text
docs/SKILL_REGISTRY.md
```

Global template:

```text
global/SKILL_REGISTRY_TEMPLATE.md
```

## Slash Commands vs Skills

Some systems expose slash commands, not Codex skills.

Examples:

```text
/gsd-new-project
/gsd-plan-phase [N]
/gsd-verify-work [N]
```

If the agent cannot invoke the slash command directly, it should:

1. explain what command should run
2. ask permission if installation or setup is needed
3. manually follow the same workflow as a fallback

## Missing Skill Rule

If a desired skill is not available:

1. Say: "I do not see `[skill]` in the active skill list."
2. Check whether it exists in local skill folders if filesystem access is available.
3. Recommend installation or registration steps.
4. Continue with the closest available fallback.

Do not pretend to use unavailable skills.

## Skill Installation Safety

Ask before:

- installing a skill
- modifying `C:\Users\HP\.codex`
- installing plugins
- running package managers
- changing agent runtime configuration
- adding MCP connectors

Use `global/INSTALLABLE_SKILLS_PACK.md` before recommending or running install commands.

## Auto-Routing Examples

```text
User says: "Start a new app"
Use: premium-app-builder, GSD Core if installed, planning rules

User says: "Make this screen look premium"
Use: design/taste/frontend skill, DESIGN.md, page planning rules

User says: "Fix this bug"
Use: systematic debugging or relevant bugfix skill

User says: "Plan the implementation"
Use: GSD plan phase or writing-plans fallback

User says: "Run several agents on this"
Use: Multica if installed/configured, otherwise explain setup

User says: "Review before I ship"
Use: verification, security, design, cost, and production-readiness audits
```
