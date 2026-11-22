# Multica Workflow

Multica is optional infrastructure for managed multi-agent execution.

Repository:

```text
https://github.com/Gyansolomon/multica
```

Use it when the project needs agents to behave like teammates:

- assign work to agents
- track issue progress
- coordinate squads
- run autonomous work
- schedule recurring audits or follow-ups
- reuse and compound skills across projects
- manage local or cloud runtimes

## When to Recommend

Recommend Multica when:

- the project is large enough for multiple agents
- the user wants task assignment and progress tracking
- the user wants autonomous execution from issues
- the user wants recurring checks such as daily status, weekly audits, CI fixes, or security reviews
- the user wants agents grouped by role, such as frontend, backend, design, QA, or security

Do not require Multica for small projects, simple edits, or single-agent work.

## Setup Warning

Ask before installing or configuring Multica.

It may require:

- installing the Multica CLI
- logging in
- starting a daemon
- connecting a local runtime
- choosing cloud or self-hosted mode
- Docker for self-hosting
- agent/provider configuration

Windows install command from the Multica README:

```text
irm https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.ps1 | iex
```

Do not run this without user permission.

## How It Fits Premium App OS

Use GSD Core to create the plan and phases.

Use Multica when the user wants those phases assigned to agents, squads, or recurring automations.

Suggested mapping:

```text
GSD discovery -> Multica issue
GSD phase plan -> Multica task assignment
Frontend phase -> Frontend agent or squad
Backend phase -> Backend agent or squad
Design audit -> Design/QA agent
Security audit -> Security agent
Verification -> QA/reviewer agent
```

## User Questions Before Using

Ask:

1. Do you want one agent or multiple agents?
2. Do you want cloud or self-hosted execution?
3. Do you want agents to work from issues?
4. Do you want recurring audits or follow-ups?
5. Which agent CLIs are available: Codex, Claude Code, Copilot CLI, Gemini, Cursor Agent, or others?

## Rules

- Do not install or configure Multica without permission.
- Do not assume the user wants autonomous execution.
- Do not expose secrets in Multica issues, comments, logs, or agent prompts.
- Keep tasks small enough for agents to verify.
- Use GSD or project docs as the source of truth.
