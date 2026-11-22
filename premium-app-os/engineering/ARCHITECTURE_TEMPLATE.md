# Architecture

## App Name

`[APP_NAME]`

## System Overview

```text
Frontend
-> Backend/API
-> Database
-> Storage
-> Auth
-> Cache if needed
-> External APIs if needed
-> Monitoring
```

## Frontend

Framework:

```text
[Next.js / Expo / React Native / React]
```

Responsibilities:

- UI screens
- client-side validation
- client-side cache
- auth session handling
- calling backend APIs
- showing loading/empty/error states

## Backend

Backend type:

```text
[Supabase / Firebase / Node.js / Next.js API routes / Laravel / other]
```

Responsibilities:

- validation
- permissions
- business logic
- secure API access
- server-only API keys
- database writes
- file upload rules
- background jobs if needed

## Database

Database:

```text
[Postgres / Firestore / MySQL / other]
```

Responsibilities:

- permanent records
- relationships
- reporting
- user-owned data
- audit logs

## Storage

Used for:

- images
- documents
- avatars
- uploads

Rules:

- validate file type
- validate size
- avoid public write access
- protect private files

## Cache

Use cache for:

- live data
- temporary state
- API response caching
- expensive queries

Rule:

```text
Database = permanent records
Cache = temporary/live data
```

## Monitoring

Use Sentry for:

- frontend errors
- backend errors
- crashes
- slow pages
- broken user flows

## Deployment

Define:

- hosting provider
- environment variables
- build command
- test command
- rollback plan
