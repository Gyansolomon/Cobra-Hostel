# Security Rules

## Core Security Model

Every private action must answer:

1. Who is the user?
2. What role do they have?
3. What data do they own?
4. Are they allowed to perform this action?
5. Is the input safe?
6. Is the result safe to return?

## Auth

Define:

- auth provider
- sign in methods
- session handling
- password reset flow
- account deletion flow if needed

## Roles

Example roles:

```text
user
admin
owner
support
viewer
```

## Permissions

For each role define:

```text
Can read:
Can create:
Can update:
Can delete:
Admin-only actions:
```

## Secrets

- No secrets in client code.
- No secrets committed to repo.
- Use environment variables.
- Run Gitleaks before pushing.
- Rotate keys if leaked.

## File Uploads

Validate:

- file type
- file size
- ownership
- upload path
- public/private access

## Rate Limiting

Use rate limits for:

- login
- signup
- password reset
- public APIs
- expensive search
- booking/request actions
- AI endpoints

## Security Review Checklist

- Auth is required where needed.
- Roles are enforced.
- Users can only access their own private data.
- Admin actions are protected.
- Inputs are validated.
- Secrets are hidden.
- Errors do not leak internals.
- Database rules/policies are strict.
- File uploads are controlled.
- Audit logs exist for sensitive actions.
