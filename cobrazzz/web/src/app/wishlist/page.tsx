"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Discover,
  Heart as IconsaxHeart,
  Profile,
} from "iconsax-react";
import {
  BadgePercent,
  Bath,
  BriefcaseBusiness,
  Camera,
  CheckCircle2,
  ClipboardList,
  Droplets,
  Heart,
  Home,
  Monitor,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { hostels, type Hostel } from "@/lib/hostels";

type ActivityTab = "wishlist" | "recentlyViewed" | "enquired" | "booked";

const activityTabs: Array<{ id: ActivityTab; label: string }> = [
  { id: "wishlist", label: "Wishlist" },
  { id: "recentlyViewed", label: "Recently Viewed" },
  { id: "enquired", label: "Enquired" },
  { id: "booked", label: "Booked" },
];

const emptyCopy: Record<ActivityTab, { description: string; action: string; href: string }> = {
  wishlist: {
    description: "Kindly login to save and view your wishlist",
    action: "Login",
    href: "#login",
  },
  recentlyViewed: {
    description: "Begin your accommodation search now to see your recently viewed properties right here!",
    action: "Start exploring",
    href: "/",
  },
  enquired: {
    description: "Begin your accommodation search now to see your enquired properties right here!",
    action: "Start exploring",
    href: "/",
  },
  booked: {
    description: "Begin your accommodation search now to see your booked properties right here!",
    action: "Start exploring",
    href: "/",
  },
};

export default function MyActivitiesScreen() {
  const [activeTab, setActiveTab] = useState<ActivityTab>("wishlist");
  const recentlyViewed = useMemo(() => hostels.slice(0, 3), []);
  const showCards = activeTab === "recentlyViewed" && recentlyViewed.length > 0;

  return (
    <main className="min-h-dvh bg-white pb-20 text-[#111827]">
      <div className="sticky top-0 z-20 border-b border-border bg-white/98 pt-4">
        <div className="px-4 pb-3">
          <h1 className="text-xl font-semibold leading-7 text-balance">My Activities</h1>
        </div>
        <ActivityTabs activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {showCards ? (
        <ActivityPropertyList hostels={recentlyViewed} />
      ) : (
        <ActivityEmptyState tab={activeTab} />
      )}

      <BottomNavigation />
    </main>
  );
}

function ActivityTabs({ activeTab, onChange }: { activeTab: ActivityTab; onChange: (tab: ActivityTab) => void }) {
  return (
    <div className="relative bg-[#F4F5F7]">
      <div className="absolute inset-x-0 bottom-0 border-b border-border" />
      <div className="no-scrollbar flex overflow-x-auto px-0">
        {activityTabs.map((tab) => (
          <ActivityTabItem key={tab.id} tab={tab} active={activeTab === tab.id} onClick={() => onChange(tab.id)} />
        ))}
      </div>
    </div>
  );
}

function ActivityTabItem({
  tab,
  active,
  onClick,
}: {
  tab: { id: ActivityTab; label: string };
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative z-10 h-12 shrink-0 px-4 text-sm font-medium ${
        active
          ? "rounded-t-xl border border-b-white border-border bg-white text-primary"
          : "border border-transparent text-[#374151]"
      }`}
      aria-pressed={active}
    >
      {tab.label}
    </button>
  );
}

function ActivityEmptyState({ tab }: { tab: ActivityTab }) {
  const copy = emptyCopy[tab];

  return (
    <section className="mx-auto flex min-h-[calc(100dvh-10.5rem)] max-w-sm flex-col items-center justify-center px-6 pb-10 text-center">
      <EmptyActivityIllustration />
      <h2 className="mt-5 text-xl font-medium leading-7 text-[#374151] text-balance">Let&apos;s Get You Started</h2>
      <p className="mt-3 max-w-[19rem] text-sm font-medium leading-6 text-muted-foreground text-pretty">{copy.description}</p>
      <Link
        href={copy.href}
        className="mt-7 inline-flex h-10 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-sm"
      >
        {copy.action}
      </Link>
    </section>
  );
}

function EmptyActivityIllustration() {
  return (
    <div className="relative h-44 w-56 scale-90" aria-hidden="true">
      <div className="absolute bottom-4 left-11 h-4 w-52 rounded-full bg-[#E5E7EB]" />
      <div className="absolute bottom-12 left-9 h-28 w-36 rounded-[2.5rem] bg-[#F47C8E]" />
      <div className="absolute bottom-27 left-25 size-14 rounded-full bg-[#F6B0A8]" />
      <div className="absolute bottom-37 left-24 h-7 w-16 rounded-t-full bg-[#233240]" />
      <div className="absolute bottom-15 left-24 h-16 w-9 rotate-12 rounded-full bg-[#F6B0A8]" />
      <div className="absolute bottom-25 left-30 h-28 w-28 rounded-full border-[0.9rem] border-[#334A57] bg-white/60" />
      <div className="absolute bottom-18 left-44 h-16 w-3 -rotate-35 rounded-full bg-[#334A57]" />
      <div className="absolute bottom-12 left-49 size-20 rounded-full border-4 border-[#334A57] bg-[#F47C8E]" />
      <div className="absolute bottom-10 left-57 h-24 w-2 rotate-6 rounded-full bg-[#334A57]" />
      <div className="absolute bottom-10 left-48 h-2 w-22 rounded-full bg-[#334A57]" />
      <div className="absolute bottom-20 left-54 size-3 rounded-full bg-[#334A57]" />
      <div className="absolute bottom-26 left-59 size-2 rounded-full bg-[#334A57]" />
      <div className="absolute bottom-32 left-53 size-2 rounded-full bg-[#334A57]" />
      <div className="absolute bottom-14 left-8 h-20 w-16 -rotate-18 rounded-full bg-[#F47C8E]" />
      <div className="absolute bottom-10 left-29 h-3 w-24 rotate-2 rounded-full bg-[#334A57]" />
    </div>
  );
}

function ActivityPropertyList({ hostels: properties }: { hostels: Hostel[] }) {
  return (
    <section className="space-y-4 px-3 py-4">
      {properties.map((hostel, index) => (
        <ActivityPropertyCard key={hostel.slug} hostel={hostel} saved={index === 0} />
      ))}
    </section>
  );
}

function ActivityPropertyCard({ hostel, saved }: { hostel: Hostel; saved?: boolean }) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
      <ActivityPropertyImage hostel={hostel} saved={saved} />
      <div className="relative px-3.5 pb-4 pt-6">
        <div className="absolute -top-4 left-6 inline-flex h-8 items-center gap-1 rounded-full bg-white px-3 text-xs font-semibold text-[#087F5B] shadow-sm">
          <Star className="size-3.5 fill-[#FACC15] text-[#FACC15]" aria-hidden="true" />
          {hostel.rating} ({hostel.reviews})
        </div>

        <h2 className="text-lg font-semibold leading-6 text-balance">{hostel.name}</h2>
        <p className="mt-1 text-[13px] font-medium leading-5 text-muted-foreground">{hostel.address}, Cape Coast</p>

        <div className="my-3 border-t border-dashed border-[#D8DCE3]" />
        <PropertyFeatureChips hostel={hostel} />
        <ActivityBottomActionRow hostel={hostel} />
      </div>
    </article>
  );
}

function ActivityPropertyImage({ hostel, saved }: { hostel: Hostel; saved?: boolean }) {
  return (
    <div className="relative aspect-[1.32] overflow-hidden bg-secondary">
      <Image
        src={hostel.gallery[0] ?? hostel.image}
        alt={`${hostel.name} room preview`}
        fill
        sizes="(max-width: 768px) 100vw, 28rem"
        className="object-cover"
        priority={hostel.slug === "science-view-residence"}
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/48 to-transparent" />
      <span className="absolute left-3 top-3 rounded-full bg-[#FFF0F5] px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
        {hostel.offer.includes("Save") ? hostel.offer : "Save up to GHS 250"}
      </span>
      <button
        type="button"
        className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white text-[#374151] shadow-sm"
        aria-label={saved ? `Remove ${hostel.name} from wishlist` : `Save ${hostel.name}`}
      >
        <Heart className={`size-[1.125rem] ${saved ? "fill-primary text-primary" : ""}`} strokeWidth={1.9} aria-hidden="true" />
      </button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5" aria-hidden="true">
        <span className="h-1.5 w-6 rounded-full bg-white" />
        <span className="size-1.5 rounded-full bg-white/85" />
        <span className="size-1.5 rounded-full bg-white/85" />
        <span className="size-1.5 rounded-full bg-white/70" />
      </div>
    </div>
  );
}

function PropertyFeatureChips({ hostel }: { hostel: Hostel }) {
  const chips: Array<{ label: string; icon: LucideIcon; tone?: "blue" | "green" }> = [
    { label: "10 Offers", icon: BadgePercent, tone: "blue" },
    { label: "4 Room Options", icon: Home },
    { label: "CCTV", icon: Camera },
    { label: "Study Desk", icon: BriefcaseBusiness },
    { label: "Instant Booking", icon: CheckCircle2, tone: "green" },
    { label: "Bills Included", icon: ClipboardList },
    { label: hostel.amenities.includes("Water available") ? "Water Available" : "Private Bathroom", icon: hostel.amenities.includes("Water available") ? Droplets : Bath },
    { label: "TV Room", icon: Monitor },
  ];

  return (
    <div className="flex flex-wrap gap-1.5">
      {chips.map((chip) => {
        const Icon = chip.icon;
        const tone =
          chip.tone === "blue"
            ? "border-[#BFD7FF] bg-[#F1F7FF] text-[#1D5FBF]"
            : chip.tone === "green"
              ? "border-[#BDEBD6] bg-[#EFFDF7] text-[#087F5B]"
              : "border-border bg-white text-[#374151]";

        return (
          <span key={chip.label} className={`inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs font-medium ${tone}`}>
            <Icon className="size-3.5 shrink-0 text-[#172554]" strokeWidth={1.8} aria-hidden="true" />
            {chip.label}
          </span>
        );
      })}
    </div>
  );
}

function ActivityBottomActionRow({ hostel }: { hostel: Hostel }) {
  return (
    <div className="mt-5 flex items-end justify-between gap-3">
      <div>
        <p className="text-xs font-medium text-muted-foreground">From</p>
        <p className="mt-1 text-xl font-semibold leading-none tabular-nums">
          {hostel.price} <span className="text-xs font-medium text-[#111827]">/ semester</span>
        </p>
      </div>
      <Link
        href={`/hostels/${hostel.slug}#roomTypes`}
        className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-primary px-4 text-xs font-semibold text-white"
      >
        See availability
      </Link>
    </div>
  );
}

function BottomNavigation() {
  const items = [
    { label: "Explore", href: "/", icon: Discover },
    { label: "Wishlist", href: "/wishlist", icon: IconsaxHeart, active: true },
    { label: "Profile", href: "#profile", icon: Profile },
  ];

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white px-3 pb-[calc(env(safe-area-inset-bottom)+0.4rem)] pt-2 shadow-sm"
      aria-label="Bottom navigation"
    >
      <ul className="mx-auto grid w-full max-w-44 grid-cols-3 text-[11px] font-semibold text-muted-foreground">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-1 rounded-2xl px-2 py-1 ${item.active ? "text-primary" : ""}`}
                aria-current={item.active ? "page" : undefined}
              >
                <Icon size={22} color="currentColor" variant="Linear" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
