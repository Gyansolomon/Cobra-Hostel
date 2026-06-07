import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown2,
  ArrowLeft,
  ArrowRight,
  ArrowRight2,
  Calendar2,
  Location,
  Profile2User,
  SearchNormal1,
} from "iconsax-react";

import { AreaMapClient } from "@/components/area-map-client";
import { HomeHeader } from "@/components/home-header";
import { PremiumAssetIcon, premiumAssets } from "@/components/premium-asset-icon";
import { PropertyCard } from "@/components/ui/card-3";

const mobileStats = [
  { label: "Rooms", value: "1.2K+", asset: premiumAssets.rooms },
  { label: "Areas", value: "12+", asset: premiumAssets.map },
  { label: "Students", value: "8K+", asset: premiumAssets.students },
  { label: "Rating", value: "4.7/5", asset: premiumAssets.rating },
];

const capeCoastUniversities = [
  {
    initials: "UCC",
    city: "Cape Coast",
    stays: "42 stays",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80",
  },
  {
    initials: "CCTU",
    city: "Cape Coast",
    stays: "18 stays",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=700&q=80",
  },
  {
    initials: "NDU",
    city: "Elmina",
    stays: "12 stays",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=700&q=80",
  },
];

const selectedUniversity = "UCC";

const recentSearches = [
  `${selectedUniversity} hostels`,
  "Science rooms",
  "Ayensu",
  "2 in a room",
];

const locationUniversityFilters = [
  "UCC",
  "CCTU",
  "NDU",
  "Science",
  "Ayensu",
  "Kwaprow",
];

