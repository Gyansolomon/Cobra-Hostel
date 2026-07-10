import Link from "next/link";
import {
  ArrowLeft2,
  Discover,
  Heart,
  Location,
  Profile,
  SearchNormal1,
  Teacher,
  Timer1,
} from "iconsax-react";

const filters = ["All", "UCC", "Accra", "Kumasi", "Takoradi"];
const recentSearches = ["Science / New Site", "Ayensu"];
const topCities = ["Cape Coast", "Accra", "Kumasi", "Takoradi", "Tamale", "Koforidua"];
const topUniversities = [
  "University of Cape Coast",
  "University of Ghana",
  "KNUST",
  "Takoradi Technical University",
  "UEW",
  "UDS",
];

const discoveryHrefs: Record<string, string> = {
  "Cape Coast": "/cities/cape-coast",
  Accra: "/cities/accra",
  Kumasi: "/cities/kumasi",
  Takoradi: "/cities/takoradi",
  "University of Cape Coast": "/universities/ucc",
  "University of Ghana": "/universities/ug",
  KNUST: "/universities/knust",
  "Takoradi Technical University": "/universities/ttu",
};

export default function SearchPage() {
  return (
    <main className="min-h-dvh bg-[#F7F7F7] pb-20 text-foreground lg:pb-0">
      <header className="sticky top-0 z-20 border-b border-border bg-card">
        <form
          action="/search/results"
          className="mx-auto flex max-w-[72rem] items-center gap-2.5 px-3 py-2.5 lg:h-20 lg:px-8"
        >
          <Link
            href="/"
            className="grid size-8 shrink-0 place-items-center rounded-full text-foreground lg:size-10"
            aria-label="Back to home"
          >
            <ArrowLeft2 size={21} color="currentColor" variant="Linear" />
          </Link>

          <label className="mx-auto flex h-11 min-w-0 flex-1 items-center gap-2.5 rounded-full border border-border bg-background px-3.5 text-muted-foreground lg:h-12 lg:max-w-[42rem] lg:px-5">
            <SearchNormal1 size={19} color="currentColor" variant="Linear" />
            <input
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground lg:text-base"
              name="q"
              placeholder="Search by city, university, or hostel"
              aria-label="Search by city, university, or hostel"
            />
          </label>

          <button
            type="submit"
            className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground active:scale-[0.97] lg:size-12"
            aria-label="Search"
          >
            <SearchNormal1 size={19} color="currentColor" variant="Linear" />
          </button>
        </form>

        <nav className="mx-auto grid max-w-[72rem] grid-flow-col auto-cols-max gap-5 overflow-x-auto px-4 pb-0 [scrollbar-width:none] lg:px-8 [&::-webkit-scrollbar]:hidden">
          {filters.map((filter, index) => (
            <Link
              key={filter}
              href={index === 0 ? "/search" : `/search/results?q=${encodeURIComponent(filter)}`}
              className={`border-b-2 px-0.5 pb-2.5 text-xs font-semibold uppercase ${
                index === 0
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground"
              }`}
            >
              {filter}
            </Link>
          ))}
        </nav>
      </header>

      <div className="mx-auto grid max-w-[72rem] gap-4 px-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8 lg:py-8">
        <section className="border-b border-border bg-card px-4 py-5 lg:rounded-2xl lg:border lg:p-6 lg:shadow-sm">
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <Timer1 size={21} color="currentColor" variant="Linear" />
            <h2 className="text-base font-semibold text-foreground lg:text-lg">Recently searched</h2>
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {recentSearches.map((item) => (
              <Link
                key={item}
                href={`/search/results?q=${encodeURIComponent(item)}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-muted-foreground lg:px-4 lg:py-2 lg:text-sm"
              >
                <Timer1 size={16} color="currentColor" variant="Linear" />
                {item}
              </Link>
            ))}
          </div>
        </section>

        <div className="grid gap-4 lg:grid-cols-2">
          <SearchChipSection
            icon={Location}
            title="Top cities"
            items={topCities}
          />
          <SearchChipSection
            icon={Teacher}
            title="Top universities"
            items={topUniversities}
          />
        </div>
      </div>

      <nav
        className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-card px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 shadow-sm lg:hidden"
        aria-label="Mobile primary"
      >
        <ul className="mx-auto grid w-full max-w-48 grid-cols-3 text-xs font-semibold text-muted-foreground">
          {[
            { label: "Explore", icon: Discover, href: "/", active: true },
            { label: "Wishlist", icon: Heart, href: "/wishlist" },
            { label: "Profile", icon: Profile, href: "/profile" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <Link
                  className={`flex flex-col items-center gap-1 rounded-2xl px-2 py-1.5 ${
                    item.active ? "text-primary" : ""
                  }`}
                  href={item.href}
                >
                  <Icon size={24} color="currentColor" variant="Linear" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </main>
  );
}

function SearchChipSection({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Location;
  title: string;
  items: string[];
}) {
  return (
    <section className="border-b border-border bg-card px-4 py-5 lg:rounded-2xl lg:border lg:p-6 lg:shadow-sm">
      <div className="flex items-center gap-2.5">
        <Icon size={20} color="currentColor" variant="Linear" />
        <h2 className="text-base font-semibold lg:text-lg">{title}</h2>
      </div>

      <div className="mt-4 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <Link
            key={item}
            href={discoveryHrefs[item] ?? `/search/results?q=${encodeURIComponent(item)}`}
            className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-muted-foreground lg:px-4 lg:py-2 lg:text-sm"
          >
            {item}
          </Link>
        ))}
      </div>
    </section>
  );
}
