# Cost Plan

## Initial Low-Cost Approach

- Use Supabase free/low tier while validating.
- Use hosted images carefully with size limits.
- Avoid paid maps in MVP unless required.
- If maps are included early, prefer a low-cost/free map approach first and avoid paid geocoding at scale until the product proves usage.
- Avoid SMS in MVP.
- Avoid AI calls in MVP.
- Add email notifications only after request flow is proven.
- Do not process student hostel-fee payments in MVP.
- Monetize first through hostel manager/owner listing or advert fees.
- Plan paid listing collection carefully with receipts, admin approval, and clear terms before enabling it.

## Revenue Model

```text
MVP revenue should come from hostel managers/owners paying to post or advertise hostels.

Student payments for hostel fees, deposits, lease contracts, invoices, or room reservations are excluded from MVP and must be planned later with legal/authority support.
```

## Cost Questions

Before adding any paid feature:

1. What costs money with zero users?
2. What scales with users?
3. What can be cached?
4. What can wait?
5. What free alternative exists?

## Watch List

- image storage/bandwidth
- email/SMS notifications
- maps/geocoding
- paid UI kits/assets
- monitoring after production
- payment processing for owner listing fees
- legal/contract/invoice workflows in later phases

## Map Cost Rules

```text
Map search is valuable for hostel discovery, but maps and geocoding can create cost and data-quality issues.

Start with stored hostel coordinates and a low-cost map display where possible.
Avoid repeatedly geocoding addresses on every page load.
Cache or permanently store approved coordinates.
Only enable advanced map filtering after location data quality is good enough.
```
