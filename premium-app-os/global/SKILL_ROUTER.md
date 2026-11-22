# Skill and Tool Router

Use this router before every serious task.

First read `global/AUTO_SKILL_ROUTING.md` and `global/REFERENCE_MAP.md` if available. The user should describe tasks normally; the agent should choose the right installed skill/tool/component/service.

If installation or missing skills are involved, read `global/INSTALLABLE_SKILLS_PACK.md` before recommending commands.

## Planning

Use the full Premium App OS planning stack for serious projects:

1. GSD Core for discovery, roadmap, phase planning, execution, verification, and shipping.
2. Karpathy guidelines for agent behavior: think first, keep it simple, make surgical changes, define success criteria, verify.
3. Multica when the user wants managed multi-agent execution, task assignment, squads, recurring audits, or progress tracking.
4. Premium planning rules for questions, references, page planning, component/tool selection, paid-tool disclosure, and MCP setup.
5. Superpowers Brainstorming and Writing Plans as fallback when GSD Core is not installed.

Read these planning files when starting a new app:

```text
global/AUTO_SKILL_ROUTING.md
global/SKILL_REGISTRY_TEMPLATE.md
global/REFERENCE_MAP.md
global/INSTALLABLE_SKILLS_PACK.md
planning/PLANNING_WORKFLOW_CHECKLIST.md
planning/QUESTION_BANK.md
planning/REFERENCE_GATHERING_RULES.md
planning/PAGE_PLANNING_RULES.md
planning/COMPONENT_AND_TOOL_SELECTION.md
planning/PAID_TOOLS_AND_MCP_RULES.md
planning/GSD_CORE_WORKFLOW.md
planning/MULTICA_WORKFLOW.md
planning/KARPATHY_AGENT_GUIDELINES.md
```

Use GSD Core first when it is installed:
- `/gsd-new-project` for questions, research, requirements, and roadmap
- `/gsd-map-codebase` before `/gsd-new-project` when the project already has code
- `/gsd-discuss-phase [N]` to capture decisions before planning a phase
- `/gsd-plan-phase [N]` for research, implementation plans, and plan verification
- `/gsd-execute-phase [N]` for phase execution in fresh contexts
- `/gsd-verify-work [N]` for acceptance testing and fix planning
- `/gsd-ship [N]` for PR/shipping after verified phase work
- `/gsd-complete-milestone` and `/gsd-new-milestone` for milestone closure and the next release

If GSD Core is not installed, recommend installing it:

```text
npx @opengsd/gsd-core@latest
```

Tell the user before installing because it changes agent/runtime configuration. If the user does not want to install GSD, use Superpowers Brainstorming for discovery/spec creation and Superpowers Writing Plans for implementation planning.

Use GSD Core for:
- project discovery
- requirements
- roadmap
- phase discussions
- phase plans
- execution
- verification
- shipping
- milestone management
- context preservation through structured planning artifacts

Use Karpathy guidelines for:
- thinking before coding
- simplicity first
- surgical changes
- converting vague tasks into verifiable goals
- success criteria
- verification loops

Use Multica for:
- assigning tasks to agents
- tracking agent progress
- squads and agent roles
- autonomous issue execution
- recurring audits or scheduled agent work
- local/cloud runtime coordination

Ask before installing or configuring Multica because it may require CLI install, login, daemon setup, runtime configuration, Docker, or cloud/self-hosting choices.

Use Premium Planning Rules for:
- deciding what questions to ask
- gathering product and page references
- choosing free or paid components
- identifying MCP connections
- warning about costs and setup
- defining page plans before UI work
- protecting scope before implementation

Use Spec Kit for:
- feature specifications
- user scenarios
- implementation plans
- predictable outcomes
- task breakdowns

Use Ruflo only if it is installed and the project needs:
- multi-agent orchestration
- long-running complex workflows
- coordinated architecture or app-wide changes
- swarms or memory-oriented workflows

If Ruflo is not installed, use Multica for managed agents when available or single-agent phase execution as fallback.

## Design and UI

Use UI UX Pro Max for:
- design system generation
- color palettes
- typography systems
- product UI direction
- mobile app structure
- dashboards
- industry-specific design decisions

Use Taste Skill for:
- premium frontend polish
- anti-slop UI
- image-to-code
- redesigning weak AI layouts
- landing page polish
- mobile/web visual improvement

Use Impeccable for:
- layout audit
- spacing audit
- typography audit
- color/contrast audit
- motion polish
- final premium cleanup

Use Shadcn/ui for:
- accessible React components
- buttons
- forms
- dialogs
- tables
- dropdowns
- tabs
- modals

Use Storybook for:
- building components in isolation
- testing loading states
- testing empty states
- testing error states
- testing mobile states
- documenting UI components

Use Iconsax for:
- premium icons
- consistent icon styling
- React/React Native icon systems

Use UI Skills for:
- design-engineering tasks
- reusable component quality
- interface polish
- frontend craft improvements

Use Tailwind Plus for:
- dashboards
- app shells
- marketing sections
- tables
- forms
- settings pages

Tailwind Plus is paid. Warn the user before relying on it.

Use Untitled UI for:
- clean SaaS dashboards
- data-heavy screens
- tables
- forms
- admin panels

Untitled UI is paid. Warn the user before relying on it.

Use Magic UI for:
- animated marketing sections
- hero areas
- bento grids
- text animations

Use Aceternity UI for:
- high-impact visual web sections
- landing page hero effects
- bento grids

Use Motion Primitives for:
- reusable motion patterns
- controlled entrance/exit transitions
- animated components

Avoid heavy visual effects inside serious app workflows unless they improve clarity.

## Engineering

Use ECC for:
- architecture review
- backend review
- database review
- security review
- testing
- code review
- debugging

Use Matt Pocock skills for:
- TDD
- diagnosis
- architecture cleanup
- converting rough ideas to PRDs
- clarifying requirements

Use Context7 for:
- up-to-date library documentation
- checking current API usage
- avoiding fake APIs
- avoiding deprecated syntax

Use Gitleaks for:
- secret scanning
- API key scanning
- token/password detection
- pre-push safety

Use Sentry for:
- production errors
- crashes
- slow pages
- broken user flows
- backend exceptions

Use TanStack Query for:
- frontend server-state fetching
- caching
- loading/error states
- controlled refetching
- reducing unnecessary requests

Use Zod for:
- API validation
- form validation
- environment validation
- schema-safe data

Use React Hook Form for:
- login/signup forms
- booking/request forms
- admin create/edit forms
- profile forms

Use Supabase for:
- Postgres
- auth
- storage
- row-level security
- structured business data

Use Firebase for:
- auth
- mobile ecosystem features
- push notifications
- simple realtime where cost is understood

Use Redis for:
- temporary cache
- live state
- API response caching
- rate limiting
- reducing database writes

Use phpMyAdmin only as a MySQL/MariaDB admin tool. It is not a backend platform.

## Default Multi-Step UI Workflow

For complex UI work:

1. Read `DESIGN.md`.
2. Use UI UX Pro Max for design system direction.
3. Use Taste Skill for premium visual polish.
4. Use Impeccable for spacing/layout/typesetting audit.
5. Use Storybook for reusable components and states.
6. Use Sentry after production setup.

## Default Backend Workflow

For complex backend work:

1. Read `docs/ARCHITECTURE.md`.
2. Read `docs/BACKEND.md`.
3. Read `docs/DATABASE.md`.
4. Read `docs/SECURITY.md`.
5. Use ECC architect/security/database reviewers.
6. Use Matt Pocock TDD/diagnose where needed.
7. Add validation, permissions, tests, and monitoring.
