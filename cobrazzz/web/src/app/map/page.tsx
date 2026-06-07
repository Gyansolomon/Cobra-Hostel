import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, List, MapPinned, Star } from "lucide-react";

import { hostels } from "@/lib/hostels";

export default async function MapPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string | string[] }>;
}) {
  const params = await searchParams;
  const queryValue = Array.isArray(params?.q) ? params.q[0] : params?.q;
  const query = queryValue?.trim() || "UCC";

  return (
    <main className="min-h-dvh bg-[#F7F7F7] text-[#111827]">
      <header className="sticky top-0 z-20 border-b border-border bg-white/95">
        <div className="mx-auto flex h-14 max-w-[96rem] items-center gap-3 px-4 lg:h-18 lg:px-8">
          <Link href={`/search/results?q=${encodeURIComponent(query)}`} className="grid size-9 place-items-center rounded-full text-[#111827]" aria-label="Back to listings">
            <ArrowLeft className="size-5" aria-hidden="true" />
          </Link>
          <div className="min-w-0">
            <h1 className="truncate text-base font-semibold lg:text-xl">Map near {query}</h1>
            <p className="text-xs text-muted-foreground lg:text-sm">42 verified rooms around Cape Coast</p>
          </div>
          <Link
            href={`/search/results?q=${encodeURIComponent(query)}`}
            className="ml-auto inline-flex h-9 items-center gap-2 rounded-full border border-border bg-white px-3 text-xs font-semibold lg:h-10 lg:px-4 lg:text-sm"
          >
            <List className="size-4" aria-hidden="true" />
            List
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-[96rem] gap-4 p-3 lg:grid-cols-[minmax(0,1fr)_24rem] lg:p-8">
        <div className="overflow-hidden rounded-[1.25rem] border border-border bg-white shadow-sm">
          <div className="relative h-[calc(100dvh-11rem)] min-h-[28rem] lg:h-[calc(100dvh-8rem)]">
            <iframe
              title={`OpenStreetMap map results near ${query}`}
              src="https://www.openstreetmap.org/export/embed.html?bbox=-1.314%2C5.098%2C-1.262%2C5.139&layer=mapnik&marker=5.1165%2C-1.2895"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0">
              {hostels.map((hostel) => (
                <Link
                  key={hostel.slug}
                  href={`/hostels/${hostel.slug}`}
                  className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-[#111827] shadow-md transition-colors hover:border-primary hover:text-primary"
                  style={hostel.map}
                >
                  {hostel.price}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-3 lg:max-h-[calc(100dvh-8rem)] lg:overflow-y-auto lg:pr-1">
          {hostels.map((hostel) => (
            <Link
              key={hostel.slug}
              href={`/hostels/${hostel.slug}`}
              className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-3 rounded-[1rem] border border-border bg-white p-2 shadow-sm"
            >
              <div className="relative h-28 overflow-hidden rounded-[0.8rem] bg-secondary">
                <Image src={hostel.image} alt={`${hostel.name} preview`} fill sizes="120px" className="object-cover" />
                <span className="absolute right-2 top-2 grid size-7 place-items-center rounded-full bg-white/95 text-[#111827]">
                  <Heart className="size-4" aria-hidden="true" />
                </span>
              </div>
              <div className="min-w-0 py-1">
                <h2 className="line-clamp-1 text-sm font-semibold">{hostel.name}</h2>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPinned className="size-3.5 shrink-0" aria-hidden="true" />
                  <span className="truncate">{hostel.area}</span>
                </p>
                <p className="mt-2 text-sm font-semibold tabular-nums">{hostel.yearlyPrice}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-[#111827]">
                  <Star className="size-3.5 fill-yellow-400 text-yellow-500" aria-hidden="true" />
                  {hostel.rating} ({hostel.reviews})
                </p>
              </div>
            </Link>
          ))}
        </aside>
      </section>
    </main>
  );
}
