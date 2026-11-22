# Codex Prompts Reference

Use `global/MASTER_CODEX_PROMPTS.md` for repeatable Codex workflows.

Core prompts:

- Let Codex choose the correct skill or tool.
- Start a new app with GSD Core when installed: `/gsd-new-project`, then phase discussion, planning, execution, and verification.
- If GSD is not installed, ask before installing `npx @opengsd/gsd-core@latest`; otherwise use the manual discovery and planning fallback.
- Use Karpathy guidelines for goal-driven execution, simple scoped changes, and verification before completion.
- Use Multica only when managed multi-agent execution, squads, recurring audits, or progress tracking are useful.
- Use planning rules for questions, references, page plans, component/tool choices, paid-tool warnings, and MCP setup.
- Use auto skill routing so the user does not need to remember skill names.
- Use the complete reference map to distinguish skills, tools, component sources, backend services, and paid products.
- Start a new app with discovery, product, design, architecture, backend, database, security, API, motion, visual asset, component, and cost plans.
- Create a premium layout plan before coding screens.
- Build a design system before expanding UI.
- Run design, security, and production-readiness audits before delivery.
