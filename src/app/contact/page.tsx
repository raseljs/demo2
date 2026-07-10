import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { ContactForm } from "@/components/home/contact-form";
import { copy, site } from "@/content/site";
import { getLocale } from "@/lib/locale";

export const metadata = { title: "Contact" };

export default async function ContactPage() {
  const locale = await getLocale();
  const t = copy[locale];
  return <main><PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} /><section className="section-space container-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><aside className="dark-panel relative overflow-hidden rounded-[1.8rem] p-7 text-white"><div className="tech-grid pointer-events-none absolute inset-y-0 right-0 w-2/3 opacity-45" /><div className="relative"><p className="eyebrow">DREAMSPACE IT</p><h2 className="mt-4 font-display text-3xl font-black tracking-[-.05em]">{locale === "bn" ? "চলুন নতুন কিছু তৈরি করি" : "Let’s build something meaningful"}</h2><div className="mt-10 space-y-5 text-sm text-white/70"><a className="flex gap-3 transition hover:text-[#ff9a3f]" href={`mailto:${site.email}`}><Mail className="mt-0.5 size-4 text-[#ff9a3f]" />{site.email}</a><a className="flex gap-3 transition hover:text-[#ff9a3f]" href={`tel:${site.phone}`}><Phone className="mt-0.5 size-4 text-[#ff9a3f]" />{site.phone}</a><p className="flex gap-3"><MapPin className="mt-0.5 size-4 text-[#ff9a3f]" />{site.address}</p></div></div></aside><ContactForm /></section></main>;
}
