# Security and RLS Plan

## Core Security Model

Every private action must answer:

```text
1. Who is the user?
2. What role do they have?
3. What data do they own or manage?
4. Are they allowed to perform this action?
5. Is the input safe?
6. Is the response safe to return?
```

## Security Goals

```text
Public users can browse published hostel summary/teaser data safely.
Students must sign in before full hostel details, enquiries, messages, persistent saved hostels, and manager contact reveal.
Owners can manage only their own hostels and related enquiries.
Admins control publishing, verification, roles, and sensitive review data.
Private student contact data is never public.
Verification evidence and admin notes are not public.
No student payments, deposits, leases, invoices, or refunds in MVP.
```

## Auth Providers

Web MVP:

```text
Google sign-in through Supabase Auth.
Phone/WhatsApp collected in profile before enquiry or manager messaging.
No SMS OTP unless approved later because it adds provider setup and per-message cost.
```

Future mobile app:

```text
Facebook sign-in.
Apple sign-in for iOS users.
Clear account linking rules.
```

## Roles

```text
viewer: public visitor without account
student: signed-in user browsing/requesting hostels
hostel_owner: owner/manager who can submit and manage assigned hostels
support: support/admin assistant with limited review visibility
admin: full platform administrator
```

## Permission Matrix

### Viewer / Public

Can read:

```text
published hostel summary/teaser data
approved teaser images
approved broad price/range data
published basic amenities
public university/city/area data
public trust label summaries
public map/list preview data
public safety/how-it-works content
```

Cannot:

```text
read full hostel detail
read full room type detail
read full image gallery
read deeper/exact availability details
read manager contact reveal fields
create booking requests
send messages
save persistent favorites
read student data
read owner private data
read unpublished listings
read verification evidence
read admin notes
```

### Student

Can read/create/update:

```text
own profile
own favorites
own booking requests
own message threads
public hostel data
```

Cannot:

```text
read another student's requests/messages
publish listings
set verification status
read admin notes/evidence
access owner dashboard
```

### Hostel Owner / Manager

Can read/create/update:

```text
own/managed hostel drafts
own/managed hostel rooms, prices, images, amenities
contact reveal settings for managed hostels
booking requests for managed hostels
messages for managed hostels
requested changes from admin review
```

Cannot:

```text
publish listings directly
approve listings
set physically_verified or photos_confirmed
set team quality score
read requests for other hostels
assign admin/support roles
```

### Support

Can read:

```text
support-relevant profiles
booking requests
messages
listing review queues
verification/quality data where approved
```

Can update:

```text
support notes and some request statuses if approved
```

Cannot:

```text
grant roles
change payment/legal settings
perform destructive actions
publish without admin approval unless explicitly allowed later
```

### Admin

Can:

```text
create admin-seeded listings
review/approve/reject/publish/archive listings
assign hostel managers
set verification levels
create verification visits
create quality assessments
manage roles
view audit logs
review support/abuse issues
```

Must:

```text
create audit logs for sensitive actions
avoid overclaiming verification
protect private evidence and student contact data
```

## Supabase RLS Strategy

Enable RLS on every application table.

Use helper checks:

```text
is_admin(user_id)
is_support(user_id)
has_role(user_id, role)
manages_hostel(user_id, hostel_id)
is_request_participant(user_id, booking_request_id)
```

Public policies:

```text
Allow public SELECT only for rows that are explicitly published/public and safe for teaser/search views.
Do not use broad public SELECT on tables containing mixed private/public data unless the policy filters strongly.
Prefer safe public views for hostel cards, map pins, and teaser pages.
```

Admin policies:

```text
Admins can read/write all operational tables.
Role changes and sensitive writes must still be audited by backend logic.
```

Owner policies:

```text
Owners/managers access data through hostel_managers or owner_id.
Owner writes must be blocked from status/verification/admin-only fields where possible through server-side actions and database constraints/triggers where needed.
```

Student policies:

```text
Students access only own profile, favorites, booking requests, and messages.
```

## Table-Level RLS Plan

