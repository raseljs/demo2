"use client";

import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/components/ui/language-provider";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const nextLocale = locale === "bn" ? "en" : "bn";

  async function toggle() {
    setLoading(true);
    try {
      await fetch("/api/locale", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ locale: nextLocale }) });
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <button type="button" onClick={toggle} disabled={loading} className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[.03] px-3 py-2 text-xs font-bold text-white transition hover:border-white/25 hover:bg-white/[.06] disabled:opacity-60" aria-label="Change language">
      <Languages className="size-3.5" />
      {compact ? (locale === "bn" ? "EN" : "বাংলা") : (locale === "bn" ? "English" : "বাংলা")}
    </button>
  );
}
