import Image from "next/image";
import Link from "next/link";
import {
  Discover,
  Heart,
  Profile,
  SearchNormal1,
} from "iconsax-react";
import {
  Bath,
  Building2,
  Bus,
  CheckCircle2,
  GraduationCap,
  Globe2,
  MapPinned,
  Menu,
  MessageCircle,
  Percent,
  ShieldCheck,
  Users,
  Wifi,
} from "lucide-react";

import { MobileMapSheet } from "@/components/mobile-map-sheet";
import { MobileMenuButton } from "@/components/mobile-menu-overlay";
import { PremiumAssetIcon, premiumAssets } from "@/components/premium-asset-icon";
import { SearchFilterControls } from "@/components/search-filter-controls";

const filterPills = [
  { label: "Sort", active: false, sort: true },
  { label: "University", active: false },
  { label: "Locality", active: false },
  { label: "Budget", active: false },
  { label: "Move-in", active: false },
  { label: "Room type", active: false },
];

function getHostelHref(name: string) {
  return `/hostels/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

const hostels = [
  {
    name: "Science View Residence",
    room: "2 in a room",
    area: "Science / New Site",
    distance: "8 min walk to UCC Science gate",
    price: "GHS 3,200",
    yearlyPrice: "₵3,200/year",
    offer: "Save up to GHS 250",
    address: "Science Market Road, Cape Coast",
    rating: "4.8",
    reviews: "126",
    label: "Admin reviewed",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
    tags: ["Bills included", "Manager confirmed", "Study desk", "2 in a room", "Near campus"],
    map: { left: "47%", top: "39%" },
  },
  {
    name: "Ayensu Court Rooms",
    room: "3 in a room",
    area: "Ayensu",
    distance: "12 min shuttle to campus",
    price: "GHS 2,400",
    yearlyPrice: "₵2,400/year",
    offer: "Budget rooms",
    address: "Ayensu Junction, Cape Coast",
    rating: "4.6",
    reviews: "84",
    label: "Manager confirmed",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    tags: ["Water storage", "Shared kitchen", "Budget room", "3 in a room", "Near shuttle"],
    map: { left: "33%", top: "58%" },
  },
  {
    name: "Kwaprow Studio House",
    room: "1 in a room",
    area: "Kwaprow",
    distance: "15 min ride to UCC old site",
    price: "GHS 4,500",
    yearlyPrice: "₵4,500/year",
    offer: "Private room",
    address: "Kwaprow Main Road, Cape Coast",
    rating: "4.9",
    reviews: "61",
    label: "Physically verified",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    tags: ["Private washroom", "Security", "Quiet area", "1 in a room", "Study desk"],
    map: { left: "66%", top: "32%" },
  },
  {
    name: "Amamoma Hostel Annex",
    room: "2 in a room",
    area: "Amamoma",
    distance: "10 min ride to main campus",
    price: "GHS 2,850",
    yearlyPrice: "₵2,850/year",
    offer: "Manager confirmed",
    address: "Amamoma Hostel Street, Cape Coast",
    rating: "4.7",
    reviews: "92",
    label: "Photos confirmed",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80",
    tags: ["Manager confirmed", "Private washroom", "Near shuttle", "2 in a room", "Water available"],
    map: { left: "55%", top: "66%" },
  },
];

const trustItems = [
  {
    title: "Verified properties",
    copy: "Reviewed rooms are separated from manager-submitted listings.",
    icon: ShieldCheck,
  },
  {
    title: "Manager confirmation",
    copy: "Key room details are checked before students compare options.",
    icon: CheckCircle2,
  },
  {
    title: "Student support",
    copy: "Questions about rooms, areas, and availability stay visible.",
    icon: MessageCircle,
  },
];

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string | string[] }>;
}) {
  const params = await searchParams;
  const queryValue = Array.isArray(params?.q) ? params.q[0] : params?.q;
  const query = queryValue?.trim() || "UCC, Cape Coast";
  const place = query.toLowerCase().includes("ucc") ? "UCC" : query;
  const resultTitle = `Student Hostels in ${place}`;

  return (
    <main className="min-h-dvh bg-background pb-24 text-foreground lg:pb-0">
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              try {
                if (new URLSearchParams(window.location.search).get("q")) {
                  localStorage.setItem("cobraHasSearchHistory", "true");
                }
              } catch {}
            })();
          `,
        }}
      />
      <SearchHeader query={query} />

      <section className="mx-auto grid w-full max-w-[96rem] gap-6 px-4 py-3 sm:px-6 lg:grid-cols-[minmax(0,1fr)_25rem] lg:px-8 lg:py-7 xl:grid-cols-[minmax(0,1fr)_30rem]">
        <div className="min-w-0">
          <div className="flex flex-col gap-2 pb-4 sm:border-b sm:border-border sm:pb-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <nav
                className="flex flex-wrap items-center gap-1 text-[11px] font-medium leading-4 text-primary/70"
                aria-label="Search context"
              >
                {["Cape Coast", "UCC", place].map((item, index) => (
                  <span key={`${item}-${index}`} className="inline-flex items-center gap-1">
                    {index > 0 ? <span className="text-[#1F2329]">/</span> : null}
                    <button type="button" className="hover:text-primary">
                      {item}
                    </button>
                  </span>
                ))}
              </nav>
              <h1 className="mt-1.5 text-[1.38rem] font-bold leading-7 text-[#1F2329] sm:text-3xl">
                {resultTitle}
              </h1>
              <p className="mt-0.5 text-[13px] leading-5 text-[#6B6F76] sm:text-base">
                Showing 42 verified rooms near UCC and Cape Coast
              </p>
              <p className="mt-0.5 line-clamp-1 text-[13px] leading-5 text-[#3F4248] lg:hidden">
                Looking for student accommodation in {place}? <span className="font-bold underline underline-offset-2">Read More</span>
              </p>
            </div>
          </div>

          <div className="mt-3 grid gap-3.5 sm:mt-5 sm:gap-5">
            {hostels.map((hostel, index) => (
              <HostelListingCard
                key={hostel.name}
                hostel={hostel}
                priority={index < 2}
              />
            ))}
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-[8.35rem] space-y-4">
            <MapPreview />
            <TrustRail />
          </div>
        </aside>
      </section>

      <MobileMapSheet hostels={hostels} />

      <MobilePrimaryNav />
    </main>
  );
}

