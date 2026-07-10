"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, ChevronRight, Heart, Home, LogOut, MessageSquare, Settings, UserRound } from "lucide-react";

import { useApp } from "@/components/app-provider";
import { readWishlist, WISHLIST_UPDATED_EVENT } from "@/lib/wishlist-store";

const inputClass = "h-11 w-full rounded-xl border border-border bg-white px-3 text-sm outline-none focus:border-primary";

export default function ProfilePage() {
  const router = useRouter();
  const { ready, user, enquiries, updateUser, logout } = useApp();
  const [savedCount, setSavedCount] = useState(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSavedCount(user ? readWishlist(user.email).length : 0);
    }, 0);
    const sync = () => setSavedCount(user ? readWishlist(user.email).length : 0);
    window.addEventListener(WISHLIST_UPDATED_EVENT, sync);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(WISHLIST_UPDATED_EVENT, sync);
    };
  }, [user]);

  if (!ready) return <main className="min-h-dvh bg-[#F7F7F7]" />;
  if (!user) {
    return (
      <main className="grid min-h-dvh place-items-center bg-[#F7F7F7] px-4 text-center">
        <div className="max-w-sm rounded-2xl border border-border bg-white p-7 shadow-sm">
          <UserRound className="mx-auto size-10 text-primary" />
          <h1 className="mt-4 text-2xl font-semibold">Sign in to view your profile</h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Keep your preferences, enquiries, and saved hostels together.</p>
          <Link href="/auth/login?returnTo=/profile" className="mt-6 inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-semibold text-white">Sign in</Link>
        </div>
      </main>
    );
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    updateUser({
      firstName: String(data.get("firstName") || ""),
      lastName: String(data.get("lastName") || ""),
      phone: String(data.get("phone") || ""),
      university: String(data.get("university") || ""),
      level: String(data.get("level") || ""),
    });
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  }

  return (
    <main className="min-h-dvh bg-[#F7F7F7] pb-20 text-[#111827] lg:pb-10">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-[72rem] items-center justify-between px-4 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 font-semibold"><span className="grid size-9 place-items-center rounded-xl bg-primary text-white"><Home className="size-4" /></span> cobra</Link>
          <button type="button" onClick={() => { logout(); router.push("/"); }} className="inline-flex h-9 items-center gap-2 rounded-xl border border-border px-3 text-sm font-medium"><LogOut className="size-4" /> Log out</button>
        </div>
      </header>

      <div className="mx-auto grid max-w-[72rem] gap-5 px-4 py-6 lg:grid-cols-[17rem_minmax(0,1fr)] lg:px-8 lg:py-10">
        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
            <div className="grid size-14 place-items-center rounded-full bg-[#FFF0F5] text-xl font-semibold text-primary">{user.firstName.slice(0, 1)}{user.lastName.slice(0, 1)}</div>
            <p className="mt-3 font-semibold">{user.firstName} {user.lastName}</p>
            <p className="mt-1 truncate text-sm text-muted-foreground">{user.email}</p>
          </div>
          <nav className="overflow-hidden rounded-2xl border border-border bg-white">
            {[
              ["Profile details", UserRound, "/profile"],
              ["Saved hostels", Heart, "/wishlist"],
              ["My enquiries", MessageSquare, "/wishlist?tab=enquired"],
              ["Preferences", Settings, "/onboarding"],
            ].map(([label, Icon, href]) => (
              <Link key={String(label)} href={String(href)} className="flex h-12 items-center gap-3 border-b border-border px-4 text-sm font-medium last:border-b-0"><Icon className="size-4 text-muted-foreground" /><span className="flex-1">{String(label)}</span><ChevronRight className="size-4 text-muted-foreground" /></Link>
            ))}
          </nav>
        </aside>

        <section className="space-y-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Stat label="Saved" value={savedCount} icon={Heart} />
            <Stat label="Enquiries" value={enquiries.length} icon={MessageSquare} />
            <Stat label="Updates" value={0} icon={Bell} className="col-span-2 sm:col-span-1" />
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div><h1 className="text-xl font-semibold">Profile details</h1><p className="mt-1 text-sm text-muted-foreground">Keep these details accurate for hostel enquiries.</p></div>
              {saved ? <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">Saved</span> : null}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label><span className="mb-1.5 block text-sm font-medium">First name</span><input name="firstName" defaultValue={user.firstName} className={inputClass} /></label>
              <label><span className="mb-1.5 block text-sm font-medium">Last name</span><input name="lastName" defaultValue={user.lastName} className={inputClass} /></label>
              <label><span className="mb-1.5 block text-sm font-medium">Phone / WhatsApp</span><input name="phone" defaultValue={user.phone} className={inputClass} /></label>
              <label><span className="mb-1.5 block text-sm font-medium">University</span><input name="university" defaultValue={user.university} className={inputClass} /></label>
              <label><span className="mb-1.5 block text-sm font-medium">Study level</span><input name="level" defaultValue={user.level} className={inputClass} /></label>
              <label><span className="mb-1.5 block text-sm font-medium">Email</span><input value={user.email} disabled className={`${inputClass} bg-secondary text-muted-foreground`} /></label>
            </div>
            <button type="submit" className="mt-6 h-11 rounded-xl bg-primary px-6 text-sm font-semibold text-white">Save changes</button>
          </form>
        </section>
      </div>
    </main>
  );
}

function Stat({ label, value, icon: Icon, className = "" }: { label: string; value: number; icon: typeof Heart; className?: string }) {
  return <div className={`rounded-2xl border border-border bg-white p-4 shadow-sm ${className}`}><Icon className="size-4 text-primary" /><p className="mt-3 text-2xl font-semibold tabular-nums">{value}</p><p className="text-sm text-muted-foreground">{label}</p></div>;
}
