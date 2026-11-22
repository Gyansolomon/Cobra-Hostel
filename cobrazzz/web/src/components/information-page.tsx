import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";

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
    <main className="min-h-dvh bg-white text-[#111827]">
      <header className="border-b border-border bg-white"><div className="mx-auto flex h-16 max-w-[64rem] items-center gap-3 px-4 lg:px-8"><Link href="/" className="grid size-9 place-items-center rounded-full border border-border" aria-label="Back home"><ArrowLeft className="size-4" /></Link><Link href="/" className="font-semibold">cobra</Link></div></header>
      <article className="mx-auto max-w-[64rem] px-4 py-10 lg:px-8 lg:py-16">
        <header className="max-w-3xl border-b border-border pb-9"><p className="text-sm font-medium text-primary">{eyebrow}</p><h1 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">{title}</h1><p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-muted-foreground sm:text-base">{intro}</p></header>
        <div className="grid gap-10 pt-2 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div>{sections.map((section, index) => <section key={section.title} className="grid gap-3 border-b border-border py-7 sm:grid-cols-[2.25rem_minmax(0,1fr)]"><span className="text-sm font-medium tabular-nums text-primary">{String(index + 1).padStart(2, "0")}</span><div><h2 className="text-lg font-medium">{section.title}</h2><p className="mt-2 text-pretty text-sm leading-6 text-muted-foreground">{section.copy}</p></div></section>)}</div>
          <aside className="border-t border-border pt-6 lg:mt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"><h2 className="font-medium">Ready to compare hostels?</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Search public listings before creating an account.</p><Link href="/search/results?q=UCC" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"><Search className="size-4" />Browse hostels<ArrowRight className="size-4" /></Link></aside>
        </div>
      </article>
    </main>
  );
}
