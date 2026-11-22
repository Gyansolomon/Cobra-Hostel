"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, Building2, CheckCircle2, ShieldCheck } from "lucide-react";

const inputClass = "h-11 w-full rounded-lg border border-border px-3 text-sm outline-none focus:border-primary";

export default function ListYourHostelPage() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="min-h-dvh bg-white text-[#111827]">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-[72rem] items-center gap-3 px-4 lg:px-8">
          <Link href="/" className="grid size-9 place-items-center rounded-full border border-border" aria-label="Back home"><ArrowLeft className="size-4" /></Link>
          <span className="font-semibold">For hostel managers</span>
        </div>
      </header>

      <div className="mx-auto grid max-w-[72rem] gap-10 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-8 lg:py-16">
        {sent ? (
          <section className="max-w-3xl border-y border-emerald-200 py-10 text-center">
            <CheckCircle2 className="mx-auto size-11 text-emerald-600" />
            <h1 className="mt-4 text-2xl font-semibold">Listing request received</h1>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-emerald-800">Your submission is saved for this demo. Production submissions will enter admin review before publication.</p>
            <Link href="/" className="mt-6 inline-flex h-11 items-center rounded-lg bg-primary px-6 text-sm font-semibold text-white">Return home</Link>
          </section>
        ) : (
          <form onSubmit={submit} className="max-w-3xl">
            <Building2 className="size-7 text-primary" />
            <h1 className="mt-4 text-2xl font-semibold">List your hostel</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Submit the basics. Cobra reviews ownership, photos, pricing, location, and amenities before a listing can go public.</p>
            <div className="mt-7 grid gap-4 border-t border-border pt-7 sm:grid-cols-2">
              {[['Hostel name','hostel'],['Manager name','manager'],['Phone / WhatsApp','phone'],['Email address','email'],['University served','university'],['Area / city','area']].map(([label, name]) => (
                <label key={name}><span className="mb-1.5 block text-sm font-medium">{label}</span><input name={name} required type={name === "email" ? "email" : "text"} className={inputClass} /></label>
              ))}
              <label className="sm:col-span-2"><span className="mb-1.5 block text-sm font-medium">Short description</span><textarea required name="description" rows={5} className="w-full rounded-lg border border-border p-3 text-sm outline-none focus:border-primary" /></label>
            </div>
            <label className="mt-4 flex items-start gap-2 text-sm leading-5 text-muted-foreground"><input required type="checkbox" className="mt-0.5 size-4 accent-primary" /> I confirm I manage this property and the information is accurate.</label>
            <button type="submit" className="mt-6 h-11 rounded-lg bg-primary px-6 text-sm font-semibold text-white">Submit for review</button>
          </form>
        )}

        <aside className="border-t border-border pt-6 lg:self-start lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <ShieldCheck className="size-6 text-primary" />
          <h2 className="mt-3 text-lg font-medium">Publication requires review</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Owners cannot publish or award verification labels themselves. Strong trust labels require Cobra review or physical confirmation.</p>
        </aside>
      </div>
    </main>
  );
}
