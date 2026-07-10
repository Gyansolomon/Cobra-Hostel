"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, Building2, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ListYourHostelPage() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return (
    <main className="min-h-dvh bg-[#F7F7F7] text-[#111827]">
      <header className="border-b border-border bg-white"><div className="mx-auto flex h-16 max-w-[72rem] items-center gap-3 px-4 lg:px-8"><Link href="/" className="grid size-9 place-items-center rounded-full border border-border" aria-label="Back home"><ArrowLeft className="size-4" /></Link><span className="font-semibold">For hostel managers</span></div></header>
      <div className="mx-auto grid max-w-[72rem] gap-5 px-4 py-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8 lg:py-10">
        {sent ? (
          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center"><CheckCircle2 className="mx-auto size-12 text-emerald-600" /><h1 className="mt-4 text-2xl font-semibold">Listing request received</h1><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-emerald-800">Your submission is saved for this demo. Production submissions will enter admin review before publication.</p><Link href="/" className="mt-6 inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-semibold text-white">Return home</Link></section>
        ) : (
          <form onSubmit={submit} className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-7">
            <Building2 className="size-8 text-primary" /><h1 className="mt-4 text-2xl font-semibold">List your hostel</h1><p className="mt-2 text-sm leading-6 text-muted-foreground">Submit the basics. Cobra reviews ownership, photos, pricing, location, and amenities before a listing can go public.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[["Hostel name","hostel"],["Manager name","manager"],["Phone / WhatsApp","phone"],["Email address","email"],["University served","university"],["Area / city","area"]].map(([label,name]) => <label key={name}><span className="mb-1.5 block text-sm font-medium">{label}</span><input name={name} required type={name === "email" ? "email" : "text"} className="h-11 w-full rounded-xl border border-border px-3 text-sm" /></label>)}
              <label className="sm:col-span-2"><span className="mb-1.5 block text-sm font-medium">Short description</span><textarea required name="description" rows={5} className="w-full rounded-xl border border-border p-3 text-sm" /></label>
            </div>
            <label className="mt-4 flex items-start gap-2 text-sm leading-5 text-muted-foreground"><input required type="checkbox" className="mt-0.5 size-4 accent-primary" /> I confirm I manage this property and the information is accurate.</label>
            <button type="submit" className="mt-6 h-11 rounded-xl bg-primary px-6 text-sm font-semibold text-white">Submit for review</button>
          </form>
        )}
        <aside className="rounded-2xl border border-border bg-[#111827] p-6 text-white lg:self-start"><ShieldCheck className="size-7 text-[#FF6B8A]" /><h2 className="mt-4 text-lg font-semibold">Publication requires review</h2><p className="mt-2 text-sm leading-6 text-white/70">Owners cannot publish or award verification labels themselves. Strong trust labels require Cobra review or physical confirmation.</p></aside>
      </div>
    </main>
  );
}
