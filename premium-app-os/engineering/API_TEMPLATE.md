# API Design

## API Rules

- Use clear route names.
- Validate every request.
- Check permissions.
- Return consistent response shapes.
- Do not leak internal errors.
- Add rate limits to sensitive routes.

## Endpoint Template

```text
Method: GET/POST/PATCH/DELETE
Path: /api/example
Purpose:
Auth required: yes/no
Allowed roles:
Request body:
Query params:
Validation rules:
Success response:
Error responses:
Side effects:
Audit log needed: yes/no
```

## Response Shape

Success:

```json
{
  "success": true,
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
```
