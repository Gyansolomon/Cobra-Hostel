# Project Agent Instructions

## Project Identity

Project name: `[APP_NAME]`  
Project type: `[mobile app / web app / SaaS / dashboard / marketplace]`  
Primary users: `[target users]`  
Business goal: `[main goal]`

## Required Reading

Before work begins:

- Read this `AGENTS.md`.
- For project vision, goals, assumptions, references, stack decisions, tools, and roadmap, read `docs/PROJECT_DISCOVERY.md`.
- For automatic skill choice, read `docs/SKILL_REGISTRY.md` if it exists.
- For UI work, read `DESIGN.md`.
- For product work, read `docs/PRD.md`.
- For architecture work, read `docs/ARCHITECTURE.md`.
- For backend work, read `docs/BACKEND.md`.
- For database work, read `docs/DATABASE.md`.
- For security/auth/private data work, read `docs/SECURITY.md`.
- For API work, read `docs/API.md`.
- For animation/motion work, read `docs/MOTION.md`.
- For custom images/onboarding art, read `docs/VISUAL_ASSETS.md`.
- For reusable components, read `docs/COMPONENTS.md`.
- For pricing/API/realtime/storage concerns, read `docs/COST_PLAN.md`.
- For GSD workflow, read `premium-app-os/planning/GSD_CORE_WORKFLOW.md` if available.
- For complete skills/tools/components/backend reference, read `premium-app-os/global/REFERENCE_MAP.md` if available.
- For installable skills and safe install order, read `premium-app-os/global/INSTALLABLE_SKILLS_PACK.md` if available.
- For Multica-managed agents, read `premium-app-os/planning/MULTICA_WORKFLOW.md` if available.
- For agent behavior rules, read `premium-app-os/planning/KARPATHY_AGENT_GUIDELINES.md` if available.
- For discovery workflow, read `premium-app-os/planning/PLANNING_WORKFLOW_CHECKLIST.md` if available.
- For questions, read `premium-app-os/planning/QUESTION_BANK.md` if available.
- For references, read `premium-app-os/planning/REFERENCE_GATHERING_RULES.md` if available.
- For page planning, read `premium-app-os/planning/PAGE_PLANNING_RULES.md` if available.
- For components/tools, read `premium-app-os/planning/COMPONENT_AND_TOOL_SELECTION.md` if available.
- For paid tools and MCP setup, read `premium-app-os/planning/PAID_TOOLS_AND_MCP_RULES.md` if available.

## Work Rules

- Do not start coding until project discovery and the current phase plan are clear.
- Do not start coding without a short plan.
- Choose the best available skill/tool for the task.
- Explain the selected skill/tool briefly.
- Do not require the user to type skill names if the task intent is enough.
- If a desired skill is not visible in the active session, say so and use the closest fallback.
- Distinguish installed skills from external tools, component libraries, backend services, and infrastructure.
- Keep changes scoped and understandable.
- Use reusable components.
- Avoid random UI choices.
- Avoid random dependencies.
- Ask before adding a major dependency.
- Ask before installing GSD Core, MCP connectors, paid component kits, paid APIs, or tools that require login.
- Ask before installing or configuring Multica.
- Ask before installing skills into user-level or repo-level skill folders.
- Tell the user when a recommendation may cost money.
- Keep secrets out of the client.
- Do not expose API keys.
- Use environment variables.
- Add loading, empty, error, and success states.
- Add tests for important business logic.

## Design Rules

- Use `DESIGN.md` for visual decisions.
- Do not create basic vertical-stack layouts.
- Create a layout plan before implementing new screens.
- Use clear hierarchy and one dominant content area.
- Use the spacing system from `DESIGN.md`.
- Use consistent typography.
- Use Apple-style subtle motion where appropriate.
- Add accessibility considerations.

## Backend Rules

- Never trust frontend input.
- Validate all API requests.
- Check authentication and authorization.
- Use role-based access control where needed.
- Use services for business logic.
- Use migrations for schema changes.
- Do not leak internal errors.
- Add logging for important failures.

## Security Rules

- Run security review for auth, roles, payments, private data, file uploads, and admin features.
- Run Gitleaks before pushing.
- Add Sentry before production.
- Do not store secrets in repo.

## Cost Rules

Before adding polling, realtime, AI calls, storage, or heavy reads/writes, explain:

1. What costs money with zero users?
2. What costs more as users increase?
3. What can be cached?
4. What should be permanent?
5. What should be temporary?

Database is for permanent records. Cache is for temporary/live data.

## Final Delivery Checklist

Before final response, provide:

- changed files
- what was added
- how to test
- security notes
- cost notes if relevant
- remaining TODOs

## GSD Rules

If GSD Core artifacts exist, read them before planning or coding:

```text
PROJECT.md
REQUIREMENTS.md
ROADMAP.md
STATE.md
CONTEXT.md
.planning/
```

For serious phase work, prefer this loop:

```text
/gsd-discuss-phase [N]
/gsd-plan-phase [N]
/gsd-execute-phase [N]
/gsd-verify-work [N]
/gsd-ship [N]
```

## Multica Rules

Use Multica only when managed agents add real value:

- multiple agents
- squads
- task assignment
- progress tracking
- autonomous issue execution
- recurring audits

Ask before installing, logging in, starting daemons, choosing cloud/self-hosted mode, or connecting runtimes.

## Karpathy Rules

For every serious task:

```text
Goal:
Success criteria:
Plan:
Verification:
```

Keep changes simple, scoped, and surgical. Verify before claiming completion.