function SearchHeader({ query }: { query: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#E5E7EB] bg-card/95 backdrop-blur">
      <div className="flex h-14 items-center gap-2.5 px-4 lg:hidden">
        <Link
          href="/"
          className="shrink-0 text-[1.35rem] font-extrabold leading-none tracking-tight text-[#101522]"
          aria-label="Cobra home"
        >
          cobra
        </Link>

        <form action="/search/results" className="min-w-0 flex-1">
          <label className="flex h-10 min-w-0 items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F8F8F9] py-1 pl-3.5 pr-1 text-[#6B6F76]">
            <input
              className="min-w-0 flex-1 bg-transparent text-[13px] font-medium text-[#1F2329] outline-none placeholder:text-[#6B6F76]"
              defaultValue={query}
              name="q"
              aria-label="Search by university, area, or hostel"
              placeholder="Search by hostel"
            />
            <button
              type="submit"
              className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground active:scale-[0.97]"
              aria-label="Search"
            >
              <SearchNormal1 size={15} color="currentColor" variant="Linear" />
            </button>
          </label>
        </form>

        <MobileMenuButton
          className="grid size-7 shrink-0 place-items-center rounded-full text-[#101522]"
        >
          <Menu className="size-5" aria-hidden="true" strokeWidth={2} />
        </MobileMenuButton>
      </div>

      <div className="hidden h-[6.5rem] grid-cols-[1fr_auto_1fr] items-center px-10 lg:grid 2xl:px-14">
        <Link
          href="/"
          className="text-3xl font-extrabold leading-none tracking-tight text-[#101522]"
          aria-label="Cobra home"
        >
          cobra
        </Link>

        <form
          action="/search/results"
          className="grid h-14 min-w-[35rem] grid-cols-[1fr_auto_auto_auto_auto_auto] items-center rounded-full border border-[#DDDDDD] bg-card p-1.5 shadow-[0_2px_12px_rgba(15,23,42,0.10)]"
        >
          <label className="flex min-w-0 items-center gap-3 rounded-full px-5">
            <SearchNormal1 size={18} color="currentColor" variant="Linear" />
            <input
              className="min-w-0 bg-transparent text-sm font-semibold text-[#1F2329] outline-none placeholder:text-[#6B6F76]"
              defaultValue={query}
              name="q"
              aria-label="Search by university, area, or hostel"
            />
          </label>
          <span className="h-7 w-px bg-border" aria-hidden="true" />
          <button
            type="button"
            className="h-11 rounded-full px-5 text-sm font-semibold text-[#1F2329] hover:bg-secondary"
          >
            Any semester
          </button>
          <span className="h-7 w-px bg-border" aria-hidden="true" />
          <button
            type="button"
            className="h-11 rounded-full px-5 text-sm font-semibold text-[#1F2329] hover:bg-secondary"
          >
            Any room
          </button>
          <button
            type="submit"
            className="ml-1 grid size-11 place-items-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-[#E31C5F] active:scale-[0.97]"
            aria-label="Search"
          >
            <SearchNormal1 size={18} color="currentColor" variant="Linear" />
          </button>
        </form>

        <div className="flex items-center justify-end gap-3">
          <a className="text-sm font-semibold text-[#1F2329]" href="#">
            List your hostel
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full bg-secondary text-[#1F2329]"
            aria-label="Choose language"
          >
            <Globe2 className="size-5" aria-hidden="true" />
          </button>
          <MobileMenuButton
            className="grid size-11 place-items-center rounded-full bg-secondary text-[#1F2329]"
          >
            <Menu className="size-5" aria-hidden="true" />
          </MobileMenuButton>
        </div>
      </div>

      <nav
        className="mx-auto flex h-11 w-full max-w-[96rem] items-center gap-2 overflow-x-auto border-t border-[#E5E7EB] px-4 shadow-[0_4px_10px_rgba(15,23,42,0.10)] sm:px-6 lg:h-16 lg:justify-center lg:gap-3 lg:border-t lg:px-10 lg:shadow-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Search filters"
      >
        {filterPills.map((filter) => (
          <button
            key={filter.label}
            type="button"
            className={`inline-flex h-[30px] shrink-0 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold transition-colors lg:h-9 lg:px-4 ${
              filter.active
                ? "border-primary bg-card text-primary"
                : "border-[#D9D9DE] bg-card text-[#1F2329] hover:border-primary/40 hover:bg-secondary"
            }`}
          >
            {filter.sort ? <SlidersIcon /> : null}
            {filter.label}
          </button>
        ))}
        <SearchFilterControls />
      </nav>
    </header>
  );
}

function HostelListingCard({
  hostel,
  priority,
}: {
  hostel: (typeof hostels)[number];
  priority: boolean;
}) {
  const detailsHref = getHostelHref(hostel.name);

  return (
    <article className="group overflow-hidden rounded-[0.95rem] border border-[#E5E7EB] bg-card shadow-sm sm:grid sm:grid-cols-[15rem_minmax(0,1fr)] sm:gap-4 sm:overflow-visible sm:rounded-none sm:border-x-0 sm:border-b sm:border-t-0 sm:pb-5 sm:shadow-none lg:grid-cols-[16rem_minmax(0,1fr)]">
      <Link
        href={detailsHref}
        className="relative block aspect-[1.55/1] overflow-hidden rounded-t-[0.95rem] bg-secondary sm:aspect-[1.08/1] sm:rounded-[1.1rem]"
        aria-label={`View details for ${hostel.name}`}
      >
        <Image
          src={hostel.image}
          alt={`${hostel.room} preview in ${hostel.area}`}
          fill
          sizes="(min-width: 1024px) 256px, (min-width: 640px) 240px, calc(100vw - 32px)"
          className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          priority={priority}
        />
        <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2" aria-hidden="true">
          <span className="h-1.5 w-8 rounded-full bg-white" />
          <span className="size-1.5 rounded-full bg-white/80" />
          <span className="size-1.5 rounded-full bg-white/80" />
          <span className="size-1.5 rounded-full bg-white/80" />
        </div>
        <button
          type="button"
          className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/95 text-[#1F2329] shadow-sm transition-colors hover:bg-white"
          aria-label={`Save ${hostel.name}`}
        >
          <Heart size={19} color="currentColor" variant="Linear" />
        </button>
        <span className="absolute left-3 top-3 rounded-full bg-[#FFF0F5]/95 px-3 py-1.5 text-[11px] font-medium text-primary shadow-sm sm:px-3 sm:py-1 sm:text-[11px]">
          {hostel.offer}
        </span>
      </Link>

      <div className="relative min-w-0 px-4 pb-4 pt-4 sm:px-0 sm:pb-0 sm:pt-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link href={detailsHref}>
              <h2 className="line-clamp-1 text-[1.05rem] font-extrabold leading-6 text-[#22242A] sm:text-lg sm:font-semibold sm:leading-6">
                {hostel.name}
              </h2>
            </Link>
            <p className="mt-0.5 line-clamp-1 text-xs leading-5 text-[#6B6F76] sm:text-[13px]">
              {hostel.address}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-[#1F2329] sm:text-sm">
            <PremiumAssetIcon src={premiumAssets.rating} className="size-3.5" sizes="14px" />
            {hostel.rating} ({hostel.reviews})
          </span>
        </div>

        <div className="mt-2 space-y-1.5 text-xs leading-5 text-[#4B4F58] sm:mt-1 sm:space-y-0 sm:text-sm sm:text-muted-foreground">
          <p className="flex items-center gap-2">
            <MapPinned className="size-3.5 shrink-0" aria-hidden="true" />
            <span>{hostel.distance}</span>
            <span className="text-[#6B6F76]">(</span>
            <Bus className="size-3.5 shrink-0" aria-hidden="true" />
            <span>3m</span>
            <span>&middot;</span>
            <Users className="size-3.5 shrink-0" aria-hidden="true" />
            <span>10m</span>
            <span className="text-[#6B6F76]">)</span>
          </p>
          <p className="flex items-center gap-2 font-semibold text-[#39414D] sm:hidden">
            <GraduationCap className="size-3.5 shrink-0" aria-hidden="true" />
            <span>0.4 mi from Sasakawa lecture hall</span>
          </p>
        </div>

        <div className="my-3 h-px w-full border-t border-dashed border-[#D9D9DE]" />

        <div className="max-h-[3.5rem] overflow-x-auto overflow-y-hidden overscroll-x-contain pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max flex-col gap-1.5">
            <div className="flex gap-1.5">
              <span className="inline-flex h-6 w-fit shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-[#BBD7FF] bg-[#F0F7FF] px-2.5 text-[11px] font-bold text-[#2563EB] sm:h-7 sm:text-xs">
                <Percent className="size-3.5" aria-hidden="true" />
                10 Offers
              </span>
              {hostel.tags.filter((_, index) => index % 2 === 0).map((tag) => (
                <FeaturePill key={tag}>{tag}</FeaturePill>
              ))}
            </div>
            <div className="flex gap-1.5">
              <span className="inline-flex h-6 w-fit shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-[#B9DEC6] bg-[#EAF5EE] px-2.5 text-[11px] font-bold text-[#13795B] sm:h-7 sm:text-xs">
                <ShieldCheck className="size-3.5" aria-hidden="true" />
                Instant Booking
              </span>
              {hostel.tags.filter((_, index) => index % 2 === 1).map((tag) => (
                <FeaturePill key={tag}>{tag}</FeaturePill>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between gap-4 sm:mt-4">
          <div>
            <p className="text-[11px] leading-4 text-[#1F2329]">From</p>
            <p className="text-[1.05rem] font-extrabold leading-6 text-[#1F2329] sm:text-[1.35rem]">
              {hostel.yearlyPrice}
            </p>
          </div>
          <Link
            href={detailsHref}
            className="inline-flex h-9 min-w-[8.75rem] shrink-0 items-center justify-center rounded-xl bg-primary px-3 text-[12px] font-bold leading-none text-primary-foreground shadow-sm active:scale-[0.98] sm:h-11 sm:min-w-[10rem] sm:px-5 sm:text-sm"
          >
            See Availability
          </Link>
        </div>

        <p className="mt-2 hidden text-xs leading-5 text-muted-foreground sm:block">
          {hostel.reviews} student reviews
        </p>
      </div>
    </article>
  );
}

function FeaturePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-6 w-fit shrink-0 items-center whitespace-nowrap rounded-full border border-[#E5E7EB] bg-card px-2.5 text-[11px] font-semibold text-[#39414D] sm:h-auto sm:bg-secondary sm:px-3 sm:py-1 sm:text-[11px] sm:text-foreground">
      {children}
    </span>
  );
}

function SlidersIcon() {
  return (
    <span className="grid size-4 place-items-center" aria-hidden="true">
      <span className="h-px w-4 bg-current" />
      <span className="-mt-1 h-px w-3 bg-current" />
      <span className="-mt-1 h-px w-2 bg-current" />
    </span>
  );
}

function MapPreview() {
  return (
    <section className="overflow-hidden rounded-[1.1rem] border border-border bg-secondary">
      <div className="relative h-[23rem]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(221,221,221,0.7)_1px,transparent_1px),linear-gradient(rgba(221,221,221,0.72)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute inset-x-8 top-14 h-20 rounded-full border border-white/80 bg-white/55 blur-[0.5px]" />
        <div className="absolute bottom-12 left-8 right-10 h-16 rounded-full border border-white/80 bg-white/60 blur-[0.5px]" />
        <div className="absolute left-10 top-10 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
          UCC
        </div>
        {hostels.map((hostel) => (
          <button
            key={hostel.name}
            type="button"
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-semibold text-foreground shadow-md transition-colors hover:border-primary hover:text-primary"
            style={hostel.map}
            aria-label={`${hostel.name} on map`}
          >
            {hostel.price.replace("GHS ", "GHS ")}
          </button>
        ))}
        <div className="absolute bottom-4 left-4 right-4 rounded-[1rem] border border-border bg-card/95 p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <MapPinned className="size-4 text-primary" aria-hidden="true" />
            <p className="text-sm font-semibold">Map preview</p>
          </div>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Static Phase 1 preview. Live map-bounds filtering comes after the listing shell.
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustRail() {
  return (
    <section className="rounded-[1.1rem] border border-border bg-card p-4">
      <div className="flex items-center gap-2">
        <Building2 className="size-4 text-primary" aria-hidden="true" />
        <h2 className="text-sm font-semibold">Why these listings appear</h2>
      </div>
      <div className="mt-4 space-y-4">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-foreground">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold leading-5">{item.title}</span>
                <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">
                  {item.copy}
                </span>
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4 text-xs font-semibold text-foreground">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-2">
          <Wifi className="size-3.5" aria-hidden="true" />
          Wi-Fi filters
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-2">
          <Bath className="size-3.5" aria-hidden="true" />
          Washroom
        </span>
      </div>
    </section>
  );
}

function MobilePrimaryNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-card px-3 pb-[calc(env(safe-area-inset-bottom)+0.4rem)] pt-1.5 shadow-sm lg:hidden"
      aria-label="Mobile primary"
    >
      <ul className="mx-auto grid w-full max-w-44 grid-cols-3 text-[11px] font-semibold text-muted-foreground">
        {[
          { label: "Explore", icon: Discover, href: "/", active: true },
          { label: "Wishlist", icon: Heart, href: "/wishlist" },
          { label: "Profile", icon: Profile, href: "#" },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.label}>
              <a
                  className={`flex flex-col items-center gap-0.5 rounded-2xl px-2 py-1 ${
                  item.active ? "text-primary" : ""
                }`}
                href={item.href}
              >
                <Icon size={21} color="currentColor" variant="Linear" />
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
