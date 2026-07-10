"use client";

import Link from "next/link";
import { ArrowUpRight, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { copy, serviceItems, site } from "@/content/site";
import { useLocale } from "@/components/ui/language-provider";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const locale = useLocale();
  const t = copy[locale];
  return (
    <footer className="mt-20 border-t border-white/8 bg-[#07080b] pb-8 pt-16 text-white sm:pt-20">
      <div className="container-shell">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.5fr_.8fr_.9fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">{t.footer.tagline}</p>
            <a href={site.facebook} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#ff9a3f] transition hover:text-white"><Facebook className="size-4" /> Facebook <ArrowUpRight className="size-4" /></a>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.quickLinks}</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              {[["/about", t.nav.about], ["/portfolio", t.nav.portfolio], ["/pricing", t.nav.pricing], ["/blog", t.nav.blog], ["/contact", t.nav.contact]].map(([href, label]) => <li key={href}><Link href={href} className="transition hover:text-[#ff9a3f]">{label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.services}</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              {serviceItems.slice(0, 4).map((item) => <li key={item.slug}><Link href={`/services/${item.slug}`} className="transition hover:text-[#ff9a3f]">{item[locale].title}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.contact}</h3>
            <ul className="mt-4 space-y-3.5 text-sm leading-6 text-white/65">
              <li className="flex gap-2"><MapPin className="mt-1 size-4 shrink-0 text-[#ff9a3f]" /><span>{site.address}</span></li>
              <li><a href={`tel:${site.phone}`} className="flex gap-2 transition hover:text-white"><Phone className="size-4 shrink-0 text-[#ff9a3f]" />{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="flex gap-2 break-all transition hover:text-white"><Mail className="mt-0.5 size-4 shrink-0 text-[#ff9a3f]" />{site.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DreamSpace IT. {t.footer.rights}</p>
          <div className="flex gap-4"><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
