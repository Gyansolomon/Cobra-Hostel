"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import { ArrowLeft, List, MapPin, SlidersHorizontal, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { Hostel } from "@/lib/hostels";
import { hostelCoordinates } from "@/lib/map-locations";

type InteractiveMapPageProps = {
  center: [number, number];
  hostels: Hostel[];
  label: string;
  query: string;
};

export function InteractiveMapPage({ center, hostels, label, query }: InteractiveMapPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<LeafletMarker[]>([]);
  const leafletRef = useRef<typeof import("leaflet") | null>(null);
  const [selectedSlug, setSelectedSlug] = useState(hostels[0]?.slug ?? "");
  const selectedSlugRef = useRef(hostels[0]?.slug ?? "");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(6000);
  const [mapReady, setMapReady] = useState(false);

  const areas = useMemo(() => Array.from(new Set(hostels.map((hostel) => hostel.area))), [hostels]);
  const visibleHostels = useMemo(() => hostels.filter((hostel) => {
    const price = Number(hostel.price.replace(/\D/g, ""));
    return price <= maxPrice && (selectedAreas.length === 0 || selectedAreas.includes(hostel.area));
  }), [hostels, maxPrice, selectedAreas]);
  const orderedHostels = useMemo(() => [...visibleHostels].sort((a, b) => Number(b.slug === selectedSlug) - Number(a.slug === selectedSlug)), [selectedSlug, visibleHostels]);

  useEffect(() => {
    let cancelled = false;
    async function initialiseMap() {
      if (!containerRef.current || mapRef.current) return;
      const L = await import("leaflet");
      if (cancelled || !containerRef.current) return;
      leafletRef.current = L;
      const map = L.map(containerRef.current, { attributionControl: true, zoomControl: false }).setView(center, 14);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);
      L.control.zoom({ position: "topright" }).addTo(map);
      mapRef.current = map;
      setMapReady(true);
    }
    initialiseMap();
    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      setMapReady(false);
    };
  }, [center]);

  useEffect(() => {
    const map = mapRef.current;
    const L = leafletRef.current;
    if (!map || !L) return;
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];
    const bounds: [number, number][] = [];
    visibleHostels.forEach((hostel) => {
      const coordinates = hostelCoordinates[hostel.slug];
      if (!coordinates) return;
      bounds.push(coordinates);
      const active = hostel.slug === selectedSlugRef.current;
      const icon = L.divIcon({
        className: "cobra-map-price-icon",
        html: `<span class="cobra-map-price-pill${active ? " is-active" : ""}">${hostel.price}</span>`,
        iconAnchor: [42, 34],
        iconSize: [84, 36],
      });
      const marker = L.marker(coordinates, { icon, keyboard: true, title: `${hostel.name}, ${hostel.price}` }).addTo(map);
      marker.on("click", () => {
        containerRef.current?.querySelectorAll(".cobra-map-price-pill").forEach((item) => item.classList.remove("is-active"));
        marker.getElement()?.querySelector(".cobra-map-price-pill")?.classList.add("is-active");
        selectedSlugRef.current = hostel.slug;
        setSelectedSlug(hostel.slug);
        map.panTo(coordinates, { animate: true });
      });
      markersRef.current.push(marker);
    });
    if (bounds.length > 1) map.fitBounds(bounds, { paddingBottomRight: [24, 210], paddingTopLeft: [24, 80], maxZoom: 15 });
    else if (bounds.length === 1) map.setView(bounds[0], 15);
  }, [mapReady, visibleHostels]);

  const toggleArea = (area: string) => setSelectedAreas((current) => current.includes(area) ? current.filter((item) => item !== area) : [...current, area]);

  return (
    <main className="relative h-dvh overflow-hidden bg-[#E9EEF3] text-[#111827]">
      <div ref={containerRef} className="absolute inset-0" aria-label={`Interactive hostel map around ${label}`} />

      <header className="pointer-events-none absolute inset-x-0 top-0 z-[500] flex items-start justify-between gap-3 p-3 sm:p-4">
        <div className="pointer-events-auto flex min-w-0 items-center gap-2 rounded-lg border border-border bg-white p-1.5 pr-3">
          <Link href={`/search/results?q=${encodeURIComponent(query)}`} className="grid size-9 shrink-0 place-items-center rounded-md" aria-label="Back to listings"><ArrowLeft className="size-5" /></Link>
          <div className="min-w-0"><h1 className="truncate text-sm font-semibold">Map near {query}</h1><p className="truncate text-xs text-muted-foreground">{visibleHostels.length} hostels around {label}</p></div>
        </div>

        <div className="pointer-events-auto flex gap-2">
          <Sheet>
            <SheetTrigger render={<button type="button" className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-white px-3 text-sm font-medium" />}><SlidersHorizontal className="size-4" />Filters</SheetTrigger>
            <SheetContent side="right" className="!w-[90vw] max-w-sm gap-0">
              <SheetHeader className="border-b border-border"><SheetTitle>Map filters</SheetTitle></SheetHeader>
              <div className="flex-1 overflow-y-auto p-4">
                <fieldset><legend className="text-sm font-medium">Areas</legend><div className="mt-3 space-y-1">{areas.map((area) => <label key={area} className="flex min-h-11 items-center gap-3 border-b border-border py-2 text-sm"><input type="checkbox" checked={selectedAreas.includes(area)} onChange={() => toggleArea(area)} className="size-4 accent-primary" />{area}</label>)}</div></fieldset>
                <label className="mt-7 block"><span className="flex items-center justify-between text-sm font-medium"><span>Maximum price</span><span>GHS {maxPrice.toLocaleString()}</span></span><input type="range" min="2000" max="6000" step="100" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} className="mt-4 w-full accent-primary" /></label>
              </div>
              <SheetFooter className="border-t border-border"><button type="button" onClick={() => { setSelectedAreas([]); setMaxPrice(6000); }} className="h-11 rounded-lg border border-border text-sm font-medium">Reset filters</button><SheetClose render={<Button className="h-11 rounded-lg" />}>Show {visibleHostels.length} hostels</SheetClose></SheetFooter>
            </SheetContent>
          </Sheet>
          <Link href={`/search/results?q=${encodeURIComponent(query)}`} className="grid size-11 place-items-center rounded-lg border border-border bg-white" aria-label="View hostel list"><List className="size-5" /></Link>
        </div>
      </header>

      <section className="pointer-events-none absolute inset-x-0 bottom-0 z-[500] pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="no-scrollbar pointer-events-auto flex snap-x gap-3 overflow-x-auto px-3 sm:px-4">
          {orderedHostels.map((hostel) => (
            <Link key={hostel.slug} href={`/hostels/${hostel.slug}`} className={`grid w-[17.5rem] shrink-0 snap-start grid-cols-[6rem_minmax(0,1fr)] overflow-hidden rounded-lg border bg-white p-2 ${hostel.slug === selectedSlug ? "border-primary" : "border-border"}`}>
              <div className="relative h-24 overflow-hidden rounded-md bg-secondary"><Image src={hostel.image} alt={`${hostel.name} preview`} fill sizes="96px" className="object-cover" /></div>
              <div className="min-w-0 px-3 py-1"><p className="line-clamp-1 text-sm font-semibold">{hostel.name}</p><p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="size-3.5" />{hostel.area}</p><p className="mt-2 text-sm font-semibold">{hostel.yearlyPrice}</p><p className="mt-1 flex items-center gap-1 text-xs"><Star className="size-3.5 fill-emerald-500 text-emerald-500" />{hostel.rating} ({hostel.reviews})</p></div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
