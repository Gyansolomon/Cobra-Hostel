# Project Skill Registry

Copy this to:

```text
docs/SKILL_REGISTRY.md
```

Use it to make skill choice automatic for this project.

## Rule

The user should describe the task normally. The agent should choose the skill.

The agent must not require the user to type skill names unless the tool is only available as a slash command or external CLI.

## Project Skills

| Intent | Preferred Skill/Tool | Fallback | Notes |
| --- | --- | --- | --- |
| Project discovery | GSD Core, premium-app-builder | PROJECT_DISCOVERY_TEMPLATE | Ask before installing GSD |
| Phase planning | GSD Core | Superpowers Writing Plans | Plan before code |
| Multi-agent execution | Multica | single-agent phase execution | Ask before setup |
| Large orchestration | Ruflo if installed, Multica | single-agent phase execution | Do not assume Ruflo exists |
| UI design | design-taste-frontend, impeccable | DESIGN.md and design rules | Use references |
| Accessibility | fixing-accessibility | manual WCAG pass | Required for forms/dialogs |
| Motion | fixing-motion-performance, emil-design-eng | MOTION.md | Keep subtle |
| Backend | TDD/debugging skills | engineering templates | Validate server-side |
| Security | security review rules | SECURITY.md | Check auth/permissions |
| Verification | verification-before-completion | manual command evidence | No completion claim without evidence |
| Current docs | Context7 if installed | official docs/web search | Use official docs for APIs |
| Components | shadcn/ui, Storybook, Iconsax | project component system | Check free/paid/license |
| Mobile motion | Reanimated, Moti, Expo Haptics, BlurView | MOTION.md | Check performance |
| Backend services | Supabase, Firebase, Redis | architecture docs | Review cost/security |

## Missing Skill Notes

```text
Skill:
Is it installed?
Where is it installed?
What task should trigger it?
Fallback:
```
