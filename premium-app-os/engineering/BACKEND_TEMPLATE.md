# Backend Rules

## Structure

Use this flow:

```text
Route / Controller
-> validate request
-> check auth/permissions
-> call service
-> service calls repository/database
-> return safe response
```

## Rules

- Never trust frontend input.
- Validate all requests.
- Check auth for protected routes.
- Check permissions for sensitive actions.
- Keep secrets server-side.
- Use environment variables.
- Do not expose raw internal errors.
- Use consistent error responses.
- Keep business logic inside services.
- Add tests for important business logic.

## Validation

Use a validation library where possible:

```text
Zod / Yup / Valibot / backend-native validator
```

Every mutation needs:

- required fields
- type checks
- length limits
- ownership checks
- role checks

## Error Response Shape

Use consistent errors:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human readable message"
  }
}
```

## Success Response Shape

```json
{
  "success": true,
  "data": {}
}
```
