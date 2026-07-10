"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const areas = ["Science / New Site", "Ayensu", "Kwaprow", "Amamoma"];
const roomTypes = ["1 in a room", "2 in a room", "3 in a room"];
const amenities = ["Bills included", "Private washroom", "Wi-Fi", "Study desk", "Water storage", "Security"];
const availability = ["Available now", "This semester", "Manager confirmed"];
const verification = ["Admin reviewed", "Photos confirmed", "Physically verified"];

type TriggerProps = {
  className?: string;
  compact?: boolean;
};

export function SearchFilterControls({ className, compact = false }: TriggerProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>(["Science / New Site", "2 in a room"]);

  const toggle = (option: string) => setSelected((current) => current.includes(option) ? current.filter((item) => item !== option) : [...current, option]);
  const apply = () => {
    const params = new URLSearchParams(window.location.search);
    if (selected.length) params.set("filters", selected.join(","));
    else params.delete("filters");
    router.push(`/search/results?${params.toString()}`);
  };
  const reset = () => {
    setSelected([]);
    const params = new URLSearchParams(window.location.search);
    params.delete("filters");
    router.push(`/search/results?${params.toString()}`);
  };

  return (
    <>
      <Sheet>
        <SheetTriggerButton className={cn("lg:hidden", className)} compact={compact} />
        <SheetContent
          side="bottom"
          className="max-h-[88dvh] rounded-t-[1.1rem] pb-[env(safe-area-inset-bottom)]"
        >
          <SheetHeader className="border-b border-border pb-3">
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <FilterForm selected={selected} onToggle={toggle} />
          <SheetFooter className="border-t border-border bg-card">
            <SheetClose render={<Button className="h-11 rounded-full" onClick={apply} />}>
              Show matching rooms
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Dialog>
        <DialogTrigger
          render={
            <button
              type="button"
              className={cn(
                "hidden h-9 shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-4 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary lg:inline-flex",
                className
              )}
            />
          }
        >
          <SlidersHorizontal className="size-3.5" aria-hidden="true" />
          Filters
        </DialogTrigger>
        <DialogContent className="max-h-[88dvh] max-w-3xl overflow-hidden p-0">
          <DialogHeader className="border-b border-border p-5 pr-12">
            <DialogTitle className="text-lg">Filter rooms near UCC</DialogTitle>
            <DialogDescription>
              Narrow the list by area, room type, price, amenities, and review status.
            </DialogDescription>
          </DialogHeader>
          <FilterForm desktop selected={selected} onToggle={toggle} />
          <DialogFooter className="m-0 rounded-none">
            <DialogClose render={<Button variant="outline" className="h-10 rounded-full" onClick={reset} />}>
              Reset
            </DialogClose>
            <DialogClose render={<Button className="h-10 rounded-full" onClick={apply} />}>
              Show matching rooms
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function SortControl() {
  const router = useRouter();
  const [selectedSort, setSelectedSort] = useState("Recommended");
  const applySort = () => {
    const params = new URLSearchParams(window.location.search);
    params.set("sort", selectedSort);
    router.push(`/search/results?${params.toString()}`);
  };
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-full border border-border bg-card px-3.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary sm:h-10 sm:gap-2 sm:px-4 sm:text-sm"
          />
        }
      >
        <SlidersHorizontal className="size-3.5 sm:size-4" aria-hidden="true" />
        Sort: {selectedSort}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Sort results</DialogTitle>
          <DialogDescription>
            Choose the order students see while browsing rooms around Cape Coast.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          {["Recommended", "Lowest price first", "Closest to UCC", "Highest rated"].map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center justify-between rounded-xl border border-border px-3 py-3 text-sm font-semibold hover:bg-secondary"
            >
              <span>{option}</span>
              <input
                checked={selectedSort === option}
                onChange={() => setSelectedSort(option)}
                className="size-4 accent-primary"
                name="sort"
                type="radio"
              />
            </label>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button className="h-10 rounded-full" onClick={applySort} />}>
            Apply sort
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function SheetTriggerButton({ className, compact }: TriggerProps) {
  return (
    <SheetTrigger
      render={
        <button
          type="button"
          className={cn(
            "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary lg:h-9 lg:px-4",
            compact && "px-3",
            className
          )}
        />
      }
    >
      <SlidersHorizontal className="size-3.5" aria-hidden="true" />
      Filters
    </SheetTrigger>
  );
}

function FilterForm({ desktop = false, selected, onToggle }: { desktop?: boolean; selected: string[]; onToggle: (option: string) => void }) {
  return (
    <div className={cn("overflow-y-auto px-4 py-4", desktop && "max-h-[60dvh] px-5")}>
      <Tabs defaultValue="stay">
        <TabsList className="w-full justify-start overflow-x-auto" variant="line">
          <TabsTrigger value="stay">Stay</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="trust">Trust</TabsTrigger>
        </TabsList>

        <TabsContent className="mt-5 space-y-6" value="stay">
          <FilterGroup title="Area">
            <OptionGrid options={areas} selected={selected} onToggle={onToggle} />
          </FilterGroup>
          <FilterGroup title="Room type">
            <OptionGrid options={roomTypes} selected={selected} onToggle={onToggle} />
          </FilterGroup>
          <FilterGroup title="Amenities">
            <OptionGrid columns={desktop ? 3 : 2} options={amenities} selected={selected} onToggle={onToggle} />
          </FilterGroup>
        </TabsContent>

        <TabsContent className="mt-5 space-y-6" value="budget">
          <FilterGroup title="Semester price">
            <div className="rounded-xl border border-border p-4">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>GHS 2,000</span>
                <span>GHS 5,000</span>
              </div>
              <Slider className="mt-5" defaultValue={[2400, 4500]} max={6000} min={1500} step={100} />
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                Prices are placeholders until manager-submitted data is connected.
              </p>
            </div>
          </FilterGroup>
          <FilterGroup title="Availability">
            <OptionGrid options={availability} selected={selected} onToggle={onToggle} />
          </FilterGroup>
        </TabsContent>

        <TabsContent className="mt-5 space-y-6" value="trust">
          <FilterGroup title="Verification">
            <OptionGrid options={verification} selected={selected} onToggle={onToggle} />
          </FilterGroup>
          <div className="rounded-xl border border-[#B9DEC6] bg-[#EAF5EE] p-4 text-sm leading-6 text-[#2F7D4F]">
            Physically verified means a room has been checked beyond manager submission.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function OptionGrid({
  columns = 2,
  selected,
  onToggle,
  options,
}: {
  columns?: 2 | 3;
  selected: string[];
  onToggle: (option: string) => void;
  options: string[];
}) {
  return (
    <div className={cn("grid gap-2", columns === 3 ? "sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2")}>
      {options.map((option) => {
        const id = `filter-${option.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

        return (
          <label
            key={option}
            className="group flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-border px-3 py-2.5 text-sm font-semibold hover:bg-secondary"
            htmlFor={id}
          >
            <Checkbox id={id} checked={selected.includes(option)} onCheckedChange={() => onToggle(option)} />
            <span>{option}</span>
          </label>
        );
      })}
    </div>
  );
}
