"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";

import { AuthShell, fieldClassName, labelClassName, primaryButtonClassName } from "@/components/auth-shell";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.includes("@")) setSent(true);
  }

  return (
    <AuthShell title="Reset your password" description="Enter the email address connected to your Cobra account." footer={<Link href="/auth/login" className="font-semibold text-primary">Back to sign in</Link>}>
      {sent ? (
        <div className="border-y border-emerald-200 bg-emerald-50/60 py-6 text-center">
          <CheckCircle2 className="mx-auto size-9 text-emerald-600" aria-hidden="true" />
          <h2 className="mt-3 text-lg font-semibold">Check your email</h2>
          <p className="mt-2 text-sm leading-6 text-emerald-800">If an account exists for {email}, a secure reset link will arrive shortly.</p>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <label><span className={labelClassName}>Email address</span><span className="relative block"><Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><input className={`${fieldClassName} pl-10`} type="email" required value={email} onChange={(event) => setEmail(event.target.value)} /></span></label>
          <button type="submit" className={primaryButtonClassName}>Send reset link</button>
        </form>
      )}
    </AuthShell>
  );
}
