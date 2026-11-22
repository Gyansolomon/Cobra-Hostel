# Planning Workflow Checklist

Use this checklist before building any serious app.

## Gate 1: Understand the Goal

- Capture what the user wants to establish.
- Capture why the product should exist.
- Capture target users.
- Capture business goals.
- Capture user goals.
- Capture success criteria.
- Capture constraints: budget, timeline, platform, skills, stack preferences, geography, compliance, data sensitivity.

Do not move to PRD until this is clear.

## Gate 2: Ask Better Questions

- Ask one focused question at a time when the answer changes the plan.
- Prefer multiple-choice questions when the user is unsure.
- Offer a recommended default when speed matters.
- Label assumptions clearly.
- Do not silently invent brand, stack, business model, or payment decisions.

Use `planning/QUESTION_BANK.md`.

## Gate 3: Research and References

- Identify product references.
- Identify page-level references.
- Identify component references.
- Identify visual asset references.
- Record what to learn from each reference.
- Do not copy protected designs.

Use `planning/REFERENCE_GATHERING_RULES.md`.

## Gate 4: Page Plan

For every important page or screen, define:

- goal
- primary user action
- main content
- supporting content
- components
- states
- navigation entry/exit
- reference
- mobile/desktop behavior
- risks

Use `planning/PAGE_PLANNING_RULES.md`.

## Gate 5: Component and Tool Selection

- Choose base UI library.
- Choose icon library.
- Choose forms, tables, charts, maps, uploads, auth, payments, notifications, analytics, and monitoring tools when needed.
- Explain why each major dependency is worth it.
- Prefer existing project patterns.
- Ask before major dependencies.

Use `planning/COMPONENT_AND_TOOL_SELECTION.md`.

## Gate 6: Paid Tools and MCP Setup

- Tell the user what may require payment.
- Tell the user what requires login, API keys, MCP connections, desktop setup, or browser auth.
- Give free alternatives when reasonable.
- Ask permission before installing, connecting, or buying.

Use `planning/PAID_TOOLS_AND_MCP_RULES.md`.

## Gate 7: Roadmap

Create phases that each produce working, testable progress.

Each phase needs:

- goal
- included features
- excluded features
- files or modules likely involved
- acceptance criteria
- verification checks
- risks

Use GSD Core when installed.

## Gate 8: Implementation Plan

Do not write code until the phase has:

- discussed decisions
- plan
- tests/checks
- verification method
- user approval when the phase changes product/design/cost/security direction

## Gate 9: Verify and Ship

Before claiming completion:

- run relevant checks
- inspect output
- fix failures
- re-run checks
- report evidence

For UI work, include browser or device visual QA when possible.

For security-sensitive work, include auth, authorization, validation, secret, and abuse-case review.
