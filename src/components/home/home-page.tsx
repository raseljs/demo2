import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Boxes, ChartNoAxesCombined, Check, Code2, Gauge, LayoutPanelTop, Layers3, LockKeyhole, PenTool, SearchCheck, ShoppingBag, UsersRound } from "lucide-react";
import { copy, processSteps, serviceItems, site } from "@/content/site";
import type { Locale } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ProjectCard } from "@/components/ui/project-card";
import { FaqList } from "@/components/home/faq-list";
import { ContactForm } from "@/components/home/contact-form";
import type { Project } from "@/types";

const iconMap = { LayoutPanelTop, ShoppingBag, PanelsTopLeft: Layers3, Boxes, PenTool, ChartNoAxesCombined };

export function HomePage({ locale, projects }: { locale: Locale; projects: Project[] }) {
  const t = copy[locale];
  const proofIcons = [Gauge, SearchCheck, LockKeyhole, Layers3] as const;

  return (
    <main>
      <section className="hero-surface relative overflow-hidden pb-18 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="hero-dot-grid pointer-events-none absolute inset-x-0 top-0 h-[34rem] opacity-60" />
        <div className="pointer-events-none absolute -left-24 top-10 size-[28rem] rounded-full bg-[#1d7fff]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-12 size-[28rem] rounded-full bg-[#ff8a1d]/18 blur-3xl" />
        <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[.04] px-3 py-2 text-[.68rem] font-extrabold tracking-[.14em] text-[#ff9a3f] shadow-sm backdrop-blur">{t.hero.eyebrow}</span>
            <h1 className="mt-5 max-w-3xl text-balance font-display text-[2.7rem] font-semibold leading-[.95] tracking-[-.068em] text-white sm:text-6xl lg:text-[4.2rem]">
              {locale === "bn" ? <>কম খরচে <span className="text-gradient">International Standard Website</span> তৈরি করুন</> : <>Build an <span className="text-gradient">international-standard website</span> without overpaying</>}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-[1.02rem] leading-8 text-white/68 sm:text-lg">{t.hero.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"><WhatsAppButton label={t.hero.primary} /><Link href="/services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[.04] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-[#ff8a1d]/55 hover:bg-white/[.06]">{t.hero.secondary}<ArrowRight className="size-4" /></Link></div>
            <div className="mt-9 grid gap-3 text-xs font-semibold text-white/74 sm:grid-cols-2">{t.hero.trust.map((item) => <span key={item} className="inline-flex items-center gap-1.5"><BadgeCheck className="size-4 text-[#ff9a3f]" />{item}</span>)}</div>
          </div>
          <HeroVisual locale={locale} />
        </div>
      </section>

      <section className="border-y border-white/[.07] bg-[#0a0b10] py-5">
        <div className="container-shell grid grid-cols-2 gap-y-4 sm:grid-cols-4">
          {t.proof.map((item, index) => {
            const Icon = proofIcons[index] || Gauge;
            return <div key={item} className="flex items-center justify-center gap-2 border-white/[.07] px-3 text-center text-xs font-bold text-white/74 sm:border-r last:border-0"><span className="grid size-8 place-items-center rounded-full bg-white/[.05] text-[#ff9a3f]"><Icon className="size-4" /></span>{item}</div>;
          })}
        </div>
      </section>

      <section className="section-space container-shell">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} description={t.services.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Boxes;
            return <Link href={`/services/${service.slug}`} key={service.slug} className="brand-card group rounded-[1.6rem] p-6 transition duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-2xl bg-white/[.05] text-[#ff9a3f]"><Icon className="size-5" /></span><span className="font-display text-3xl font-semibold text-white/12">0{index + 1}</span></div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-[-.04em] text-white">{service[locale].title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">{service[locale].description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#ff9a3f]">{t.common.learnMore}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
            </Link>;
          })}
        </div>
        <div className="mt-8"><Link href="/services" className="text-sm font-bold text-white underline decoration-[#ff8a1d] underline-offset-4">{t.services.viewAll}</Link></div>
      </section>

      <section className="section-space bg-[#08090d] text-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-[#ff9a3f]">{t.commerce.eyebrow}</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-[-.055em] sm:text-5xl">{t.commerce.title}</h2>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-8 text-white/70">{t.commerce.description}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">{t.commerce.points.map((point) => <li key={point} className="flex items-start gap-2 text-sm font-medium text-white/85"><Check className="mt-0.5 size-4 shrink-0 text-[#ff9a3f]" />{point}</li>)}</ul>
            <div className="mt-8"><WhatsAppButton label={t.commerce.cta} /></div>
          </div>
          <CommerceVisual />
        </div>
      </section>

      <section className="section-space container-shell">
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} description={t.process.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{processSteps.map((step) => <article key={step.no} className="dark-panel rounded-[1.5rem] p-6"><p className="font-display text-4xl font-semibold tracking-[-.06em] text-[#ff8a1d]/70">{step.no}</p><h3 className="mt-8 font-display text-xl font-semibold tracking-[-.04em] text-white">{step[locale].title}</h3><p className="mt-3 text-sm leading-6 text-white/62">{step[locale].text}</p></article>)}</div>
      </section>

      <section className="section-space bg-[#0c0d12]">
        <div className="container-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <SectionHeading eyebrow={t.growth.eyebrow} title={t.growth.title} description={t.growth.description} />
          <div className="grid gap-4 sm:grid-cols-2">{[
            [Gauge, locale === "bn" ? "Performance-first" : "Performance-first", locale === "bn" ? "অপ্রয়োজনীয় ভার কমিয়ে দ্রুত user experience-এর দিকে ফোকাস।" : "Focus on a lighter, faster user experience without unnecessary weight."],
            [SearchCheck, locale === "bn" ? "Search-aware structure" : "Search-aware structure", locale === "bn" ? "Content hierarchy, metadata ও semantics শুরু থেকেই পরিকল্পনায় থাকে।" : "Content hierarchy, metadata and semantics are considered from day one."],
            [LockKeyhole, locale === "bn" ? "Security-minded build" : "Security-minded build", locale === "bn" ? "Authentication, validation এবং environment-based configuration সঠিকভাবে ব্যবহার।" : "Authentication, validation and environment-based configuration done responsibly."],
            [Layers3, locale === "bn" ? "Maintainable code" : "Maintainable code", locale === "bn" ? "Reusable component ও পরিষ্কার structure ভবিষ্যতের update সহজ করে।" : "Reusable components and clean structure make future updates easier."]
          ].map(([Icon, title, text]) => <article key={String(title)} className="brand-card rounded-[1.4rem] p-5"><span className="grid size-10 place-items-center rounded-xl bg-white/[.05] text-[#ff9a3f]"><Icon className="size-5" /></span><h3 className="mt-5 font-display text-lg font-semibold tracking-[-.035em] text-white">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-white/62">{String(text)}</p></article>)}</div>
        </div>
      </section>

      <section className="section-space container-shell">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><SectionHeading eyebrow={t.portfolio.eyebrow} title={t.portfolio.title} description={t.portfolio.description} /><Link href="/portfolio" className="shrink-0 text-sm font-bold text-white underline decoration-[#ff8a1d] underline-offset-4">{t.portfolio.viewAll}</Link></div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} />)}</div>
      </section>

      <section className="section-space bg-[#090a0e]">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="dark-panel relative mx-auto aspect-square w-full max-w-[430px] overflow-hidden rounded-[2.5rem] p-7 text-white"><div className="absolute inset-0 overflow-hidden rounded-[2.5rem]"><div className="absolute -right-20 -top-20 size-72 rounded-full border-[36px] border-[#1d7fff]/12" /><div className="absolute -bottom-24 -left-24 size-72 rounded-full border-[38px] border-[#ff8a1d]/25" /></div><div className="relative flex h-full flex-col justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-white/10"><Code2 className="size-6 text-[#ff9a3f]" /></span><div><p className="font-display text-6xl font-semibold tracking-[-.08em]">DS</p><p className="mt-2 max-w-[16rem] text-sm leading-6 text-white/65">{locale === "bn" ? "Design, development ও direction—একই টিমের ফোকাসে।" : "Design, development and direction—focused in one team."}</p></div><div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-full bg-white/[.08] text-[#ff9a3f]"><UsersRound className="size-5" /></span><div><p className="text-sm font-semibold">{site.founder}</p><p className="text-xs text-white/55">{t.ceo.role}</p></div></div></div></div>
          <div><p className="eyebrow">{t.ceo.eyebrow}</p><h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-[-.055em] text-white sm:text-5xl">{t.ceo.title}</h2><blockquote className="mt-6 border-l-2 border-[#ff8a1d] pl-5 text-lg leading-8 text-white/75">“{t.ceo.quote}”</blockquote><div className="mt-8"><p className="font-display text-xl font-semibold text-white">{site.founder}</p><p className="mt-1 text-sm text-white/55">{t.ceo.role}, DreamSpace IT</p></div></div>
        </div>
      </section>

      <section className="section-space container-shell">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start"><SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} /><FaqList /></div>
      </section>

      <section className="section-space bg-[#07080c] text-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[.84fr_1.16fr] lg:items-center"><div><p className="eyebrow text-[#ff9a3f]">CONTACT</p><h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-[-.055em] sm:text-5xl">{t.contact.title}</h2><p className="mt-5 max-w-md text-[1.02rem] leading-8 text-white/70">{t.contact.description}</p><div className="mt-8 space-y-3 text-sm text-white/75"><a href={`mailto:${site.email}`} className="block transition hover:text-[#ff9a3f]">{site.email}</a><a href={`tel:${site.phone}`} className="block transition hover:text-[#ff9a3f]">{site.phone}</a><p>{site.address}</p></div></div><ContactForm /></div>
      </section>
    </main>
  );
}

function HeroVisual({ locale }: { locale: Locale }) {
  const label = locale === "bn" ? "International Standard Website" : "International Standard Website";
  return (
    <div className="relative mx-auto w-full max-w-[560px] pb-6">
      <div className="absolute -inset-5 rounded-[2.7rem] bg-gradient-to-br from-[#ff8a1d]/18 via-transparent to-[#1d7fff]/14 blur-2xl" />
      <div className="glass-panel relative overflow-hidden rounded-[2rem] p-2 sm:p-3">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[#101114]">
          <Image src="/images/dreamspace-web-development-poster.png" alt={label} fill priority sizes="(max-width: 1024px) 100vw, 54vw" className="object-cover object-center" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#0c0c10]/80 px-3 py-2 text-[.68rem] font-extrabold uppercase tracking-[.12em] text-white shadow-sm backdrop-blur">{label}</span>
        </div>
      </div>
      <div className="absolute -bottom-1 -left-3 rounded-2xl border border-white/10 bg-[#0d0e13]/92 px-3 py-3 shadow-[0_14px_34px_rgba(0,0,0,.35)] backdrop-blur sm:-left-8 sm:px-4">
        <p className="text-[.65rem] font-extrabold uppercase tracking-[.12em] text-white/45">DreamSpace IT</p>
        <p className="mt-1 text-sm font-bold text-white">{locale === "bn" ? "Responsive • SEO • Fast" : "Responsive • SEO • Fast"}</p>
      </div>
      <div className="absolute -right-2 bottom-3 rounded-2xl bg-[#ff8a1d] px-4 py-3 text-white shadow-[0_16px_34px_rgba(255,122,24,.26)] sm:-right-5">
        <p className="text-[.64rem] font-bold uppercase tracking-[.12em] text-white/75">From</p>
        <p className="mt-1 text-sm font-bold">International UI Feel</p>
      </div>
    </div>
  );
}

function CommerceVisual() {
  return <div className="relative mx-auto aspect-[1.08] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04] p-5"><div className="absolute -right-12 -top-14 size-52 rounded-full bg-[#ff8a1d]/10 blur-2xl" /><div className="relative grid h-full grid-cols-[.8fr_1.2fr] gap-3"><div className="rounded-2xl bg-white/[.06] p-4"><p className="text-xs font-bold text-white/50">MENU</p><div className="mt-5 space-y-3">{["Overview", "Orders", "Products", "Customers"].map((item, index) => <div key={item} className={`flex items-center gap-2 rounded-lg px-2 py-2 text-xs ${index === 1 ? "bg-[#ff8a1d] text-white" : "text-white/65"}`}><span className="size-1.5 rounded-full bg-current" />{item}</div>)}</div></div><div className="rounded-2xl bg-[#101216] p-4 text-white"><div className="flex items-center justify-between"><div><p className="text-[.68rem] font-bold uppercase tracking-[.1em] text-white/45">Order overview</p><p className="mt-1 font-display text-2xl font-semibold tracking-[-.05em]">Today</p></div><span className="rounded-lg bg-[#1d7fff] px-2.5 py-1.5 text-xs font-bold">Live</span></div><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/[.05] p-3"><p className="text-[.65rem] font-bold uppercase tracking-[.1em] text-white/45">Orders</p><p className="mt-2 font-display text-2xl font-semibold">128</p></div><div className="rounded-xl bg-[#ff8a1d]/12 p-3"><p className="text-[.65rem] font-bold uppercase tracking-[.1em] text-white/45">Revenue</p><p className="mt-2 font-display text-2xl font-semibold">৳ 48k</p></div></div><div className="mt-4 rounded-xl border border-white/[.07] p-3"><div className="flex items-center justify-between"><span className="text-xs font-bold">Recent order</span><span className="text-xs text-emerald-400">Paid</span></div><div className="mt-3 flex items-center gap-3"><span className="grid size-9 place-items-center rounded-lg bg-[#1d7fff]/18"><ShoppingBag className="size-4" /></span><div className="min-w-0 flex-1"><div className="h-2.5 w-3/4 rounded bg-white/15" /><div className="mt-1.5 h-2 w-1/2 rounded bg-white/[.08]" /></div></div></div></div></div></div>;
}
