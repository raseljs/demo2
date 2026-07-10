"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { copy } from "@/content/site";
import { useLocale } from "@/components/ui/language-provider";
import { Logo } from "@/components/ui/logo";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { LanguageToggle } from "@/components/layout/language-toggle";

export function Header() {
  const locale = useLocale();
  const t = copy[locale];
  const [open, setOpen] = useState(false);
  const nav = [
    ["/", t.nav.home],
    ["/services", t.nav.services],
    ["/portfolio", t.nav.portfolio],
    ["/pricing", t.nav.pricing],
    ["/blog", t.nav.blog],
    ["/about", t.nav.about],
    ["/contact", t.nav.contact]
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09090c]/82 backdrop-blur-xl">
      <div className="container-shell flex h-[78px] items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {nav.map(([href, label]) => (
            <Link key={href} href={href} className="text-sm font-medium text-white/70 transition hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle compact />
          <WhatsAppButton label={t.nav.getQuote} />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle compact />
          <button type="button" onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full border border-white/12 text-white" aria-expanded={open} aria-label="Open navigation">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-[#0d0e13] lg:hidden">
          <nav className="container-shell flex flex-col py-4" aria-label="Mobile navigation">
            {nav.map(([href, label]) => (
              <Link onClick={() => setOpen(false)} key={href} href={href} className="border-b border-white/8 py-3.5 text-[.98rem] font-medium text-white/88">
                {label}
              </Link>
            ))}
            <div className="pt-4"><WhatsAppButton label={t.nav.getQuote} /></div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
