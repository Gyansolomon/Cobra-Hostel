# Auto Skill Routing Reference

The user should not need to call every skill manually.

Use:

```text
global/AUTO_SKILL_ROUTING.md
global/SKILL_REGISTRY_TEMPLATE.md
global/INSTALLABLE_SKILLS_PACK.md
project-templates/SKILL_REGISTRY_TEMPLATE.md
```

Core behavior:

1. Inspect available skills/tools.
2. Match the task to skill descriptions.
3. Use the best visible skill.
4. Explain the selected skill briefly.
5. If the desired skill is unavailable, say so and use the closest fallback.

For local skills, make sure `SKILL.md` has a strong description:

```md
---
name: skill-name
description: Use when the task involves specific trigger words and expected outputs.
---
```

Do not pretend a missing skill is installed.
