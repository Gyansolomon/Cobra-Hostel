"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import {
  DEMO_ENQUIRIES_KEY,
  DEMO_USER_KEY,
  type DemoEnquiry,
  type DemoUser,
  emptyDemoUser,
  readJsonStorage,
  writeJsonStorage,
} from "@/lib/demo-store";

type AppContextValue = {
  ready: boolean;
  user: DemoUser | null;
  enquiries: DemoEnquiry[];
  login: (email: string) => DemoUser;
  signup: (input: Pick<DemoUser, "email" | "firstName" | "lastName" | "role">) => DemoUser;
  logout: () => void;
  updateUser: (input: Partial<DemoUser>) => void;
  completeOnboarding: (input: Pick<DemoUser, "university" | "city" | "level">) => void;
  addEnquiry: (input: Omit<DemoEnquiry, "id" | "ownerEmail" | "createdAt" | "status">) => DemoEnquiry;
};

const AppContext = createContext<AppContextValue | null>(null);

function makeId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<DemoUser | null>(null);
  const [enquiries, setEnquiries] = useState<DemoEnquiry[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setUser(readJsonStorage<DemoUser | null>(DEMO_USER_KEY, null));
      setEnquiries(readJsonStorage<DemoEnquiry[]>(DEMO_ENQUIRIES_KEY, []));
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const value = useMemo<AppContextValue>(() => ({
    ready,
    user,
    enquiries: user ? enquiries.filter((enquiry) => enquiry.ownerEmail === user.email) : [],
    login(email) {
      const existing = readJsonStorage<DemoUser | null>(DEMO_USER_KEY, null);
      const next: DemoUser = existing?.email === email
        ? existing
        : { ...emptyDemoUser, id: makeId("user"), email, firstName: "Student", onboardingComplete: false };
      setUser(next);
      writeJsonStorage(DEMO_USER_KEY, next);
      return next;
    },
    signup(input) {
      const next: DemoUser = { ...emptyDemoUser, ...input, id: makeId("user"), onboardingComplete: false };
      setUser(next);
      writeJsonStorage(DEMO_USER_KEY, next);
      return next;
    },
    logout() {
      setUser(null);
      writeJsonStorage(DEMO_USER_KEY, null);
    },
    updateUser(input) {
      setUser((current) => {
        if (!current) return current;
        const next = { ...current, ...input };
        writeJsonStorage(DEMO_USER_KEY, next);
        return next;
      });
    },
    completeOnboarding(input) {
      setUser((current) => {
        if (!current) return current;
        const next = { ...current, ...input, onboardingComplete: true };
        writeJsonStorage(DEMO_USER_KEY, next);
        return next;
      });
    },
    addEnquiry(input) {
      if (!user) throw new Error("Sign in before creating an enquiry.");
      const next: DemoEnquiry = {
        ...input,
        id: makeId("enquiry"),
        ownerEmail: user.email,
        status: "sent",
        createdAt: new Date().toISOString(),
      };
      setEnquiries((current) => {
        const updated = [next, ...current];
        writeJsonStorage(DEMO_ENQUIRIES_KEY, updated);
        return updated;
      });
      return next;
    },
  }), [enquiries, ready, user]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
