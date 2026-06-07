"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Banknote,
  Bike,
  BusFront,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  CreditCard,
  DollarSign,
  Droplets,
  Gamepad2,
  GraduationCap,
  Heart,
  Headphones,
  Home,
  Info,
  Landmark,
  Layers3,
  MapPin,
  Navigation,
  Printer,
  Search,
  Share2,
  ShieldCheck,
  Sofa,
  Star,
  Store,
  Tag,
  TreePine,
  Tv,
  Users,
  Utensils,
  WashingMachine,
  Wifi,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { Hostel } from "@/lib/hostels";

type Tab = {
  id: string;
  label: string;
};

type RoomFeature = [string, LucideIcon];

type RoomTypeData = {
  title: string;
  availableFrom: string;
  price: string;
  images: string[];
  features: RoomFeature[];
  tenancies: Array<{
    duration: string;
    moveIn: string;
    moveOut: string;
    note: string;
    price: string;
  }>;
  moreCount: number;
};

const tabs: Tab[] = [
  { id: "overview", label: "Overview" },
  { id: "offers", label: "Offers" },
  { id: "description", label: "Description" },
  { id: "amenities", label: "Amenities" },
  { id: "roomTypes", label: "Room Types" },
  { id: "houseRules", label: "House Rules" },
  { id: "meetResidents", label: "Meet the Residents" },
  { id: "paymentFees", label: "Payment and Fees" },
  { id: "faqs", label: "FAQs" },
  { id: "map", label: "Map" },
  { id: "reviews", label: "Reviews" },
  { id: "priceTrend", label: "Price Trend" },
];

export function HostelDetailsClient({ hostel }: { hostel: Hostel }) {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [showTabs, setShowTabs] = useState(false);
  const [footerInView, setFooterInView] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const updateChrome = () => {
      const y = window.scrollY;
      const footer = document.getElementById("appFooter");
      setShowStickyHeader(y > 250);
      setShowTabs(y > 420);
      setFooterInView(Boolean(footer && footer.getBoundingClientRect().top < window.innerHeight * 0.72));
    };

    updateChrome();
    window.addEventListener("scroll", updateChrome, { passive: true });
    return () => window.removeEventListener("scroll", updateChrome);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const threshold = 132;
      const sections = tabs
        .map((tab) => {
          const section = document.getElementById(tab.id);
          return section ? { id: tab.id, top: section.getBoundingClientRect().top } : null;
        })
        .filter((section): section is { id: string; top: number } => Boolean(section));
      const nearPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      const reached = sections.filter((section) => section.top <= threshold);
      const active = nearPageEnd ? sections[sections.length - 1] : reached.length > 0 ? reached[reached.length - 1] : sections[0];

      if (active) {
        setActiveTab(active.id);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    const interval = window.setInterval(updateActiveSection, 250);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    tabButtonRefs.current[activeTab]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeTab]);

  const images = useMemo(() => [...hostel.gallery, hostel.image].slice(0, 4), [hostel.gallery, hostel.image]);
  const pastAvailabilitySection = [
    "roomTypes",
    "houseRules",
    "meetResidents",
    "paymentFees",
    "faqs",
    "map",
    "reviews",
    "priceTrend",
  ].includes(activeTab);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    setActiveTab(id);
    const offset = showStickyHeader ? 108 : 64;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <main className="hostel-details-page min-h-dvh overflow-x-hidden bg-[#E9EBEF] pb-28 text-[#111827] lg:bg-background lg:pb-10">
      <StickyPropertyHeader hostel={hostel} visible={showStickyHeader} />
      <PropertySectionTabs
        activeTab={activeTab}
        visible={showTabs}
        tabsRef={tabsRef}
        tabButtonRefs={tabButtonRefs}
        onTabClick={scrollToSection}
      />

      <PropertyHeroGallery hostel={hostel} images={images} />
      <div className="mx-auto max-w-[58rem] px-2 lg:max-w-[82rem] lg:px-8">
        <PropertySummaryCard hostel={hostel} />
        <section id="offers" className="scroll-mt-28">
          <OffersCard />
        </section>
        <TrustBenefitsCard />
        <section id="description" className="scroll-mt-28">
          <AboutPropertyCard hostel={hostel} />
        </section>
        <section id="amenities" className="scroll-mt-28">
          <AmenitiesCard />
        </section>
        <section id="roomTypes" className="scroll-mt-28">
          <RoomTypesCard hostel={hostel} />
        </section>
        <section id="houseRules" className="scroll-mt-28">
          <HouseRulesCard hostel={hostel} />
        </section>
        <section id="meetResidents" className="scroll-mt-28">
          <MeetResidentsCard />
        </section>
        <section id="paymentFees" className="scroll-mt-28">
          <PaymentFeesCard />
        </section>
        <section id="faqs" className="scroll-mt-28">
          <FAQCard />
        </section>
        <section id="map" className="scroll-mt-28">
          <NearbyLocationsMapCard />
        </section>
        <LiveTourCard />
        <section id="reviews" className="scroll-mt-28">
          <ReviewsCard />
        </section>
        <section id="priceTrend" className="scroll-mt-28">
          <PriceTrendCard />
        </section>
        <RecentlyViewedSection hostel={hostel} />
        <SimilarPropertiesSection hostel={hostel} />
        <NearbyPropertiesSection hostel={hostel} />
        <PopularPropertiesSection hostel={hostel} />
        <BudgetFriendlyPropertiesSection hostel={hostel} />
        <NearbyPlacesFooterCard />
        <AppFooter />
      </div>

      <FloatingSupportWidget hidden={footerInView} />
      <StickyBookingBar
        hidden={footerInView}
        pastAvailabilitySection={pastAvailabilitySection}
        onSeeAvailability={() => scrollToSection("roomTypes")}
      />
    </main>
  );
}

function PropertyHeroGallery({ hostel, images }: { hostel: Hostel; images: string[] }) {
  return (
    <section className="relative h-[25.5rem] overflow-hidden bg-secondary sm:h-[32rem] lg:mx-auto lg:mt-5 lg:h-[34rem] lg:max-w-[82rem] lg:rounded-[1.25rem]">
      <Image
        src={images[0]}
        alt={`${hostel.name} interior room preview`}
        fill
        sizes="(min-width: 1024px) 1312px, 100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/55 to-transparent" />

      <div className="absolute left-3 top-3 z-10 lg:left-5 lg:top-5">
        <Link
          href="/search/results?q=UCC"
          className="grid size-8 place-items-center rounded-full bg-white text-[#111827] shadow-sm lg:size-9"
          aria-label="Back to search results"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="absolute right-3 top-3 z-10 flex gap-2 lg:right-5 lg:top-5">
        <HeroIconButton label="Search" icon={Search} />
        <HeroIconButton label={`Share ${hostel.name}`} icon={Share2} />
        <HeroIconButton label={`Save ${hostel.name}`} icon={Heart} />
      </div>

      <div className="absolute inset-x-3 bottom-[4.9rem] z-10 flex items-center justify-between lg:bottom-5">
        <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-white px-2.5 text-xs font-bold shadow-sm">
          <Star className="size-4 fill-[#16A36A] text-[#16A36A]" aria-hidden="true" />
          {hostel.rating} ({hostel.reviews})
        </span>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-7 rounded-full bg-white" />
          <span className="size-1.5 rounded-full bg-white/75" />
          <span className="size-1.5 rounded-full bg-white/75" />
          <span className="size-1.5 rounded-full bg-white/75" />
          <span className="size-1.5 rounded-full bg-white/75" />
        </div>
        <span className="rounded-full bg-black/70 px-2.5 py-1.5 text-xs font-bold text-white">1/28</span>
      </div>
    </section>
  );
}

function PropertySummaryCard({ hostel }: { hostel: Hostel }) {
  return (
    <section
      id="overview"
      className="relative z-10 -mx-1 -mt-16 scroll-mt-28 overflow-hidden rounded-[1.15rem] bg-white shadow-sm lg:mx-0 lg:-mt-14 lg:rounded-[1.4rem]"
    >
      <div className="p-4 pb-3 sm:p-6 sm:pb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold text-primary">
              <span>Ghana</span>
              <span className="text-[#111827]">/</span>
              <span>Cape Coast</span>
              <span className="text-[#111827]">/</span>
              <span>UCC</span>
            </p>
            <h1 className="mt-2.5 text-balance text-[1.32rem] font-extrabold leading-[1.55rem] sm:text-3xl">
              {hostel.name}
            </h1>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-xs leading-4 text-muted-foreground">From</p>
            <p className="text-base font-extrabold leading-5 tabular-nums sm:text-2xl">{formatPrice(hostel.price)}</p>
            <p className="text-[11px] font-semibold text-muted-foreground">per year</p>
          </div>
        </div>

        <p className="mt-4 text-[13px] leading-5 text-muted-foreground sm:text-sm">{hostel.address}</p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#FFF0F5] text-primary">
              <MapPin className="size-6 fill-primary/15" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-extrabold leading-5">{hostel.distance}</p>
              <p className="mt-2.5 text-xs font-semibold leading-4 text-muted-foreground">
                taxi 3m · walk 8m · shuttle 10m
              </p>
            </div>
          </div>
          <button type="button" className="shrink-0 text-xs font-extrabold text-primary">
            View map
          </button>
        </div>
      </div>

      <PropertyFeatureChipPanel />
    </section>
  );
}

