"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, GraduationCap, MapPin } from "lucide-react";

import { useApp } from "@/components/app-provider";

const universities = ["University of Cape Coast", "University of Ghana", "KNUST", "Takoradi Technical University"];
const cities = ["Cape Coast", "Accra", "Kumasi", "Takoradi"];
const levels = ["Level 100", "Level 200", "Level 300", "Level 400+", "Postgraduate"];

export default function OnboardingPage() {
  const router = useRouter();
  const { ready, user, completeOnboarding, updateUser } = useApp();
  const [step, setStep] = useState(1);
  const [university, setUniversity] = useState(user?.university || universities[0]);
  const [city, setCity] = useState(user?.city || cities[0]);
  const [level, setLevel] = useState(user?.level || levels[0]);
  const [phone, setPhone] = useState(user?.phone || "");

  useEffect(() => {
    if (ready && !user) router.replace("/auth/signup");
  }, [ready, router, user]);

  useEffect(() => {
    if (!ready || !user) return;
    const timer = window.setTimeout(() => {
      setUniversity(user.university || universities[0]);
      setCity(user.city || cities[0]);
      setLevel(user.level || levels[0]);
      setPhone(user.phone || "");
    }, 0);
    return () => window.clearTimeout(timer);
  }, [ready, user]);

  if (!ready || !user) return <div className="min-h-dvh bg-white" />;

  function finish() {
    updateUser({ phone });
    completeOnboarding({ university, city, level });
    router.push("/");
  }

  return (
    <main className="min-h-dvh bg-white text-[#111827]">
      <header className="mx-auto flex h-16 max-w-[72rem] items-center justify-between px-4 lg:px-8">
        <Link href="/" className="grid size-9 place-items-center rounded-full border border-border bg-white" aria-label="Back to home"><ArrowLeft className="size-4" /></Link>
        <span className="text-sm font-semibold">Set up your search</span>
        <button type="button" onClick={() => router.push("/")} className="text-sm font-medium text-muted-foreground">Skip</button>
      </header>

      <div className="mx-auto grid max-w-[72rem] gap-10 px-4 pb-10 pt-4 lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-8 lg:pt-10">
        <section className="max-w-3xl border-t border-border py-6 sm:py-8">
          <div className="flex items-center gap-2" aria-label={`Step ${step} of 2`}>
            {[1, 2].map((item) => <span key={item} className={`h-1.5 flex-1 rounded-full ${item <= step ? "bg-primary" : "bg-secondary"}`} />)}
          </div>

          {step === 1 ? (
            <div className="mt-8">
              <GraduationCap className="size-6 text-primary" />
              <h1 className="mt-4 text-balance text-2xl font-semibold">Which university are you searching around?</h1>
              <p className="mt-2 text-pretty text-sm leading-6 text-muted-foreground">We’ll use this to prioritise relevant campuses, areas, and hostel options.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {universities.map((item) => (
                  <button key={item} type="button" onClick={() => setUniversity(item)} aria-pressed={university === item} className={`flex min-h-14 items-center justify-between rounded-lg border px-4 text-left text-sm font-medium ${university === item ? "border-primary bg-[#FFF4F6] text-primary" : "border-border"}`}>
                    {item}{university === item ? <Check className="size-4" /> : null}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-8">
              <MapPin className="size-6 text-primary" />
              <h1 className="mt-4 text-balance text-2xl font-semibold">Tell us a little more</h1>
              <p className="mt-2 text-pretty text-sm leading-6 text-muted-foreground">These details help managers respond to serious enquiries.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label><span className="mb-1.5 block text-sm font-medium">Preferred city</span><select value={city} onChange={(event) => setCity(event.target.value)} className="h-11 w-full rounded-lg border border-border bg-white px-3 text-sm">{cities.map((item) => <option key={item}>{item}</option>)}</select></label>
                <label><span className="mb-1.5 block text-sm font-medium">Study level</span><select value={level} onChange={(event) => setLevel(event.target.value)} className="h-11 w-full rounded-lg border border-border bg-white px-3 text-sm">{levels.map((item) => <option key={item}>{item}</option>)}</select></label>
                <label className="sm:col-span-2"><span className="mb-1.5 block text-sm font-medium">Phone or WhatsApp</span><input value={phone} onChange={(event) => setPhone(event.target.value)} className="h-11 w-full rounded-lg border border-border px-3 text-sm" placeholder="e.g. 024 000 0000" /></label>
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-5">
            <button type="button" onClick={() => setStep(1)} className={`h-11 rounded-lg border border-border px-5 text-sm font-medium ${step === 1 ? "invisible" : ""}`}>Back</button>
            {step === 1 ? (
              <button type="button" onClick={() => setStep(2)} className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-white">Continue <ArrowRight className="size-4" /></button>
            ) : (
              <button type="button" onClick={finish} disabled={!phone.trim()} className="h-11 rounded-lg bg-primary px-5 text-sm font-semibold text-white disabled:opacity-50">Finish setup</button>
            )}
          </div>
        </section>

        <aside className="border-t border-border py-6 lg:self-start lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <p className="text-sm font-medium text-muted-foreground">Your context</p>
          <p className="mt-4 text-lg font-medium">{university}</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">We’ll surface relevant rooms around {city} and remember your filters.</p>
        </aside>
      </div>
    </main>
  );
}
