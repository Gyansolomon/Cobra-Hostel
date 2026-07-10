"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type ReactNode, useEffect, useMemo, useState } from "react";
import {
  Discover,
  Heart as IconsaxHeart,
  Profile,
} from "iconsax-react";
import {
  Bus,
  GraduationCap,
  MapPinned,
  Percent,
  ShieldCheck,
  Users,
} from "lucide-react";

import { hostels, type Hostel } from "@/lib/hostels";
import { PremiumAssetIcon, premiumAssets } from "@/components/premium-asset-icon";
import { useApp } from "@/components/app-provider";
import { readWishlist, WISHLIST_UPDATED_EVENT, writeWishlist } from "@/lib/wishlist-store";

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
    href: "/auth/login?returnTo=/wishlist",
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
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const { user, enquiries } = useApp();
  const recentlyViewed = useMemo(() => hostels.slice(0, 3), []);
  const savedHostels = useMemo(() => user ? hostels.filter((hostel) => savedSlugs.includes(hostel.slug)) : [], [savedSlugs, user]);
  const enquiredHostels = useMemo(() => enquiries.map((enquiry) => hostels.find((hostel) => hostel.slug === enquiry.hostelSlug)).filter((hostel): hostel is Hostel => Boolean(hostel)), [enquiries]);
  const visibleHostels = activeTab === "wishlist" ? savedHostels : activeTab === "recentlyViewed" ? recentlyViewed : activeTab === "enquired" ? enquiredHostels : [];
  const showCards = visibleHostels.length > 0;

  useEffect(() => {
    const sync = () => setSavedSlugs(user ? readWishlist(user.email) : []);
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener(WISHLIST_UPDATED_EVENT, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(WISHLIST_UPDATED_EVENT, sync);
    };
  }, [user]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const tab = new URLSearchParams(window.location.search).get("tab");
      if (tab && activityTabs.some((item) => item.id === tab)) setActiveTab(tab as ActivityTab);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-dvh bg-white pb-20 text-[#111827] lg:bg-[#F7F7F7] lg:pb-0">
      <div className="sticky top-0 z-20 border-b border-border bg-white/98 pt-4 lg:static lg:border-b-0 lg:bg-transparent lg:pt-8">
        <div className="mx-auto max-w-[72rem] px-4 pb-3 lg:px-8 lg:pb-4">
          <h1 className="text-balance text-xl font-semibold leading-7 lg:text-3xl lg:leading-10">My Activities</h1>
        </div>
        <div className="lg:mx-auto lg:max-w-[72rem] lg:px-8">
          <ActivityTabs activeTab={activeTab} onChange={setActiveTab} />
        </div>
      </div>

      {showCards ? (
        <ActivityPropertyList hostels={visibleHostels} savedSlugs={savedSlugs} />
      ) : (
        <ActivityEmptyState tab={activeTab} />
      )}

      <BottomNavigation />
    </main>
  );
}

