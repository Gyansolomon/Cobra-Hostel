import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bus, GraduationCap, Home, MapPin, Search } from "lucide-react";

import { PropertyCard } from "@/components/ui/card-3";
import type { Hostel } from "@/lib/hostels";

type HubProps = {
  kind: "city" | "university";
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  areas: string[];
  transport: string;
  priceGuide: string;
  hostels: Hostel[];
  searchTerm: string;
};

export function LocationHub({ kind, title, eyebrow, summary, image, areas, transport, priceGuide, hostels, searchTerm }: HubProps) {
  return (
    <main className="min-h-dvh bg-[#F7F7F7] text-[#111827]">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-[80rem] items-center gap-3 px-4 lg:px-8">
          <Link href="/" className="grid size-9 place-items-center rounded-full border border-border" aria-label="Back home"><ArrowLeft className="size-4" /></Link>
          <Link href="/" className="font-semibold">cobra</Link>
          <Link href={`/search/results?q=${encodeURIComponent(searchTerm)}`} className="ml-auto inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-white"><Search className="size-4" /> Find hostels</Link>
        </div>
      </header>

      <section className="mx-auto max-w-[80rem] px-4 py-5 lg:px-8 lg:py-8">
        <div className="relative min-h-[22rem] overflow-hidden rounded-2xl bg-[#111827] lg:min-h-[28rem]">
          <Image src={image} alt={`${title} student accommodation area`} fill sizes="(min-width: 1024px) 1280px, 100vw" className="object-cover opacity-60" priority />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-x-0 bottom-0 max-w-3xl p-6 text-white sm:p-9 lg:p-12">
            <p className="text-sm font-medium text-white/75">{eyebrow}</p>
            <h1 className="mt-2 text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">Student accommodation near {title}</h1>
            <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-white/85 sm:text-base">{summary}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <section className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-7">
            <div className="flex items-center gap-2"><MapPin className="size-5 text-primary" /><h2 className="text-xl font-semibold">Popular student areas</h2></div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <Link key={area} href={`/search/results?q=${encodeURIComponent(`${searchTerm} ${area}`)}`} className="flex min-h-14 items-center justify-between rounded-xl border border-border px-4 text-sm font-medium hover:border-primary/50">
                  {area}<ArrowRight className="size-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </section>
          <aside className="space-y-3">
            <InfoCard icon={Bus} title="Getting around" copy={transport} />
            <InfoCard icon={kind === "university" ? GraduationCap : Home} title="Price guide" copy={priceGuide} />
          </aside>
        </div>

        <section className="mt-8">
          <div className="flex items-end justify-between gap-4">
            <div><p className="text-sm font-medium text-primary">Available now</p><h2 className="mt-1 text-2xl font-semibold">Hostels around {title}</h2></div>
            <Link href={`/search/results?q=${encodeURIComponent(searchTerm)}`} className="text-sm font-semibold text-primary">View all</Link>
          </div>
          {hostels.length ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {hostels.map((hostel) => (
                <Link key={hostel.slug} href={`/hostels/${hostel.slug}`}>
                  <PropertyCard imageUrl={hostel.image} name={hostel.name} location={`${hostel.area}, ${hostel.city}`} price={Number(hostel.price.replace(/\D/g, ""))} rating={Number(hostel.rating)} reviews={Number(hostel.reviews)} period="/year" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-border bg-white p-8 text-center"><p className="font-semibold">More listings are being reviewed.</p><p className="mt-2 text-sm text-muted-foreground">Browse nearby cities while new hostels are added.</p></div>
          )}
        </section>
      </section>
    </main>
  );
}

function InfoCard({ icon: Icon, title, copy }: { icon: typeof Bus; title: string; copy: string }) {
  return <div className="rounded-2xl border border-border bg-white p-5 shadow-sm"><span className="grid size-9 place-items-center rounded-xl bg-[#FFF0F5] text-primary"><Icon className="size-4" /></span><h2 className="mt-4 font-semibold">{title}</h2><p className="mt-2 text-pretty text-sm leading-6 text-muted-foreground">{copy}</p></div>;
}
