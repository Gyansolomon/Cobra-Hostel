"use client";

import { useEffect, useState } from "react";
import { Heart } from "iconsax-react";
import { useRouter } from "next/navigation";

import { useApp } from "@/components/app-provider";
import { readWishlist, WISHLIST_UPDATED_EVENT, writeWishlist } from "@/lib/wishlist-store";

export function ListingSaveButton({
  slug,
  name,
  className,
}: {
  slug: string;
  name: string;
  className?: string;
}) {
  const router = useRouter();
  const { ready, user } = useApp();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const sync = () => setSaved(user ? readWishlist(user.email).includes(slug) : false);
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener(WISHLIST_UPDATED_EVENT, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(WISHLIST_UPDATED_EVENT, sync);
    };
  }, [slug, user]);

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!ready || !user) {
          const returnTo = `${window.location.pathname}${window.location.search}`;
          router.push(`/auth/login?returnTo=${encodeURIComponent(returnTo)}`);
          return;
        }
        const current = readWishlist(user.email);
        const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
        writeWishlist(user.email, next);
        setSaved(next.includes(slug));
      }}
      className={`${
        className ?? "absolute right-3 top-3 z-10 grid size-8 place-items-center rounded-full bg-white/95 shadow-sm hover:bg-white"
      } transition-colors ${saved ? "text-primary" : "text-[#1F2329]"}`}
      aria-label={saved ? `Remove ${name} from wishlist` : `Save ${name}`}
      aria-pressed={saved}
    >
      <Heart size={19} color="currentColor" variant={saved ? "Bold" : "Linear"} />
    </button>
  );
}
