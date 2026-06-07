import Image from "next/image";
import Link from "next/link";
import {
  Buildings,
  Discover,
  HambergerMenu,
  Heart,
  House2,
  Map1,
  Profile,
  SearchNormal1,
} from "iconsax-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const firstScreenCategories = [
  { label: "Hostels", icon: House2, active: true },
  { label: "Areas", icon: Buildings },
  { label: "Map", icon: Map1 },
];

export function HomeHeader() {
  return (
    <header
      className={cn(
        "home-header relative z-20 w-full max-w-full overflow-hidden bg-background/95 transition-colors lg:sticky lg:top-0",
      )}
    >
      <div className="hidden h-20 w-full grid-cols-[1fr_auto_1fr] items-center px-10 lg:grid 2xl:px-14">
        <a className="flex items-center gap-3" href="#" aria-label="Hostel Premium home">
          <span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <House2 size={23} color="currentColor" variant="Bold" />
          </span>
          <span className="text-xl font-semibold">Hostel Premium</span>
        </a>

        <div className="relative grid place-items-center">
          <nav
            aria-label="Main discovery"
            className="home-header-nav transition-opacity duration-150"
          >
            <ul className="flex items-center gap-2 rounded-full border border-border bg-card px-2 py-2 shadow-sm">
              {firstScreenCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <li key={category.label}>
                    <a
                      className={cn(
                        "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        category.active && "bg-secondary text-foreground",
                      )}
                      href="#"
                    >
                      <Icon size={18} color="currentColor" variant="Linear" />
                      {category.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/search"
            className="home-header-compact-search invisible absolute flex min-w-[28rem] translate-y-2 items-center justify-between rounded-full border border-border bg-card py-2 pl-5 pr-2 text-sm font-semibold text-foreground opacity-0 shadow-sm transition-[opacity,transform] duration-150"
          >
            <span className="flex items-center gap-4">
              <span>UCC</span>
              <span className="h-5 w-px bg-border" />
              <span>Anytime</span>
              <span className="h-5 w-px bg-border" />
              <span>Any room</span>
            </span>
            <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <SearchNormal1 size={18} color="currentColor" variant="Linear" />
            </span>
          </Link>
        </div>

        <div className="flex items-center justify-end gap-3">
          <a className="text-sm font-semibold text-foreground" href="#">
            List your hostel
          </a>
          <Button
            variant="secondary"
            size="icon"
            className="size-11 rounded-full border border-border"
            aria-label="Open menu"
          >
            <HambergerMenu size={20} color="currentColor" variant="Linear" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#f73563] px-5 pb-7 pt-4 text-white lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <a className="font-mono text-lg font-semibold" href="#" aria-label="Cobra home">
            cobra
          </a>
          <button
            className="grid size-8 place-items-center rounded-full text-white"
            aria-label="Open menu"
          >
            <HambergerMenu size={24} color="currentColor" variant="Linear" />
          </button>
        </div>

        <Link href="/search" className="mt-4 flex h-12 w-full items-center justify-between gap-3 rounded-full border border-white/40 bg-white py-1 pl-5 pr-1.5 text-left text-foreground shadow-sm active:scale-[0.99]">
          <span className="flex min-w-0 items-center text-base leading-5 text-muted-foreground">
            <span className="shrink-0">Search by</span>
            <span className="search-term-window ml-1 font-medium text-foreground">
              <span className="search-term-track">
                <span>city</span>
                <span>university</span>
                <span>hostel area</span>
                <span>room type</span>
              </span>
            </span>
          </span>
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <SearchNormal1 size={20} color="currentColor" variant="Linear" />
          </span>
        </Link>

        <div className="relative mt-4 min-h-36 overflow-hidden p-4">
          <div className="relative z-10 max-w-[56%]">
            <p className="text-pretty text-xl font-semibold leading-6">
              Save time finding student rooms
            </p>
            <p className="mt-2 text-xs leading-4 text-white/90">
              Compare verified UCC hostels before calling.
            </p>
            <span className="mt-3 inline-flex rounded-full bg-black/20 px-3 py-1.5 text-xs font-semibold">
              Lowest price
            </span>
          </div>
          <Image
            src="/hero/student-with-luggage.png"
            alt="Student with luggage"
            width={480}
            height={600}
            priority
            className="absolute -bottom-3 -right-2 h-44 w-auto object-contain"
            sizes="150px"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-9 bg-[#fff5f8] [clip-path:ellipse(82%_100%_at_50%_100%)]"
          aria-hidden="true"
        />
      </div>

      <div className="mobile-fixed-search fixed inset-x-0 top-0 z-30 flex items-center gap-2 border-b border-border bg-white px-5 py-2 opacity-0 shadow-sm transition-[opacity,transform] duration-150 lg:hidden">
        <Link href="/search" className="flex h-10 min-w-0 flex-1 items-center justify-between gap-2 rounded-full border border-border bg-secondary py-1 pl-4 pr-1 text-left text-foreground shadow-sm active:scale-[0.99]">
          <span className="flex min-w-0 items-center text-sm leading-5 text-muted-foreground">
            <span className="shrink-0">Search by</span>
            <span className="search-term-window ml-1 font-medium text-foreground">
              <span className="search-term-track">
                <span>city</span>
                <span>university</span>
                <span>hostel area</span>
                <span>room type</span>
              </span>
            </span>
          </span>
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <SearchNormal1 size={17} color="currentColor" variant="Linear" />
          </span>
        </Link>
        <button
          className="grid size-9 shrink-0 place-items-center rounded-full text-foreground"
          aria-label="Open menu"
        >
          <HambergerMenu size={23} color="currentColor" variant="Linear" />
        </button>
      </div>

      <nav
        className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-card px-3 pb-[calc(env(safe-area-inset-bottom)+0.35rem)] pt-1.5 shadow-sm lg:hidden"
        aria-label="Mobile primary"
      >
        <ul className="mobile-primary-nav-list mx-auto grid w-full max-w-44 grid-cols-3 text-[11px] font-semibold text-muted-foreground">
          {[
            { label: "Explore", icon: Discover, active: true },
            { label: "Wishlist", icon: Heart },
            { label: "Profile", icon: Profile },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <a
                  className={cn(
                    "flex flex-col items-center gap-0.5 rounded-2xl px-2 py-1",
                    item.active && "text-primary",
                  )}
                  href="#"
                >
                  <Icon size={22} color="currentColor" variant="Linear" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
