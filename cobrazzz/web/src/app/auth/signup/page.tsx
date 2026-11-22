"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import { AuthShell, fieldClassName, labelClassName, primaryButtonClassName } from "@/components/auth-shell";
import { useApp } from "@/components/app-provider";

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useApp();
  const [error, setError] = useState("");
  const [role, setRole] = useState<"student" | "manager">("student");
  const [showPassword, setShowPassword] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim().toLowerCase();
    const password = String(data.get("password") || "");
    const terms = data.get("terms") === "on";
    if (!firstName || !lastName || !email.includes("@") || password.length < 6 || !terms) {
      setError("Complete every field, use a valid email, and accept the terms.");
      return;
    }
    signup({ firstName, lastName, email, role });
    router.push(role === "student" ? "/onboarding" : "/list-your-hostel");
  }

  return (
    <AuthShell
      title="Create your account"
      description="Set up a free account to compare hostels and contact managers safely."
      footer={<>Already have an account? <Link href="/auth/login" className="font-semibold text-primary">Sign in</Link></>}
    >
      <form onSubmit={submit} className="space-y-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <label><span className={labelClassName}>First name</span><input name="firstName" className={fieldClassName} autoComplete="given-name" /></label>
          <label><span className={labelClassName}>Last name</span><input name="lastName" className={fieldClassName} autoComplete="family-name" /></label>
        </div>
        <label><span className={labelClassName}>Email address</span><input name="email" type="email" className={fieldClassName} autoComplete="email" /></label>
        <label><span className={labelClassName}>Password</span><span className="relative block"><input name="password" type={showPassword ? "text" : "password"} className={`${fieldClassName} pr-10`} autoComplete="new-password" placeholder="At least 6 characters" /><button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center text-muted-foreground" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button></span></label>
        <fieldset>
          <legend className={labelClassName}>I am joining as</legend>
          <div className="grid grid-cols-2 gap-3">
            {(["student", "manager"] as const).map((item) => (
              <button key={item} type="button" onClick={() => setRole(item)} aria-pressed={role === item} className={`h-11 rounded-lg border text-sm font-medium capitalize ${role === item ? "border-primary bg-[#FFF4F6] text-primary" : "border-border bg-white"}`}>{item}</button>
            ))}
          </div>
        </fieldset>
        <label className="flex items-start gap-2 text-sm leading-5 text-muted-foreground"><input name="terms" type="checkbox" className="mt-0.5 size-4 accent-primary" /><span>I agree to the <Link href="/terms" className="font-medium text-primary underline">Terms</Link> and <Link href="/privacy" className="font-medium text-primary underline">Privacy Policy</Link>.</span></label>
        {error ? <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">{error}</p> : null}
        <button className={primaryButtonClassName} type="submit">Create account</button>
      </form>
    </AuthShell>
  );
}
