# Database Rules Reference

Use `engineering/DATABASE_TEMPLATE.md` before creating tables or collections.

Core rules:

- Define entities and relationships before implementation.
- Use migrations where the stack supports them.
- Store permanent records in the database.
- Keep temporary or live state in cache when appropriate.
- Add audit logs for important private or admin actions.
- Plan indexes around real query patterns.
