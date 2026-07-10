import Link from "next/link";
import { ArrowLeft, CheckCircle2, Search, ShieldCheck } from "lucide-react";

export function InformationPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{ title: string; copy: string }>;
}) {
  return (
    <main className="min-h-dvh bg-[#F7F7F7] text-[#111827]">
      <header className="border-b border-border bg-white"><div className="mx-auto flex h-16 max-w-[64rem] items-center gap-3 px-4 lg:px-8"><Link href="/" className="grid size-9 place-items-center rounded-full border border-border" aria-label="Back home"><ArrowLeft className="size-4" /></Link><Link href="/" className="font-semibold">cobra</Link></div></header>
      <article className="mx-auto max-w-[64rem] px-4 py-8 lg:px-8 lg:py-14">
        <div className="rounded-2xl bg-[#111827] p-7 text-white sm:p-10"><p className="text-sm font-medium text-[#FF8AA4]">{eyebrow}</p><h1 className="mt-3 max-w-3xl text-balance text-3xl font-semibold sm:text-4xl">{title}</h1><p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-white/75 sm:text-base">{intro}</p></div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">{sections.map((section, index) => <section key={section.title} className="rounded-2xl border border-border bg-white p-5 shadow-sm"><span className="grid size-9 place-items-center rounded-xl bg-[#FFF0F5] text-primary">{index % 2 ? <ShieldCheck className="size-4" /> : <CheckCircle2 className="size-4" />}</span><h2 className="mt-4 text-lg font-semibold">{section.title}</h2><p className="mt-2 text-pretty text-sm leading-6 text-muted-foreground">{section.copy}</p></section>)}</div>
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border bg-white p-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-semibold">Ready to compare hostels?</h2><p className="mt-1 text-sm text-muted-foreground">Search public listings before creating an account.</p></div><Link href="/search/results?q=UCC" className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white"><Search className="size-4" />Browse hostels</Link></div>
      </article>
    </main>
  );
}
