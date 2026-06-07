# Database Plan

## Database Direction

Use Supabase Postgres with Row Level Security.

The schema must support:

```text
1. UCC-first hostel search.
2. Future expansion to all Ghanaian universities.
3. Public browsing without sign-in.
4. Signed-in booking/request enquiries.
5. Admin-seeded listings.
6. Owner-submitted listings with admin approval.
7. Physical verification and quality scoring.
8. Platform-first messaging.
9. Optional manager-controlled phone/WhatsApp reveal.
10. Future mobile app reuse.
```

## Core Entity Groups

```text
Identity:
- profiles
- user_roles

Geography / School:
- countries
- regions
- cities
- universities
- campus_areas

Hostel Marketplace:
- hostels
- hostel_locations
- hostel_images
- room_types
- room_images
- amenities
- hostel_amenities
- room_type_amenities
- prices
- availability_slots

Student Actions:
- favorites
- booking_requests
- messages

Owner / Manager:
- hostel_managers
- manager_contact_settings

Admin / Verification:
- listing_reviews
- verification_visits
- quality_assessments
- audit_logs
```

## Enums / Status Values

Hostel source:

```text
admin_seeded
owner_submitted
```

Listing status:

```text
draft
submitted_for_review
needs_changes
approved
published
rejected
archived
```

Verification level:

```text
unverified
owner_submitted
admin_reviewed
photos_confirmed
physically_verified
```

Booking request status:

```text
new
viewed
replied
unavailable
follow_up_needed
closed
cancelled
```

Room type:

```text
single
shared
two_in_room
three_in_room
four_in_room
other
```

Availability status:

```text
available
limited
full
unknown
```

User roles:

```text
student
hostel_owner
admin
support
viewer
```

## Tables

### profiles

Purpose:

```text
Stores public/private profile data for authenticated users.
```

Fields:

```text
id uuid primary key references auth.users(id)
full_name text
email text
phone text nullable
whatsapp text nullable
school_name text nullable
student_level text nullable
avatar_url text nullable
created_at timestamptz
updated_at timestamptz
```

Security/ownership:

```text
Users can read/update their own profile.
Admins/support can read profiles for support and abuse handling.
Public users cannot read private phone/WhatsApp fields.
```

### user_roles

Purpose:

```text
Controls permissions.
```

Fields:

```text
id uuid primary key
user_id uuid references profiles(id)
role text
created_at timestamptz
created_by uuid nullable
```

Constraints:

```text
unique(user_id, role)
role must be one of student, hostel_owner, admin, support, viewer
```

Security:

```text
Only admins can grant/remove roles.
```

### countries

Purpose:

```text
Future expansion beyond Ghana.
```

Fields:

```text
id uuid primary key
name text not null
code text unique
created_at timestamptz
```

Initial data:

```text
Ghana / GH
```

### regions

Purpose:

```text
Organize cities and universities.
```

Fields:

```text
id uuid primary key
country_id uuid references countries(id)
name text not null
created_at timestamptz
```

Initial examples:

```text
Central Region
Greater Accra
Ashanti Region
```

### cities

Purpose:

```text
City-level search and SEO.
```

Fields:

```text
id uuid primary key
region_id uuid references regions(id)
name text not null
slug text not null unique
created_at timestamptz
```

Initial examples:

```text
Cape Coast
```

### universities

Purpose:

```text
Search and SEO by university.
```

Fields:

```text
id uuid primary key
city_id uuid references cities(id)
name text not null
short_name text not null
slug text not null unique
website_url text nullable
created_at timestamptz
```

Initial data:

```text
University of Cape Coast / UCC / ucc
```

### campus_areas

Purpose:

```text
Filter hostels by UCC/Cape Coast student areas.
```

Fields:

```text
id uuid primary key
university_id uuid references universities(id)
city_id uuid references cities(id)
name text not null
slug text not null
description text nullable
created_at timestamptz
```

Indexes:

```text
university_id
city_id
slug
```

### hostels

Purpose:

