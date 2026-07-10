"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { ArrowDown2 } from "iconsax-react";

const cityOptions = [
  {
    label: "Cape Coast",
    initials: "CC",
    chips: ["UCC", "CCTU", "NDU", "Science", "Ayensu", "Kwaprow"],
  },
  {
    label: "Accra",
    initials: "AC",
    chips: ["UG", "GIMPA", "Madina", "Legon", "East Legon", "Adenta"],
  },
  {
    label: "Kumasi",
    initials: "KS",
    chips: ["KNUST", "Ayeduase", "Bomso", "Kentinkrono", "Tech", "Asafo"],
  },
  {
    label: "Takoradi",
    initials: "TK",
    chips: ["TTU", "Anaji", "Market Circle", "Effiakuma", "Kwesimintsim"],
  },
];

export function HomeLocationFilterBar() {
  const [selectedCity, setSelectedCity] = useState(cityOptions[0]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chips = useMemo(() => selectedCity.chips, [selectedCity]);

  return (
    <div className="-mx-3 -mt-2 mb-4 overflow-visible px-3 lg:hidden" ref={containerRef}>
      <div className="relative flex min-w-0 items-center">
        <button
          className="flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-primary bg-transparent px-3 text-xs font-semibold text-primary"
          type="button"
          aria-label="Choose city"
          aria-expanded={open}
          aria-haspopup="listbox"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="grid size-5 place-items-center rounded-full border border-primary/25 bg-primary/10 text-[9px] font-bold">
            {selectedCity.initials}
          </span>
          <span>{selectedCity.label}</span>
          <ArrowDown2
            size={12}
            color="currentColor"
            variant="Linear"
            className={open ? "rotate-180" : ""}
          />
        </button>

        <span className="mx-3 h-8 w-px shrink-0 bg-border" aria-hidden="true" />

        <div className="flex min-w-0 flex-1 gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {chips.map((chip, index) => (
            <Link
              key={`${selectedCity.label}-${chip}`}
              href={`/search/results?q=${encodeURIComponent(`${selectedCity.label} ${chip}`)}`}
              className={`h-9 shrink-0 rounded-full border px-4 pt-2 text-xs font-semibold transition-colors ${
                index === 0
                  ? "border-primary bg-transparent text-primary"
                  : "border-border bg-transparent text-foreground hover:border-primary/45 hover:text-primary"
              }`}
            >
              {chip}
            </Link>
          ))}
        </div>

        {open ? (
          <>
            <button
              type="button"
              className="fixed inset-0 z-20 cursor-default bg-transparent"
              aria-label="Close city selector"
              onClick={() => setOpen(false)}
            />
            <div
              className="absolute left-0 top-11 z-30 w-56 overflow-hidden rounded-2xl border border-border bg-white py-1.5 shadow-xl"
              role="listbox"
              aria-label="Select city"
            >
              {cityOptions.map((city) => (
                <button
                  key={city.label}
                  type="button"
                  role="option"
                  aria-selected={city.label === selectedCity.label}
                  onClick={() => {
                    setSelectedCity(city);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm ${
                    city.label === selectedCity.label ? "bg-[#FFF0F5] text-primary" : "text-[#111827]"
                  }`}
                >
                  <span className="grid size-7 place-items-center rounded-full border border-primary/20 bg-primary/10 text-[10px] font-bold text-primary">
                    {city.initials}
                  </span>
                  <span className="font-medium">{city.label}</span>
                </button>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
