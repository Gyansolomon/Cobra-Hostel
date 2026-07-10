import { notFound } from "next/navigation";

import { LocationHub } from "@/components/location-hub";
import { hostels } from "@/lib/hostels";
import { cities, getCity, universities } from "@/lib/locations";

export function generateStaticParams() { return cities.map((city) => ({ slug: city.slug })); }

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  const cityUniversities = universities.filter((university) => university.citySlug === city.slug).map((item) => item.shortName).join(", ");
  return <LocationHub kind="city" title={city.name} eyebrow={`${city.region}${cityUniversities ? ` · ${cityUniversities}` : ""}`} summary={city.summary} image={city.image} areas={city.studentAreas} transport={city.transport} priceGuide={city.priceGuide} hostels={hostels.filter((hostel) => hostel.city === city.name)} searchTerm={city.name} />;
}
