import { InteractiveMapPage } from "@/components/interactive-map-page";
import { hostels } from "@/lib/hostels";
import { mapCenters } from "@/lib/map-locations";

export default async function MapPage({ searchParams }: { searchParams?: Promise<{ q?: string | string[] }> }) {
  const params = await searchParams;
  const queryValue = Array.isArray(params?.q) ? params.q[0] : params?.q;
  const query = queryValue?.trim() || "UCC";
  const normalizedQuery = query.toLowerCase();
  const context = normalizedQuery.includes("accra") || normalizedQuery.includes("ug") || normalizedQuery.includes("legon") || normalizedQuery.includes("madina")
    ? { label: "Accra", city: "Accra", university: "UG" }
    : normalizedQuery.includes("kumasi") || normalizedQuery.includes("knust") || normalizedQuery.includes("ayeduase") || normalizedQuery.includes("bomso")
      ? { label: "Kumasi", city: "Kumasi", university: "KNUST" }
      : normalizedQuery.includes("takoradi") || normalizedQuery.includes("ttu") || normalizedQuery.includes("effiakuma") || normalizedQuery.includes("anaji")
        ? { label: "Takoradi", city: "Takoradi", university: "TTU" }
        : { label: "Cape Coast", city: "Cape Coast", university: "UCC" };
  const visibleHostels = hostels.filter((hostel) => hostel.city === context.city || hostel.university === context.university);
  return <InteractiveMapPage center={mapCenters[context.city]} hostels={visibleHostels} label={context.label} query={query} />;
}
