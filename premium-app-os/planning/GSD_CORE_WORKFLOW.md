# GSD Core Workflow

GSD Core is the preferred planning and execution system when installed.

Repository:

```text
https://github.com/open-gsd/gsd-core
```

Install:

```text
npx @opengsd/gsd-core@latest
```

Ask the user before installing. Installation may change agent/runtime configuration.

## When to Use

Use GSD Core for serious app work that needs:

- project discovery
- research
- requirements
- roadmap
- phase planning
- execution
- verification
- shipping
- milestone management
- preserved context across sessions

## Main Loop

New project:

```text
/gsd-new-project
```

Existing codebase:

```text
/gsd-map-codebase
/gsd-new-project
```

For each phase:

```text
/gsd-discuss-phase [N]
/gsd-plan-phase [N]
/gsd-execute-phase [N]
/gsd-verify-work [N]
/gsd-ship [N]
```

Milestones:

```text
/gsd-complete-milestone
/gsd-new-milestone
```

Auto-next-step:

```text
/gsd-progress --next
```

## Rule

Do not jump from a roadmap sentence to code.

Each phase needs:

1. discussion
2. research
3. plan
4. approval
5. execution
6. verification
7. shipping decision

## Expected Planning Artifacts

GSD may maintain artifacts such as:

```text
PROJECT.md
REQUIREMENTS.md
ROADMAP.md
STATE.md
CONTEXT.md
.planning/
```

If these exist, read them before planning or coding.

## Fallback When GSD Is Not Installed

If GSD Core is unavailable:

1. Use `project-templates/PROJECT_DISCOVERY_TEMPLATE.md`.
2. Ask discovery questions.
3. Create `docs/PROJECT_DISCOVERY.md`.
4. Create `docs/PRD.md`.
5. Create roadmap phases.
6. Discuss each phase.
7. Write an implementation plan.
8. Verify each phase before claiming completion.

## Paid and Setup Warnings

Tell the user before:

- installing GSD Core
- changing runtime configuration
- enabling autonomous execution
- using paid model profiles
- adding paid APIs or component kits
- connecting MCP tools that require login or credentials
