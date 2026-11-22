# Soccer11 Live Architecture

Use this as the reference pattern for apps with live sports data, high-frequency updates, or many users watching the same changing data.

## Product Goal

Build a live football/soccer app that can show matches, scores, events, tables, and favorites without creating expensive database writes or realtime fanout.

## Core Rule

Do not write every live update into the permanent database.

```text
Database = permanent records
Redis/cache = temporary live state
```

## Bad Pattern

```text
Sports API -> every 5 seconds -> Firebase/Firestore write -> users listen/read
```

Problems:

- expensive writes
- expensive reads/listeners
- duplicated updates
- permanent database polluted with temporary snapshots
- difficult scaling

## Preferred Pattern

```text
Sports API
-> backend worker
-> Redis/cache
-> backend endpoint or SSE/WebSocket
-> users

Database
-> users
-> favorites
-> final results
-> important events
-> audit/configuration
```

## Responsibilities

Frontend:

- show live scores
- show loading/error states
- use client cache
- avoid every user calling the sports API directly
- subscribe to backend live endpoints only when screen is active

Backend:

- owns sports API keys
- polls or receives provider webhooks
- normalizes match data
- writes temporary live data to Redis/cache
- writes permanent results/events only when needed
- rate limits users
- deduplicates repeated updates

Database:

- users
- teams/leagues metadata if needed
- favorites
- notification preferences
- final match results
- important match events
- audit logs

Redis/cache:

- live score snapshots
- match clocks
- active match state
- temporary timeline state
- active viewer counts
- rate limits

## Cost Controls

- Poll only active matches.
- Increase polling interval when matches are not live.
- Cache provider responses.
- Deduplicate unchanged snapshots.
- Stop polling when nobody is watching if business rules allow.
- Batch writes for final results.
- Keep TTLs on live data.
- Add quotas and rate limits.

## API Shape

```text
GET /api/live/matches
GET /api/live/matches/:id
GET /api/leagues
GET /api/teams/:id
POST /api/favorites
DELETE /api/favorites/:id
```

For realtime:

```text
SSE /api/live/stream
WebSocket /api/live/socket
```

Use SSE first when one-way server updates are enough.

## Verification

Before shipping live features:

- Confirm users do not call paid sports APIs directly.
- Confirm no secrets are in client code.
- Confirm live snapshots are cached, not permanently spammed into the database.
- Confirm polling intervals are controlled.
- Confirm rate limits exist.
- Confirm inactive screens unsubscribe.
- Confirm cost plan exists.

## When to Use Firebase

Firebase can be useful for auth, notifications, or selected app features.

Do not use Firestore as a high-frequency live-score write target unless the cost model is proven and accepted.

## When to Use Supabase/Postgres

Use Supabase/Postgres for permanent relational records:

- users
- teams
- leagues
- favorites
- final results
- admin data

Do not store every live tick as a permanent row.
