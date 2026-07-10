import { cookies, headers } from "next/headers";
import type { Locale } from "@/content/site";

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const saved = store.get("dreamspace_locale")?.value;
  if (saved === "bn" || saved === "en") return saved;

  const requestHeaders = await headers();
  const country = requestHeaders.get("x-vercel-ip-country") || requestHeaders.get("cf-ipcountry") || requestHeaders.get("x-country-code");
  return country?.toUpperCase() === "BD" ? "bn" : "en";
}

export function languageTag(locale: Locale) {
  return locale === "bn" ? "bn-BD" : "en";
}
