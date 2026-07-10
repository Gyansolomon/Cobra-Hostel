import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, ShieldCheck } from "lucide-react";

import { EnquiryForm } from "@/components/enquiry-form";
import { getHostelBySlug, hostels } from "@/lib/hostels";

export function generateStaticParams() { return hostels.map((hostel) => ({ slug: hostel.slug })); }

export default async function RequestPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hostel = getHostelBySlug(slug);
  if (!hostel) notFound();
  return (
    <main className="min-h-dvh bg-[#F7F7F7] text-[#111827]">
      <header className="border-b border-border bg-white"><div className="mx-auto flex h-16 max-w-[72rem] items-center gap-3 px-4 lg:px-8"><Link href={`/hostels/${hostel.slug}`} className="grid size-9 place-items-center rounded-full border border-border" aria-label="Back to hostel"><ArrowLeft className="size-4" /></Link><span className="font-semibold">Enquire about a room</span></div></header>
      <div className="mx-auto grid max-w-[72rem] gap-5 px-4 py-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8 lg:py-10">
        <EnquiryForm hostel={hostel} />
        <aside className="order-first overflow-hidden rounded-2xl border border-border bg-white shadow-sm lg:order-last lg:self-start">
          <div className="relative h-44"><Image src={hostel.image} alt={`${hostel.name} preview`} fill sizes="352px" className="object-cover" /></div>
          <div className="p-5"><h1 className="text-lg font-semibold">{hostel.name}</h1><p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4" /> {hostel.area}, {hostel.city}</p><p className="mt-4 text-xl font-semibold">{hostel.yearlyPrice}</p><p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="size-4 text-primary" /> {hostel.label}</p></div>
        </aside>
      </div>
    </main>
  );
}