### profiles

```text
Public: no private profile read.
User: read/update own profile.
Owner/admin/support: read limited profile data only when tied to a valid request/support case.
Admin: full read/update where necessary.
```

### user_roles

```text
User: may read own roles if needed.
Admin: manage roles.
Public: no access.
```

### countries / regions / cities / universities / campus_areas

```text
Public: read.
Admin: write.
```

### hostels

```text
Public: read only safe summary/teaser fields for status='published' and deleted_at is null.
Authenticated student: read full public listing detail for status='published' and deleted_at is null.
Owner: read/update own or managed listings, but not admin-only fields.
Admin/support: read all; admin write all.
```

Admin-only fields:

```text
status approved/published/rejected/archived
verification_level
team_quality_score
is_featured
is_promoted
published_at
verified_at
verified_by
```

### hostel_locations

```text
Public: read locations for published hostels only.
Owner: manage location for own listing before review.
Admin: verify location and set location_verified.
```

### hostel_images / room_images

```text
Public: read approved teaser images for published hostels only.
Authenticated student: read approved full public gallery for published hostels.
Owner: upload/manage images for own listing.
Admin: manage all and mark photo_confirmed.
```

Storage rule:

```text
Public bucket/object access only for approved listing images.
Private bucket/object access for verification evidence.
```

### room_types / prices / availability_slots / amenities

```text
Public: read safe summary/range records tied to published hostels.
Authenticated student: read full public room, price, availability, and amenity details tied to published hostels.
Owner: manage records tied to own hostels.
Admin: manage all.
```

Price safety:

```text
Prices are informational in MVP. Do not imply platform payment guarantee.
```

### favorites

```text
Student: manage own favorites.
Public: no access.
Owner: no access.
Admin/support: read only if needed for support/abuse analytics later.
```

### booking_requests

```text
Student: create/read own requests.
Owner: read/update requests for managed hostels.
Admin/support: read all for support and abuse handling.
Public: no access.
```

Required backend checks:

```text
student is signed in
student profile has phone/WhatsApp
hostel is published
rate limit is respected
```

### messages

```text
Sender/recipient: read messages they participate in.
Owner/manager: read messages for managed hostels.
Admin/support: read for support/abuse handling.
Public: no access.
```

### hostel_managers

```text
Owner: read own manager assignments.
Admin: assign/remove managers.
Public: no access.
```

### manager_contact_settings

```text
Public: no direct contact reveal by default.
Authenticated student: read allowed contact reveal fields only after the correct protected gate and only for published hostels.
Owner: update settings for managed hostels.
Admin: read/update all.
```

Rule:

```text
Do not show manager phone/WhatsApp unless the user is authenticated, reveal_phone or reveal_whatsapp is true, listing is published, and the UI has passed the correct detail/enquiry/contact gate.
```

### listing_reviews

```text
Owner: read review result/requested changes for own listings.
Admin/support: create/read.
Public: no access.
```

### verification_visits

```text
Admin/support: create/read.
Public: no access to evidence or private notes.
Owner: no direct access unless a safe summary is exposed later.
```

### quality_assessments

```text
Admin/support: create/read/update.
Public: no raw assessment access.
Public UI may show approved summary/score only with clear wording that it is team quality scoring.
```

### audit_logs

```text
Admin/support only.
No public, student, or owner access by default.
```

## Private Data That Must Never Be Public

```text
student phone/WhatsApp except to relevant manager after enquiry
student private profile fields
booking request details
message bodies
verification evidence
admin notes
raw quality assessment notes
audit logs
service role keys
environment variables
owner private identity documents if added later
```

## Public Data Allowed

```text
published hostel names and short teaser descriptions
approved teaser images
approved broad price/range summaries
amenities
campus area/location labels
public approximate or approved coordinates for published/approved map display
trust labels with precise meanings
```

## Communication Safety

Rules:

```text
Student-manager communication goes through the platform first.
Booking requests and manager messages require authentication.
Do not expose student phone publicly.
Store student phone snapshot on request for relevant manager response.
Keep message records available for support and abuse review.
Rate limit requests and messages.
```