function PropertyFeatureChipPanel() {
  return (
    <div className="rounded-b-[1.15rem] bg-[#F7F7F7] px-4 pb-3 pt-0 sm:px-6 sm:pb-4 lg:rounded-b-[1.4rem]">
      <DashedDivider className="mb-2 mt-0" />
      <div className="space-y-1.5">
      <FeatureChipRow
        chips={[
          ["Near UCC Science", Landmark],
          ["Newly Renovated", Layers3],
        ]}
      />
      <FeatureChipRow
        chips={[
          ["UCC Main Gate | nearby", GraduationCap],
          ["Science Market | nearby", MapPin],
          ["Ayensu Junction | nearby", MapPin],
        ]}
      />
      <FeatureChipRow
        chips={[
          ["Bills Included", ClipboardList],
          ["Pay In Instalment", CalendarDays],
          ["Manager Confirmed", ShieldCheck],
        ]}
        action="View All"
      />
      </div>
    </div>
  );
}

function FeatureChipRow({
  chips,
  action,
}: {
  chips: [string, typeof Landmark][];
  action?: string;
}) {
  return (
    <div className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1">
      {chips.map(([label, Icon]) => (
        <span
          key={label}
          className="inline-flex h-6 shrink-0 items-center gap-1.5 rounded-full border border-[#DDDDDD] bg-white px-2.5 text-[10.5px] font-bold leading-none text-[#222222]"
        >
          <Icon className="size-3 text-[#172554]" aria-hidden="true" />
          <span className="whitespace-nowrap">{label}</span>
        </span>
      ))}
      {action ? (
        <button type="button" className="h-6 shrink-0 px-1 text-[10.5px] font-extrabold leading-none text-primary">
          {action}
        </button>
      ) : null}
    </div>
  );
}

function OffersCard() {
  const offers = [
    "Reserve early and save on your first month",
    "Refer a roommate and receive hostel credit",
    "Move in stress-free with no viewing fee",
  ];

  return (
    <Card className="relative mt-3 overflow-visible" padded={false}>
      <div className="pointer-events-none absolute -left-3 top-[3.9rem] size-6 rounded-full bg-[#E9EBEF]" />
      <div className="pointer-events-none absolute -right-3 top-[3.9rem] size-6 rounded-full bg-[#E9EBEF]" />
      <div className="relative flex items-center gap-2 overflow-hidden px-4 py-4 sm:px-5">
        <h2 className="text-lg font-extrabold">Offers</h2>
        <span className="min-w-0 flex-1 rounded-full border border-dashed border-[#82D6BD] bg-[#EFFDF7] px-3 py-1.5 text-xs font-bold text-[#047857]">
          Save up to GHS 520
        </span>
        <span className="pointer-events-none absolute -right-2 -top-2 text-6xl font-extrabold text-primary/8">%</span>
      </div>

      <DashedDivider className="mx-4 my-0 sm:mx-5" />

      <div className="divide-y divide-border px-4 sm:px-5">
        {offers.map((offer) => (
          <button key={offer} type="button" className="flex w-full items-center gap-3 py-3 text-left">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#FFF0F5] text-[#111827]">
              <Tag className="size-4 text-primary" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1 text-[13px] font-semibold leading-5">{offer}</span>
            <ChevronRight className="size-4 shrink-0" aria-hidden="true" />
          </button>
        ))}
      </div>

      <button type="button" className="mx-auto flex items-center gap-1 py-3 text-sm font-extrabold text-primary">
        View All
        <ChevronDown className="size-4" aria-hidden="true" />
      </button>
    </Card>
  );
}

