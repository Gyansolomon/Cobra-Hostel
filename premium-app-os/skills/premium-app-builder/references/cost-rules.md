# Cost Rules Reference

Use `engineering/COST_OPTIMIZATION_RULES.md` before adding realtime, polling, AI calls, storage, or heavy database usage.

Core questions:

- What costs money with zero users?
- What costs more as users increase?
- What should be cached?
- What should be permanent?
- What should be temporary?

Core rule:

Database is for permanent records. Cache is for temporary or live data.
