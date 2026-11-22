# Security Rules Reference

Use `engineering/SECURITY_TEMPLATE.md` for auth, roles, private data, uploads, and production checks.

Core rules:

- Never trust frontend input.
- Never expose API keys or secrets in client code.
- Validate requests on the server.
- Check authentication and authorization for private actions.
- Use environment variables for secrets.
- Rate-limit sensitive endpoints.
- Run a security review before final delivery.
