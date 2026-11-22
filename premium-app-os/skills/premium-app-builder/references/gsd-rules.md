# GSD Rules Reference

Use GSD Core first when it is installed.

Install command:

```text
npx @opengsd/gsd-core@latest
```

Do not run the install command without the user's permission.

## Commands

```text
/gsd-map-codebase
/gsd-new-project
/gsd-discuss-phase [N]
/gsd-plan-phase [N]
/gsd-execute-phase [N]
/gsd-verify-work [N]
/gsd-ship [N]
/gsd-complete-milestone
/gsd-new-milestone
/gsd-progress --next
```

## Planning Standard

- Discovery comes before PRD.
- Roadmap comes before phase planning.
- Phase discussion comes before implementation planning.
- Plan verification comes before execution.
- Work verification comes before shipping.
- Milestone closure comes before the next milestone.

## Context Standard

If these files exist, read them before work:

```text
PROJECT.md
REQUIREMENTS.md
ROADMAP.md
STATE.md
CONTEXT.md
.planning/
```

## Fallback

If GSD is not installed, use:

- Superpowers Brainstorming for discovery and spec creation
- Superpowers Writing Plans for implementation plans
- Verification Before Completion before claiming work is complete