const hostelRows = [
  {
    title: `Popular hostels around ${selectedUniversity}`,
    hostels: [
      {
        name: "2 in a room",
        area: "Science / New Site",
        price: "GHS 3,200",
        duration: "sem",
        rating: "4.8",
        meta: "Admin reviewed",
        image:
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "3 in a room",
        area: "Ayensu",
        price: "GHS 2,800",
        duration: "sem",
        rating: "4.7",
        meta: "Shared rooms",
        image:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "1 in a room",
        area: "Kwaprow",
        price: "GHS 4,500",
        duration: "sem",
        rating: "4.9",
        meta: "Private room",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "2 in a room",
        area: "Amamoma",
        price: "GHS 2,850",
        duration: "sem",
        rating: "4.6",
        meta: "Near shuttle route",
        image:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "3 in a room",
        area: "Apewosika / Old Site",
        price: "GHS 2,400",
        duration: "sem",
        rating: "4.5",
        meta: "Old Site access",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "1 in a room",
        area: "Kokoado / Old Site",
        price: "GHS 3,500",
        duration: "sem",
        rating: "4.7",
        meta: "Quiet area",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "2 in a room",
        area: "Science / New Site",
        price: "GHS 3,000",
        duration: "sem",
        rating: "4.8",
        meta: "Shared room",
        image:
          "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    title: `Available near ${selectedUniversity} this semester`,
    hostels: [
      {
        name: "3 in a room",
        area: "Ayensu",
        price: "GHS 2,400",
        duration: "sem",
        rating: "4.6",
        meta: "Budget option",
        image:
          "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "1 in a room",
        area: "Kwaprow",
        price: "GHS 4,800",
        duration: "sem",
        rating: "4.9",
        meta: "Private washroom",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "2 in a room",
        area: "Amamoma",
        price: "GHS 2,700",
        duration: "sem",
        rating: "4.7",
        meta: "2 in a room",
        image:
          "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "2 in a room",
        area: "Science / New Site",
        price: "GHS 3,600",
        duration: "sem",
        rating: "4.8",
        meta: "Study space",
        image:
          "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "3 in a room",
        area: "Apewosika / Old Site",
        price: "GHS 2,300",
        duration: "sem",
        rating: "4.5",
        meta: "Compact room",
        image:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "2 in a room",
        area: "Kokoado / Old Site",
        price: "GHS 2,950",
        duration: "sem",
        rating: "4.6",
        meta: "Near campus route",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "1 in a room",
        area: "Cape Coast",
        price: "GHS 4,200",
        duration: "sem",
        rating: "4.7",
        meta: "Area match",
        image:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

const hostelReviewCounts = [126, 84, 61, 58, 44, 39, 35];

function getHomeHostelHref(hostel: { area: string; name: string }) {
  const key = `${hostel.area} ${hostel.name}`.toLowerCase();

  if (key.includes("science")) return "/hostels/science-view-residence";
  if (key.includes("ayensu")) return "/hostels/ayensu-court-rooms";
  if (key.includes("kwaprow")) return "/hostels/kwaprow-studio-house";
  if (key.includes("amamoma")) return "/hostels/amamoma-hostel-annex";

  return `/search/results?q=${encodeURIComponent(hostel.area.split(" / ")[0])}`;
}

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#fff5f8] pb-20 text-foreground lg:bg-background lg:pb-0">
      <style>
        {`
          @media (min-width: 1024px) {
            html[data-home-header-compact="true"] .home-header {
              border-bottom: 1px solid var(--border);
              box-shadow: 0 1px 8px rgb(15 23 42 / 0.06);
            }

            html[data-home-header-compact="true"] .home-header-nav {
              opacity: 0;
              visibility: hidden;
              pointer-events: none;
            }

            html[data-home-header-compact="true"] .home-header-compact-search {
              opacity: 1;
              visibility: visible;
              pointer-events: auto;
              transform: translateY(0);
              z-index: 1;
            }
          }

          @media (max-width: 1023px) {
            .mobile-continue-search-section {
              order: 1;
            }

            .mobile-continue-left-section {
              order: 2;
            }

            .mobile-universities-section {
              order: 3;
            }

            html[data-personalized-search="true"] .mobile-universities-section {
              order: 1;
            }

            html[data-personalized-search="true"] .mobile-continue-search-section {
              order: 2;
            }

            html[data-personalized-search="true"] .mobile-continue-left-section {
              order: 3;
            }

            .mobile-primary-nav-list {
              transition: max-width 160ms ease-out;
            }

            html[data-home-header-compact="true"] .mobile-primary-nav-list {
              max-width: 100%;
            }

            .mobile-fixed-search {
              pointer-events: none;
              transform: translateY(-100%);
            }

            html[data-home-header-compact="true"] .mobile-fixed-search {
              opacity: 1;
              pointer-events: auto;
              transform: translateY(0);
            }

            .search-term-track {
              display: flex;
              flex-direction: column;
              animation: hostel-search-terms 8s infinite;
            }

            .search-term-window {
              display: inline-block;
              height: 1.25rem;
              min-width: 7.25rem;
              overflow: hidden;
              vertical-align: bottom;
            }

            .search-term-track > span {
              display: block;
              height: 1.25rem;
              line-height: 1.25rem;
              white-space: nowrap;
            }
          }

          @keyframes hostel-search-terms {
            0%, 20% {
              transform: translateY(0);
            }
            25%, 45% {
              transform: translateY(-1.25rem);
            }
            50%, 70% {
              transform: translateY(-2.5rem);
            }
            75%, 95% {
              transform: translateY(-3.75rem);
            }
            100% {
              transform: translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .search-term-track {
              animation: none;
            }
          }
        `}
      </style>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const root = document.documentElement;
              const syncHeader = () => {
                root.dataset.homeHeaderCompact = window.scrollY > 96 ? "true" : "false";
              };
              const hasCookieConsent = () => {
                try {
                  const consentKeys = [
                    "cobraCookieConsent",
                    "cookieConsent",
                    "cookiesAccepted",
                    "cookie-consent",
                    "cc_cookie"
                  ];
                  const acceptedValues = ["accepted", "true", "granted", "yes", "allow", "allowed"];

                  if (consentKeys.some((key) => acceptedValues.includes(String(localStorage.getItem(key)).toLowerCase()))) {
                    return true;
                  }

                  return /(?:^|;\\s*)(cobraCookieConsent|cookieConsent|cookiesAccepted)=(?:accepted|true|granted|yes|allow|allowed)/i.test(document.cookie);
                } catch {
                  return false;
                }
              };
              const syncPersonalizedSections = () => {
                try {
                  root.dataset.personalizedSearch =
                    hasCookieConsent() && localStorage.getItem("cobraHasSearchHistory") === "true"
                      ? "true"
                      : "false";
                } catch {
                  root.dataset.personalizedSearch = "false";
                }
              };
              syncHeader();
              syncPersonalizedSections();
              window.addEventListener("scroll", syncHeader, { passive: true });
              window.addEventListener("resize", syncHeader);
              window.addEventListener("storage", syncPersonalizedSections);
            })();
          `,
        }}
      />
      <HomeHeader />

      <section className="mx-auto w-full max-w-full px-3 pb-14 pt-4 sm:px-6 lg:max-w-[112rem] lg:px-8 lg:pb-20 lg:pt-5">
        <HeroSearchModule />
        <div className="-mx-4 mt-5 hidden border-b border-border sm:-mx-6 lg:-mx-8 lg:block" />

        <MobileStatsAndCities />

        <HostelBrowseRows />

        <AreaDiscovery />
      </section>
    </main>
  );
}

function MobileStatsAndCities() {
  return (
    <div className="-mt-6 lg:hidden">
      <section className="-mx-3 px-4 pb-2 pt-5">
        <div className="grid grid-cols-4 gap-3">
          {mobileStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="mx-auto grid size-10 place-items-center">
                <PremiumAssetIcon src={stat.asset} className="size-9" />
              </span>
              <p className="mt-1 text-sm font-semibold leading-5">{stat.value}</p>
              <p className="text-xs leading-4 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col">
      <section className="mobile-universities-section mt-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-balance text-xl font-semibold leading-7">
              Universities in Cape Coast
            </h2>
            <p className="mt-1 text-pretty text-xs leading-5 text-muted-foreground">
              Explore campuses before comparing nearby rooms.
            </p>
          </div>
          <a
            href="/search/results?q=Cape%20Coast%20universities"
            className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-neutral-200 text-foreground"
            aria-label="View more universities in Cape Coast"
          >
            <ArrowRight2 size={17} color="currentColor" variant="Linear" />
          </a>
        </div>

        <div className="-mx-3 mt-3 grid grid-flow-col auto-cols-[8.75rem] gap-3 overflow-x-auto px-3 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {capeCoastUniversities.map((university) => (
            <a
              key={university.initials}
              href={`/search/results?q=${encodeURIComponent(university.initials)}`}
              className="group overflow-hidden rounded-[1.35rem] bg-card shadow-sm ring-1 ring-border"
            >
              <div className="relative h-24 overflow-hidden">
                <Image
                  src={university.image}
                  alt={`${university.initials} campus preview`}
                  fill
                  sizes="140px"
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-black/25" />
                <span className="absolute bottom-2 left-3 text-lg font-semibold leading-5 text-white">
                  {university.initials}
                </span>
              </div>
              <div className="px-3 py-2">
                <p className="line-clamp-1 text-xs font-semibold leading-4">{university.city}</p>
                <p className="mt-0.5 text-[11px] leading-4 text-muted-foreground">
                  {university.stays}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <ContinueSearchJourney />
      <ContinueWhereLeftOff />
      </div>
    </div>
  );
}

function ContinueSearchJourney() {
  return (
    <section className="mobile-continue-search-section mt-6">
      <h2 className="text-balance text-lg font-semibold leading-6">
        Continue your search
      </h2>
      <div className="-mx-3 mt-3 flex gap-2 overflow-x-auto px-3 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {recentSearches.map((search) => (
          <a
            key={search}
            href={`/search/results?q=${encodeURIComponent(search)}`}
            className="shrink-0 rounded-full border border-border bg-transparent px-4 py-2 text-xs font-semibold text-foreground"
          >
            {search}
          </a>
        ))}
      </div>
    </section>
  );
}

function ContinueWhereLeftOff() {
  const savedHostels = hostelRows[0].hostels.slice(0, 3);

  return (
    <section className="mobile-continue-left-section mt-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-balance text-lg font-semibold leading-6">
            Continue where you left off
          </h2>
          <p className="mt-1 text-pretty text-xs leading-5 text-muted-foreground">
            Rooms you recently checked near Cape Coast.
          </p>
        </div>
        <a
          href={`/search/results?q=${encodeURIComponent(selectedUniversity)}`}
          className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-neutral-200 text-foreground"
          aria-label="View saved hostel previews"
        >
          <ArrowRight2 size={17} color="currentColor" variant="Linear" />
        </a>
      </div>

      <div className="-mx-3 mt-3 grid grid-flow-col auto-cols-[14.5rem] gap-3 overflow-x-auto px-3 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {savedHostels.map((hostel, index) => (
          <Link
            key={`recent-${hostel.name}-${hostel.area}`}
            href={getHomeHostelHref(hostel)}
            aria-label={`Continue viewing ${hostel.name} in ${hostel.area}`}
          >
            <PropertyCard
              imageUrl={hostel.image}
              imageAlt={`${hostel.name} in ${hostel.area}`}
              name={hostel.name}
              location={hostel.area}
              price={Number(hostel.price.replace(/\D/g, ""))}
              rating={Number(hostel.rating)}
              reviews={hostelReviewCounts[index] ?? 48}
              period={`/${hostel.duration}`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

function HeroSearchModule() {
  return (
    <Link
      href="/search"
      className="mx-auto hidden w-full max-w-[calc(100dvw-2rem)] min-w-0 lg:block lg:max-w-3xl"
    >
      <div className="hidden rounded-full border border-border bg-card p-2 shadow-sm lg:grid lg:grid-cols-[1fr_0.78fr_0.78fr_auto] lg:items-center">
        <SearchDisplayField
          icon={Location}
          label="Where"
          value={`${selectedUniversity}, area, or hostel name`}
        />
        <SearchField icon={Calendar2} label="Move-in" value="Anytime" />
        <SearchField icon={Profile2User} label="Room type" value="Any room" />
        <span
          className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground"
          aria-hidden="true"
        >
          <SearchNormal1 size={21} color="currentColor" variant="Linear" />
        </span>
      </div>
    </Link>
  );
}

function SearchDisplayField({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Location;
  label: string;
  value: string;
}) {
  return (
    <span className="flex min-h-12 items-center gap-3 rounded-full px-4 text-left transition-colors hover:bg-secondary">
      <Icon size={20} color="currentColor" variant="Linear" />
      <span>
        <span className="block text-sm font-semibold leading-5">{label}</span>
        <span className="block text-sm leading-5 text-muted-foreground">{value}</span>
      </span>
    </span>
  );
}

function SearchField({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Location;
  label: string;
  value: string;
}) {
  return (
    <button className="flex min-h-12 items-center gap-3 rounded-full px-4 text-left transition-colors hover:bg-secondary active:scale-[0.99]">
      <Icon size={20} color="currentColor" variant="Linear" />
      <span>
        <span className="block text-sm font-semibold leading-5">{label}</span>
        <span className="block text-sm leading-5 text-muted-foreground">{value}</span>
      </span>
    </button>
  );
}

function HostelBrowseRows() {
  return (
    <div className="mt-8 space-y-10 lg:mt-10">
      {hostelRows.map((row, rowIndex) => (
        <section key={row.title} aria-labelledby={`hostel-row-${rowIndex}`}>
          <div className="mb-5 flex items-center justify-between gap-4">
            <a
              className="group inline-flex w-full items-center justify-between gap-2 lg:w-auto lg:justify-start"
              href={`/search/results?q=${encodeURIComponent(selectedUniversity)}`}
              aria-label={`View more ${row.title.toLowerCase()}`}
            >
              <span className="min-w-0">
                <h2
                  id={`hostel-row-${rowIndex}`}
                  className="text-balance text-lg font-semibold leading-tight text-foreground lg:text-2xl"
                >
                  {row.title}
                </h2>
                {rowIndex === 0 ? (
                  <span className="mt-1 block text-[11px] font-normal leading-4 text-muted-foreground">
                    From 1 in a room to shared rooms, we&apos;ve got it all.
                  </span>
                ) : null}
              </span>
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#F1F1F1] text-foreground transition-colors group-hover:bg-[#E7E7E7] group-active:scale-[0.97]">
                <ArrowRight2 size={16} color="currentColor" variant="Linear" />
              </span>
            </a>

            <div className="hidden items-center gap-2 lg:flex">
              <button
                className="grid size-8 place-items-center text-muted-foreground hover:text-foreground"
                aria-label={`Previous ${row.title.toLowerCase()}`}
              >
                <ArrowLeft size={17} color="currentColor" variant="Linear" />
              </button>
              <button
                className="grid size-8 place-items-center text-foreground hover:text-primary"
                aria-label={`Next ${row.title.toLowerCase()}`}
              >
                <ArrowRight size={17} color="currentColor" variant="Linear" />
              </button>
            </div>
          </div>

          {rowIndex === 0 ? <LocationFilterBar /> : null}

          <div className="grid grid-flow-col auto-cols-[14.5rem] gap-3 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-1 [scrollbar-width:none] sm:auto-cols-[15rem] lg:auto-cols-[15.5rem] lg:gap-3.5 lg:overflow-hidden lg:pb-0 xl:auto-cols-[16rem] [&::-webkit-scrollbar]:hidden">
            {row.hostels.map((hostel, index) => (
              <HostelBrowseCard
                key={`${row.title}-${hostel.name}-${hostel.area}-${index}`}
                hostel={hostel}
                reviews={hostelReviewCounts[index] ?? 48}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function LocationFilterBar() {
  return (
    <div className="-mx-3 -mt-2 mb-4 overflow-hidden px-3 lg:hidden">
      <div className="flex min-w-0 items-center">
        <CityDropdownChip />
        <span className="mx-3 h-8 w-px shrink-0 bg-border" aria-hidden="true" />
        <div className="flex min-w-0 flex-1 gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {locationUniversityFilters.map((university, index) => (
            <UniversityFilterChip key={university} label={university} active={index === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CityDropdownChip() {
  return (
    <button
      className="flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-primary bg-transparent px-3 text-xs font-semibold text-primary"
      type="button"
      aria-label="Choose city"
    >
      <span className="grid size-5 place-items-center rounded-full border border-primary/25 bg-primary/10 text-[9px] font-bold">
        CC
      </span>
      <span>Cape Coast</span>
      <ArrowDown2 size={12} color="currentColor" variant="Linear" />
    </button>
  );
}

function UniversityFilterChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className={`h-9 shrink-0 rounded-full border px-4 text-xs font-semibold transition-colors ${
        active
          ? "border-primary bg-transparent text-primary"
          : "border-border bg-transparent text-foreground hover:border-primary/45 hover:text-primary"
      }`}
      type="button"
    >
      {label}
    </button>
  );
}

function HostelBrowseCard({
  hostel,
  reviews,
}: {
  hostel: (typeof hostelRows)[number]["hostels"][number];
  reviews: number;
}) {
  return (
    <Link
      href={`/search/results?q=${encodeURIComponent(hostel.area.split(" / ")[0])}`}
      aria-label={`View ${hostel.name} in ${hostel.area}`}
    >
      <PropertyCard
        imageUrl={hostel.image}
        imageAlt={`${hostel.name} in ${hostel.area}`}
        name={hostel.name}
        location={hostel.area}
        price={Number(hostel.price.replace(/\D/g, ""))}
        rating={Number(hostel.rating)}
        reviews={reviews}
        period={`/${hostel.duration}`}
      />
    </Link>
  );
}

function AreaDiscovery() {
  return (
    <section className="mt-10 lg:mt-20" aria-labelledby="ucc-areas">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 id="ucc-areas" className="text-balance text-2xl font-semibold leading-8 lg:text-3xl">
            Map of areas near {selectedUniversity}
          </h2>
          <p className="mt-1 max-w-2xl text-pretty text-xs leading-5 text-muted-foreground sm:text-sm lg:text-base lg:leading-6">
            See where student hostel towns sit before choosing a room.
          </p>
        </div>

        <a
          className="grid size-8 shrink-0 place-items-center rounded-full bg-neutral-200 text-foreground transition-colors hover:bg-neutral-300 lg:hidden"
          href={`/map?q=${encodeURIComponent(selectedUniversity)}`}
          aria-label={`See all ${selectedUniversity} hostel areas`}
        >
          <ArrowRight2 size={17} color="currentColor" variant="Linear" />
        </a>

        <a
          className="hidden rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted lg:inline-flex"
          href={`/map?q=${encodeURIComponent(selectedUniversity)}`}
        >
          See all areas
        </a>
      </div>

      <AreaMap />
    </section>
  );
}

function AreaMap() {
  return <AreaMapClient />;
}
