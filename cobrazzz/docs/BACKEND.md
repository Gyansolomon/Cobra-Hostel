# Backend Plan

## Backend Direction

Use:

```text
Supabase Auth
Supabase Postgres
Supabase Storage
Supabase Row Level Security
Next.js server actions/API routes for protected business logic
```

## Backend Principles

```text
Never trust frontend input.
Public users can browse only published/approved data.
Students must sign in before enquiry, messaging, or persistent favorites.
Owners can manage only their own listings and requests.
Admins control publishing, approval, verification, and trust labels.
No student payments in MVP.
Messages and enquiries go through the platform first.
```

## Request Flow Pattern

Use this backend flow for every mutation:

```text
Route/server action
-> read session
-> validate request with Zod
-> check role and ownership
-> perform database mutation
-> write audit log where needed
-> return safe response
```

## Public Backend Features

### Public hostel search

Purpose:

```text
Show published UCC hostels to visitors without sign-in.
```

Inputs:

```text
university
area
price_min
price_max
room_type
occupants
amenities
availability
verification_level
team_quality_score
distance
map_bounds optional
sort
page
```

Rules:

```text
Return only published hostels.
Return only approved public images, prices, amenities, trust labels, and public map data.
Do not return private admin notes, verification evidence, owner private data, or student data.
```

### Public hostel detail

Purpose:

```text
Show a full public listing page for a published hostel.
```

Rules:

```text
Hostel must be published.
Room types, prices, amenities, gallery, map preview, and trust labels must come from approved listing data.
Manager phone/WhatsApp appears only if manager contact settings allow reveal.
```

### Public university/area data

Purpose:

```text
Support UCC hub pages, search filters, and SEO.
```

Rules:

```text
Only return public university, city, and area data.
```

## Student Backend Features

### Profile update

Purpose:

```text
Let signed-in users add phone/WhatsApp and basic student details.
```

Validation:

```text
full_name length
phone/whatsapp format
school name length
student level allowed/free text length
```

Permissions:

```text
User can update only own profile.
```

### Favorites

Purpose:

```text
Let students save hostels.
```

Rules:

```text
Requires sign-in.
Student can manage only own favorites.
Hostel must be published.
unique(student_id, hostel_id).
```

### Booking/request enquiry

Purpose:

```text
Send a platform-first enquiry to a hostel manager. No payment.
```

Validation:

```text
student must be signed in
student profile must have phone/WhatsApp
hostel must be published
room_type must belong to hostel if provided
message length limit
preferred move-in period length limit
rate limit repeated requests
```

Side effects:

```text
create booking_requests row
create initial message row if message is present
notify owner/admin later if notification system exists
audit request status changes later
```

Rules:

```text
Do not collect hostel fees.
Do not promise reservation.
Show manager direct contact only if enabled by contact settings.
```

### Student messages

Purpose:

```text
Keep student-manager communication inside the platform first.
```

Validation:

```text
signed in
message body length
booking request exists or hostel is published
sender is participant
rate limit
```

Rules:

```text
Students can read/send messages only for their own request threads.
```

## Owner Backend Features

### Owner listing create/update

Purpose:

```text
Let hostel owners/managers submit listings for review.
```

Validation:

```text
required hostel name
university required
area/address required where possible
description length limits
room types required before submission
at least one public image recommended before submission
prices must be non-negative
amenities must be known ids
```

Permissions:

```text
Owner can create own draft/submitted listings.
Owner can update own listings while status is draft, needs_changes, or submitted_for_review depending on review rules.
Owner cannot set published, approved, physically_verified, is_promoted, or team_quality_score.
```

Side effects:

```text
status defaults to draft
submit action changes status to submitted_for_review
write audit log for submit/update
```

### Owner room/pricing/images

Purpose:

```text
Let owners manage room details before approval.
```

Rules:

```text
Owner can manage only records for own hostel.
Image uploads must validate file type and size.
Price changes after publishing may require admin re-review if significant.
```

### Owner request inbox

Purpose:

```text
Let managers view and respond to student enquiries.
```

Rules:

```text
Owner sees requests only for hostels they manage.
Owner can update request status within allowed states.
Owner can respond through platform messages.
```

### Manager contact settings

Purpose:

```text
Let managers choose whether to reveal phone/WhatsApp and contact note.
```

Rules:

```text
Owner can update only own hostel contact settings.
All changes are audited.
Direct contact reveal does not replace platform enquiry flow.
```

## Admin Backend Features

### Admin seed listing

Purpose:

```text
Let admin/team manually add UCC hostels at launch.
```

Rules:

```text
Only admins can create admin_seeded listings.
Admin can set status, publish, and assign verification level based on evidence.
```

### Listing review

Purpose:

```text
Approve, reject, request changes, publish, unpublish, or archive listings.
```

Rules:

```text
Only admins can approve/publish/reject/archive.
Review actions create listing_reviews row.
Sensitive changes create audit_logs row.
```

### Verification visits

Purpose:

```text
Record physical or strong verification evidence.
```

Rules:

```text
Only admins/support can create verification records.
Only admins can set photos_confirmed or physically_verified labels.
Public sees only trust label, not private evidence by default.
```

### Team quality assessments

Purpose:

```text
Provide internal/admin quality scoring instead of public student ratings in MVP.
```

Rules:

```text
Only admins/support can create/edit raw quality assessments.
Public copy must not present this as student reviews.
```

### User/role management

Purpose:

```text
Grant roles and manage support/admin access.
```

Rules:

```text
Only admins can grant/remove roles.
All role changes are audited.
```

## Storage Rules

Use Supabase Storage for:

```text
hostel public images
room public images
private verification evidence images if needed
```

Rules:

```text
Validate MIME type and file size.
Use predictable folder ownership: hostels/{hostel_id}/...
Do not make verification evidence public by default.
Public listing images are readable only after listing is published/approved.
```

## Rate Limits and Abuse Controls

Apply rate limits to:

```text
booking/request enquiry creation
message creation
owner listing submissions
image uploads
auth-adjacent flows where possible
```

Abuse cases:

```text
student spams many managers
owner uploads fake images
owner reveals unsafe contact details
fake owner submits listing for someone else's hostel
admin accidentally publishes unverified data
```

## Error Handling

Use safe messages:

```text
Validation error: show field-level issue.
Auth required: redirect/sign-in prompt.
Permission denied: "You do not have permission to do this."
Not found: "This listing is unavailable."
Server error: "Something went wrong. Please try again."
```

Do not expose:

```text
SQL errors
stack traces
service role errors
private IDs in public error messages
```

## Audit Log Required For

```text
listing status changes
publish/unpublish
verification level changes
manager assignment
manager contact reveal changes
price changes after publishing
availability changes after publishing
role changes
request status changes
admin notes/reviews
```

## Testing Priorities

Important backend tests:

```text
public cannot read unpublished hostels
student cannot create enquiry without auth
student cannot create enquiry without phone/WhatsApp profile
student cannot read another student's requests/messages
owner cannot publish own listing
owner cannot set verification level
owner cannot read requests for another hostel
admin can approve/publish listing
manager contact reveal respects settings
```