function ActivityTabs({ activeTab, onChange }: { activeTab: ActivityTab; onChange: (tab: ActivityTab) => void }) {
  return (
    <div className="relative bg-[#F4F5F7] lg:overflow-hidden lg:rounded-t-2xl lg:border-x lg:border-t lg:border-border">
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
      className={`relative z-10 h-12 shrink-0 px-4 text-sm font-medium lg:px-6 lg:text-base ${
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
    <section className="mx-auto flex min-h-[calc(100dvh-10.5rem)] max-w-sm flex-col items-center justify-center px-6 pb-10 text-center lg:mt-8 lg:min-h-[30rem] lg:max-w-[44rem] lg:rounded-2xl lg:border lg:border-border lg:bg-white lg:px-10 lg:shadow-sm">
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
    <div className="relative h-40 w-56 sm:h-44 sm:w-64" aria-hidden="true">
      <Image
        src="/illustrations/undraw-house-searching.svg"
        alt=""
        fill
        sizes="(min-width: 640px) 16rem, 14rem"
        className="object-contain"
        priority
      />
    </div>
  );
}

function ActivityPropertyList({ hostels: properties, savedSlugs }: { hostels: Hostel[]; savedSlugs: string[] }) {
  return (
    <section className="mx-auto grid max-w-[72rem] gap-4 px-3 py-4 lg:grid-cols-2 lg:px-8 lg:py-8">
      {properties.map((hostel) => (
        <ActivityPropertyCard key={hostel.slug} hostel={hostel} saved={savedSlugs.includes(hostel.slug)} />
      ))}
    </section>
  );
}

function ActivityPropertyCard({ hostel, saved }: { hostel: Hostel; saved?: boolean }) {
  const detailsHref = `/hostels/${hostel.slug}`;

  return (
    <article className="group overflow-hidden rounded-[0.95rem] border border-[#E5E7EB] bg-white shadow-sm sm:grid sm:grid-cols-[15rem_minmax(0,1fr)] sm:gap-4 sm:overflow-visible sm:rounded-none sm:border-x-0 sm:border-b sm:border-t-0 sm:pb-5 sm:shadow-none lg:rounded-[1.1rem] lg:border lg:p-3 lg:shadow-sm xl:grid-cols-[16rem_minmax(0,1fr)]">
      <ActivityPropertyImage hostel={hostel} saved={saved} href={detailsHref} />

      <div className="relative min-w-0 px-4 pb-4 pt-4 sm:px-0 sm:pb-0 sm:pt-0 lg:pr-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link href={detailsHref}>
              <h2 className="line-clamp-1 text-[1.05rem] font-semibold leading-6 text-[#22242A] sm:text-lg sm:leading-6">
                {hostel.name}
              </h2>
            </Link>
            <p className="mt-0.5 line-clamp-1 text-xs leading-5 text-[#6B6F76] sm:text-[13px]">
              {hostel.address}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[#1F2329] sm:text-sm">
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
          <p className="flex items-center gap-2 font-medium text-[#39414D] sm:hidden">
            <GraduationCap className="size-3.5 shrink-0" aria-hidden="true" />
            <span>{hostel.nearby[0] ?? "Near campus"}</span>
          </p>
        </div>

        <div className="my-3 h-px w-full border-t border-dashed border-[#D9D9DE]" />

        <PropertyFeatureChips hostel={hostel} />
        <ActivityBottomActionRow hostel={hostel} href={detailsHref} />
      </div>
    </article>
  );
}

function ActivityPropertyImage({ hostel, saved, href }: { hostel: Hostel; saved?: boolean; href: string }) {
  const router = useRouter();
  const { user } = useApp();
  const [isSaved, setIsSaved] = useState(Boolean(saved));

  useEffect(() => {
    const sync = () => setIsSaved(user ? readWishlist(user.email).includes(hostel.slug) : false);
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener(WISHLIST_UPDATED_EVENT, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(WISHLIST_UPDATED_EVENT, sync);
    };
  }, [hostel.slug, user]);

  return (
    <div className="relative">
      <Link
        href={href}
        className="relative block aspect-[1.55/1] overflow-hidden rounded-t-[0.95rem] bg-secondary sm:aspect-[1.08/1] sm:rounded-[1.1rem]"
        aria-label={`View details for ${hostel.name}`}
      >
        <Image
          src={hostel.gallery[0] ?? hostel.image}
          alt={`${hostel.name} room preview`}
          fill
          sizes="(min-width: 1024px) 256px, (min-width: 640px) 240px, calc(100vw - 32px)"
          className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          priority={hostel.slug === "science-view-residence"}
        />
        <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-[#FFF0F5]/95 px-3 py-1.5 text-[11px] font-medium text-primary shadow-sm sm:px-3 sm:py-1 sm:text-[11px]">
          {hostel.offer.includes("Save") ? hostel.offer : "Save up to GHS 250"}
        </span>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2" aria-hidden="true">
          <span className="h-1.5 w-8 rounded-full bg-white" />
          <span className="size-1.5 rounded-full bg-white/80" />
          <span className="size-1.5 rounded-full bg-white/80" />
          <span className="size-1.5 rounded-full bg-white/80" />
        </div>
      </Link>
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          if (!user) {
            router.push(`/auth/login?returnTo=${encodeURIComponent(window.location.pathname + window.location.search)}`);
            return;
          }
          const current = readWishlist(user.email);
          const next = current.includes(hostel.slug) ? current.filter((item) => item !== hostel.slug) : [...current, hostel.slug];
          writeWishlist(user.email, next);
          setIsSaved(next.includes(hostel.slug));
        }}
        className={`absolute right-3 top-3 z-10 grid size-8 place-items-center rounded-full bg-white/95 shadow-sm transition-colors hover:bg-white ${
          isSaved ? "text-primary" : "text-[#1F2329]"
        }`}
        aria-label={isSaved ? `Remove ${hostel.name} from wishlist` : `Save ${hostel.name}`}
        aria-pressed={isSaved}
      >
        <IconsaxHeart size={19} color="currentColor" variant={isSaved ? "Bold" : "Linear"} />
      </button>
    </div>
  );
}

function PropertyFeatureChips({ hostel }: { hostel: Hostel }) {
  return (
    <div className="max-h-[3.5rem] overflow-x-auto overflow-y-hidden overscroll-x-contain pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex w-max flex-col gap-1.5">
        <div className="flex gap-1.5">
          <span className="inline-flex h-6 w-fit shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-[#BBD7FF] bg-[#F0F7FF] px-2.5 text-[11px] font-semibold text-[#2563EB] sm:h-7 sm:text-xs">
            <Percent className="size-3.5" aria-hidden="true" />
            10 Offers
          </span>
          {hostel.tags.filter((_, index) => index % 2 === 0).map((tag) => (
            <FeaturePill key={tag}>{tag}</FeaturePill>
          ))}
        </div>
        <div className="flex gap-1.5">
          <span className="inline-flex h-6 w-fit shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-[#B9DEC6] bg-[#EAF5EE] px-2.5 text-[11px] font-semibold text-[#13795B] sm:h-7 sm:text-xs">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            Instant Booking
          </span>
          {hostel.tags.filter((_, index) => index % 2 === 1).map((tag) => (
            <FeaturePill key={tag}>{tag}</FeaturePill>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturePill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-6 w-fit shrink-0 items-center whitespace-nowrap rounded-full border border-[#E5E7EB] bg-white px-2.5 text-[11px] font-medium text-[#39414D] sm:h-auto sm:bg-secondary sm:px-3 sm:py-1 sm:text-[11px] sm:text-foreground">
      {children}
    </span>
  );
}

function ActivityBottomActionRow({ hostel, href }: { hostel: Hostel; href: string }) {
  return (
    <div className="mt-4 flex items-end justify-between gap-4 sm:mt-4">
      <div>
        <p className="text-[11px] leading-4 text-[#1F2329]">From</p>
        <p className="text-[1.05rem] font-semibold leading-6 text-[#1F2329] tabular-nums sm:text-[1.35rem]">
          {hostel.yearlyPrice}
        </p>
      </div>
      <Link
        href={`${href}#roomTypes`}
        className="inline-flex h-9 min-w-[8.75rem] shrink-0 items-center justify-center rounded-xl bg-primary px-3 text-[12px] font-semibold leading-none text-white shadow-sm active:scale-[0.98] sm:h-11 sm:min-w-[10rem] sm:px-5 sm:text-sm"
      >
        See Availability
      </Link>
    </div>
  );
}

function BottomNavigation() {
  const items = [
    { label: "Explore", href: "/", icon: Discover },
    { label: "Wishlist", href: "/wishlist", icon: IconsaxHeart, active: true },
    { label: "Profile", href: "/profile", icon: Profile },
  ];

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white px-3 pb-[calc(env(safe-area-inset-bottom)+0.4rem)] pt-2 shadow-sm lg:hidden"
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
