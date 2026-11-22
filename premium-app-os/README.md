# Premium App OS

This is my private operating system for building premium apps with Codex and AI agents.

It contains reusable rules, prompts, templates, design systems, motion rules, backend rules, database rules, security rules, cost optimization patterns, and project-start workflows.

It uses a full planning stack:

```text
GSD Core = discovery, roadmap, phases, execution, verification, shipping
Karpathy guidelines = agent behavior, simplicity, success criteria, verification
Multica = optional managed multi-agent execution, squads, recurring audits, progress tracking
Planning rules = questions, references, page plans, component choices, paid tools, MCP setup
Auto skill routing = agents choose installed skills so the user does not memorize commands
```

## Main Goal

Do not let AI design or code randomly.

Every serious app must start with:

1. Project discovery
2. Product plan
3. Roadmap
4. Project AGENTS.md
5. DESIGN.md
6. Architecture plan
7. Backend plan
8. Database plan
9. Security plan
10. Component system
11. Visual asset direction
12. Motion system
13. Cost plan
14. Build phases
15. Verification gates
16. Final audit

## Golden Rule

Components make the UI look nice.  
Layout makes the product feel premium.  
Architecture makes the product survive.  
Security makes the product trustworthy.  
Motion makes the product feel alive.

## Folder Structure

```text
premium-app-os/
  README.md

  global/
    GLOBAL_AGENTS.md
    AUTO_SKILL_ROUTING.md
    SKILL_ROUTER.md
    SKILL_REGISTRY_TEMPLATE.md
    REFERENCE_MAP.md
    INSTALLABLE_SKILLS_PACK.md
    MASTER_CODEX_PROMPTS.md

  planning/
    PLANNING_WORKFLOW_CHECKLIST.md
    QUESTION_BANK.md
    REFERENCE_GATHERING_RULES.md
    PAGE_PLANNING_RULES.md
    COMPONENT_AND_TOOL_SELECTION.md
    PAID_TOOLS_AND_MCP_RULES.md
    GSD_CORE_WORKFLOW.md
    MULTICA_WORKFLOW.md
    KARPATHY_AGENT_GUIDELINES.md

  design/
    DESIGN_TEMPLATE.md
    LAYOUT_RULES.md
    SPACING_RULES.md
    MOTION_RULES.md
    VISUAL_ASSET_RULES.md
    COMPONENT_SYSTEM.md
    DESIGN_AUDIT_CHECKLIST.md

  engineering/
    ARCHITECTURE_TEMPLATE.md
    BACKEND_TEMPLATE.md
    DATABASE_TEMPLATE.md
    SECURITY_TEMPLATE.md
    API_TEMPLATE.md
    COST_OPTIMIZATION_RULES.md

  project-templates/
    PROJECT_DISCOVERY_TEMPLATE.md
    PROJECT_AGENTS_TEMPLATE.md
    SKILL_REGISTRY_TEMPLATE.md
    PRD_TEMPLATE.md
    HOSTEL_APP_STARTER.md
    SOCCER11_LIVE_ARCHITECTURE.md

  skills/
    premium-app-builder/
      SKILL.md
      references/
        auto-skill-routing.md
        planning-rules.md
        gsd-rules.md
        multica-rules.md
        karpathy-guidelines.md
        reference-map.md
        design-rules.md
        layout-rules.md
        motion-rules.md
        visual-assets.md
        component-system.md
        backend-rules.md
        database-rules.md
        security-rules.md
        cost-rules.md
        codex-prompts.md
```

## How to Start a New App

1. Create a new project folder.
2. If GSD Core is installed, run `/gsd-new-project`.
3. If code already exists, run `/gsd-map-codebase` before `/gsd-new-project`.
4. If GSD Core is not installed, ask before installing it with:

```text
npx @opengsd/gsd-core@latest
```

5. Apply Karpathy guidelines to the agent behavior: clear goals, simple solution, surgical changes, verification before completion.
6. Recommend Multica only if the user wants managed agents, squads, recurring audits, autonomous issue execution, or progress tracking.
7. Copy `project-templates/PROJECT_DISCOVERY_TEMPLATE.md` into the project as `docs/PROJECT_DISCOVERY.md`.
8. Copy `project-templates/PROJECT_AGENTS_TEMPLATE.md` into the project as `AGENTS.md`.
9. Copy `project-templates/SKILL_REGISTRY_TEMPLATE.md` into the project as `docs/SKILL_REGISTRY.md`.
10. Copy `design/DESIGN_TEMPLATE.md` into the project as `DESIGN.md`.
11. Copy `project-templates/PRD_TEMPLATE.md` into `docs/PRD.md`.
12. Create the docs folder:

```text
docs/
  PROJECT_DISCOVERY.md
  SKILL_REGISTRY.md
  ARCHITECTURE.md
  BACKEND.md
  DATABASE.md
  SECURITY.md
  API.md
  MOTION.md
  VISUAL_ASSETS.md
  COMPONENTS.md
  COST_PLAN.md
```

13. Use `global/MASTER_CODEX_PROMPTS.md` to guide Codex.
14. Use `global/AUTO_SKILL_ROUTING.md`, `global/SKILL_ROUTER.md`, `global/REFERENCE_MAP.md`, and `global/INSTALLABLE_SKILLS_PACK.md` to let Codex choose the correct skill/tool/component/service.
15. Use the planning rules:

```text
planning/PLANNING_WORKFLOW_CHECKLIST.md
planning/QUESTION_BANK.md
planning/REFERENCE_GATHERING_RULES.md
planning/PAGE_PLANNING_RULES.md
planning/COMPONENT_AND_TOOL_SELECTION.md
planning/PAID_TOOLS_AND_MCP_RULES.md
```

16. Build one phase at a time.
17. Run discussion, planning, execution, verification, and shipping gates for each phase.
18. Run design, security, cost, and production-readiness audits before shipping.

## Installing Skills

Use `global/INSTALLABLE_SKILLS_PACK.md` before installing skills.

Do not install everything blindly.

Installable skills and agent systems include:

- GSD Core
- Taste Skill
- Matt Pocock Skills
- Premium App Builder
- ECC after install-plan review
- UI UX Pro Max, Impeccable, UI Skills, Ruflo, Awesome Design MD, and Context7 after README review

Project libraries and services such as shadcn/ui, Storybook, Sentry, Zod, Supabase, Firebase, and Redis are not Codex skills. Add them per project only.

## Never Store Secrets Here

Do not store:

- API keys
- Firebase service account files
- Supabase service role keys
- Redis passwords
- private tokens
- real customer data
- production credentials
