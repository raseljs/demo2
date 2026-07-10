"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle, LockKeyhole } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function AdminLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setLoading(true); setError(""); const form = new FormData(event.currentTarget); try { const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: form.get("email"), password: form.get("password") }) }); const data = await response.json(); if (!response.ok) throw new Error(data.error || "Unable to sign in."); router.push("/admin"); router.refresh(); } catch (err) { setError(err instanceof Error ? err.message : "Unable to sign in."); } finally { setLoading(false); } }
  return <main className="container-shell grid min-h-[68vh] place-items-center py-12"><section className="w-full max-w-md rounded-[2rem] border border-white/[.10] bg-[#12131a] p-7 shadow-[0_22px_55px_rgba(23,32,51,.1)] sm:p-9"><Logo /><span className="mt-10 grid size-12 place-items-center rounded-2xl bg-[#ff8a1d]/14"><LockKeyhole className="size-5" /></span><h1 className="mt-5 font-display text-3xl font-semibold tracking-[-.055em] text-white">DreamSpace IT Admin</h1><p className="mt-2 text-sm leading-6 text-white/55">Manage projects, blog content and client inquiries in one focused space.</p><form onSubmit={submit} className="mt-8 grid gap-4"><label className="grid gap-2 text-sm font-semibold text-white">Email<input className="form-input" name="email" type="email" required autoComplete="email" /></label><label className="grid gap-2 text-sm font-semibold text-white">Password<input className="form-input" name="password" type="password" required autoComplete="current-password" /></label><button disabled={loading} className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white disabled:opacity-70">{loading ? <LoaderCircle className="size-4 animate-spin" /> : null}{loading ? "Signing in..." : "Sign in"}</button>{error ? <p role="alert" className="text-sm font-medium text-red-600">{error}</p> : null}</form></section></main>;
}
