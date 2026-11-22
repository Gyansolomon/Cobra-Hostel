# Database Design

## Questions Before Creating Tables

1. What entities exist?
2. How are they related?
3. Who owns the data?
4. What should be unique?
5. What should never be deleted?
6. What needs audit logs?
7. What queries will be common?
8. What data must be private?
9. What data can be public?
10. What data should be cached instead of stored permanently?

## Entity List

```text
[entity_1]
[entity_2]
[entity_3]
```

## Tables

For each table define:

```text
Table name:
Purpose:
Fields:
Relationships:
Indexes:
Constraints:
Security/ownership:
Soft delete:
Audit log needed:
```

## Rules

- Use clear table names.
- Use foreign keys where possible.
- Use NOT NULL for required fields.
- Use unique constraints where needed.
- Use indexes for common queries.
- Use safe numeric types for money.
- Store dates consistently.
- Avoid deleting important business records permanently.
- Add audit logs for sensitive/admin actions.
