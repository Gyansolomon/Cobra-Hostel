# Master Codex Prompts

## Prompt 1: Let Codex Choose the Skill

```text
Choose the best installed skill, command, or agent for this task before starting.
Do not expect me to remember skill names.
Explain which skill/tool you selected and why, then proceed.

Read these if available:
- global/AUTO_SKILL_ROUTING.md
- global/SKILL_ROUTER.md
- global/REFERENCE_MAP.md
- global/INSTALLABLE_SKILLS_PACK.md
- docs/SKILL_REGISTRY.md

If the best skill is not visible in the active session, say so and use the closest fallback.
Do not pretend an unavailable skill is installed.
Distinguish installed skills from external tools, component libraries, backend services, and paid products.

Task: [write task here]
```

## Prompt 2: Start Any New App Properly

```text
We are starting a new serious app.
Do not start coding yet.

Use GSD Core if it is installed.

Use Karpathy guidelines for behavior:
- think before coding
- keep it simple
- make surgical changes
- define success criteria
- verify before claiming completion

Use Multica only if I want managed multi-agent execution, task assignment, squads, recurring audits, or progress tracking.

If this is a new project, start with:
- /gsd-new-project

If this is an existing codebase, start with:
- /gsd-map-codebase
- /gsd-new-project

If GSD Core is not installed, tell me:
1. what GSD would do for this project
2. how to install it with `npx @opengsd/gsd-core@latest`
3. what fallback planning workflow you will use if I do not want to install it

If Multica would help, tell me:
1. why the project needs managed agents
2. whether it needs cloud or self-hosting
3. what setup is required
4. what risks or costs may exist

Before any implementation, capture:
1. what I want to establish
2. target users
3. business goals
4. user goals
5. success criteria
6. MVP scope
7. future vision
8. pages/screens needed
9. page references and inspiration sources
10. design direction
11. color and typography direction
12. component libraries and custom components
13. paid components/tools and free alternatives
14. MCP/tool connections that can make the work easier
15. app stack options with tradeoffs
16. backend/data/security needs
17. cost risks
18. roadmap phases

Read these planning rules first if available:
- planning/PLANNING_WORKFLOW_CHECKLIST.md
- planning/QUESTION_BANK.md
- planning/REFERENCE_GATHERING_RULES.md
- planning/PAGE_PLANNING_RULES.md
- planning/COMPONENT_AND_TOOL_SELECTION.md
- planning/PAID_TOOLS_AND_MCP_RULES.md

Then create or update:
- docs/PROJECT_DISCOVERY.md
- docs/SKILL_REGISTRY.md
- AGENTS.md
- DESIGN.md
- docs/PRD.md
- docs/ARCHITECTURE.md
- docs/BACKEND.md
- docs/DATABASE.md
- docs/SECURITY.md
- docs/API.md
- docs/MOTION.md
- docs/VISUAL_ASSETS.md
- docs/COMPONENTS.md
- docs/COST_PLAN.md

Before implementation, define:
1. target users
2. MVP features
3. future features
4. user flows
5. admin flows
6. screen list
7. data model
8. roles and permissions
9. API endpoints
10. design direction
11. motion system
12. visual asset system
13. component system
14. cost risks
15. build phases

Wait for review before writing application code.
```

## Prompt 2B: Full Planning Stack

```text
Use the full Premium App OS planning stack.

1. GSD Core:
   - discovery
   - requirements
   - roadmap
   - phase discussion
   - phase planning
   - execution
   - verification
   - shipping

2. Karpathy guidelines:
   - think before coding
   - simplicity first
   - surgical changes
   - goal-driven execution
   - verified completion

3. Multica:
   - recommend only if this project benefits from managed agents, squads, issue assignment, recurring audits, or autonomous execution
   - ask before install or setup

Do not install GSD Core, Multica, MCP connectors, paid APIs, paid component kits, or major dependencies without permission.
```

## Prompt 2A: GSD Phase Workflow

```text
We are ready to build from the approved discovery and roadmap.

Use GSD Core if it is installed.

For each phase:
1. Run `/gsd-discuss-phase [N]` or manually capture the same decisions:
   - layout choices
   - API shapes
   - data structures
   - component choices
   - error handling
   - edge cases
   - acceptance criteria
2. Run `/gsd-plan-phase [N]` or manually create a phase plan with exact files, steps, tests, and verification.
3. Wait for review before execution.
4. Run `/gsd-execute-phase [N]` only after approval.
5. Run `/gsd-verify-work [N]` before claiming the phase is complete.
6. Run `/gsd-ship [N]` only after verified work is accepted.

Do not skip discussion, planning, or verification.
```

