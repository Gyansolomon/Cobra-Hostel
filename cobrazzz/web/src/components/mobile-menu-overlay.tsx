"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Handshake,
  Heart,
  Headphones,
  Languages,
  LogIn,
  NotebookTabs,
  Star,
  User,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { useApp } from "@/components/app-provider";

type MobileMenuButtonProps = {
  children: React.ReactNode;
  className: string;
  label?: string;
};

export function MobileMenuButton({ children, className, label = "Open menu" }: MobileMenuButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} aria-label={label} onClick={() => setOpen(true)}>
        {children}
      </button>
      <MobileMenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export function MobileMenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [supportOpen, setSupportOpen] = useState(false);
  const { ready, user } = useApp();

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-dvh flex-col bg-white text-[#111827]" role="dialog" aria-modal="true" aria-label="Mobile menu">
      <MobileMenuHeader onClose={onClose} />
      <div className="no-scrollbar flex-1 overflow-y-auto px-4 pb-6">
        <MobileMenuList>
          <MobileMenuItem icon={Headphones} label="Support" rightIcon={ChevronDown} expanded={supportOpen} onClick={() => setSupportOpen(!supportOpen)} />
          {supportOpen ? (
            <div className="ml-10 space-y-2 pb-2 text-[13px] font-medium leading-6 text-muted-foreground">
              <Link href="/support?topic=chat" className="block">Chat with support</Link>
              <Link href="/support?topic=advisor" className="block">Call hostel advisor</Link>
              <Link href="/support" className="block">Help center</Link>
              <Link href="/how-it-works" className="block">How Cobra works</Link>
              <Link href="/safety" className="block">Safety and verification</Link>
            </div>
          ) : null}
          <MobileMenuItem icon={Heart} label="Wishlist" href="/wishlist" />
          <MobileMenuItem icon={Languages} label="Select Preferences" rightIcon={ChevronRight} href="/onboarding" />
        </MobileMenuList>

        <MenuDivider />
        <p className="px-10 py-3 text-sm font-medium text-muted-foreground">{ready && user ? `Signed in as ${user.firstName}` : "Login to continue"}</p>
        <MobileMenuList>
          <MobileMenuItem icon={User} label="Profile" href="/profile" />
          <MobileMenuItem icon={CalendarDays} label="Bookings" href="/wishlist?tab=booked" />
        </MobileMenuList>

        <MenuDivider />
        <MobileMenuList>
          <MobileMenuItem icon={Users} label="Group Booking" href="/support?topic=group-booking" badge={<MenuBadge>New</MenuBadge>} />
          <MobileMenuItem icon={UserPlus} label="Refer a Friend" href="/support?topic=referral" badge={<MenuBadge>Get bonus</MenuBadge>} />
          <MobileMenuItem icon={Handshake} label="Partner with Us" href="/list-your-hostel" />
          <MobileMenuItem icon={NotebookTabs} label="List Your Hostel" href="/list-your-hostel" />
        </MobileMenuList>

        <MenuDivider />
        <DownloadAppPromoCard />
      </div>
      <MenuLoginButton />
    </div>
  );
}

function MobileMenuHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4">
      <h2 className="text-xl font-medium">Menu</h2>
      <button type="button" onClick={onClose} className="grid size-11 place-items-center text-[#5B6472]" aria-label="Close menu">
        <X className="size-8" strokeWidth={1.8} aria-hidden="true" />
      </button>
    </div>
  );
}

function MobileMenuList({ children }: { children: React.ReactNode }) {
  return <div className="space-y-1 py-2">{children}</div>;
}

function MobileMenuItem({
  icon: Icon,
  label,
  href,
  rightIcon: RightIcon,
  badge,
  expanded,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  href?: string;
  rightIcon?: LucideIcon;
  badge?: React.ReactNode;
  expanded?: boolean;
  onClick?: () => void;
}) {
  const content = (
    <>
      <Icon className="size-5 shrink-0" strokeWidth={1.8} aria-hidden="true" />
      <span className="min-w-0 flex-1 text-base font-medium leading-6">{label}</span>
      {badge}
      {RightIcon ? (
        <RightIcon className={`size-5 shrink-0 text-[#4B5563] transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
      ) : null}
    </>
  );

  const className = "flex min-h-12 w-full items-center gap-4 rounded-lg px-1 text-left text-[#1F2937]";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}

function MenuBadge({ children }: { children: React.ReactNode }) {
  return <span className="shrink-0 rounded-full bg-[#0EA472] px-3 py-1 text-xs font-medium text-white">{children}</span>;
}

function MenuDivider() {
  return <div className="my-2 border-t border-[#D9DEE5]" />;
}

function DownloadAppPromoCard() {
  return (
    <div className="my-4 flex items-center gap-3 bg-[#F4F5F7] p-3">
      <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-sm font-medium text-white">cobra</div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-[#111827]">Get hostel alerts on the app!</p>
        <p className="mt-1 truncate text-xs font-medium text-muted-foreground">
          <Star className="mr-1 inline size-3.5 fill-[#FACC15] text-[#FACC15]" aria-hidden="true" />
          4.8/5 | Trusted by students
        </p>
      </div>
      <Link href="/support?topic=mobile-app" className="inline-flex h-10 shrink-0 items-center rounded-lg border border-primary bg-white px-3 text-sm font-medium text-primary">
        Download App
      </Link>
    </div>
  );
}

function MenuLoginButton() {
  const router = useRouter();
  const { ready, user, logout } = useApp();

  return (
    <div className="shrink-0 border-t border-border bg-white p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
      {ready && user ? (
        <button type="button" onClick={() => { logout(); router.push("/"); }} className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-[#D6DAE1] bg-white text-base font-medium text-[#111827]"><LogIn className="size-5 rotate-180" />Log out</button>
      ) : (
        <Link href="/auth/login" className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-[#D6DAE1] bg-white text-base font-medium text-[#111827]"><LogIn className="size-5" strokeWidth={1.9} />Login</Link>
      )}
    </div>
  );
}
