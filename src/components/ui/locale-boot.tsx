"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function LocaleBoot() {
  const router = useRouter();
  useEffect(() => {
    const saved = document.cookie.split(";").some((item) => item.trim().startsWith("dreamspace_locale="));
    if (saved) return;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone === "Asia/Dhaka") {
      fetch("/api/locale", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ locale: "bn" }) })
        .then(() => router.refresh())
        .catch(() => undefined);
    }
  }, [router]);
  return null;
}
