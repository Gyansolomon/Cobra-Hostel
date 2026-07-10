import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Home } from "lucide-react";

export function AuthShell({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <main className="min-h-dvh bg-[#F7F7F7] text-[#111827] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(26rem,0.8fr)]">
      <section className="flex min-h-dvh flex-col px-4 py-4 sm:px-8 lg:px-12 lg:py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold" aria-label="Cobra home">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-white">
              <Home className="size-4" aria-hidden="true" />
            </span>
            cobra
          </Link>
          <Link href="/" className="grid size-9 place-items-center rounded-full border border-border bg-white" aria-label="Back to home">
            <ArrowLeft className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-[28rem] flex-1 flex-col justify-center py-10">
          <h1 className="text-balance text-2xl font-semibold leading-8 sm:text-3xl sm:leading-10">{title}</h1>
          <p className="mt-2 text-pretty text-sm leading-6 text-muted-foreground">{description}</p>
          <div className="mt-7">{children}</div>
          {footer ? <div className="mt-7 text-center text-sm text-muted-foreground">{footer}</div> : null}
        </div>
      </section>

      <aside className="relative hidden overflow-hidden bg-[#FFEEF3] lg:block">
        <div className="absolute inset-x-10 top-12 z-10 rounded-2xl border border-white/70 bg-white/85 p-6 shadow-sm">
          <p className="text-lg font-semibold">Your hostel search, kept together</p>
          <div className="mt-4 space-y-3 text-sm text-[#4B5563]">
            {["Save and compare hostels", "Track enquiries in one place", "Keep campus and room preferences"].map((item) => (
              <p key={item} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <Image
          src="/hero/student-with-luggage.png"
          alt="Student ready to find accommodation"
          width={720}
          height={900}
          className="absolute bottom-0 right-0 h-[72%] w-auto object-contain"
          sizes="40vw"
          priority
        />
      </aside>
    </main>
  );
}

export const fieldClassName = "h-11 w-full rounded-xl border border-border bg-white px-3.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10";
export const labelClassName = "mb-1.5 block text-sm font-medium text-[#252A34]";
export const primaryButtonClassName = "inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-white shadow-sm disabled:cursor-not-allowed disabled:opacity-50";
