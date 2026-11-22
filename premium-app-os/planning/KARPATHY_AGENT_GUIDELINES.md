# Karpathy Agent Guidelines

Use these as behavior rules for Codex and other coding agents.

Repository:

```text
https://github.com/multica-ai/andrej-karpathy-skills
```

The core idea is goal-driven execution: define clear success criteria, then loop until verified.

## Principles

1. Think before coding.
2. Keep the solution simple.
3. Make surgical changes.
4. Use goal-driven execution.
5. Verify before claiming completion.

## Think Before Coding

Before implementing:

- understand the user's goal
- inspect the existing project
- identify constraints
- ask questions when critical information is missing
- state assumptions when using defaults
- choose the smallest useful solution

## Simplicity First

Prefer:

- boring, reliable code
- existing project patterns
- fewer dependencies
- smaller features
- clear interfaces
- testable units

Avoid:

- over-engineering
- speculative abstractions
- broad rewrites
- unrelated refactors
- unnecessary libraries

## Surgical Changes

Change only what the task requires.

Before editing:

- know which files need changes
- preserve unrelated user work
- avoid touching generated or unrelated files
- avoid formatting churn unless required

## Goal-Driven Execution

Convert vague requests into verifiable goals.

Instead of:

```text
Make it better.
```

Define:

```text
Improve onboarding so a new user can understand the value, create an account, and reach the first useful action in under 3 screens.
Verification: onboarding screens render, CTA works, empty/error states exist, and mobile layout is checked.
```

Every non-trivial task should have:

```text
Goal:
Success criteria:
Verification command or check:
```

## Verification Loop

Before saying work is complete:

1. Run the relevant check.
2. Read the result.
3. Fix failures.
4. Re-run.
5. Report the evidence.

Examples:

```text
Tests: npm test
Lint: npm run lint
Build: npm run build
Typecheck: npm run typecheck
Visual QA: browser screenshot on desktop and mobile
Security: gitleaks scan
```

## Premium App OS Rule

Use GSD Core for planning structure, Multica for managed agent execution when needed, and Karpathy guidelines for agent behavior on every serious task.
