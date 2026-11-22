import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin, Star, Users } from "lucide-react";
import { notFound } from "next/navigation";

import { getHostelBySlug, hostels } from "@/lib/hostels";

const reviewCopy = [
  ["Ama B.", "The location made getting to lectures easy. The room matched the photos and the manager answered my questions before inspection."],
  ["Kojo A.", "Water and shared facilities were the main things I checked. I recommend confirming the exact room allocation before paying."],
  ["Esi M.", "The enquiry process was straightforward. I liked being able to compare the room occupancy and nearby campus points first."],
  ["Nana K.", "A practical option for students who want to stay near campus. Ask about the current utility arrangement when you inspect."],
] as const;

export function generateStaticParams() {
  return hostels.map((hostel) => ({ slug: hostel.slug }));
}

export default async function HostelReviewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hostel = getHostelBySlug(slug);
  if (!hostel) notFound();

  return (
    <main className="min-h-dvh bg-white text-[#111827]">
      <header className="sticky top-0 z-20 border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-[64rem] items-center gap-3 px-4 lg:px-8">
          <Link href={`/hostels/${hostel.slug}#reviews`} className="grid size-9 place-items-center rounded-full border border-border" aria-label="Back to hostel"><ArrowLeft className="size-4" /></Link>
          <div><p className="font-semibold">Student reviews</p><p className="text-xs text-muted-foreground">{hostel.name}</p></div>
        </div>
      </header>

      <div className="mx-auto max-w-[64rem] px-4 py-8 lg:px-8 lg:py-12">
        <section className="grid gap-4 border-y border-border py-7 sm:grid-cols-[1fr_auto] sm:items-center">
          <div><p className="text-sm text-muted-foreground">Overall rating</p><div className="mt-2 flex items-center gap-2"><Star className="size-6 fill-emerald-500 text-emerald-500" /><h1 className="text-3xl font-semibold">{hostel.rating}</h1><span className="text-sm text-muted-foreground">({hostel.reviews} reviews)</span></div></div>
          <div className="flex flex-wrap gap-2 text-xs"><span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2"><MapPin className="size-4" /> Campus access</span><span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2"><Users className="size-4" /> Management</span><span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2"><CheckCircle2 className="size-4" /> Facilities</span></div>
        </section>

        <section className="mt-5">
          {reviewCopy.map(([name, copy], index) => (
            <article key={name} className="border-b border-border py-6">
              <div className="flex items-center justify-between gap-3"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-secondary text-sm font-medium">{name.slice(0, 2).toUpperCase()}</span><h2 className="font-medium">{name}</h2></div><span className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-sm font-medium text-white">{index === 2 ? "4.0" : "5.0"}<Star className="size-3.5 fill-white" /></span></div>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">{copy}</p>
              <p className="mt-4 text-xs text-muted-foreground">Verified enquiry · 2026</p>
            </article>
          ))}
        </section>

        <p className="mt-6 border-l-2 border-amber-300 bg-amber-50/60 p-4 text-xs leading-5 text-amber-900">MVP note: review content is representative demo data. Production reviews will require verified enquiries or bookings and moderation.</p>
      </div>
    </main>
  );
}
