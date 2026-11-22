# Component System

## Goal

Build reusable components instead of one-off screens.

## Base Components

Every app should define:

- Button
- IconButton
- Input
- SearchInput
- Select/Dropdown
- Checkbox/Switch
- Card
- Badge
- Avatar
- Tabs
- BottomSheet
- Modal/Dialog
- EmptyState
- LoadingState
- ErrorState
- Toast/Notification

## App-Specific Components

Each project should define its own components.

Example hostel app:

- HostelCard
- HostelHero
- RoomTypeCard
- AmenityBadge
- PriceBadge
- FavoriteButton
- FilterSheet
- BookingRequestForm
- ImageGallery
- LocationPreview
- OwnerDashboardCard

Example Soccer11:

- MatchCard
- LiveBadge
- LeagueHeader
- ScoreRow
- MatchTimeline
- TeamHeader
- StandingsTable
- PlayerStatCard

## Component Rules

- Every component must support loading state if it fetches data.
- Every data list must support empty state.
- Every error-prone area must support error state.
- Components must be responsive.
- Components must use consistent spacing.
- Components must use one icon system.
- Repeated UI should be extracted into components.

## Storybook Rules

Use Storybook for:

- default state
- loading state
- empty state
- error state
- mobile state
- long text state
- disabled state
- selected/active state

## Component Sources

Use sources deliberately:

- shadcn/ui for accessible React web components.
- Storybook for isolated component development and state testing.
- Iconsax or one consistent icon family for premium icon direction.
- Tailwind Plus for paid web dashboards, app shells, forms, tables, and marketing patterns when licensed.
- Untitled UI for paid SaaS/admin/dashboard design-system references when licensed.
- Magic UI for animated marketing sections, hero areas, bento grids, and product presentation.
- Aceternity UI for high-impact landing page visuals when performance and clarity allow.
- Motion Primitives for reusable motion patterns.

Do not rely on paid sources unless the user confirms access or approves purchase.

## Form and Data Components

Use:

- React Hook Form for complex forms.
- Zod or equivalent schema validation for form/API validation.
- TanStack Query for frontend server-state fetching, caching, loading states, and controlled refetching.

Every data component should have:

- loading state
- empty state
- error state
- long text state
- mobile state
- permission/disabled state when relevant
