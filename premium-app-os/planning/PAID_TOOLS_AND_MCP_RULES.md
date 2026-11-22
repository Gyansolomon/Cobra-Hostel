# Paid Tools and MCP Rules

Never surprise the user with costs, credentials, or setup work.

## Ask Permission Before

- installing GSD Core
- installing or configuring Multica
- installing MCP connectors
- connecting Figma, GitHub, Gmail, Supabase, Firebase, Stripe, Linear, Notion, or other accounts
- adding paid APIs
- using paid component kits
- using paid design assets
- starting cloud services
- storing credentials
- changing runtime or daemon configuration

## Cost Disclosure

When recommending a tool, say:

```text
Tool:
Why it helps:
Free or paid:
Setup needed:
User account needed:
Credential needed:
Alternative:
Risk:
```

## MCP Connection Guidance

Recommend MCP connections when they reduce manual work:

```text
Figma - design files, components, diagrams, slides
GitHub - issues, pull requests, CI, code review
Browser - local UI QA and screenshots
Chrome - logged-in browser sessions
Gmail - email workflows
Supabase/Firebase - backend project management if connector exists
Stripe - payments if connector exists
```

Do not assume a connector exists. Check available tools first.

## Paid Component Guidance

Warn the user when using:

```text
Tailwind UI
Untitled UI
UI8 assets
Mobbin paid access
premium icon packs
premium templates
stock photo libraries
paid map APIs
paid AI APIs
SMS providers
email providers beyond free tier
```

Give a free or lower-cost alternative when possible.

## Secrets Rule

Do not put secrets in:

- `premium-app-os`
- prompts
- issues
- docs
- screenshots
- committed files
- Multica task descriptions
- agent logs

Use environment variables and secure secret stores.