function TrustBenefitsCard() {
  const benefits = [
    ["Verified Hostels", BadgeCheck],
    ["Manager Confirmed", ShieldCheck],
    ["Bills Included", ClipboardList],
    ["Student Support", Headphones],
    ["Trusted Reviews", Star],
  ];

  return (
    <Card className="mt-3" padded={false}>
      <div className="grid grid-cols-5 gap-1.5 px-4 py-4 sm:px-5">
        {benefits.map(([label, Icon]) => (
          <div key={label as string} className="text-center">
            <span className="mx-auto grid size-10 place-items-center rounded-full bg-[#FFF0F5] text-[#111827] sm:size-12">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <p className="mt-2 text-[10px] font-bold leading-3 sm:text-[11px] sm:leading-4">{label as string}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-border px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2.5">
          <div className="flex -space-x-2">
            {["A", "K", "E"].map((avatar) => (
              <span
                key={avatar}
                className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#FFE5EC] text-[11px] font-extrabold text-primary"
              >
                {avatar}
              </span>
            ))}
          </div>
          <p className="text-xs font-semibold leading-5 text-muted-foreground">
            <span className="font-extrabold text-[#111827]">42 students</span> viewed this hostel recently
          </p>
        </div>
      </div>
    </Card>
  );
}

function AboutPropertyCard({ hostel }: { hostel: Hostel }) {
  return (
    <Card className="mt-3" padded={false}>
      <h2 className="px-4 py-4 text-lg font-extrabold sm:px-5">About the Property</h2>
      <div className="border-t border-border px-4 py-4 sm:px-5">
        <div className="relative max-h-28 overflow-hidden">
          <p className="text-pretty text-[13px] leading-6 text-[#374151]">
            <strong className="font-extrabold text-[#111827]">{hostel.name}</strong>, located near UCC Science Gate,
            offers comfortable student rooms for students who want <strong className="font-extrabold text-[#111827]">safety</strong>,
            convenience and easy access to campus. Students can compare room type, commute, bills, manager status and
            availability before calling.
          </p>
          <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-white to-white/0" />
        </div>
        <button type="button" className="mt-2 inline-flex items-center gap-1 text-sm font-extrabold text-primary">
          Show more
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </Card>
  );
}

function AmenitiesCard() {
  const bills = [
    ["Wi-Fi", "GHS 80/mo", Wifi],
    ["Electricity", "GHS 120/mo", Zap],
    ["Water", "GHS 60/mo", Droplets],
    ["Security", "GHS 50/mo", ShieldCheck],
  ];
  const shared = [
    ["Study Area", Landmark],
    ["Laundry Area", WashingMachine],
    ["Common Area", Home],
    ["Security Post", ShieldCheck],
    ["Water Storage", Droplets],
    ["Kitchen Access", Utensils],
    ["Printing", Printer],
    ["Bike Storage", Bike],
  ];
  const recreation = [
    ["TV Lounge", Tv],
    ["Games Area", Gamepad2],
    ["Outdoor Sitting Area", TreePine],
    ["Quiet Lounge", Sofa],
  ];

  return (
    <Card className="mt-3" padded={false}>
      <h2 className="px-4 pb-2.5 pt-4 text-lg font-extrabold sm:px-5">Amenities</h2>
      <div className="border-t border-border px-4 pb-4 pt-3 sm:px-5">
        <h3 className="text-base font-extrabold">
          Bills Included <span className="font-medium text-muted-foreground">(In Rent)</span>
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5">
          {bills.map(([label, oldPrice, Icon]) => (
            <div key={label as string} className="flex gap-2.5">
              <Icon className="mt-1 size-6 shrink-0 text-[#172554]" aria-hidden="true" />
              <div>
                <p className="text-[13px] font-extrabold leading-5">{label as string}</p>
                <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground line-through">
                  {oldPrice as string}
                </p>
                <CheckCircle2 className="ml-1.5 inline size-4 text-[#059669]" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-[#E8FAF2] p-3">
          <p className="max-w-[12rem] text-[13px] font-medium leading-5">
            Savings from included hostel utilities
            <span className="block text-xs text-[#047857]">(Estimated monthly student savings)</span>
          </p>
          <div className="shrink-0 text-right">
            <p className="text-sm font-extrabold text-[#047857]">GHS 120/mo</p>
            <span className="mt-1 inline-flex rounded-full bg-[#047857] px-4 py-1 text-xs font-extrabold text-white">
              FREE
            </span>
          </div>
        </div>

        <DashedDivider />

        <h3 className="text-base font-extrabold">Shared Community and Utilities</h3>
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4">
          {shared.map(([label, Icon]) => (
            <div key={label as string} className="flex items-center gap-2.5">
              <Icon className="size-6 shrink-0 text-[#172554]" aria-hidden="true" />
              <p className="text-[13px] font-medium">{label as string}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="border-t border-border px-4 py-4 sm:px-5">
          <h3 className="text-base font-extrabold">Fitness and Recreation</h3>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4">
            {recreation.map(([label, Icon]) => (
              <div key={label as string} className="flex items-center gap-2.5">
                <Icon className="size-6 shrink-0 text-[#172554]" aria-hidden="true" />
                <p className="text-[13px] font-medium">{label as string}</p>
              </div>
            ))}
          </div>
      </div>

      <div className="border-t border-border">
        <button type="button" className="mx-auto flex items-center gap-1 py-3.5 text-sm font-extrabold text-primary">
          View all amenities (22)
          <ChevronDown className="size-4" aria-hidden="true" />
        </button>
      </div>
    </Card>
  );
}

function RoomTypesCard({ hostel }: { hostel: Hostel }) {
  const [showSoldOutRooms, setShowSoldOutRooms] = useState(true);
  const filters = ["Stay Duration", "Move-in Month", "Room Type", "Occupancy"];
  const categories = ["All (4)", "Two in a Room", "Single Room", "Self-contained"];
  const roomTypes: RoomTypeData[] = [
    {
      title: "Standard Two-in-a-Room",
      availableFrom: "7 Jun, 2026",
      price: "GHS 2,800/semester",
      images: [hostel.gallery[1] ?? hostel.image, hostel.gallery[2] ?? hostel.image],
      features: [
        ["2 in a room", Users],
        ["Private room option", Home],
        ["Shared bathroom", Droplets],
        ["Shared kitchen", Utensils],
        ["Study desk", Landmark],
      ],
      tenancies: [
        {
          duration: "1 semester",
          moveIn: "1 Sep, 2026",
          moveOut: "20 Dec, 2026",
          note: "Student lease",
          price: "GHS 2,800/semester",
        },
        {
          duration: "Monthly",
          moveIn: "Available now",
          moveOut: "Flexible",
          note: "Room inspection required",
          price: "GHS 350/month",
        },
      ],
      moreCount: 4,
    },
    {
      title: "Self-contained Single Room",
      availableFrom: "15 Jul, 2026",
      price: "GHS 4,500/year",
      images: [hostel.gallery[3] ?? hostel.image, hostel.gallery[0] ?? hostel.image],
      features: [
        ["Self-contained", Home],
        ["Private bathroom", Droplets],
        ["Kitchenette", Utensils],
        ["Study desk", Landmark],
        ["Water available", CheckCircle2],
      ],
      tenancies: [
        {
          duration: "Academic year",
          moveIn: "15 Jul, 2026",
          moveOut: "30 May, 2027",
          note: "Full-year student lease",
          price: "GHS 4,500/year",
        },
        {
          duration: "1 semester",
          moveIn: "1 Sep, 2026",
          moveOut: "20 Dec, 2026",
          note: "Limited rooms",
          price: "GHS 2,600/semester",
        },
      ],
      moreCount: 6,
    },
  ];
  const soldOutRoom: RoomTypeData = {
    title: "Budget Two-in-a-Room",
    availableFrom: "Sold out",
    price: "GHS 2,800/semester",
    images: [hostel.gallery[2] ?? hostel.image, hostel.gallery[1] ?? hostel.image],
    features: [
      ["2 in a room", Users],
      ["Private room option", Home],
      ["Shared bathroom", Droplets],
      ["Shared kitchen", Utensils],
      ["Study desk", Landmark],
    ],
    tenancies: [],
    moreCount: 3,
  };

  return (
    <Card className="mt-3 overflow-hidden" padded={false}>
      <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-5">
        <h2 className="text-lg font-extrabold">Room Types (4)</h2>
        <button type="button" className="grid size-8 place-items-center rounded-full border border-border" aria-label="Room type information">
          <Info className="size-4" aria-hidden="true" />
        </button>
      </div>
      <div className="no-scrollbar flex gap-2 overflow-x-auto border-t border-border px-4 py-3 sm:px-5">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className="h-8 shrink-0 rounded-full border border-border bg-white px-3 text-xs font-semibold text-[#222222]"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="no-scrollbar flex overflow-x-auto border-t border-border bg-white px-4 sm:px-5">
        {categories.map((category, index) => (
          <button
            key={category}
            type="button"
            className={`h-12 shrink-0 border-b-2 px-4 text-sm font-bold ${
              index === 0 ? "border-primary text-primary" : "border-transparent text-[#374151]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-3 px-3 py-3 sm:px-5">
        {roomTypes.map((room) => (
          <RoomTypeCard key={room.title} room={room} />
        ))}
        {showSoldOutRooms ? <SoldOutRoomTypeCard room={soldOutRoom} /> : null}
        <ViewSoldOutRoomsBar
          count={1}
          expanded={showSoldOutRooms}
          onToggle={() => setShowSoldOutRooms((current) => !current)}
        />
      </div>
    </Card>
  );
}

function RoomTypeCard({
  room,
}: {
  room: RoomTypeData;
}) {
  return (
    <article className="overflow-hidden rounded-[1.05rem] border border-border bg-white">
      <div className="p-4 sm:p-5">
        <h3 className="text-balance text-lg font-extrabold leading-6">{room.title}</h3>
        <RoomImagePreview title={room.title} images={room.images} />
        <RoomAvailabilityPriceRow availableFrom={room.availableFrom} price={room.price} />
        <RoomFeatureGrid features={room.features} />
      </div>
      <TenancyOptionList tenancies={room.tenancies} />
      <button type="button" className="mx-auto flex items-center gap-1 py-3.5 text-sm font-extrabold text-primary">
        View More Tenancies ({room.moreCount})
        <ChevronDown className="size-4" aria-hidden="true" />
      </button>
    </article>
  );
}

function RoomImagePreview({ title, images }: { title: string; images: string[] }) {
  const carouselImages = [...images, ...images].slice(0, 4);

  return (
    <div className="no-scrollbar -mx-1 mt-3 flex snap-x gap-2 overflow-x-auto px-1">
      {carouselImages.map((image, index) => (
        <div
          key={`${title}-${image}-${index}`}
          className="relative aspect-[1.42] w-[78%] shrink-0 snap-start overflow-hidden rounded-lg bg-secondary sm:w-[20rem]"
        >
          <Image src={image} alt={`${title} preview ${index + 1}`} fill sizes="(min-width: 640px) 20rem, 78vw" className="object-cover" />
          {index === 0 ? (
            <span className="absolute inset-0 grid place-items-center bg-black/18 text-3xl font-extrabold text-white">
              360
              <span className="absolute mt-10 h-5 w-16 rounded-[50%] border-b-2 border-white" />
            </span>
          ) : null}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5" aria-hidden="true">
            <span className={`h-1.5 rounded-full bg-white ${index === 0 ? "w-6" : "w-1.5"}`} />
            <span className="size-1.5 rounded-full bg-white/85" />
            <span className="size-1.5 rounded-full bg-white/85" />
          </div>
        </div>
      ))}
    </div>
  );
}

function SoldOutRoomTypeCard({ room }: { room: RoomTypeData }) {
  return (
    <article className="overflow-hidden rounded-[1.05rem] border border-border bg-white">
      <div className="p-4 sm:p-5">
        <h3 className="text-balance text-lg font-extrabold leading-6">{room.title}</h3>
        <SoldOutRoomImagePreview title={room.title} images={room.images} />
        <SoldOutStatusRow price={room.price} />
        <RoomFeatureGrid features={room.features} />
      </div>
      <SoldOutWaitlistRow />
    </article>
  );
}

function SoldOutRoomImagePreview({ title, images }: { title: string; images: string[] }) {
  const carouselImages = [...images, ...images].slice(0, 4);

  return (
    <div className="no-scrollbar -mx-1 mt-3 flex snap-x gap-2 overflow-x-auto px-1">
      {carouselImages.map((image, index) => (
        <div
          key={`${title}-sold-out-${image}-${index}`}
          className="relative aspect-[1.42] w-[78%] shrink-0 snap-start overflow-hidden rounded-lg bg-secondary sm:w-[20rem]"
        >
          <Image
            src={image}
            alt={`${title} sold-out preview ${index + 1}`}
            fill
            sizes="(min-width: 640px) 20rem, 78vw"
            className="object-cover opacity-85 saturate-75"
          />
          <span className="absolute inset-0 bg-white/10" aria-hidden="true" />
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5" aria-hidden="true">
            <span className={`h-1.5 rounded-full bg-white ${index === 0 ? "w-6" : "w-1.5"}`} />
            <span className="size-1.5 rounded-full bg-white/85" />
            <span className="size-1.5 rounded-full bg-white/85" />
          </div>
        </div>
      ))}
    </div>
  );
}

function SoldOutStatusRow({ price }: { price: string }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
      <span className="rounded-md border border-[#9CA3AF] bg-white px-2.5 py-1 text-xs font-extrabold text-[#374151]">
        SOLD OUT
      </span>
      <span className="font-bold text-[#111827]">From: {price}</span>
    </div>
  );
}

function SoldOutWaitlistRow() {
  return (
    <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3.5 sm:px-5">
      <p className="min-w-0 text-[13px] font-semibold text-[#374151]">Looking for different dates?</p>
      <button
        type="button"
        className="h-9 shrink-0 rounded-xl border border-primary bg-white px-4 text-xs font-extrabold text-primary"
      >
        Join Waitlist
      </button>
    </div>
  );
}

function ViewSoldOutRoomsBar({
  count,
  expanded,
  onToggle,
}: {
  count: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      className="flex w-full items-center justify-between gap-3 rounded-[1.05rem] bg-white px-4 py-3.5 text-left shadow-sm sm:px-5"
    >
      <span className="rounded-md border border-[#9CA3AF] bg-white px-2.5 py-1 text-xs font-extrabold text-[#374151]">
        SOLD OUT
      </span>
      <span className="inline-flex items-center gap-1 text-sm font-extrabold text-primary">
        View Sold Out Rooms ({count})
        <ChevronDown className={`size-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
      </span>
    </button>
  );
}

function RoomAvailabilityPriceRow({ availableFrom, price }: { availableFrom: string; price: string }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
      <span className="rounded-md border border-[#0F8B67] bg-[#F4FFFA] px-2.5 py-1 font-semibold text-[#047857]">
        Available from: <strong>{availableFrom}</strong>
      </span>
      <span className="font-bold text-[#111827]">From: {price}</span>
    </div>
  );
}

function RoomFeatureGrid({ features }: { features: RoomFeature[] }) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
      {features.map(([label, Icon]) => (
        <div key={label} className="flex items-center gap-2.5">
          <Icon className="size-5 shrink-0 text-[#172554]" aria-hidden="true" />
          <p className="text-[13px] font-semibold">{label}</p>
        </div>
      ))}
      <button type="button" className="col-span-2 inline-flex items-center gap-1 text-left text-sm font-extrabold text-primary sm:col-span-1">
        View More Details
        <ChevronRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}

function TenancyOptionList({
  tenancies,
}: {
  tenancies: Array<{
    duration: string;
    moveIn: string;
    moveOut: string;
    note: string;
    price: string;
  }>;
}) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {tenancies.map((tenancy) => (
        <TenancyOptionRow key={`${tenancy.duration}-${tenancy.moveIn}`} tenancy={tenancy} />
      ))}
    </div>
  );
}

function TenancyOptionRow({
  tenancy,
}: {
  tenancy: {
    duration: string;
    moveIn: string;
    moveOut: string;
    note: string;
    price: string;
  };
}) {
  return (
    <div className="p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1 text-[13px] leading-5 text-muted-foreground">
          <p>
            Duration: <strong className="text-[#111827]">{tenancy.duration}</strong>
          </p>
          <p>
            Move In: <strong className="text-[#111827]">{tenancy.moveIn}</strong>
          </p>
          <p>
            Move Out: <strong className="text-[#111827]">{tenancy.moveOut}</strong>
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-sm font-extrabold">{tenancy.price}</p>
          <button type="button" className="mt-3 h-9 min-w-24 rounded-xl bg-primary px-5 text-xs font-extrabold text-white">
            Book
          </button>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-secondary px-3 py-2 text-xs font-medium text-muted-foreground">Note: {tenancy.note}</p>
    </div>
  );
}

function HouseRulesCard({ hostel }: { hostel: Hostel }) {
  const cancellationRules = [
    {
      title: "Cancellation Policy",
      description: "Students should confirm cancellation dates with management before paying a deposit.",
    },
    {
      title: "Visitor Policy",
      description: "Guests may be allowed during approved visiting hours with manager permission.",
    },
    {
      title: "Damage Deposit Policy",
      description: "Damage costs may be deducted from the refundable deposit after inspection.",
    },
  ];
  const policyRules = [
    {
      title: "Room Allocation",
      description: "Students can indicate preferred room position, but final allocation depends on availability.",
      icon: CheckCircle2,
    },
    {
      title: "Check-In Guide",
      description: `Inspect ${hostel.name} with the manager and confirm keys before moving in.`,
      icon: CalendarDays,
    },
    {
      title: "Renewal Policy",
      description: "Returning students should renew early before rooms are released to new enquiries.",
      icon: CheckCircle2,
    },
    {
      title: "Early Check-In Request",
      description: "Early move-in requests can be shared in advance and depend on room readiness.",
      icon: CalendarDays,
    },
    {
      title: "Noise Policy",
      description: "Quiet hours help students study and rest, especially during examination periods.",
      icon: ShieldCheck,
    },
  ];

  return (
    <Card className="mt-3" padded={false}>
      <h2 className="px-4 py-4 text-lg font-extrabold sm:px-5">House Rules</h2>
      <div className="border-t border-border px-4 py-4 sm:px-5">
        <HouseRuleGroup title="Cancellation Policies" icon={ClipboardList} rules={cancellationRules} />
        <div className="mt-4 divide-y divide-border border-t border-border">
          {policyRules.map((rule) => (
            <HouseRuleItem key={rule.title} title={rule.title} description={rule.description} icon={rule.icon} separated />
          ))}
        </div>
      </div>
    </Card>
  );
}

function HouseRuleGroup({
  title,
  icon: Icon,
  rules,
}: {
  title: string;
  icon: LucideIcon;
  rules: Array<{ title: string; description: string }>;
}) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 size-7 shrink-0 text-[#172554]" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-medium">{title}</h3>
          <div className="mt-3 space-y-4">
            {rules.map((rule) => (
              <HouseRuleItem key={rule.title} title={rule.title} description={rule.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HouseRuleItem({
  title,
  description,
  icon: Icon,
  separated = false,
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
  separated?: boolean;
}) {
  const content = (
    <>
      {Icon ? <Icon className="mt-1 size-6 shrink-0 text-[#172554]" aria-hidden="true" /> : null}
      <div className="min-w-0 flex-1">
        <h4 className="text-[13px] font-medium leading-5 text-[#111827]">{title}</h4>
        <p className="mt-1 line-clamp-1 text-[13px] leading-5 text-muted-foreground">{description}</p>
        <button type="button" className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-[#111827]">
          View more
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </>
  );

  if (separated) {
    return <div className="flex items-start gap-3 py-4">{content}</div>;
  }

  return <div className="flex items-start gap-3">{content}</div>;
}

function MeetResidentsCard() {
  const distribution = [
    { label: "University of Cape Coast", percent: 68 },
    { label: "Cape Coast Technical University", percent: 18 },
    { label: "Nursing / Training Colleges", percent: 9 },
    { label: "Others", percent: 5 },
  ];

  return (
    <Card className="mt-3" padded={false}>
      <h2 className="px-4 py-4 text-lg font-extrabold sm:px-5">Meet the Residents</h2>
      <div className="border-t border-border px-4 py-4 sm:px-5">
        <CommunityBadge label="UCC Student Community" />
        <ResidentDistributionList rows={distribution} />
        <DashedDivider className="mb-3 mt-5" />
        <DataSourceNote />
      </div>
    </Card>
  );
}

function CommunityBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex h-7 items-center gap-2 rounded-full border border-[#B9DEC6] bg-[#EAF5EE] px-3 text-xs font-extrabold text-[#165D39]">
      <CheckCircle2 className="size-4" aria-hidden="true" />
      {label}
    </span>
  );
}

function ResidentDistributionList({ rows }: { rows: Array<{ label: string; percent: number }> }) {
  return (
    <div className="mt-5 space-y-5">
      {rows.map((row) => (
        <ResidentDistributionRow key={row.label} label={row.label} percent={row.percent} />
      ))}
    </div>
  );
}

function ResidentDistributionRow({ label, percent }: { label: string; percent: number }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <p className="min-w-0 truncate text-[13px] font-extrabold text-[#111827]">{label}</p>
        <p className="shrink-0 text-sm font-extrabold tabular-nums text-[#165D39]">{percent}%</p>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E5E7EB]">
        <div className="h-full rounded-full bg-[#168A64]" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function DataSourceNote() {
  return (
    <p className="flex items-center gap-2 text-[12px] font-medium text-muted-foreground">
      <Info className="size-4 shrink-0" aria-hidden="true" />
      Data Source: based on hostel enquiries and student bookings
    </p>
  );
}

function PaymentFeesCard() {
  const items = [
    {
      title: "Booking Deposit",
      description: "Some hostels may require a small deposit to reserve your room before move-in.",
      icon: Banknote,
    },
    {
      title: "Security Deposit",
      description: "Students may pay a refundable deposit to cover damages or unpaid balances.",
      icon: CheckCircle2,
    },
    {
      title: "Pay In Instalment",
      description: "Some hostel managers allow students to pay in approved instalment plans.",
      icon: CalendarDays,
    },
    {
      title: "Mode of Payment",
      description: "Accepted payments may include mobile money, bank transfer, card payment, or cash at office.",
      icon: CreditCard,
      methods: ["MTN MoMo", "Vodafone Cash", "AirtelTigo Money", "Bank Transfer", "Card", "Cash"],
    },
    {
      title: "Guarantor Requirement",
      description: "Some hostels may require a parent, guardian, or sponsor contact before approval.",
      icon: ShieldCheck,
    },
    {
      title: "Additional Fees",
      description: "Some rooms may have extra charges for utilities, maintenance, keys, or late payment.",
      icon: DollarSign,
    },
  ];

  return (
    <Card className="mt-3 mb-3" padded={false}>
      <h2 className="px-4 py-4 text-lg font-extrabold sm:px-5">Payment and Fees</h2>
      <div className="divide-y divide-border border-t border-border px-4 sm:px-5">
        {items.map((item) => (
          <PaymentFeeItem
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            methods={item.methods}
          />
        ))}
      </div>
    </Card>
  );
}

function PaymentFeeItem({
  title,
  description,
  icon: Icon,
  methods,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  methods?: string[];
}) {
  return (
    <div className="flex items-start gap-3 py-4">
      <Icon className="mt-1 size-6 shrink-0 text-[#172554]" aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <h3 className="text-[13px] font-extrabold leading-5 text-[#111827]">{title}</h3>
        <p className="mt-1 line-clamp-1 text-[13px] leading-5 text-muted-foreground">{description}</p>
        {methods ? <PaymentMethodBadges methods={methods} /> : null}
        <button type="button" className="mt-1.5 inline-flex items-center gap-1 text-sm font-extrabold text-[#111827]">
          View more
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function PaymentMethodBadges({ methods }: { methods: string[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {methods.map((method) => (
        <span
          key={method}
          className="inline-flex h-6 items-center rounded-md border border-[#D9DEE8] bg-[#F8FAFC] px-2 text-[10.5px] font-extrabold text-[#172554]"
        >
          {method}
        </span>
      ))}
    </div>
  );
}

function FAQCard() {
  const [openQuestion, setOpenQuestion] = useState("What bills are included in the rent?");
  const questions = [
    {
      question: "What bills are included in the rent?",
      answer:
        "Most basic utilities may be included depending on the hostel. Always check the room details before booking or making payment.",
    },
    {
      question: "Can I pay in instalments?",
      answer: "Some managers allow approved instalment plans, especially for semester or academic-year room fees.",
    },
    {
      question: "Can I inspect the room before paying?",
      answer: "Students should inspect the room or request current photos before sending any deposit.",
    },
    {
      question: "Is there water available every day?",
      answer: "Water reliability depends on the hostel. Check the listing notes and confirm with management.",
    },
    {
      question: "Can I share a room with someone else?",
      answer: "Shared rooms are listed by occupancy, such as 2 in a room or 3 in a room.",
    },
    {
      question: "Is there a refund if I cancel?",
      answer: "Refunds depend on the cancellation date and the manager's policy.",
    },
  ];

  return (
    <Card className="mt-3" padded={false}>
      <h2 className="px-4 py-4 text-lg font-extrabold sm:px-5">Frequently Asked Questions</h2>
      <div className="border-t border-border px-4 py-4 sm:px-5">
        <FAQSearchBar />
      </div>
      <FAQAccordion questions={questions} openQuestion={openQuestion} onOpenChange={setOpenQuestion} />
      <button type="button" className="mx-auto flex items-center gap-1 py-3.5 text-sm font-extrabold text-primary">
        View All Questions (73)
        <ChevronDown className="size-4" aria-hidden="true" />
      </button>
    </Card>
  );
}

function FAQSearchBar() {
  return (
    <label className="flex h-12 items-center gap-3 rounded-full border border-border bg-white px-4">
      <Search className="size-5 shrink-0 text-[#111827]" aria-hidden="true" />
      <span className="sr-only">Search questions about this hostel</span>
      <input
        type="search"
        placeholder="Search questions about this hostel"
        className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#111827] outline-none placeholder:text-[#9CA3AF]"
      />
    </label>
  );
}

function FAQAccordion({
  questions,
  openQuestion,
  onOpenChange,
}: {
  questions: Array<{ question: string; answer: string }>;
  openQuestion: string;
  onOpenChange: (question: string) => void;
}) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {questions.map((item) => (
        <FAQAccordionItem
          key={item.question}
          item={item}
          open={openQuestion === item.question}
          onToggle={() => onOpenChange(openQuestion === item.question ? "" : item.question)}
        />
      ))}
    </div>
  );
}

function FAQAccordionItem({
  item,
  open,
  onToggle,
}: {
  item: { question: string; answer: string };
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="px-4 py-3.5 sm:px-5">
      <button type="button" onClick={onToggle} className="flex w-full items-start justify-between gap-3 text-left">
        <span className="text-[14px] font-extrabold leading-5 text-[#111827]">{item.question}</span>
        <ChevronDown className={`mt-0.5 size-5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open ? <p className="mt-3 text-[13px] leading-6 text-[#374151]">{item.answer}</p> : null}
    </div>
  );
}

function NearbyLocationsMapCard() {
  const places = [
    ["University of Cape Coast", "0.3 km"],
    ["UCC Science Market", "0.6 km"],
    ["Ayensu Junction", "0.8 km"],
    ["UCC Main Gate", "1.1 km"],
    ["Kotokuraba Station", "2.4 km"],
  ];

  return (
    <Card className="mt-3 overflow-hidden" padded={false}>
      <h2 className="px-4 py-4 text-lg font-extrabold sm:px-5">Nearby Locations and Map</h2>
      <div className="border-t border-border px-4 py-4 sm:px-5">
        <PropertyMapPreview />
        <DistanceUnitToggle />
      </div>
      <NearbyCategoryTabs />
      <NearbyPlaceList places={places} />
      <button type="button" className="mx-auto flex items-center gap-1 py-3.5 text-sm font-extrabold text-primary">
        View More Nearby Places
        <ChevronRight className="size-4" aria-hidden="true" />
      </button>
    </Card>
  );
}

function PropertyMapPreview() {
  const markers = [
    { label: "UCC", left: "62%", top: "30%", icon: GraduationCap },
    { label: "Market", left: "41%", top: "63%", icon: Store },
    { label: "Taxi", left: "71%", top: "62%", icon: BusFront },
    { label: "Gate", left: "28%", top: "42%", icon: Landmark },
  ];

  return (
    <div className="relative aspect-[1.78] overflow-hidden rounded-xl border border-border bg-[#EAF1FF]">
      <div className="absolute inset-0 opacity-80">
        <div className="absolute left-[12%] top-0 h-full w-12 rotate-12 bg-white/60" />
        <div className="absolute left-[42%] top-0 h-full w-8 -rotate-12 bg-white/65" />
        <div className="absolute left-0 top-[28%] h-6 w-full rotate-3 bg-white/70" />
        <div className="absolute left-0 top-[64%] h-5 w-full -rotate-6 bg-white/70" />
        <div className="absolute bottom-0 right-0 h-24 w-28 rounded-tl-full bg-[#EAF5EE]" />
      </div>

      <div className="absolute left-3 top-1/2 z-10 -translate-y-1/2 overflow-hidden rounded-lg border border-border bg-white shadow-sm">
        <button type="button" className="grid size-9 place-items-center border-b border-border" aria-label="Zoom in">
          <span className="text-xl font-extrabold leading-none">+</span>
        </button>
        <button type="button" className="grid size-9 place-items-center border-b border-border" aria-label="Zoom out">
          <span className="text-xl font-extrabold leading-none">-</span>
        </button>
        <button type="button" className="grid size-9 place-items-center" aria-label="Use current location">
          <Navigation className="size-4" aria-hidden="true" />
        </button>
      </div>

      <MapMarker left="50%" top="49%" label="Hostel" active icon={Home} />
      {markers.map((marker) => (
        <MapMarker key={marker.label} left={marker.left} top={marker.top} label={marker.label} icon={marker.icon} />
      ))}
      <MapExploreButton />
    </div>
  );
}

function MapMarker({
  left,
  top,
  label,
  icon: Icon,
  active = false,
}: {
  left: string;
  top: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
}) {
  return (
    <span
      className={`absolute z-10 grid size-8 -translate-x-1/2 -translate-y-full place-items-center rounded-full text-white shadow-sm ${
        active ? "bg-primary" : "bg-[#172554]"
      }`}
      style={{ left, top }}
      aria-label={label}
    >
      <Icon className="size-4" aria-hidden="true" />
    </span>
  );
}

function MapExploreButton() {
  return (
    <button
      type="button"
      className="absolute bottom-5 right-4 z-10 rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-primary shadow-sm"
    >
      Explore
    </button>
  );
}

function DistanceUnitToggle() {
  return (
    <div className="mt-3 grid grid-cols-2 rounded-lg bg-[#F3F4F6] p-1">
      <button type="button" className="h-10 rounded-md text-sm font-extrabold text-[#374151]">
        Miles
      </button>
      <button type="button" className="h-10 rounded-md bg-white text-sm font-extrabold text-[#111827] shadow-sm">
        Kilometers
      </button>
    </div>
  );
}

function NearbyCategoryTabs() {
  const categories = [
    ["Universities", GraduationCap],
    ["Bus Stations", BusFront],
    ["Taxi Points", Navigation],
  ] satisfies Array<[string, LucideIcon]>;

  return (
    <div className="no-scrollbar flex overflow-x-auto border-y border-border px-4 sm:px-5">
      {categories.map(([label, Icon], index) => (
        <button
          key={label}
          type="button"
          className={`flex h-12 shrink-0 items-center gap-2 border-b-2 px-3 text-sm font-extrabold ${
            index === 0 ? "border-primary text-primary" : "border-transparent text-[#374151]"
          }`}
        >
          <Icon className="size-5" aria-hidden="true" />
          {label}
        </button>
      ))}
    </div>
  );
}

function NearbyPlaceList({ places }: { places: string[][] }) {
  return (
    <div className="divide-y divide-border">
      {places.map(([name, distance]) => (
        <NearbyPlaceRow key={name} name={name} distance={distance} />
      ))}
    </div>
  );
}

function NearbyPlaceRow({ name, distance }: { name: string; distance: string }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-5">
      <p className="min-w-0 text-[14px] font-semibold leading-5 text-[#111827]">{name}</p>
      <p className="shrink-0 text-[13px] font-semibold tabular-nums text-muted-foreground">{distance}</p>
    </div>
  );
}

function LiveTourCard() {
  return (
    <Card className="relative mt-3 overflow-hidden" padded={false}>
      <div className="pointer-events-none absolute -right-10 -top-12 size-36 rounded-full bg-[#FFF0F5]" />
      <div className="relative flex items-center gap-4 px-4 py-4 sm:px-5">
        <div className="shrink-0 text-center text-primary">
          <p className="text-3xl font-extrabold leading-none">360</p>
          <p className="text-[10px] font-extrabold">ROOM TOUR</p>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-balance text-lg font-extrabold leading-6">
            Interested in this <span className="text-primary">hostel?</span>
          </h2>
          <p className="mt-1 text-[13px] font-medium text-muted-foreground">Request a room tour today.</p>
          <button type="button" className="mt-3 h-9 rounded-xl border border-primary bg-white px-5 text-xs font-extrabold text-primary">
            Request now
          </button>
        </div>
      </div>
    </Card>
  );
}

function ReviewsCard() {
  const scores = [
    ["Location", "4.5", MapPin],
    ["Cleanliness", "4.3", CheckCircle2],
    ["Security", "4.4", ShieldCheck],
    ["Value for Money", "4.2", Banknote],
    ["Manager Support", "4.1", Headphones],
    ["Room Comfort", "4.0", Home],
  ] satisfies Array<[string, string, LucideIcon]>;
  const reviewPhotos = [
    "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=260&q=80",
    "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=260&q=80",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=260&q=80",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=260&q=80",
  ];
  const reviews = [
    {
      initials: "AA",
      name: "Ama Asare",
      rating: "5.0",
      text: "The hostel is close to campus and the manager responds quickly. The room was clean when I moved in.",
      photos: reviewPhotos.slice(0, 2),
    },
    {
      initials: "KO",
      name: "Kwame Osei",
      rating: "4.8",
      text: "Good place for Science students. Water was available during my stay and the study desk helped a lot.",
      photos: reviewPhotos.slice(2, 4),
    },
  ];

  return (
    <Card className="mt-3" padded={false}>
      <div className="flex flex-wrap items-center gap-2 px-4 py-4 sm:px-5">
        <h2 className="text-lg font-extrabold">Student Reviews</h2>
        <span className="text-lg font-extrabold tabular-nums">4.8</span>
        <span className="flex text-[#10A779]" aria-label="5 star rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="size-4 fill-current" aria-hidden="true" />
          ))}
        </span>
        <span className="text-sm font-extrabold">(17)</span>
      </div>
      <ReviewScoreList scores={scores} />
      <div className="border-t border-border px-4 py-4 sm:px-5">
        <p className="flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground">
          Summary curated from student enquiries
          <Info className="size-4" aria-hidden="true" />
        </p>
        <p className="mt-3 text-pretty text-[13px] leading-6 text-[#374151]">
          Students like the location, easy campus access and friendly management. Some reviews mention maintenance and
          cleanliness details that should be confirmed during inspection.
        </p>
      </div>
      <div className="border-t border-border px-4 py-4 sm:px-5">
        <h3 className="text-base font-extrabold">17 Reviews</h3>
        <ReviewPhotoStrip photos={reviewPhotos} />
        <ReviewCardCarousel reviews={reviews} />
      </div>
      <button type="button" className="mx-auto flex items-center gap-1 py-3.5 text-sm font-extrabold text-primary">
        Read All Reviews
        <ChevronRight className="size-4" aria-hidden="true" />
      </button>
    </Card>
  );
}

function ReviewPhotoStrip({ photos }: { photos: string[] }) {
  return (
    <div className="no-scrollbar -mx-1 mt-3 flex gap-2 overflow-x-auto px-1">
      {photos.map((photo, index) => (
        <div key={photo} className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-lg bg-secondary">
          <Image src={photo} alt={`Student review photo ${index + 1}`} fill sizes="6rem" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

function ReviewCardCarousel({
  reviews,
}: {
  reviews: Array<{ initials: string; name: string; rating: string; text: string; photos: string[] }>;
}) {
  return (
    <div className="no-scrollbar -mx-4 mt-4 flex gap-3 overflow-x-auto px-4 sm:-mx-5 sm:px-5">
      {reviews.map((review) => (
        <ReviewCard key={review.name} review={review} />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
}: {
  review: { initials: string; name: string; rating: string; text: string; photos: string[] };
}) {
  return (
    <article className="w-[82%] shrink-0 rounded-xl border border-border bg-white p-4 sm:w-[21rem]">
      <div className="flex items-start gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-sm font-bold text-muted-foreground">
          {review.initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="truncate text-sm font-extrabold text-[#111827]">{review.name}</h3>
            <span className="inline-flex h-7 shrink-0 items-center gap-1 rounded-lg bg-[#10A779] px-2.5 text-xs font-extrabold text-white">
              {review.rating}
              <Star className="size-3.5 fill-current" aria-hidden="true" />
            </span>
          </div>
          <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-[#374151]">
            {review.text} <span className="font-extrabold text-[#111827]">Read more</span>
          </p>
          <div className="mt-3 flex gap-2">
            {review.photos.map((photo, index) => (
              <div key={`${review.name}-${photo}`} className="relative aspect-square w-16 overflow-hidden rounded-lg bg-secondary">
                <Image src={photo} alt={`${review.name} review upload ${index + 1}`} fill sizes="4rem" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ReviewScoreList({ scores }: { scores: Array<[string, string, LucideIcon]> }) {
  return (
    <div className="divide-y divide-border border-t border-border px-4 sm:px-5">
      {scores.map(([label, score, Icon]) => (
        <ReviewScoreRow key={label} label={label} score={score} icon={Icon} />
      ))}
    </div>
  );
}

function ReviewScoreRow({ label, score, icon: Icon }: { label: string; score: string; icon: LucideIcon }) {
  return (
    <div className="flex items-center gap-3 py-4">
      <Icon className="size-6 shrink-0 text-[#6B7280]" aria-hidden="true" />
      <p className="min-w-0 flex-1 text-[14px] font-extrabold text-[#111827]">{label}</p>
      <p className="shrink-0 text-sm font-semibold tabular-nums text-[#374151]">{score}</p>
    </div>
  );
}

function PriceTrendCard() {
  return (
    <Card className="mb-3 mt-3" padded={false}>
      <h2 className="px-4 py-4 text-lg font-extrabold sm:px-5">Price Trend</h2>
      <div className="border-t border-border px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3">
          <button type="button" className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-white px-4 text-sm font-bold text-[#374151]">
            All Room Types
            <ChevronDown className="size-4" aria-hidden="true" />
          </button>
          <button type="button" className="h-10 px-2 text-sm font-bold text-[#9CA3AF]">
            Reset
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <PriceInsightCard
            title="Budget Friendly"
            value="24.39%"
            description="This room is priced below the average cost of similar hostels near campus."
          />
          <PriceInsightCard
            title="Book now"
            value="1.07%"
            description="This room price has gone down recently."
          />
        </div>

        <p className="mt-5 text-[13px] font-semibold text-[#374151]">
          Average cost near UCC: <strong className="font-extrabold text-[#111827]">GHS 3,200/semester</strong>
        </p>
        <PriceTrendChart />
      </div>
    </Card>
  );
}

function PriceInsightCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-3">
      <h3 className="flex items-center gap-1 text-[13px] font-extrabold text-[#111827]">
        {title}
        <Info className="size-4" aria-hidden="true" />
      </h3>
      <p className="mt-3 text-3xl font-extrabold leading-none text-[#10A779]">↓{value}</p>
      <p className="mt-3 text-[12px] leading-5 text-muted-foreground">{description}</p>
    </div>
  );
}

function PriceTrendChart() {
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept"];

  return (
    <div className="mt-4">
      <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-[#3B82F6]" />
          2026-2027
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-[#9CA3AF]" />
          2025-2026
        </span>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-white p-3">
        <div className="relative h-56">
          <div className="absolute inset-0 grid grid-rows-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <span key={index} className="border-t border-[#E5E7EB]" />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-cols-12">
            {months.map((month) => (
              <span key={month} className="border-l border-[#EEF0F4]" />
            ))}
          </div>
          <div className="absolute left-0 right-0 top-[43%] h-0.5 bg-[#9CA3AF]" />
          <div className="absolute left-0 right-[18%] top-[47%] h-0.5 bg-[#3B82F6]" />
          <span className="absolute right-[17%] top-[calc(47%-0.38rem)] size-3 rounded-full bg-[#3B82F6]" />
          <span className="absolute right-[17%] top-[calc(43%-0.38rem)] size-3 rounded-full bg-[#9CA3AF]" />
          <span className="absolute left-0 top-0 -translate-y-1/2 text-[11px] font-bold text-muted-foreground">GHS 4k</span>
          <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[11px] font-bold text-muted-foreground">GHS 3k</span>
          <span className="absolute bottom-0 left-0 text-[11px] font-bold text-muted-foreground">GHS 2k</span>
        </div>
        <div className="mt-2 grid grid-cols-6 gap-y-1 text-center text-[10px] font-bold text-muted-foreground">
          {months.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

type MiniProperty = {
  name: string;
  location: string;
  price: string;
  image: string;
  badge?: string;
  rating?: string;
};

function RecentlyViewedSection({ hostel }: { hostel: Hostel }) {
  return <PropertyCarouselSection title="Recently Viewed" properties={makePropertyCards(hostel, "recent")} />;
}

function SimilarPropertiesSection({ hostel }: { hostel: Hostel }) {
  return <PropertyCarouselSection title="Similar Properties" properties={makePropertyCards(hostel, "similar")} />;
}

function NearbyPropertiesSection({ hostel }: { hostel: Hostel }) {
  return <PropertyCarouselSection title="Nearby Properties" properties={makePropertyCards(hostel, "nearby")} />;
}

function PopularPropertiesSection({ hostel }: { hostel: Hostel }) {
  return <PropertyCarouselSection title="Popular Properties" properties={makePropertyCards(hostel, "popular")} />;
}

function BudgetFriendlyPropertiesSection({ hostel }: { hostel: Hostel }) {
  return <PropertyCarouselSection title="Budget Friendly Properties" properties={makePropertyCards(hostel, "budget")} />;
}

function PropertyCarouselSection({ title, properties }: { title: string; properties: MiniProperty[] }) {
  return (
    <Card className="mt-3 overflow-hidden" padded={false}>
      <h2 className="px-4 py-4 text-lg font-extrabold sm:px-5">{title}</h2>
      <PropertyCardCarousel properties={properties} />
    </Card>
  );
}

function PropertyCardCarousel({ properties }: { properties: MiniProperty[] }) {
  return (
    <div className="no-scrollbar flex gap-3 overflow-x-auto border-t border-border px-4 py-4 sm:px-5">
      {properties.map((property) => (
        <MiniPropertyCard key={`${property.name}-${property.price}`} property={property} />
      ))}
    </div>
  );
}

function MiniPropertyCard({ property }: { property: MiniProperty }) {
  return (
    <article className="w-[76%] shrink-0 overflow-hidden rounded-xl border border-border bg-white sm:w-72">
      <div className="relative aspect-[1.18] bg-secondary">
        <Image src={property.image} alt={`${property.name} room preview`} fill sizes="18rem" className="object-cover" />
        {property.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-[#FFF0F5] px-3 py-1 text-xs font-extrabold text-primary shadow-sm">
            {property.badge}
          </span>
        ) : null}
        <button type="button" className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white shadow-sm" aria-label={`Save ${property.name}`}>
          <Heart className="size-5" aria-hidden="true" />
        </button>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-6 rounded-full bg-white" />
          <span className="size-1.5 rounded-full bg-white" />
          <span className="size-1.5 rounded-full bg-white" />
        </div>
      </div>
      <div className="p-3">
        <h3 className="truncate text-base font-extrabold text-[#111827]">{property.name}</h3>
        <p className="mt-1 truncate text-[13px] font-medium text-muted-foreground">{property.location}</p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <p className="text-[13px] text-[#111827]">
            From <strong className="text-lg font-extrabold">{property.price}</strong>
          </p>
          {property.rating ? (
            <span className="inline-flex items-center gap-1 text-xs font-bold">
              <Star className="size-3.5 fill-[#10A779] text-[#10A779]" aria-hidden="true" />
              {property.rating}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function makePropertyCards(hostel: Hostel, variant: "recent" | "similar" | "nearby" | "popular" | "budget"): MiniProperty[] {
  const base = [
    {
      name: "Science View Residence",
      location: "Science / New Site, Cape Coast",
      price: "GHS 2,800",
      image: hostel.gallery[0] ?? hostel.image,
      rating: "4.8",
    },
    {
      name: "Campus Gate Hostel",
      location: "UCC Science, Cape Coast",
      price: "GHS 3,200",
      image: hostel.gallery[1] ?? hostel.image,
      badge: "Student Choice",
      rating: "4.7",
    },
    {
      name: "Ayensu Court Hostel",
      location: "Ayensu, Cape Coast",
      price: "GHS 2,400",
      image: hostel.gallery[2] ?? hostel.image,
      rating: "4.6",
    },
  ];

  if (variant === "popular") {
    return base.map((item, index) => ({ ...item, badge: index === 0 ? "Popular" : item.badge }));
  }
  if (variant === "budget") {
    return base.map((item, index) => ({ ...item, badge: index === 0 ? "Budget pick" : item.badge, price: index === 0 ? "GHS 2,200" : item.price }));
  }
  if (variant === "nearby") {
    return base.map((item) => ({ ...item, location: item.location.replace("Cape Coast", "near UCC") }));
  }
  if (variant === "similar") {
    return base.map((item, index) => ({ ...item, badge: index === 0 ? "Similar room" : item.badge }));
  }
  return base;
}

function NearbyPlacesFooterCard() {
  const links = [
    "Hostels in Cape Coast",
    "Hostels near UCC",
    "Hostels in Ayensu",
    "Hostels near Science",
    "Hostels near New Site",
    "Hostels near Amamoma",
    "Hostels near Kotokuraba",
    "Hostels near CCTU",
  ];

  return (
    <Card className="mt-3 overflow-hidden" padded={false}>
      <h2 className="px-4 py-4 text-lg font-extrabold sm:px-5">Nearby Places</h2>
      <FooterLinkTabs />
      <div className="space-y-4 border-t border-border px-4 py-4 sm:px-5">
        {links.map((link) => (
          <Link key={link} href="/search/results?q=UCC" className="block text-[13px] font-medium text-[#374151] underline underline-offset-2">
            {link}
          </Link>
        ))}
      </div>
      <button type="button" className="mx-auto flex items-center gap-1 border-t border-border py-3.5 text-sm font-extrabold text-primary">
        Show More (11)
        <ChevronDown className="size-4" aria-hidden="true" />
      </button>
    </Card>
  );
}

function FooterLinkTabs() {
  const tabs = ["Cities", "Areas", "Universities"];

  return (
    <div className="flex gap-6 px-4 sm:px-5">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          className={`h-12 border-b-2 text-sm font-extrabold ${index === 0 ? "border-primary text-primary" : "border-transparent text-[#111827]"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function AppFooter() {
  const rows = ["Company", "Discover", "Support", "Contact us"];

  return (
    <footer id="appFooter" className="mt-3 rounded-t-[1.15rem] bg-white px-4 pb-32 pt-10 text-center sm:px-5 lg:pb-12">
      <p className="text-4xl font-extrabold tracking-normal text-[#111827]">cobra</p>
      <p className="mt-3 text-sm font-medium text-muted-foreground">cobra © 2026. All rights reserved.</p>
      <div className="mx-auto mt-8 max-w-sm">
        <p className="text-lg font-extrabold text-[#111827]">Trusted by students</p>
        <div className="mt-3 flex justify-center gap-1.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="grid size-9 place-items-center rounded-md bg-[#10A779] text-white">
              <Star className="size-5 fill-current" aria-hidden="true" />
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm font-medium text-[#111827]">
          4.8 average rating <span className="text-muted-foreground">|</span> demo student reviews
        </p>
      </div>
      <div className="mx-auto mt-9 grid max-w-sm grid-cols-[1fr_auto_1fr] items-start gap-4 text-left">
        <div>
          <h3 className="text-sm font-extrabold text-[#374151]">Get the app</h3>
          <div className="mt-3 flex gap-2">
            <span className="rounded-lg border border-border px-2 py-1 text-[11px] font-extrabold text-[#172554]">Google Play</span>
            <span className="rounded-lg border border-border px-2 py-1 text-[11px] font-extrabold text-[#172554]">App Store</span>
          </div>
        </div>
        <span className="h-16 w-px bg-border" />
        <div>
          <h3 className="text-sm font-extrabold text-[#374151]">Payment Options</h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["MTN MoMo", "Visa", "Mastercard", "Bank"].map((option) => (
              <span key={option} className="rounded-md bg-secondary px-2 py-1 text-[10px] font-extrabold text-[#172554]">
                {option}
              </span>
            ))}
          </div>
        </div>
      </div>
      <FooterAccordion rows={rows} />
    </footer>
  );
}

function FooterAccordion({ rows }: { rows: string[] }) {
  const [openRow, setOpenRow] = useState("Company");

  return (
    <div className="mt-10 divide-y divide-border border-y border-border text-left">
      {rows.map((row) => (
        <div key={row}>
          <button
            type="button"
            onClick={() => setOpenRow(openRow === row ? "" : row)}
            className="flex w-full items-center justify-between py-4 text-base font-extrabold text-[#111827]"
          >
            {row}
            <ChevronDown className={`size-5 transition-transform duration-200 ${openRow === row ? "rotate-180" : ""}`} aria-hidden="true" />
          </button>
          {openRow === row ? (
            <div className="pb-4 text-sm font-medium leading-7 text-muted-foreground">
              <Link href="/search" className="block">Browse hostels</Link>
              <Link href="/search/results?q=UCC" className="block">UCC hostel guide</Link>
              <Link href="/search/results?q=managers" className="block">For hostel managers</Link>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function StickyPropertyHeader({ hostel, visible }: { hostel: Hostel; visible: boolean }) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-border bg-white transition-transform duration-200 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-12 max-w-[58rem] items-center gap-2.5 px-3 lg:max-w-[82rem]">
        <Link href="/search/results?q=UCC" className="grid size-8 place-items-center rounded-full" aria-label="Back to search results">
          <ArrowLeft className="size-4" aria-hidden="true" />
        </Link>
        <p className="min-w-0 flex-1 truncate text-sm font-extrabold">{hostel.name}</p>
        <HeroIconButton label="Search" icon={Search} compact />
        <HeroIconButton label={`Save ${hostel.name}`} icon={Heart} compact />
        <HeroIconButton label={`Share ${hostel.name}`} icon={Share2} compact />
      </div>
    </header>
  );
}

function PropertySectionTabs({
  activeTab,
  visible,
  tabsRef,
  tabButtonRefs,
  onTabClick,
}: {
  activeTab: string;
  visible: boolean;
  tabsRef: React.RefObject<HTMLDivElement | null>;
  tabButtonRefs: React.MutableRefObject<Record<string, HTMLButtonElement | null>>;
  onTabClick: (id: string) => void;
}) {
  return (
    <div
      className={`fixed inset-x-0 top-12 z-30 border-b border-border bg-white transition-transform duration-200 ${
        visible ? "translate-y-0" : "-translate-y-[7rem]"
      }`}
    >
      <div ref={tabsRef} className="no-scrollbar mx-auto flex max-w-[58rem] overflow-x-auto px-3 lg:max-w-[82rem]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            ref={(node) => {
              tabButtonRefs.current[tab.id] = node;
            }}
            type="button"
            onClick={() => onTabClick(tab.id)}
            className={`shrink-0 border-b-2 px-3 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-[#374151]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function StickyBookingBar({
  hidden,
  pastAvailabilitySection,
  onSeeAvailability,
}: {
  hidden: boolean;
  pastAvailabilitySection: boolean;
  onSeeAvailability: () => void;
}) {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white px-3 pb-[calc(env(safe-area-inset-bottom)+0.55rem)] pt-2.5 shadow-lg transition-transform duration-200 ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`mx-auto grid max-w-[58rem] gap-2.5 ${
          pastAvailabilitySection ? "grid-cols-[3rem_minmax(0,1fr)]" : "grid-cols-[3rem_minmax(0,1fr)_minmax(0,1fr)]"
        }`}
      >
        <button type="button" className="grid h-10 place-items-center rounded-xl border border-border" aria-label="Contact support">
          <Headphones className="size-5" aria-hidden="true" />
        </button>
        {!pastAvailabilitySection ? (
          <button
            type="button"
            onClick={onSeeAvailability}
            className="h-10 rounded-xl bg-primary text-xs font-extrabold text-white"
          >
            See Availability
          </button>
        ) : null}
        <button
          type="button"
          className={`h-10 rounded-xl text-xs font-extrabold ${
            pastAvailabilitySection ? "bg-primary text-white" : "border border-primary bg-white text-primary"
          }`}
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
}

function FloatingSupportWidget({ hidden }: { hidden: boolean }) {
  return (
    <button
      type="button"
      className={`fixed bottom-24 right-3 z-30 grid size-12 place-items-center rounded-xl border border-primary bg-white shadow-lg transition-transform duration-200 ${
        hidden ? "translate-x-20 opacity-0" : "translate-x-0 opacity-100"
      }`}
      aria-label="Open support"
    >
      <span
        className="relative block size-7 rounded-full"
        style={{ background: "conic-gradient(from 35deg, #ff385c, #ffb000, #ff385c, #f97316, #ff385c)" }}
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-0 h-3.5 w-1.5 -translate-x-1/2 rounded-full bg-white/80" />
        <span className="absolute bottom-0 left-1/2 h-3.5 w-1.5 -translate-x-1/2 rounded-full bg-white/80" />
        <span className="absolute left-0 top-1/2 h-1.5 w-3.5 -translate-y-1/2 rounded-full bg-white/80" />
        <span className="absolute right-0 top-1/2 h-1.5 w-3.5 -translate-y-1/2 rounded-full bg-white/80" />
      </span>
    </button>
  );
}

function Card({
  className = "",
  children,
  padded = true,
  surface = true,
}: {
  className?: string;
  children: React.ReactNode;
  padded?: boolean;
  surface?: boolean;
}) {
  return (
    <section className={`rounded-[1.15rem] ${surface ? "bg-white shadow-sm" : ""} ${padded ? "p-4 sm:p-5" : ""} ${className}`}>
      {children}
    </section>
  );
}

function DashedDivider({ className = "" }: { className?: string }) {
  return <div className={`my-4 border-t border-dashed border-[#D6D9DF] ${className}`} />;
}

function HeroIconButton({
  label,
  icon: Icon,
  compact = false,
}: {
  label: string;
  icon: typeof Search;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      className={`grid place-items-center rounded-full bg-white text-[#111827] shadow-sm ${
        compact ? "size-8 border border-border shadow-none" : "size-8 lg:size-9"
      }`}
      aria-label={label}
    >
      <Icon className="size-4" aria-hidden="true" />
    </button>
  );
}

function formatPrice(price: string) {
  return price.replace(/^GHS\s*/, "GHS ");
}