## Prompt 3: Premium Layout Plan Before Coding

```text
Before writing code, create a premium layout plan for this screen.

Read `planning/PAGE_PLANNING_RULES.md` if available.

Do not start with styling.
First define:
1. screen goal
2. primary user action
3. content priority
4. layout pattern
5. spacing/grid structure
6. components needed
7. loading state
8. empty state
9. error state
10. mobile/desktop behavior
11. motion behavior
12. what must not be done

Do not create a basic vertical stack.
Use strong hierarchy, breathing room, visual rhythm, and one dominant content area.

Wait for approval before implementation.
```

## Prompt 4: Design System Creation

```text
Create a premium design system for this app.

Use references only for inspiration. Do not copy another app exactly.
Read `planning/REFERENCE_GATHERING_RULES.md` and `planning/COMPONENT_AND_TOOL_SELECTION.md` if available.

Define:
1. brand mood
2. color palette
3. typography
4. spacing scale
5. layout rules
6. card design
7. component rules
8. onboarding visual style
9. image/art direction
10. motion principles
11. accessibility rules
12. what not to do

Update DESIGN.md and related docs.
```

## Prompt 5: Backend/Database/Security Plan

```text
Before writing backend code, create a backend/database/security plan.

Read:
- AGENTS.md
- docs/PRD.md
- docs/ARCHITECTURE.md
- docs/BACKEND.md
- docs/DATABASE.md
- docs/SECURITY.md

Then define:
1. backend features needed
2. database tables
3. relationships
4. API endpoints
5. auth requirements
6. user roles
7. permissions
8. validation rules
9. security risks
10. tests needed

Do not trust frontend input.
Do not expose secrets.
Use environment variables.
Use role-based access control.
```

## Prompt 6: Design Audit

```text
Audit this UI for premium quality.

Check:
1. layout hierarchy
2. spacing rhythm
3. typography hierarchy
4. color control
5. component consistency
6. loading/empty/error states
7. mobile responsiveness
8. motion quality
9. accessibility
10. originality

Do not only say it looks good.
Find what weakens the premium feel and propose exact improvements.
```

## Prompt 7: Security Review

```text
Review this backend/database feature for security.

Check:
1. authentication
2. authorization
3. role permissions
4. input validation
5. SQL/database safety
6. secret exposure
7. error leakage
8. rate limiting
9. data ownership
10. audit logging
11. abuse cases

Return findings by severity:
- Critical
- High
- Medium
- Low

Then propose fixes.
```

## Prompt 8: Production Readiness

```text
Before shipping, review the project for production readiness.

Check:
1. environment variables
2. secret exposure
3. Gitleaks scan
4. Sentry integration
5. error boundaries
6. form validation
7. auth protection
8. database rules/policies
9. API error handling
10. loading/empty/error states
11. responsive behavior
12. performance issues
13. accessibility
14. cost risks
15. rollback plan

Return a checklist with pass/fail status and fixes.
```

## Prompt 9: Component, Tool, Cost, and MCP Review

```text
Before choosing tools, components, APIs, or MCP connections, review:

- planning/COMPONENT_AND_TOOL_SELECTION.md
- planning/PAID_TOOLS_AND_MCP_RULES.md

For each recommendation, explain:
1. why it helps
2. whether it is free or paid
3. what setup is needed
4. what credentials or accounts are needed
5. free alternatives
6. risk

Do not install, connect, or buy anything without permission.
```

## Prompt 10: Safe Skill Installation

```text
I want to install my Premium App OS skill stack safely.

Read:
- global/INSTALLABLE_SKILLS_PACK.md
- global/AUTO_SKILL_ROUTING.md
- global/SKILL_REGISTRY_TEMPLATE.md

Do not install everything blindly.

First:
1. Check which skills are already installed.
2. Check user-level and repo-level skill folders for this runtime.
3. Check whether these are available and installable:
   - GSD Core
   - Taste Skill
   - Matt Pocock Skills
   - Premium App Builder
   - ECC
   - UI UX Pro Max
   - Impeccable
   - UI Skills
   - Ruflo
   - Context7
4. Prioritize GSD Core, Taste Skill, Matt Pocock Skills, and Premium App Builder.
5. Do not stack duplicate install methods.
6. Do not install heavy orchestration tools until I approve.
7. Do not expose or create secrets.
8. After installation, list installed skills and explain when Codex should use each one.
```
