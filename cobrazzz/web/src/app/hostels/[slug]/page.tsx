import { notFound } from "next/navigation";

import { HostelDetailsClient } from "./hostel-details-client";
import { getHostelBySlug, hostels } from "@/lib/hostels";

export function generateStaticParams() {
  return hostels.map((hostel) => ({ slug: hostel.slug }));
}

export default async function HostelDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hostel = getHostelBySlug(slug);

  if (!hostel) {
    notFound();
  }

  return <HostelDetailsClient hostel={hostel} />;
}