```text
Main public listing record.
```

Fields:

```text
id uuid primary key
owner_id uuid nullable references profiles(id)
university_id uuid references universities(id)
campus_area_id uuid nullable references campus_areas(id)
name text not null
slug text not null unique
short_description text nullable
description text nullable
source text not null
status text not null
verification_level text not null default 'unverified'
team_quality_score numeric(3,2) nullable
availability_status text not null default 'unknown'
is_featured boolean not null default false
is_promoted boolean not null default false
published_at timestamptz nullable
verified_at timestamptz nullable
verified_by uuid nullable references profiles(id)
created_at timestamptz
updated_at timestamptz
deleted_at timestamptz nullable
```

Indexes:

```text
status
university_id
campus_area_id
verification_level
availability_status
team_quality_score
is_featured
is_promoted
published_at
```

Security:

```text
Public can read only published hostels.
Owners can read/update their own draft/submitted listings.
Admins can read/update all hostels.
Only admins can publish, approve, promote, archive, or set verification level.
```

Soft delete:

```text
Use deleted_at. Do not hard-delete important listings.
```

Audit log:

```text
Required for status, verification, owner, promotion, and publish changes.
```

### hostel_locations

Purpose:

```text
Map search, location labels, and distance claims.
```

Fields:

```text
id uuid primary key
hostel_id uuid unique references hostels(id)
address_text text nullable
landmark_text text nullable
latitude numeric(10,7) nullable
longitude numeric(10,7) nullable
distance_to_campus_meters integer nullable
distance_label text nullable
location_verified boolean not null default false
location_accuracy text not null default 'approximate'
location_verified_at timestamptz nullable
location_verified_by uuid nullable references profiles(id)
created_at timestamptz
updated_at timestamptz
```

Indexes:

```text
hostel_id
latitude, longitude
distance_to_campus_meters
location_verified
```

Rule:

```text
Do not show strong location/distance claims unless location_verified is true or the UI labels the claim as approximate.
```

### hostel_images

Purpose:

```text
Public hostel/gallery images.
```

Fields:

```text
id uuid primary key
hostel_id uuid references hostels(id)
storage_path text not null
alt_text text nullable
caption text nullable
sort_order integer not null default 0
image_type text nullable
is_cover boolean not null default false
photo_confirmed boolean not null default false
created_at timestamptz
```

Security:

```text
Public can read images for published hostels.
Owners can manage images for their own listings before approval.
Admins can manage all.
```

### room_types

Purpose:

```text
Rooms/options within a hostel.
```

Fields:

```text
id uuid primary key
hostel_id uuid references hostels(id)
name text not null
room_type text not null
occupants integer nullable
description text nullable
availability_status text not null default 'unknown'
is_active boolean not null default true
created_at timestamptz
updated_at timestamptz
deleted_at timestamptz nullable
```

Indexes:

```text
hostel_id
room_type
occupants
availability_status
is_active
```

### room_images

Purpose:

```text
Photos tied to specific room types.
```

Fields:

```text
id uuid primary key
room_type_id uuid references room_types(id)
storage_path text not null
alt_text text nullable
caption text nullable
sort_order integer not null default 0
photo_confirmed boolean not null default false
created_at timestamptz
```

### prices

Purpose:

```text
Semester/year room pricing.
```

Fields:

```text
id uuid primary key
room_type_id uuid references room_types(id)
currency text not null default 'GHS'
amount numeric(12,2) not null
billing_period text not null
academic_year text nullable
semester text nullable
is_current boolean not null default true
notes text nullable
created_at timestamptz
updated_at timestamptz
```

Constraints:

```text
amount >= 0
billing_period examples: semester, academic_year, month, other
```

### availability_slots

Purpose:

```text
Track room availability without guaranteeing payment/reservation.
```

Fields:

```text
id uuid primary key
room_type_id uuid references room_types(id)
status text not null default 'unknown'
available_count integer nullable
move_in_period text nullable
notes text nullable
updated_by uuid nullable references profiles(id)
updated_at timestamptz
```

