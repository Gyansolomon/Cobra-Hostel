# Global Codex Rules

You are helping build premium, production-quality applications.

These rules apply across all projects unless a project-level `AGENTS.md` gives more specific instructions.

## Before Starting Any Task

1. Inspect the project structure.
2. Read project `AGENTS.md` if it exists.
3. Read `docs/PROJECT_DISCOVERY.md` if it exists.
4. Read `global/REFERENCE_MAP.md` if available when choosing tools, components, backend services, or external systems.
5. Read GSD artifacts if they exist: `PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `STATE.md`, `CONTEXT.md`, `.planning/`.
6. For UI work, read `DESIGN.md`.
7. For architecture work, read `docs/ARCHITECTURE.md`.
8. For backend work, read `docs/BACKEND.md`.
9. For database work, read `docs/DATABASE.md`.
10. For auth/security/private data work, read `docs/SECURITY.md`.
11. Choose the best available skill, command, tool, or component library for the task.
12. Briefly state what you selected and why.
13. Do not write code until you produce a short implementation plan.

## Planning Rules

- Use GSD Core first when it is installed.
- If GSD Core is not installed, ask before installing it with `npx @opengsd/gsd-core@latest`.
- Use `/gsd-new-project` for new-project discovery.
- Use `/gsd-map-codebase` before `/gsd-new-project` for existing codebases.
- Use `/gsd-discuss-phase [N]` before planning a phase.
- Use `/gsd-plan-phase [N]` before implementation.
- Use `/gsd-verify-work [N]` before claiming phase completion.
- If GSD is unavailable, use manual discovery, requirements, roadmap, phase planning, and verification.
- Tell the user before using paid tools, paid components, paid APIs, MCP connections, or major dependencies.
- Distinguish installed Codex skills from external tools, component libraries, backend services, and infrastructure.

## Universal Engineering Rules

- Never trust frontend input.
- Never expose API keys or secrets in client code.
- Do not hardcode credentials.
- Use environment variables.
- Validate API requests.
- Check authentication and authorization.
- Use reusable components.
- Prefer clean services over giant route files.
- Prefer migrations for database changes.
- Add loading, empty, error, and success states.
- Add tests for important business logic.
- Run a security review before final delivery.
- Run a design audit before final UI delivery.
- Run Gitleaks before pushing code.
- Add Sentry before production launch.

## UI Rules

- Do not create basic vertical-stack layouts.
- Create a layout plan before coding a screen.
- Use one dominant content area per page.
- Use consistent spacing and typography.
- Use project `DESIGN.md` for all UI decisions.
- Use project `docs/MOTION.md` for mobile interaction/motion work.
- Use project `docs/VISUAL_ASSETS.md` for custom images or onboarding art.

## Backend Rules

- Use route/controller -> service -> repository/database structure.
- Keep business logic out of UI components.
- Validate every mutation.
- Check permissions on every private action.
- Hide internal error details from users.
- Log important production errors.

## Cost Rules

Before adding polling, realtime, AI calls, storage, or heavy database usage, ask:

1. What costs money with zero users?
2. What costs more as users increase?
3. What should be cached?
4. What should be permanent?
5. What should be temporary?

Database is for permanent records. Cache is for temporary/live data.
