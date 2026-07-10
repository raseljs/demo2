import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { copy, plans } from "@/content/site";
import { getLocale } from "@/lib/locale";

export const metadata = { title: "Pricing" };

export default async function PricingPage() {
  const locale = await getLocale();
  const t = copy[locale];
  return <main><PageHero eyebrow={t.pricing.eyebrow} title={t.pricing.title} description={t.pricing.description} /><section className="section-space container-shell"><div className="grid gap-5 lg:grid-cols-3">{plans.map((plan) => <article key={plan.name.en} className={`relative flex flex-col overflow-hidden rounded-[1.8rem] border p-7 ${plan.featured ? "border-[#ff8a1d]/70 bg-gradient-to-br from-[#24150b] via-[#121318] to-[#101217] text-white shadow-[0_24px_60px_rgba(0,0,0,.38)]" : "brand-card text-white"}`}>
    {plan.featured ? <><div className="tech-grid pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-50" /><span className="relative absolute right-6 top-6 rounded-full bg-[#ff8a1d] px-3 py-1 text-[.68rem] font-bold uppercase tracking-[.1em] text-white">Recommended</span></> : null}
    <div className="relative"><p className="text-sm font-bold text-[#ff9a3f]">{plan.name[locale]}</p><p className="mt-6 font-display text-4xl font-black tracking-[-.06em]">{plan.price[locale]}</p><p className="mt-3 min-h-12 text-sm leading-6 text-white/65">{plan.description[locale]}</p><ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm text-white/80">{plan.features[locale].map((feature) => <li className="flex gap-2" key={feature}><Check className="mt-.5 size-4 shrink-0 text-[#ff9a3f]" />{feature}</li>)}</ul><Link href="/contact" className={`mt-8 inline-flex justify-center rounded-full px-5 py-3 text-sm font-bold transition ${plan.featured ? "gradient-button text-white" : "border border-white/15 bg-white/[.05] text-white hover:border-[#ff8a1d]/50"}`}>{locale === "bn" ? "কোটেশন নিন" : "Get a quote"}</Link></div>
  </article>)}</div><p className="mt-8 text-center text-sm leading-6 text-white/58">{t.pricing.note}</p></section></main>;
}