Manager direct contact:

```text
Managers may enable phone/WhatsApp reveal in manager setup.
Changes are audited.
UI should make platform enquiry the primary path.
```

## Listing and Verification Safety

Rules:

```text
Owner-submitted listings remain private/pending until admin approval.
Only admins can publish listings.
Only admins can set Admin Reviewed, Photos Confirmed, or Physically Verified.
Do not show "Verified Hostel" unless supported by proper verification records.
Verification labels must be precise:
- Owner Submitted
- Admin Reviewed
- Photos Confirmed
- Physically Verified
```

Physical verification:

```text
Confirm rooms, photos, prices, amenities, and location before physically_verified.
Private verification evidence is not public by default.
```

## Payment and Legal Safety

MVP exclusions:

```text
student hostel-fee payments
deposits
leases
invoices
receipts
refunds
disputes
payment guarantees
```

Rules:

```text
Do not collect student hostel fees in MVP.
Booking/request enquiry is not a paid reservation guarantee.
Owner listing/ad fees are a separate business workflow and must include terms, receipt/admin approval, and clear status before implementation.
Future student payment features require authority/legal/operational planning.
```

## File Upload Safety

Validate:

```text
file type
file size
image dimensions where possible
ownership/hostel permission
upload path
public/private bucket
```

Allowed public uploads:

```text
approved hostel images
approved room images
```

Private uploads:

```text
verification evidence
owner identity/business documents if added later
```

Rules:

```text
Do not allow arbitrary file extensions.
Do not trust client-provided MIME type alone.
Do not expose private buckets publicly.
```

## Rate Limiting and Abuse Cases

Rate limit:

```text
booking request creation
message creation
owner listing submissions
image uploads
contact reveal setting changes if abused
admin login/security-sensitive areas where possible
```

Abuse cases:

```text
fake owner claims another hostel
owner uploads fake room images
owner lists false prices/amenities
student spams many managers
manager exposes unsafe contact note
admin accidentally publishes unverified listing
public scrapes phone numbers
attacker reads unpublished hostels through weak RLS
attacker reads booking requests/messages through weak RLS
```

Mitigations:

```text
admin approval before publishing
verification levels separated from listing status
private message/request tables
contact reveal settings audited
rate limits
Gitleaks before pushing
Sentry before production
least-privilege RLS
safe public views where helpful
```

## Error Safety

Do not expose:

```text
SQL errors
stack traces
Supabase service role errors
internal table/policy names in user-facing messages
private IDs when unnecessary
```

Safe messages:

```text
Sign in required.
You do not have permission to do this.
This listing is unavailable.
Please check the highlighted fields.
Something went wrong. Please try again.
```

## Secrets

Rules:

```text
No API keys in client code unless explicitly public and safe.
No service role key in browser.
No secrets committed to repo.
Use environment variables.
Run Gitleaks before pushing.
Rotate keys if leaked.
```

## Launch Security Checklist

Before production:

```text
RLS enabled on every application table.
Public policies tested for unpublished listings.
Student policies tested for cross-user request/message leaks.
Owner policies tested for cross-hostel leaks.
Admin-only actions protected.
Service role key server-only.
Storage buckets and object policies reviewed.
File upload validation in place.
Rate limits in place for enquiry/message/image upload.
Gitleaks scan passes.
Sentry configured.
Safe error handling verified.
No student payments/deposits/lease/invoice code accidentally included.
```

## Security Test Cases

```text
Public cannot read unpublished hostels.
Public cannot read booking_requests.
Public cannot read messages.
Student cannot read another student's booking request.
Student cannot message as another user.
Student cannot create enquiry without phone/WhatsApp profile.
Owner cannot publish their own listing.
Owner cannot set verification level.
Owner cannot read requests for another hostel.
Owner cannot reveal contact settings for another hostel.
Support cannot grant admin roles.
Admin can publish listing and audit log is written.
Manager contact reveal only appears when explicitly enabled.
```
