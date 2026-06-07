# Search And Map Layout Rules

## Purpose

Hostel Premium should combine the best useful patterns from Airbnb and Expedia:

```text
search-first marketplace
list/map comparison
filter chips
map-bounds-aware results
responsive desktop/mobile layouts
clear count changes as the map changes
```

Use Airbnb and Expedia for behavior and layout intelligence. Do not copy branding, exact layout, icons, copy, or proprietary visual identity.

## Core Rule

The list and map are connected.

```text
Search query + filters + map bounds = visible hostel results
```

When the user zooms, pans, or changes the map area, the result count should update.

Examples:

```text
UCC area view -> 120 hostels
Ayensu zoomed area -> 24 hostels
One street / one hostel area -> 1 hostel within map area
```

This is a major marketplace behavior, not decoration.

## Desktop Results Layout

Desktop should use a serious split layout:

```text
Header
Compact search summary
Filter chip row
Results count + useful note
Left/results column
Right/sticky map panel
```

Behavior:

```text
Results column scrolls.
Map panel stays visible on large screens where possible.
Map pins show price or compact hostel marker.
Clicking a map pin highlights the matching card.
Hovering/focusing a card highlights the map pin.
Moving the map updates the list count and visible results.
```

Do not:

```text
make desktop a stretched mobile list
hide map behind a small button on large desktop
show all hostels when map is zoomed to a smaller area
change count without explaining the current area
```

## Mobile Results Layout

Mobile should use one primary view at a time:

```text
List mode
Map mode
```

List mode:

```text
compact search pill
horizontal filter chips
single-column hostel cards
floating / sticky Map button
```

Map mode:

```text
full map
price/trust pins
bottom sheet hostel preview
filter button
list toggle
```

Behavior:

```text
Zooming/panning the map changes the result count.
When only one hostel is inside the map area, show "1 hostel within map area".
Pin tap opens a bottom sheet preview.
Bottom sheet can open full teaser/detail gate.
```

## Map-Bounds Query Model

The frontend should track:

```text
selected university
selected area
search text
filters
sort
map center
map zoom
map bounding box
```

Backend/API should eventually support:

```text
GET /api/hostels/search
query:
  universityId
  areaId
  q
  minPrice
  maxPrice
  roomType
  occupants
  amenities
  verificationLevel
  availability
  boundsNorth
  boundsSouth
  boundsEast
  boundsWest
  sort
```

For early static/prototype data:

```text
filter mock hostels client-side by lat/lng bounds
```

For production:

```text
use database geospatial filtering where available
add indexes for university, area, price, availability, verification, and coordinates
```

## Result Count Copy

Use precise copy:

```text
124 hostels around UCC
24 hostels in Ayensu
8 hostels within map area
1 hostel within map area
No hostels match this map area
```

Avoid vague copy:

```text
Many hostels
Lots of results
Best hostels
Verified hostels if not actually verified
```

## Map Pin Rules

Pins can show:

```text
price
trust level
availability
selected/hover state
```

Recommended MVP:

```text
price pin for visible hostels
selected pin uses Hostel Rose
verified state uses Verified Green only if truthfully verified
```

Do not:

```text
use green for unverified hostels
show exact availability if it is not confirmed
show manager phone number on map
```

## Filter Rules

Use Airbnb/Expedia-inspired filters adapted to hostels:

```text
area
price
room type
occupants
amenities
availability
verification level
distance to campus
water
security
Wi-Fi
study space
private washroom
```

Desktop:

```text
filter chips + optional left rail or modal depending on density
```

Mobile:

```text
horizontal chips + full filter sheet
sticky "Show N hostels" action
```

## Component Additions

These components are required for the search/map experience:

```text
MapBoundsController
MapAwareResultsCount
SearchMapSplitLayout
StickyMapPanel
MapPinPrice
MapPinCluster
MapSelectedHostelPreview
MobileMapMode
MobileListMode
MapListToggle
MapAreaEmptyState
```

## Cost And Tool Rule

Use a free map approach first.

Recommended MVP direction:

```text
Leaflet / React Leaflet with OpenStreetMap-compatible tiles if license and tile usage are acceptable.
```

Before production:

```text
confirm tile provider terms
estimate map tile usage cost
avoid expensive map APIs until traffic and requirements justify them
```

Do not assume Google Maps is free for production.

## Acceptance Criteria

The search/map layout is acceptable when:

```text
desktop uses real split layout
mobile uses list/map modes
result count changes with map bounds
filters affect both map and list
selected card and selected pin are linked
empty map area has a clear state
the behavior is documented before code
```