Rule:

```text
Availability is informational in MVP. It is not a paid reservation guarantee.
```

### amenities

Purpose:

```text
Reusable amenity list.
```

Fields:

```text
id uuid primary key
name text not null unique
slug text not null unique
category text nullable
created_at timestamptz
```

Initial examples:

```text
Wi-Fi
Water supply
Security
Kitchen
Study area
Private washroom
Shared washroom
Laundry
Shuttle/taxi access
Prepaid electricity
Backup power
Wardrobe
```

### hostel_amenities

Purpose:

```text
Many-to-many hostel amenities.
```

Fields:

```text
hostel_id uuid references hostels(id)
amenity_id uuid references amenities(id)
notes text nullable
confirmed boolean not null default false
primary key(hostel_id, amenity_id)
```

### room_type_amenities

Purpose:

```text
Amenities specific to a room type.
```

Fields:

```text
room_type_id uuid references room_types(id)
amenity_id uuid references amenities(id)
notes text nullable
primary key(room_type_id, amenity_id)
```

### favorites

Purpose:

```text
Saved hostels for students.
```

Fields:

```text
id uuid primary key
student_id uuid references profiles(id)
hostel_id uuid references hostels(id)
created_at timestamptz
```

Constraints:

```text
unique(student_id, hostel_id)
```

Security:

```text
Students can manage only their own favorites.
```

### booking_requests

Purpose:

```text
Platform-first enquiry requests. No student payment.
```

Fields:

```text
id uuid primary key
student_id uuid references profiles(id)
hostel_id uuid references hostels(id)
room_type_id uuid nullable references room_types(id)
message text nullable
preferred_move_in_period text nullable
student_phone_snapshot text not null
student_whatsapp_snapshot text nullable
status text not null default 'new'
created_at timestamptz
updated_at timestamptz
closed_at timestamptz nullable
```

Security:

```text
Students can create/read their own requests.
Owners can read/update requests for their own hostels.
Admins/support can read all for support and abuse handling.
```

Audit:

```text
Status changes should be audited.
```

### messages

Purpose:

```text
Platform-first student-manager communication.
```

Fields:

```text
id uuid primary key
booking_request_id uuid nullable references booking_requests(id)
hostel_id uuid references hostels(id)
sender_id uuid references profiles(id)
recipient_id uuid references profiles(id)
body text not null
read_at timestamptz nullable
created_at timestamptz
```

Security:

```text
Only sender, recipient, owner for that hostel, and admin/support can read relevant messages.
Rate limit message creation.
```

### hostel_managers

Purpose:

```text
Links owner/manager users to hostels.
```

Fields:

```text
id uuid primary key
hostel_id uuid references hostels(id)
user_id uuid references profiles(id)
role text not null default 'manager'
status text not null default 'active'
created_at timestamptz
created_by uuid nullable references profiles(id)
```

Constraints:

```text
unique(hostel_id, user_id)
```

Security:

```text
Only admins can attach managers to published/verified hostels unless an approved owner onboarding flow exists.
```

### manager_contact_settings

Purpose:

```text
Manager-controlled direct contact reveal.
```

Fields:

```text
id uuid primary key
hostel_id uuid unique references hostels(id)
reveal_phone boolean not null default false
reveal_whatsapp boolean not null default false
public_phone text nullable
public_whatsapp text nullable
contact_note text nullable
show_after_enquiry_only boolean not null default true
updated_at timestamptz
updated_by uuid nullable references profiles(id)
```

Security:

```text
Owners/managers can update settings for their own hostels.
Public can read only contact fields allowed by settings and only for published hostels.
```

### listing_reviews

Purpose:

```text
Admin review trail for owner submissions and admin-seeded listings.
```

Fields:

```text
id uuid primary key
hostel_id uuid references hostels(id)
reviewed_by uuid references profiles(id)
from_status text nullable
to_status text not null
notes text nullable
requested_changes text nullable
created_at timestamptz
```

