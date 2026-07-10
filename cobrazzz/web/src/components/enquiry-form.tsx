"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, MessageSquare, ShieldCheck } from "lucide-react";

import { useApp } from "@/components/app-provider";
import type { Hostel } from "@/lib/hostels";

const inputClass = "h-11 w-full rounded-xl border border-border bg-white px-3 text-sm outline-none focus:border-primary";

export function EnquiryForm({ hostel }: { hostel: Hostel }) {
  const router = useRouter();
  const { ready, user, addEnquiry } = useApp();
  const [sent, setSent] = useState(false);
  const roomOptions = Array.from(new Set([hostel.room, "1 in a room", "2 in a room", "3 in a room"]));

  if (!ready) return <div className="h-72 rounded-2xl bg-secondary" />;
  if (!user) {
    return (
      <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
        <MessageSquare className="mx-auto size-9 text-primary" />
        <h2 className="mt-4 text-xl font-semibold">Sign in to enquire</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Your account protects your contact details and keeps the manager response in one place.</p>
        <Link href={`/auth/login?returnTo=${encodeURIComponent(`/request/${hostel.slug}`)}`} className="mt-5 inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-semibold text-white">Sign in to continue</Link>
      </div>
    );
  }
  if (!user.phone) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
        <ShieldCheck className="mx-auto size-9 text-amber-700" />
        <h2 className="mt-4 text-xl font-semibold">Add your phone or WhatsApp</h2>
        <p className="mt-2 text-sm leading-6 text-amber-800">Managers need one reliable contact method before an enquiry can be sent.</p>
        <Link href="/profile" className="mt-5 inline-flex h-11 items-center rounded-xl bg-[#111827] px-6 text-sm font-semibold text-white">Complete profile</Link>
      </div>
    );
  }
  if (sent) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7 text-center">
        <CheckCircle2 className="mx-auto size-11 text-emerald-600" />
        <h2 className="mt-4 text-xl font-semibold">Enquiry sent</h2>
        <p className="mt-2 text-sm leading-6 text-emerald-800">Your request for {hostel.name} is now saved in My Activities. The manager response is simulated in this MVP.</p>
        <button type="button" onClick={() => router.push("/wishlist")} className="mt-5 h-11 rounded-xl bg-primary px-6 text-sm font-semibold text-white">View my activities</button>
      </div>
    );
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    addEnquiry({
      hostelSlug: hostel.slug,
      hostelName: hostel.name,
      roomType: String(data.get("roomType") || hostel.room),
      moveIn: String(data.get("moveIn") || ""),
      message: String(data.get("message") || ""),
    });
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-7">
      <h2 className="text-xl font-semibold">Request availability</h2>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">No payment is collected. This sends an accommodation enquiry only.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label><span className="mb-1.5 block text-sm font-medium">Room preference</span><select name="roomType" className={inputClass} defaultValue={hostel.room}>{roomOptions.map((room) => <option key={room}>{room}</option>)}</select></label>
        <label><span className="mb-1.5 block text-sm font-medium">Preferred move-in</span><input name="moveIn" type="date" required className={inputClass} /></label>
        <label className="sm:col-span-2"><span className="mb-1.5 block text-sm font-medium">Message to manager</span><textarea name="message" required minLength={10} rows={5} className="w-full rounded-xl border border-border p-3 text-sm outline-none focus:border-primary" placeholder="Tell the manager your preferred room, move-in period, and any questions." /></label>
      </div>
      <div className="mt-5 rounded-xl bg-secondary p-3 text-xs leading-5 text-muted-foreground">Your profile contact: {user.phone}. Cobra does not guarantee room availability or collect hostel fees in this MVP.</div>
      <button type="submit" className="mt-5 h-11 w-full rounded-xl bg-primary text-sm font-semibold text-white">Send enquiry</button>
    </form>
  );
}
