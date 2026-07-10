"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, CheckCircle2, HelpCircle, Mail, MessageCircle, Phone } from "lucide-react";

export default function SupportPage() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return (
    <main className="min-h-dvh bg-[#F7F7F7] text-[#111827]">
      <header className="border-b border-border bg-white"><div className="mx-auto flex h-16 max-w-[72rem] items-center gap-3 px-4 lg:px-8"><Link href="/" className="grid size-9 place-items-center rounded-full border border-border" aria-label="Back home"><ArrowLeft className="size-4" /></Link><span className="font-semibold">Cobra Support</span></div></header>
      <section className="mx-auto max-w-[72rem] px-4 py-8 lg:px-8 lg:py-12">
        <div className="max-w-2xl"><p className="text-sm font-medium text-primary">Student support</p><h1 className="mt-2 text-balance text-3xl font-semibold">How can we help?</h1><p className="mt-3 text-pretty text-sm leading-6 text-muted-foreground">Get help with listings, enquiries, account access, or reporting inaccurate hostel information.</p></div>
        <div className="mt-7 grid gap-4 sm:grid-cols-3">{[[MessageCircle,"Enquiry help","Understand what happens after you contact a manager."],[Phone,"Safety and contact","Report unsafe contact or inaccurate information."],[HelpCircle,"Account help","Get support with login, profile, or saved hostels."]].map(([Icon,title,copy]) => <div key={String(title)} className="rounded-2xl border border-border bg-white p-5 shadow-sm"><Icon className="size-5 text-primary" /><h2 className="mt-4 font-semibold">{String(title)}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{String(copy)}</p></div>)}</div>
        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
          {sent ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7 text-center"><CheckCircle2 className="mx-auto size-10 text-emerald-600" /><h2 className="mt-4 text-xl font-semibold">Message received</h2><p className="mt-2 text-sm text-emerald-800">Support delivery is simulated in this MVP.</p></div> : <form onSubmit={submit} className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-7"><h2 className="text-xl font-semibold">Send a support request</h2><div className="mt-5 grid gap-4 sm:grid-cols-2"><label><span className="mb-1.5 block text-sm font-medium">Name</span><input required className="h-11 w-full rounded-xl border border-border px-3 text-sm" /></label><label><span className="mb-1.5 block text-sm font-medium">Email</span><input required type="email" className="h-11 w-full rounded-xl border border-border px-3 text-sm" /></label><label className="sm:col-span-2"><span className="mb-1.5 block text-sm font-medium">How can we help?</span><textarea required rows={5} className="w-full rounded-xl border border-border p-3 text-sm" /></label></div><button className="mt-5 h-11 rounded-xl bg-primary px-6 text-sm font-semibold text-white">Send message</button></form>}
          <aside className="rounded-2xl border border-border bg-white p-5 shadow-sm lg:self-start"><Mail className="size-5 text-primary" /><h2 className="mt-4 font-semibold">Response hours</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Monday–Saturday, 8:00–18:00 GMT. Production contact details will be added before launch.</p></aside>
        </div>
      </section>
    </main>
  );
}
