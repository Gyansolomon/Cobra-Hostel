# API and Server Action Plan

## API Direction

Use a mix of:

```text
Supabase server/client reads for straightforward public data.
Next.js server actions or API routes for protected mutations and business logic.
```

Use consistent response shapes when using explicit API routes:

```json
{
  "success": true,
  "data": {}
}
```

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
```

## Public Reads

### List published hostels

```text
Method: GET or server read
Path: /hostels or /api/hostels
Auth required: no
Purpose: Search published hostels.
Query params: university, area, price_min, price_max, room_type, occupants, amenities, availability, verification_level, team_quality_score, distance, map_bounds, sort, page.
Returns: published hostel summary/teaser cards only.
Security: hide unpublished/private/admin data.
```

### Public hostel teaser

```text
Method: GET or server read
Path: /hostels/[slug] or /api/hostels/[slug]
Auth required: no
Purpose: Show Google-friendly public teaser page and sign-in gate.
Returns: hostel name, university/area, short summary, teaser images, broad price/range, public trust labels, basic amenities, teaser map/location label.
Security: only published hostels; no full room details, full gallery, manager contact reveal, request history, private/admin data.
```

### Full hostel detail

```text
Method: GET or server read
Path: /api/hostels/[slug]/detail
Auth required: yes
Purpose: Show full listing detail to authenticated students/users.
Returns: hostel, location, approved full images, room types, current prices, amenities, availability, trust labels, full map/detail sections, manager contact settings allowed after gate.
Security: only published hostels; hide private/admin data and never expose verification evidence.
```

### Universities and areas

```text
Method: GET or server read
Path: /api/universities, /api/areas
Auth required: no
Purpose: Power search filters and SEO pages.
Returns: public university/campus area records.
```

### Map hostels

```text
Method: GET or server read
Path: /api/map/hostels
Auth required: no
Purpose: Show published hostels on map.
Query params: bounds, university, area, price, availability, verification_level, team_quality_score, room_type, occupants, amenities.
Returns: published hostel pins and preview/teaser data.
Security: no private coordinates/evidence; approximate labels where needed.
```

## Authenticated Student Actions

### Update profile

```text
Method: POST/PATCH server action
Path: /api/profile
Auth required: yes
Allowed roles: signed-in user
Purpose: Update phone/WhatsApp and profile details.
Validation: names, phone/WhatsApp, school, level, length limits.
Audit: no, unless sensitive changes later require it.
```

### Add favorite

```text
Method: POST
Path: /api/favorites
Auth required: yes
Allowed roles: student/signed-in user
Purpose: Save a hostel.
Body: hostel_id
Validation: hostel exists and is published.
Security: user can only create own favorite.
```

### Remove favorite

```text
Method: DELETE
Path: /api/favorites/[hostel_id]
Auth required: yes
Allowed roles: student/signed-in user
Purpose: Remove saved hostel.
Security: user can only delete own favorite.
```

### Create booking/request enquiry

```text
Method: POST
Path: /api/booking-requests
Auth required: yes
Allowed roles: student/signed-in user
Purpose: Send enquiry to hostel manager through platform.
Body: hostel_id, room_type_id nullable, message, preferred_move_in_period.
Validation: profile has phone/WhatsApp, hostel published, room type belongs to hostel, message length, rate limit.
Side effects: create booking request, optionally create initial message.
Audit: later for status changes.
```

### Send message

```text
Method: POST
Path: /api/messages
Auth required: yes
Allowed roles: thread participant
Purpose: Send platform-first message.
Body: booking_request_id nullable, hostel_id, recipient_id, body.
Validation: participant/ownership, body length, rate limit.
Security: no messaging unrelated private users.
```

## Owner / Manager Actions

### Create hostel draft

```text
Method: POST
Path: /api/owner/hostels
Auth required: yes
Allowed roles: hostel_owner
Purpose: Create owner-submitted listing draft.
Body: name, university_id, campus_area_id, address/location basics, description.
Validation: required fields, length limits.
Side effects: status=draft, source=owner_submitted.
Audit: yes.
```

### Update hostel draft/listing

```text
Method: PATCH
Path: /api/owner/hostels/[id]
Auth required: yes
Allowed roles: hostel owner/manager for hostel
Purpose: Edit listing before approval or while changes requested.
Validation: ownership, allowed status, field limits.
Security: owner cannot set status=published/approved or verification_level.
Audit: yes.
```

### Submit listing for review

```text
Method: POST
Path: /api/owner/hostels/[id]/submit
Auth required: yes
Allowed roles: hostel owner/manager for hostel
Purpose: Submit listing for admin review.
Validation: listing has required hostel data, room type, price, images, location basics.
Side effects: status=submitted_for_review.
Audit: yes.
```

### Manage room types/prices/images

```text
Method: POST/PATCH/DELETE
Path: /api/owner/hostels/[id]/room-types, /prices, /images
Auth required: yes
Allowed roles: hostel owner/manager for hostel
Purpose: Manage listing details.
Validation: ownership, file type/size for images, non-negative prices.
Audit: yes for price/image changes after publishing.
```

### Owner request inbox

```text
Method: GET/PATCH
Path: /api/owner/booking-requests
Auth required: yes
Allowed roles: hostel owner/manager
Purpose: View and update requests for owned hostels.
Security: owner can only access requests for managed hostels.
Audit: yes for status changes.
```

### Manager contact settings

```text
Method: PATCH
Path: /api/owner/hostels/[id]/contact-settings
Auth required: yes
Allowed roles: hostel owner/manager for hostel
Purpose: Configure phone/WhatsApp reveal and contact note.
Validation: phone/WhatsApp format, note length.
Audit: yes.
```

## Admin Actions

### Admin create seed listing

```text
Method: POST
Path: /api/admin/hostels
Auth required: yes
Allowed roles: admin
Purpose: Manually seed UCC hostel listings.
Side effects: source=admin_seeded.
Audit: yes.
```

### Review listing

```text
Method: POST
Path: /api/admin/hostels/[id]/review
Auth required: yes
Allowed roles: admin
Purpose: approve, reject, request changes, publish, unpublish, archive.
Body: action, notes, requested_changes.
Validation: allowed transition.
Side effects: listing_reviews row, hostels.status update.
Audit: yes.
```

### Set verification level

```text
Method: POST
Path: /api/admin/hostels/[id]/verification
Auth required: yes
Allowed roles: admin
Purpose: Set owner_submitted, admin_reviewed, photos_confirmed, physically_verified.
Validation: supporting review/visit evidence required for stronger levels.
Audit: yes.
```

### Create verification visit

```text
Method: POST
Path: /api/admin/hostels/[id]/verification-visits
Auth required: yes
Allowed roles: admin/support
Purpose: Record physical verification.
Validation: checklist fields, notes length, evidence file rules.
Audit: yes.
```

### Create quality assessment

```text
Method: POST
Path: /api/admin/hostels/[id]/quality-assessments
Auth required: yes
Allowed roles: admin/support
Purpose: Team quality score.
Validation: score values 1-5, notes length.
Audit: yes.
```

### Manage roles

```text
Method: POST/DELETE
Path: /api/admin/users/[id]/roles
Auth required: yes
Allowed roles: admin
Purpose: Grant/remove role.
Audit: yes.
```

## Validation Rules

Use Zod schemas for:

```text
profile update
favorite create/delete
booking request create
message create
hostel create/update
room type create/update
price create/update
image metadata
contact settings
listing review actions
verification visit
quality assessment
role changes
```

## Permission Rules

```text
Public: published hostel data only.
Student: own profile, favorites, requests, messages.
Owner: managed hostels, related requests/messages/contact settings.
Admin: all listings, review, verification, roles, audit visibility.
Support: limited admin-like read/review permissions where approved.
```

## Rate Limits

Apply to:

```text
booking request creation
message creation
image uploads
owner listing submission
contact setting updates if abused
```

## Future API Exclusions

Do not build in MVP:

```text
student payment APIs
deposit APIs
lease contract APIs
invoice APIs
refund/dispute APIs
public review APIs
SMS OTP APIs
push notification APIs
```
