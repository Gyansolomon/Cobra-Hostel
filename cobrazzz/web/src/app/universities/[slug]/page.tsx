import { notFound } from "next/navigation";

import { LocationHub } from "@/components/location-hub";
import { hostels } from "@/lib/hostels";
import { getCity, getUniversity, universities } from "@/lib/locations";

export function generateStaticParams() { return universities.map((university) => ({ slug: university.slug })); }

export default async function UniversityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const university = getUniversity(slug);
  if (!university) notFound();
  const city = getCity(university.citySlug);
  return <LocationHub kind="university" title={university.shortName} eyebrow={`${university.name} · ${university.campus}`} summary={university.summary} image={university.image} areas={university.popularAreas} transport={city?.transport || "Compare walking, shuttle, and local transport options before choosing a room."} priceGuide={city?.priceGuide || "Prices vary by occupancy, washroom type, amenities, and campus distance."} hostels={hostels.filter((hostel) => hostel.university === university.shortName)} searchTerm={university.shortName} />;
}
