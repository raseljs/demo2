"use client";

import { FormEvent, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { copy, serviceItems } from "@/content/site";
import { useLocale } from "@/components/ui/language-provider";

export function ContactForm() {
  const locale = useLocale();
  const t = copy[locale].contact.form;
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading"); setError("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not send your message.");
      event.currentTarget.reset();
      setState("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your message.");
      setState("error");
    }
  }

  return (
    <form onSubmit={submit} className="dark-panel grid gap-4 rounded-[1.75rem] p-5 sm:grid-cols-2 sm:p-7">
      <Field label={t.name} name="name" required /><Field label={t.email} name="email" type="email" required />
      <Field label={t.phone} name="phone" />
      <label className="grid gap-2 text-sm font-semibold text-white"><span>{t.service}</span><select name="service" className="form-input"><option value="">—</option>{serviceItems.map((item) => <option key={item.slug} value={item[locale].title}>{item[locale].title}</option>)}</select></label>
      <label className="grid gap-2 text-sm font-semibold text-white sm:col-span-2"><span>{t.message}</span><textarea name="message" required minLength={12} rows={5} className="form-input resize-y" /></label>
      <div className="sm:col-span-2">
        <button disabled={state === "loading"} className="gradient-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-70">{state === "loading" ? <LoaderCircle className="size-4 animate-spin" /> : null}{state === "loading" ? copy[locale].common.sending : t.button}</button>
        {state === "success" ? <p role="status" className="mt-3 text-sm font-medium text-emerald-400">{t.success}</p> : null}
        {state === "error" ? <p role="alert" className="mt-3 text-sm font-medium text-red-400">{error}</p> : null}
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return <label className="grid gap-2 text-sm font-semibold text-white"><span>{label}</span><input name={name} type={type} required={required} className="form-input" /></label>;
}
