"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Bike,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
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
  Printer,
  Search,
  Share2,
  ShieldCheck,
  Sofa,
  Star,
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
];

export function HostelDetailsClient({ hostel }: { hostel: Hostel }) {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [showTabs, setShowTabs] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const updateChrome = () => {
      const y = window.scrollY;
      setShowStickyHeader(y > 250);
      setShowTabs(y > 420);
    };

    updateChrome();
    window.addEventListener("scroll", updateChrome, { passive: true });
    return () => window.removeEventListener("scroll", updateChrome);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveTab(visible.target.id);
        }
      },
      {
        rootMargin: "-32% 0px -52% 0px",
        threshold: [0.08, 0.2, 0.36],
      },
    );

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    tabButtonRefs.current[activeTab]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeTab]);

  const images = useMemo(() => [...hostel.gallery, hostel.image].slice(0, 4), [hostel.gallery, hostel.image]);
  const inAvailabilitySection = activeTab === "roomTypes" || activeTab === "houseRules";

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    setActiveTab(id);
    const offset = showStickyHeader ? 108 : 64;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <main className="min-h-dvh overflow-x-hidden bg-[#E9EBEF] pb-28 text-[#111827] lg:bg-background lg:pb-10">
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
      </div>

      <FloatingSupportWidget />
      <StickyBookingBar
        inAvailabilitySection={inAvailabilitySection}
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
          className="grid size-9 place-items-center rounded-full bg-white text-[#111827] shadow-sm lg:size-10"
          aria-label="Back to search results"
        >
          <ArrowLeft className="size-5" aria-hidden="true" />
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
      <div className="p-4 pb-0 sm:p-6 sm:pb-0">
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

      <div className="space-y-3 bg-[#E9EBEF] px-2 py-3 sm:px-5">
        {roomTypes.map((room) => (
          <RoomTypeCard key={room.title} room={room} />
        ))}
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
    <article className="overflow-hidden rounded-[1.05rem] bg-white shadow-sm">
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
  return (
    <div className="mt-3 grid grid-cols-2 gap-2">
      {images.map((image, index) => (
        <div key={`${title}-${image}-${index}`} className="relative aspect-[1.42] overflow-hidden rounded-lg bg-secondary">
          <Image src={image} alt={`${title} preview ${index + 1}`} fill sizes="(min-width: 640px) 20rem, 50vw" className="object-cover" />
          {index === 0 ? (
            <span className="absolute inset-0 grid place-items-center bg-black/18 text-3xl font-extrabold text-white">
              360
              <span className="absolute mt-10 h-5 w-16 rounded-[50%] border-b-2 border-white" />
            </span>
          ) : null}
        </div>
      ))}
    </div>
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
  return (
    <Card className="mt-3">
      <h2 className="text-lg font-extrabold">House Rules</h2>
      <div className="mt-3 divide-y divide-border border-t border-border">
        {hostel.rules.map((rule) => (
          <p key={rule} className="flex items-center gap-2.5 py-3 text-[13px] font-semibold">
            <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
            {rule}
          </p>
        ))}
      </div>
    </Card>
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
  inAvailabilitySection,
  onSeeAvailability,
}: {
  inAvailabilitySection: boolean;
  onSeeAvailability: () => void;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white px-3 pb-[calc(env(safe-area-inset-bottom)+0.55rem)] pt-2.5 shadow-lg">
      <div
        className={`mx-auto grid max-w-[58rem] gap-2.5 ${
          inAvailabilitySection ? "grid-cols-[3rem_minmax(0,1fr)]" : "grid-cols-[3rem_minmax(0,1fr)_minmax(0,1fr)]"
        }`}
      >
        <button type="button" className="grid h-10 place-items-center rounded-xl border border-border" aria-label="Contact support">
          <Headphones className="size-5" aria-hidden="true" />
        </button>
        {!inAvailabilitySection ? (
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
            inAvailabilitySection ? "bg-primary text-white" : "border border-primary bg-white text-primary"
          }`}
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
}

function FloatingSupportWidget() {
  return (
    <button
      type="button"
      className="fixed bottom-24 right-3 z-30 grid size-12 place-items-center rounded-xl border border-primary bg-white shadow-lg"
      aria-label="Open support"
    >
      <span
        className="relative block size-8 rounded-full"
        style={{ background: "conic-gradient(from 35deg, #ff385c, #ffb000, #ff385c, #f97316, #ff385c)" }}
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-0 h-4 w-2 -translate-x-1/2 rounded-full bg-white/80" />
        <span className="absolute bottom-0 left-1/2 h-4 w-2 -translate-x-1/2 rounded-full bg-white/80" />
        <span className="absolute left-0 top-1/2 h-2 w-4 -translate-y-1/2 rounded-full bg-white/80" />
        <span className="absolute right-0 top-1/2 h-2 w-4 -translate-y-1/2 rounded-full bg-white/80" />
      </span>
    </button>
  );
}

function Card({
  className = "",
  children,
  padded = true,
}: {
  className?: string;
  children: React.ReactNode;
  padded?: boolean;
}) {
  return (
    <section className={`rounded-[1.15rem] bg-white shadow-sm ${padded ? "p-4 sm:p-5" : ""} ${className}`}>
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
        compact ? "size-8 border border-border shadow-none" : "size-9 lg:size-10"
      }`}
      aria-label={label}
    >
      <Icon className={compact ? "size-4" : "size-5"} aria-hidden="true" />
    </button>
  );
}

function formatPrice(price: string) {
  return price.replace(/^GHS\s*/, "GHS ");
}
