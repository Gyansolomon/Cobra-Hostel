"use client";

import { useEffect, useState } from "react";
import { Heart } from "iconsax-react";

const STORAGE_KEY = "cobraWishlistSlugs";
const COOKIE_KEY = "cobraWishlistSlugs";

function readCookieSlugs() {
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`));
  if (!match) return [];

  try {
    const parsed = JSON.parse(decodeURIComponent(match[1]));
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function readSavedSlugs() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    const local = Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
    return local.length > 0 ? local : readCookieSlugs();
  } catch {
    return readCookieSlugs();
  }
}

function writeSavedSlugs(slugs: string[]) {
  const value = JSON.stringify(slugs);
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Cookie fallback keeps the temporary wishlist usable in restricted browser contexts.
  }
  document.cookie = `${COOKIE_KEY}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent("cobra:wishlist-updated", { detail: slugs }));
}

export function ListingSaveButton({ slug, name }: { slug: string; name: string }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const sync = () => setSaved(readSavedSlugs().includes(slug));
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("cobra:wishlist-updated", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("cobra:wishlist-updated", sync);
    };
  }, [slug]);

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        const current = readSavedSlugs();
        const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
        writeSavedSlugs(next);
        setSaved(next.includes(slug));
      }}
      className={`absolute right-3 top-3 z-10 grid size-8 place-items-center rounded-full bg-white/95 shadow-sm transition-colors hover:bg-white ${
        saved ? "text-primary" : "text-[#1F2329]"
      }`}
      aria-label={saved ? `Remove ${name} from wishlist` : `Save ${name}`}
      aria-pressed={saved}
    >
      <Heart size={19} color="currentColor" variant={saved ? "Bold" : "Linear"} />
    </button>
  );
}
