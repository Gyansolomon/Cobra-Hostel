export type DemoUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  university: string;
  city: string;
  level: string;
  role: "student" | "manager";
  onboardingComplete: boolean;
};

export type DemoEnquiry = {
  id: string;
  ownerEmail: string;
  hostelSlug: string;
  hostelName: string;
  roomType: string;
  moveIn: string;
  message: string;
  status: "sent" | "awaiting_response";
  createdAt: string;
};

export const DEMO_USER_KEY = "cobraDemoUser";
export const DEMO_ENQUIRIES_KEY = "cobraDemoEnquiries";

export const emptyDemoUser: DemoUser = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  university: "University of Cape Coast",
  city: "Cape Coast",
  level: "",
  role: "student",
  onboardingComplete: false,
};

export function readJsonStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeJsonStorage<T>(key: string, value: T) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Demo state remains in memory when browser storage is unavailable.
  }
}
