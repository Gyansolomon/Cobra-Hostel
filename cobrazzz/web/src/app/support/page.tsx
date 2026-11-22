"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, CheckCircle2, HelpCircle, Mail, MessageCircle, Phone } from "lucide-react";

const fieldClass = "h-11 w-full rounded-lg border border-border px-3 text-sm outline-none focus:border-primary";

export default function SupportPage() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  const topics = [
    [MessageCircle, "Enquiry help", "Understand what happens after you contact a manager."],
    [Phone, "Safety and contact", "Report unsafe contact or inaccurate information."],
    [HelpCircle, "Account help", "Get support with login, profile, or saved hostels."],
  ] as const;

  return (
    <main className="min-h-dvh bg-white text-[#111827]">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-[72rem] items-center gap-3 px-4 lg:px-8">
          <Link href="/" className="grid size-9 place-items-center rounded-full border border-border" aria-label="Back home"><ArrowLeft className="size-4" /></Link>
          <span className="font-semibold">Cobra Support</span>
        </div>
      </header>

      <section className="mx-auto max-w-[72rem] px-4 py-10 lg:px-8 lg:py-16">
        <div className="max-w-2xl border-b border-border pb-8">
          <p className="text-sm font-medium text-primary">Student support</p>
          <h1 className="mt-2 text-balance text-3xl font-semibold">How can we help?</h1>
          <p className="mt-3 text-pretty text-sm leading-6 text-muted-foreground">Get help with listings, enquiries, account access, or reporting inaccurate hostel information.</p>
        </div>

        <div className="grid border-b border-border sm:grid-cols-3">
          {topics.map(([Icon, title, copy]) => (
            <div key={title} className="border-b border-border py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
              <Icon className="size-5 text-primary" />
              <h2 className="mt-3 font-medium">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem]">
          {sent ? (
            <div className="border-y border-emerald-200 py-9 text-center">
              <CheckCircle2 className="mx-auto size-9 text-emerald-600" />
              <h2 className="mt-4 text-xl font-medium">Message received</h2>
              <p className="mt-2 text-sm text-emerald-800">Support delivery is simulated in this MVP.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="max-w-3xl">
              <h2 className="text-xl font-medium">Send a support request</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label><span className="mb-1.5 block text-sm font-medium">Name</span><input required className={fieldClass} /></label>
                <label><span className="mb-1.5 block text-sm font-medium">Email</span><input required type="email" className={fieldClass} /></label>
                <label className="sm:col-span-2"><span className="mb-1.5 block text-sm font-medium">How can we help?</span><textarea required rows={5} className="w-full rounded-lg border border-border p-3 text-sm outline-none focus:border-primary" /></label>
              </div>
              <button className="mt-5 h-11 rounded-lg bg-primary px-6 text-sm font-semibold text-white">Send message</button>
            </form>
          )}

          <aside className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <Mail className="size-5 text-primary" />
            <h2 className="mt-3 font-medium">Response hours</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Monday-Saturday, 8:00-18:00 GMT. Production contact details will be added before launch.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
