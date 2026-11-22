import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home, ShieldCheck } from "lucide-react";

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
    <main className="min-h-dvh bg-white text-[#111827] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(24rem,0.72fr)]">
      <section className="flex min-h-dvh flex-col px-4 py-4 sm:px-8 lg:px-12 lg:py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold" aria-label="Cobra home">
            <span className="grid size-9 place-items-center rounded-lg bg-primary text-white">
              <Home className="size-4" aria-hidden="true" />
            </span>
            cobra
          </Link>
          <Link href="/" className="grid size-9 place-items-center rounded-full border border-border bg-white" aria-label="Back to home">
            <ArrowLeft className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-[26rem] flex-1 flex-col justify-center py-10">
          <h1 className="text-balance text-2xl font-semibold leading-8">{title}</h1>
          <p className="mt-2 text-pretty text-sm leading-6 text-muted-foreground">{description}</p>
          <div className="mt-7">{children}</div>
          {footer ? <div className="mt-7 text-center text-sm text-muted-foreground">{footer}</div> : null}
        </div>
      </section>

      <aside className="relative hidden min-h-dvh overflow-hidden border-l border-border bg-[#111827] lg:block">
        <Image
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=85"
          alt="Bright furnished student room"
          fill
          className="object-cover"
          sizes="40vw"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-10 bottom-10 z-10 max-w-sm text-white">
          <ShieldCheck className="size-6" aria-hidden="true" />
          <p className="mt-4 text-2xl font-medium leading-8">Compare the room, location, and manager details before you enquire.</p>
          <p className="mt-3 text-sm leading-6 text-white/75">Your saved hostels and enquiries stay connected to your account.</p>
        </div>
      </aside>
    </main>
  );
}

export const fieldClassName = "h-11 w-full rounded-lg border border-border bg-white px-3.5 text-sm outline-none focus:border-primary";
export const labelClassName = "mb-1.5 block text-sm font-medium text-[#252A34]";
export const primaryButtonClassName = "inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50";
