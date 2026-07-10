export const WISHLIST_UPDATED_EVENT = "cobra:wishlist-updated";

function storageKey(email: string) {
  return `cobraWishlistSlugs:${email.trim().toLowerCase()}`;
}

export function readWishlist(email: string) {
  if (typeof window === "undefined" || !email) return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(storageKey(email)) || "[]");
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function writeWishlist(email: string, slugs: string[]) {
  if (typeof window === "undefined" || !email) return;
  try {
    window.localStorage.setItem(storageKey(email), JSON.stringify(slugs));
  } catch {
    // The current page state remains usable when storage is unavailable.
  }
  window.dispatchEvent(new CustomEvent(WISHLIST_UPDATED_EVENT, { detail: { email, slugs } }));
}
