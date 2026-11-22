# Backend Rules Reference

Use `engineering/BACKEND_TEMPLATE.md` and `engineering/API_TEMPLATE.md` for backend work.

Core rules:

- Keep route, controller, service, and repository/database responsibilities separate.
- Validate all mutations.
- Keep business logic out of UI components.
- Return consistent success and error shapes.
- Hide internal error details from users.
- Log important production errors.
