# Home Page Visual References

## Purpose

This document captures visual references for the Hostel Premium home page before UI implementation.

The home page is the first impression. It must establish trust, UCC focus, student usefulness, and professional hostel discovery immediately.

## Primary Visual Reference: Reales Real Estate App UI Kit

Figma file:

```text
https://www.figma.com/design/PQvVeqZzWt3Bc9A9RLOGUu/Reales---Real-Estate-App-UI-Kit?node-id=1-22&p=f&t=U1QqsARPrJ6Ow6NB-0
```

Approved Reales frame references:

```text
Home page:
https://www.figma.com/design/PQvVeqZzWt3Bc9A9RLOGUu/Reales---Real-Estate-App-UI-Kit?node-id=6319-19633&t=U1QqsARPrJ6Ow6NB-4
fileKey: PQvVeqZzWt3Bc9A9RLOGUu
nodeId: 6319:19633

Feed / See All page:
https://www.figma.com/design/PQvVeqZzWt3Bc9A9RLOGUu/Reales---Real-Estate-App-UI-Kit?node-id=6339-1934&t=U1QqsARPrJ6Ow6NB-4
fileKey: PQvVeqZzWt3Bc9A9RLOGUu
nodeId: 6339:1934

Filter page:
https://www.figma.com/design/PQvVeqZzWt3Bc9A9RLOGUu/Reales---Real-Estate-App-UI-Kit?node-id=6328-1176&t=U1QqsARPrJ6Ow6NB-4
fileKey: PQvVeqZzWt3Bc9A9RLOGUu
nodeId: 6328:1176
```

Public preview:

```text
https://www.behance.net/gallery/202458655/Reales-Real-Estate-App-UI-Kit
```

Status:

```text
Figma MCP access was attempted, but the connector hit the current Figma Starter plan MCP tool-call limit. Public Behance preview and available metadata were used as fallback.
```

License/cost note:

```text
The owner says Reales has been purchased. Treat Reales as an approved licensed design source for this project, assuming the purchased license covers this usage.

Even with a license, adapt the components, screens, and assets to Hostel Premium's UCC-first student accommodation product. Do not ship an unchanged real-estate clone.
```

What Reales is useful for:

```text
1. Real-estate/property browsing mental model.
2. Onboarding and login/register flow inspiration.
3. Feed and filter page structure.
4. Property/detail page hierarchy.
5. Saved/compare flow inspiration.
6. Account/profile flow patterns.
7. Light and dark screen system thinking.
8. Reusable Figma component and variant organization.
```

What to adapt for Hostel Premium:

```text
1. Property cards become HostelCards.
2. Real-estate filters become student hostel filters: university, area, price, occupants, room type, amenities, availability, verification level, team quality score.
3. Schedule tour/call becomes booking/request enquiry and platform-first manager messaging.
4. Saved home comparison becomes saved hostel comparison.
5. Property detail becomes hostel detail with room types, semester/year pricing, UCC distance, water/security/Wi-Fi/study area, trust labels, map, and enquiry CTA.
6. Account/profile becomes student profile with phone/WhatsApp and owner/admin role-specific dashboards.
```

What not to copy:

```text
1. Exact visual identity without Hostel Premium adaptation.
2. Real-estate language that does not fit student hostels.
3. Mortgage/payment/sales flows.
4. Any component that creates a payment/reservation expectation in MVP.
5. Anything that conflicts with trust, verification, or Ghana/UCC product rules.
```

## Home Page Direction From Reales + Amber

The home page should combine:

```text
Reales:
- polished property-browsing component style
- strong card rhythm
- clean mobile-first component patterns
- onboarding/auth polish

Amber:
- student accommodation search hierarchy
- university/city/property search
- trust and support signals
- SEO-aware structure

Expedia:
- search-first marketplace home structure
- product/discovery tabs
- destination/area browsing cards
- member/sign-in value banner
- owner/property listing CTA
- support/account utility navigation
- SEO footer link architecture

Hostel Premium:
- UCC-first positioning
- Ghana hostel realities
- enquiry-first, no student payment
- trust levels instead of generic verification
```

## Recommended Starting Order

Start with:

```text
1. Home page visual plan
2. Sign-in/auth visual plan
3. Listing/search visual plan
4. Hostel detail visual plan
```

Reason:

```text
The home page defines the first impression, brand trust, search entry, and visual system. The sign-in page should be designed immediately after because it appears at the protected action gate when a student tries to book/request or message a manager.
```

## Home Page Structure

Desktop:

```text
1. Header with logo, Browse UCC Hostels, Map, How It Works, For Managers, Sign In.
2. Search-first hero with UCC-first headline and large Expedia-inspired search module.
3. Discovery tabs: Hostels, Areas, Map, Verified, For Managers.
4. Visual side panel: hostel image/map/search preview, not abstract decoration.
5. Sign-in value banner: full details, saved hostels, safe enquiries.
6. Trust strip: UCC-first, admin-reviewed, photos-confirmed, physically verified labels explained.
7. Popular areas near UCC as destination-style cards.
8. Featured hostels.
9. Map preview with nearby hostel discovery.
10. How booking/request works.
11. Owner/manager advert/listing CTA.
12. SEO content and FAQ.
```

Mobile:

```text
1. Compact header.
2. UCC-first context and search pill.
3. Discovery shortcuts.
4. Area chips/cards.
5. Sign-in value prompt only when relevant.
6. Featured hostels.
7. Map/list entry.
8. Trust explanation.
9. Owner CTA.
```

## Home Page Component Targets

```text
SiteHeader
HeroSearch
UniversityAreaChips
TrustExplainer
FeaturedHostelCard
PopularAreaCard
MapPreview
HowItWorksSteps
OwnerCTA
FAQAccordion
Footer
```

## First Impression Checklist

The home page should pass these before implementation is accepted:

```text
1. Does the user immediately know this is for UCC hostels?
2. Is search obvious without scrolling?
3. Does the design feel professional enough for students, parents, managers, and authorities?
4. Are trust labels explained honestly?
5. Does desktop use a real web layout?
6. Does mobile stay focused and simple?
7. Does imagery show hostel/student accommodation clearly?
8. Does the page avoid copying Reales or Amber directly?
```

## Figma Follow-Up

To inspect the Figma file directly later:

```text
1. Open the Reales Figma file while signed in.
2. Select the exact frame/component to inspect, preferably one of:
   - Home page: 6319:19633
   - Feed / See All page: 6339:1934
   - Filter page: 6328:1176
3. Re-run Figma screenshot/context tools after MCP tool-call limit resets or plan access is upgraded.
4. Use licensed components/assets only after adapting them to Hostel Premium.
```
