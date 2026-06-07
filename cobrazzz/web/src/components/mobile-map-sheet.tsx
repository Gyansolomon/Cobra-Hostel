"use client";

import { Map, MapPinned, X } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type MapHostel = {
  name: string;
  area: string;
  price: string;
  map: { left: string; top: string };
};

export function MobileMapSheet({ hostels }: { hostels: MapHostel[] }) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <button
            type="button"
            className="fixed bottom-[4.85rem] left-1/2 z-30 inline-flex h-11 -translate-x-1/2 items-center gap-2 rounded-full bg-[#101522] px-5 text-sm font-semibold text-white shadow-xl shadow-black/25 active:scale-[0.98] lg:hidden"
          />
        }
      >
        <Map className="size-4" aria-hidden="true" />
        Map
      </SheetTrigger>
      <SheetContent
        side="bottom"
        showCloseButton={false}
        className="h-[86dvh] overflow-hidden rounded-t-[1.25rem] p-0 pb-[env(safe-area-inset-bottom)] lg:hidden"
      >
        <SheetHeader className="flex-row items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <MapPinned className="size-5 text-primary" aria-hidden="true" />
            <SheetTitle className="text-lg font-semibold">Map near UCC</SheetTitle>
          </div>
          <SheetClose
            render={
              <button
                type="button"
                className="grid size-9 place-items-center rounded-full border border-border bg-card text-foreground"
                aria-label="Close map"
              />
            }
          >
            <X className="size-4" aria-hidden="true" />
          </SheetClose>
        </SheetHeader>

        <div className="relative h-full bg-secondary">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(221,221,221,0.78)_1px,transparent_1px),linear-gradient(rgba(221,221,221,0.78)_1px,transparent_1px)] bg-[size:3.25rem_3.25rem]" />
          <div className="absolute left-6 top-7 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
            UCC
          </div>
          <div className="absolute inset-x-6 top-20 h-24 rounded-full bg-white/60" />
          <div className="absolute bottom-36 left-8 right-7 h-20 rounded-full bg-white/65" />

          {hostels.map((hostel) => (
            <button
              key={hostel.name}
              type="button"
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-bold text-foreground shadow-md"
              style={hostel.map}
              aria-label={`${hostel.name} on map`}
            >
              {hostel.price}
            </button>
          ))}

          <div className="absolute inset-x-4 bottom-4 rounded-[1.1rem] border border-border bg-card p-4 shadow-lg">
            <p className="text-sm font-semibold">42 verified rooms around Cape Coast</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Static map preview for this build. Live map movement and bounds-based results come next.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
