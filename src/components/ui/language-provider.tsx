"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/content/site";

const LocaleContext = createContext<Locale>("en");

export function LanguageProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