Security:

```text
Admin/support only. Owners may see requested changes if needed.
```

### verification_visits

Purpose:

```text
Physical or strong verification records.
```

Fields:

```text
id uuid primary key
hostel_id uuid references hostels(id)
admin_id uuid references profiles(id)
visit_date date nullable
rooms_match_images boolean nullable
prices_confirmed boolean nullable
amenities_confirmed boolean nullable
location_confirmed boolean nullable
water_confirmed boolean nullable
security_confirmed boolean nullable
notes text nullable
evidence_image_paths text[] nullable
result text not null
created_at timestamptz
```

Security:

```text
Admin/support only. Public should see only the resulting trust label, not private evidence by default.
```

### quality_assessments

Purpose:

```text
Admin/team quality scoring instead of public student reviews in MVP.
```

Fields:

```text
id uuid primary key
hostel_id uuid references hostels(id)
assessed_by uuid references profiles(id)
room_condition_score integer nullable
photo_accuracy_score integer nullable
location_accuracy_score integer nullable
water_reliability_score integer nullable
security_score integer nullable
amenities_score integer nullable
price_clarity_score integer nullable
owner_responsiveness_score integer nullable
overall_score numeric(3,2) nullable
notes text nullable
assessed_at timestamptz
```

Constraints:

```text
scores should be 1-5 where present
```

Security:

```text
Admin/support only for raw assessment details.
Public UI may use approved summary/overall score only if product copy makes clear it is team quality scoring, not public student reviews.
```

### audit_logs

Purpose:

```text
Track sensitive admin/owner actions.
```

Fields:

```text
id uuid primary key
actor_id uuid nullable references profiles(id)
entity_type text not null
entity_id uuid nullable
action text not null
old_values jsonb nullable
new_values jsonb nullable
created_at timestamptz
```

Use for:

```text
listing status changes
verification changes
owner/manager assignment
contact reveal changes
price changes
room availability changes
admin role changes
request status changes
```

Security:

```text
Admin/support only.
```

## Common Queries to Optimize

Public:

```text
published hostels by university
published hostels by campus area
published hostels by price range
published hostels by room type / occupants
published hostels by availability
published hostels by verification level
published hostels by team quality score
hostel detail by slug
map hostels by bounding box or area
```

Student:

```text
my favorites
my booking requests
message thread by booking request
```

Owner:

```text
my hostels
requests for my hostels
messages for my hostels
listing review status
```

Admin:

```text
pending listing reviews
verification queue
recent audit logs
published/unpublished hostels
quality assessment queue
```

## Privacy Rules

Public data:

```text
published hostel summary/teaser details
approved teaser listing images
public broad room/price/amenity summaries
public trust labels
public approximate or approved map coordinates when location is approved for display
```

Authenticated student data:

```text
full public hostel details
approved full listing gallery
full public room types/prices/amenities
manager contact fields only after authentication and when reveal settings allow it
```

Private data:

```text
student phone/WhatsApp
booking request details
messages
verification evidence
admin notes
raw quality assessment notes
audit logs
owner private identity documents if added later
```

## Deletion Rules

```text
Use soft delete for hostels, room types, booking requests, manager assignments, and important admin records.
Do not hard-delete audit logs.
Do not hard-delete booking/request history needed for support or abuse review unless a privacy/legal policy requires it.
```

## MVP Exclusions

Do not add these tables in MVP unless a later phase approves them:

```text
student_reviews
public_ratings
student_payments
deposits
leases
invoices
refunds
disputes
chat_attachments
push_notification_tokens
```

## Migration Planning Notes

When implementation begins:

```text
1. Create enums or check constraints for status fields.
2. Enable RLS on every table.
3. Add public read policies only for published/approved listing data.
4. Add owner policies scoped through hostel_managers or owner_id.
5. Add admin policies through user_roles.
6. Add indexes before map/listing search goes live.
7. Seed Ghana, Central Region, Cape Coast, UCC, and initial UCC campus areas.
```
