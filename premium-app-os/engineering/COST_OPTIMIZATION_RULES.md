# Cost Optimization Rules

## Core Questions

Before adding any expensive feature, ask:

1. What costs money with zero users?
2. What costs more as users increase?
3. What should be cached?
4. What should be stored permanently?
5. What should be temporary?
6. What can be delayed, batched, or deduplicated?

## Important Rule

```text
Database = permanent records
Cache = temporary/live data
```

## Avoid

- writing live snapshots to database every few seconds
- polling when nobody is watching
- storing unchanged API responses
- letting every user call paid APIs directly
- realtime fanout without cost calculation
- unlimited file uploads
- unlimited AI calls

## Use

- server-side cache
- client-side cache
- TanStack Query or equivalent frontend server-state cache
- rate limits
- quotas
- usage counters
- background workers
- change detection
- batching
- TTL for temporary data

## Backend Service Rules

Supabase/Postgres:

- use for permanent relational records
- use row-level security where relevant
- never expose service role keys to the client

Firebase:

- use for auth, push, mobile ecosystem needs, or simple realtime where cost is understood
- avoid high-frequency Firestore writes without a cost model

Redis:

- use for temporary live state, API response cache, rate limits, and active viewer state
- set TTLs for temporary data

phpMyAdmin:

- use only as a MySQL/MariaDB admin interface
- do not treat it as a backend platform

## Soccer11 Pattern

Bad:

```text
Sports API -> every 5 seconds -> Firebase write -> users read/listen
```

Good:

```text
Sports API -> backend worker -> Redis cache -> backend endpoint/SSE/WebSocket -> users
Database -> only final results, important events, users, favorites
```
