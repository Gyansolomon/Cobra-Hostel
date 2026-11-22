# Premium App Builder

## Description

Use this skill when planning, designing, building, auditing, or improving a premium app.

This skill helps turn rough app ideas into structured, premium, production-ready projects.

## When to Use

Use this skill when the task involves:

- starting a new app
- creating `AGENTS.md`
- creating `DESIGN.md`
- planning a product
- creating a PRD
- designing a premium UI
- improving poor AI-generated layouts
- choosing components
- creating motion rules
- creating visual asset systems
- planning backend/database/security
- reducing cost risks
- preparing a project for Codex

## Workflow

1. Start with project discovery. Understand what the user wants to establish, why it matters, who it serves, and what success means.
2. Use the full Premium App OS planning stack:
   - GSD Core for discovery, roadmap, phase planning, execution, verification, and shipping
   - Karpathy guidelines for agent behavior, simplicity, surgical changes, success criteria, and verification
   - Multica when managed multi-agent work, squads, issue assignment, or recurring audits are useful
   - Premium planning rules for questions, references, page planning, components, paid tools, and MCP setup
   - Auto skill routing so the user does not have to remember skill names
3. Use GSD Core if installed:
   - `/gsd-map-codebase` for existing projects
   - `/gsd-new-project` for discovery, research, requirements, and roadmap
   - `/gsd-discuss-phase [N]` before planning each phase
   - `/gsd-plan-phase [N]` before implementation
   - `/gsd-execute-phase [N]` only after approval
   - `/gsd-verify-work [N]` before claiming completion
4. If GSD Core is not installed, tell the user and recommend `npx @opengsd/gsd-core@latest`. Do not install it without permission.
5. If Multica would help, recommend it and explain the setup. Do not install or configure it without permission.
6. If the user does not want GSD, use a manual fallback: discovery questions, research, requirements, roadmap, phase discussion, implementation plan, verification checklist.
7. Identify target users and business goals.
8. Ask clarifying questions before making product, design, stack, component, paid-tool, or MCP decisions.
9. Suggest practical defaults when the user wants speed, but label assumptions clearly.
10. Create or update project `AGENTS.md`.
11. Create or update `DESIGN.md`.
12. Create planning docs:
   - PROJECT_DISCOVERY
   - SKILL_REGISTRY
   - PRD
   - ARCHITECTURE
   - BACKEND
   - DATABASE
   - SECURITY
   - API
   - MOTION
   - VISUAL_ASSETS
   - COMPONENTS
   - COST_PLAN
   - tool/component/backend reference notes when relevant
13. Choose the correct skill/tool using the skill router.
14. Create layout plans before coding screens.
15. Use premium component systems.
16. Use Apple-style subtle motion.
17. Use secure backend/database rules.
18. Run design audit.
19. Run security audit.
20. Run production-readiness checklist.

## Principles

- Do not let AI design randomly.
- Do not let AI code randomly.
- Plan before implementation.
- Project discovery comes before PRD, design, architecture, and code.
- Use the question bank before assuming requirements.
- Use reference gathering rules before choosing visual direction.
- Use page planning rules before coding important screens.
- Use component and tool selection rules before adding dependencies.
- Use paid tools and MCP rules before recommending paid tools, services, or connectors.
- A roadmap sentence is not enough to build. Discuss the phase details before planning.
- Every phase needs acceptance criteria before execution.
- Use Karpathy-style goal-driven execution: define success criteria and verify.
- Keep changes simple, scoped, and surgical.
- Use Multica only when managed agents add real value.
- Tell the user when a recommended tool, component, API, MCP connection, or service may cost money.
- Do not install tools, paid components, or major dependencies without user permission.
- Use references for inspiration, not copying.
- Use reusable components.
- Use clear spacing and hierarchy.
- Use secure backend patterns.
- Use cost-aware architecture.
- Database is for permanent records.
- Cache is for temporary/live data.

## Required Output for New Apps

For a new app, produce:

```text
docs/PROJECT_DISCOVERY.md
docs/SKILL_REGISTRY.md
AGENTS.md
DESIGN.md
docs/PRD.md
docs/ARCHITECTURE.md
docs/BACKEND.md
docs/DATABASE.md
docs/SECURITY.md
docs/API.md
docs/MOTION.md
docs/VISUAL_ASSETS.md
docs/COMPONENTS.md
docs/COST_PLAN.md
```

For live sports or high-frequency realtime apps, also produce or adapt:

```text
docs/SOCCER11_LIVE_ARCHITECTURE.md
```

If GSD Core is installed, also preserve or reference its planning artifacts:

```text
PROJECT.md
REQUIREMENTS.md
ROADMAP.md
STATE.md
CONTEXT.md
.planning/
```

Also read these Premium App OS planning files when available:

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
global/REFERENCE_MAP.md
```

If Multica is used, preserve links to:

```text
Multica workspace
Multica issue
assigned agent or squad
runtime used
phase or task mapping
```

For tools and components, distinguish:

```text
installed Codex skills
external skills/tools
component libraries
design asset sources
backend services
security/monitoring tools
```

Before installing skills, read `global/INSTALLABLE_SKILLS_PACK.md` and ask permission.

## Final Audit

Before final delivery, check:

- product clarity
- layout quality
- spacing consistency
- component reuse
- motion quality
- security
- database design
- backend validation
- cost risks
- production monitoring
