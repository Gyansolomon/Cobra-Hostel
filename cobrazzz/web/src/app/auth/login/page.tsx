"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

import { AuthShell, fieldClassName, labelClassName, primaryButtonClassName } from "@/components/auth-shell";
import { useApp } from "@/components/app-provider";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      setError("Enter a valid email and a password with at least 6 characters.");
      return;
    }
    const account = login(email.trim().toLowerCase());
    const returnTo = new URLSearchParams(window.location.search).get("returnTo");
    const safeReturnTo = returnTo?.startsWith("/") && !returnTo.startsWith("//") ? returnTo : "";
    router.push(safeReturnTo || (account.onboardingComplete ? "/profile" : "/onboarding"));
  }

  return (
    <AuthShell
      title="Welcome back"
      description="Sign in to save hostels, send enquiries, and keep your accommodation search organised."
      footer={<>New to Cobra? <Link href="/auth/signup" className="font-semibold text-primary">Create an account</Link></>}
    >
      <form onSubmit={submit} className="space-y-4" noValidate>
        <label>
          <span className={labelClassName}>Email address</span>
          <span className="relative block">
            <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input className={`${fieldClassName} pl-10`} type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" placeholder="you@example.com" />
          </span>
        </label>
        <label>
          <span className={labelClassName}>Password</span>
          <span className="relative block">
            <LockKeyhole className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input className={`${fieldClassName} px-10`} type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" placeholder="At least 6 characters" />
            <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center text-muted-foreground" aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </span>
        </label>
        <div className="flex items-center justify-end gap-4 text-sm">
          <Link href="/auth/forgot-password" className="font-medium text-primary">Forgot password?</Link>
        </div>
        {error ? <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">{error}</p> : null}
        <button className={primaryButtonClassName} type="submit">Sign in</button>
        <p className="text-center text-xs leading-5 text-muted-foreground">Demo mode: use any valid email and a password of 6+ characters. Passwords are never stored.</p>
      </form>
    </AuthShell>
  );
}
