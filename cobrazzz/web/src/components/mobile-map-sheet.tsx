import Link from "next/link";
import { Map } from "lucide-react";

type MapHostel = {
  name: string;
  area: string;
  price: string;
  map: { left: string; top: string };
};

export function MobileMapSheet({ hostels }: { hostels: MapHostel[] }) {
  const firstArea = hostels[0]?.area ?? "UCC";

  return (
    <Link
      href={`/map?q=${encodeURIComponent(firstArea)}`}
      className="fixed bottom-[4.85rem] left-1/2 z-30 inline-flex h-11 -translate-x-1/2 items-center gap-2 rounded-full bg-[#101522] px-5 text-sm font-semibold text-white shadow-xl shadow-black/25 active:scale-[0.98] lg:hidden"
      aria-label="Open map results"
    >
      <Map className="size-4" aria-hidden="true" />
      Map
    </Link>
  );
}
